# `eventsConnection` Submodule <a name="`eventsConnection` Submodule" id="@cdktn/provider-awscc.eventsConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EventsConnection <a name="EventsConnection" id="@cdktn/provider-awscc.eventsConnection.EventsConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection awscc_events_connection}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EventsConnection(Construct Scope, string Id, EventsConnectionConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionConfig">EventsConnectionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionConfig">EventsConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.putAuthParameters">PutAuthParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.putInvocationConnectivityParameters">PutInvocationConnectivityParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.resetAuthorizationType">ResetAuthorizationType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.resetAuthParameters">ResetAuthParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.resetInvocationConnectivityParameters">ResetInvocationConnectivityParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.resetKmsKeyIdentifier">ResetKmsKeyIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.resetName">ResetName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAuthParameters` <a name="PutAuthParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.putAuthParameters"></a>

```csharp
private void PutAuthParameters(EventsConnectionAuthParameters Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.putAuthParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParameters">EventsConnectionAuthParameters</a>

---

##### `PutInvocationConnectivityParameters` <a name="PutInvocationConnectivityParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.putInvocationConnectivityParameters"></a>

```csharp
private void PutInvocationConnectivityParameters(EventsConnectionInvocationConnectivityParameters Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.putInvocationConnectivityParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParameters">EventsConnectionInvocationConnectivityParameters</a>

---

##### `ResetAuthorizationType` <a name="ResetAuthorizationType" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.resetAuthorizationType"></a>

```csharp
private void ResetAuthorizationType()
```

##### `ResetAuthParameters` <a name="ResetAuthParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.resetAuthParameters"></a>

```csharp
private void ResetAuthParameters()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetInvocationConnectivityParameters` <a name="ResetInvocationConnectivityParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.resetInvocationConnectivityParameters"></a>

```csharp
private void ResetInvocationConnectivityParameters()
```

##### `ResetKmsKeyIdentifier` <a name="ResetKmsKeyIdentifier" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.resetKmsKeyIdentifier"></a>

```csharp
private void ResetKmsKeyIdentifier()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.resetName"></a>

```csharp
private void ResetName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a EventsConnection resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

EventsConnection.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

EventsConnection.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

EventsConnection.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

EventsConnection.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a EventsConnection resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the EventsConnection to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing EventsConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the EventsConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.property.arnForPolicy">ArnForPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.property.authParameters">AuthParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference">EventsConnectionAuthParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.property.invocationConnectivityParameters">InvocationConnectivityParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference">EventsConnectionInvocationConnectivityParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.property.secretArn">SecretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.property.authorizationTypeInput">AuthorizationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.property.authParametersInput">AuthParametersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParameters">EventsConnectionAuthParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.property.invocationConnectivityParametersInput">InvocationConnectivityParametersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParameters">EventsConnectionInvocationConnectivityParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.property.kmsKeyIdentifierInput">KmsKeyIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.property.authorizationType">AuthorizationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.property.kmsKeyIdentifier">KmsKeyIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `ArnForPolicy`<sup>Required</sup> <a name="ArnForPolicy" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.property.arnForPolicy"></a>

```csharp
public string ArnForPolicy { get; }
```

- *Type:* string

---

##### `AuthParameters`<sup>Required</sup> <a name="AuthParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.property.authParameters"></a>

```csharp
public EventsConnectionAuthParametersOutputReference AuthParameters { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference">EventsConnectionAuthParametersOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InvocationConnectivityParameters`<sup>Required</sup> <a name="InvocationConnectivityParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.property.invocationConnectivityParameters"></a>

```csharp
public EventsConnectionInvocationConnectivityParametersOutputReference InvocationConnectivityParameters { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference">EventsConnectionInvocationConnectivityParametersOutputReference</a>

---

##### `SecretArn`<sup>Required</sup> <a name="SecretArn" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.property.secretArn"></a>

```csharp
public string SecretArn { get; }
```

- *Type:* string

---

##### `AuthorizationTypeInput`<sup>Optional</sup> <a name="AuthorizationTypeInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.property.authorizationTypeInput"></a>

```csharp
public string AuthorizationTypeInput { get; }
```

- *Type:* string

---

##### `AuthParametersInput`<sup>Optional</sup> <a name="AuthParametersInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.property.authParametersInput"></a>

```csharp
public IResolvable|EventsConnectionAuthParameters AuthParametersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParameters">EventsConnectionAuthParameters</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `InvocationConnectivityParametersInput`<sup>Optional</sup> <a name="InvocationConnectivityParametersInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.property.invocationConnectivityParametersInput"></a>

```csharp
public IResolvable|EventsConnectionInvocationConnectivityParameters InvocationConnectivityParametersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParameters">EventsConnectionInvocationConnectivityParameters</a>

---

##### `KmsKeyIdentifierInput`<sup>Optional</sup> <a name="KmsKeyIdentifierInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.property.kmsKeyIdentifierInput"></a>

```csharp
public string KmsKeyIdentifierInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `AuthorizationType`<sup>Required</sup> <a name="AuthorizationType" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.property.authorizationType"></a>

```csharp
public string AuthorizationType { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `KmsKeyIdentifier`<sup>Required</sup> <a name="KmsKeyIdentifier" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.property.kmsKeyIdentifier"></a>

```csharp
public string KmsKeyIdentifier { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EventsConnectionAuthParameters <a name="EventsConnectionAuthParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParameters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EventsConnectionAuthParameters {
    EventsConnectionAuthParametersApiKeyAuthParameters ApiKeyAuthParameters = null,
    EventsConnectionAuthParametersBasicAuthParameters BasicAuthParameters = null,
    EventsConnectionAuthParametersConnectivityParameters ConnectivityParameters = null,
    EventsConnectionAuthParametersInvocationHttpParameters InvocationHttpParameters = null,
    EventsConnectionAuthParametersOAuthParameters OAuthParameters = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParameters.property.apiKeyAuthParameters">ApiKeyAuthParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParameters">EventsConnectionAuthParametersApiKeyAuthParameters</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#api_key_auth_parameters EventsConnection#api_key_auth_parameters}. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParameters.property.basicAuthParameters">BasicAuthParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParameters">EventsConnectionAuthParametersBasicAuthParameters</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#basic_auth_parameters EventsConnection#basic_auth_parameters}. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParameters.property.connectivityParameters">ConnectivityParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParameters">EventsConnectionAuthParametersConnectivityParameters</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#connectivity_parameters EventsConnection#connectivity_parameters}. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParameters.property.invocationHttpParameters">InvocationHttpParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParameters">EventsConnectionAuthParametersInvocationHttpParameters</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#invocation_http_parameters EventsConnection#invocation_http_parameters}. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParameters.property.oAuthParameters">OAuthParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParameters">EventsConnectionAuthParametersOAuthParameters</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#o_auth_parameters EventsConnection#o_auth_parameters}. |

---

##### `ApiKeyAuthParameters`<sup>Optional</sup> <a name="ApiKeyAuthParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParameters.property.apiKeyAuthParameters"></a>

```csharp
public EventsConnectionAuthParametersApiKeyAuthParameters ApiKeyAuthParameters { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParameters">EventsConnectionAuthParametersApiKeyAuthParameters</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#api_key_auth_parameters EventsConnection#api_key_auth_parameters}.

---

##### `BasicAuthParameters`<sup>Optional</sup> <a name="BasicAuthParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParameters.property.basicAuthParameters"></a>

```csharp
public EventsConnectionAuthParametersBasicAuthParameters BasicAuthParameters { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParameters">EventsConnectionAuthParametersBasicAuthParameters</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#basic_auth_parameters EventsConnection#basic_auth_parameters}.

---

##### `ConnectivityParameters`<sup>Optional</sup> <a name="ConnectivityParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParameters.property.connectivityParameters"></a>

```csharp
public EventsConnectionAuthParametersConnectivityParameters ConnectivityParameters { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParameters">EventsConnectionAuthParametersConnectivityParameters</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#connectivity_parameters EventsConnection#connectivity_parameters}.

---

##### `InvocationHttpParameters`<sup>Optional</sup> <a name="InvocationHttpParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParameters.property.invocationHttpParameters"></a>

```csharp
public EventsConnectionAuthParametersInvocationHttpParameters InvocationHttpParameters { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParameters">EventsConnectionAuthParametersInvocationHttpParameters</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#invocation_http_parameters EventsConnection#invocation_http_parameters}.

---

##### `OAuthParameters`<sup>Optional</sup> <a name="OAuthParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParameters.property.oAuthParameters"></a>

```csharp
public EventsConnectionAuthParametersOAuthParameters OAuthParameters { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParameters">EventsConnectionAuthParametersOAuthParameters</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#o_auth_parameters EventsConnection#o_auth_parameters}.

---

### EventsConnectionAuthParametersApiKeyAuthParameters <a name="EventsConnectionAuthParametersApiKeyAuthParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParameters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EventsConnectionAuthParametersApiKeyAuthParameters {
    string ApiKeyName = null,
    string ApiKeyValue = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParameters.property.apiKeyName">ApiKeyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#api_key_name EventsConnection#api_key_name}. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParameters.property.apiKeyValue">ApiKeyValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#api_key_value EventsConnection#api_key_value}. |

---

##### `ApiKeyName`<sup>Optional</sup> <a name="ApiKeyName" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParameters.property.apiKeyName"></a>

```csharp
public string ApiKeyName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#api_key_name EventsConnection#api_key_name}.

---

##### `ApiKeyValue`<sup>Optional</sup> <a name="ApiKeyValue" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParameters.property.apiKeyValue"></a>

```csharp
public string ApiKeyValue { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#api_key_value EventsConnection#api_key_value}.

---

### EventsConnectionAuthParametersBasicAuthParameters <a name="EventsConnectionAuthParametersBasicAuthParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParameters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EventsConnectionAuthParametersBasicAuthParameters {
    string Password = null,
    string Username = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParameters.property.password">Password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#password EventsConnection#password}. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParameters.property.username">Username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#username EventsConnection#username}. |

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParameters.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#password EventsConnection#password}.

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParameters.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#username EventsConnection#username}.

---

### EventsConnectionAuthParametersConnectivityParameters <a name="EventsConnectionAuthParametersConnectivityParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParameters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EventsConnectionAuthParametersConnectivityParameters {
    EventsConnectionAuthParametersConnectivityParametersResourceParameters ResourceParameters = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParameters.property.resourceParameters">ResourceParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParameters">EventsConnectionAuthParametersConnectivityParametersResourceParameters</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#resource_parameters EventsConnection#resource_parameters}. |

---

##### `ResourceParameters`<sup>Optional</sup> <a name="ResourceParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParameters.property.resourceParameters"></a>

```csharp
public EventsConnectionAuthParametersConnectivityParametersResourceParameters ResourceParameters { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParameters">EventsConnectionAuthParametersConnectivityParametersResourceParameters</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#resource_parameters EventsConnection#resource_parameters}.

---

### EventsConnectionAuthParametersConnectivityParametersResourceParameters <a name="EventsConnectionAuthParametersConnectivityParametersResourceParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParameters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EventsConnectionAuthParametersConnectivityParametersResourceParameters {
    string ResourceConfigurationArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParameters.property.resourceConfigurationArn">ResourceConfigurationArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#resource_configuration_arn EventsConnection#resource_configuration_arn}. |

---

##### `ResourceConfigurationArn`<sup>Optional</sup> <a name="ResourceConfigurationArn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParameters.property.resourceConfigurationArn"></a>

```csharp
public string ResourceConfigurationArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#resource_configuration_arn EventsConnection#resource_configuration_arn}.

---

### EventsConnectionAuthParametersInvocationHttpParameters <a name="EventsConnectionAuthParametersInvocationHttpParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParameters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EventsConnectionAuthParametersInvocationHttpParameters {
    IResolvable|EventsConnectionAuthParametersInvocationHttpParametersBodyParameters[] BodyParameters = null,
    IResolvable|EventsConnectionAuthParametersInvocationHttpParametersHeaderParameters[] HeaderParameters = null,
    IResolvable|EventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters[] QueryStringParameters = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParameters.property.bodyParameters">BodyParameters</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParameters">EventsConnectionAuthParametersInvocationHttpParametersBodyParameters</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#body_parameters EventsConnection#body_parameters}. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParameters.property.headerParameters">HeaderParameters</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParameters">EventsConnectionAuthParametersInvocationHttpParametersHeaderParameters</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#header_parameters EventsConnection#header_parameters}. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParameters.property.queryStringParameters">QueryStringParameters</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters">EventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#query_string_parameters EventsConnection#query_string_parameters}. |

---

##### `BodyParameters`<sup>Optional</sup> <a name="BodyParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParameters.property.bodyParameters"></a>

```csharp
public IResolvable|EventsConnectionAuthParametersInvocationHttpParametersBodyParameters[] BodyParameters { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParameters">EventsConnectionAuthParametersInvocationHttpParametersBodyParameters</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#body_parameters EventsConnection#body_parameters}.

---

##### `HeaderParameters`<sup>Optional</sup> <a name="HeaderParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParameters.property.headerParameters"></a>

```csharp
public IResolvable|EventsConnectionAuthParametersInvocationHttpParametersHeaderParameters[] HeaderParameters { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParameters">EventsConnectionAuthParametersInvocationHttpParametersHeaderParameters</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#header_parameters EventsConnection#header_parameters}.

---

##### `QueryStringParameters`<sup>Optional</sup> <a name="QueryStringParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParameters.property.queryStringParameters"></a>

```csharp
public IResolvable|EventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters[] QueryStringParameters { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters">EventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#query_string_parameters EventsConnection#query_string_parameters}.

---

### EventsConnectionAuthParametersInvocationHttpParametersBodyParameters <a name="EventsConnectionAuthParametersInvocationHttpParametersBodyParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParameters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EventsConnectionAuthParametersInvocationHttpParametersBodyParameters {
    bool|IResolvable IsValueSecret = null,
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParameters.property.isValueSecret">IsValueSecret</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#is_value_secret EventsConnection#is_value_secret}. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParameters.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#key EventsConnection#key}. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParameters.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#value EventsConnection#value}. |

---

##### `IsValueSecret`<sup>Optional</sup> <a name="IsValueSecret" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParameters.property.isValueSecret"></a>

```csharp
public bool|IResolvable IsValueSecret { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#is_value_secret EventsConnection#is_value_secret}.

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParameters.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#key EventsConnection#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParameters.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#value EventsConnection#value}.

---

### EventsConnectionAuthParametersInvocationHttpParametersHeaderParameters <a name="EventsConnectionAuthParametersInvocationHttpParametersHeaderParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParameters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EventsConnectionAuthParametersInvocationHttpParametersHeaderParameters {
    bool|IResolvable IsValueSecret = null,
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParameters.property.isValueSecret">IsValueSecret</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#is_value_secret EventsConnection#is_value_secret}. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParameters.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#key EventsConnection#key}. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParameters.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#value EventsConnection#value}. |

---

##### `IsValueSecret`<sup>Optional</sup> <a name="IsValueSecret" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParameters.property.isValueSecret"></a>

```csharp
public bool|IResolvable IsValueSecret { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#is_value_secret EventsConnection#is_value_secret}.

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParameters.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#key EventsConnection#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParameters.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#value EventsConnection#value}.

---

### EventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters <a name="EventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters {
    bool|IResolvable IsValueSecret = null,
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters.property.isValueSecret">IsValueSecret</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#is_value_secret EventsConnection#is_value_secret}. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#key EventsConnection#key}. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#value EventsConnection#value}. |

---

##### `IsValueSecret`<sup>Optional</sup> <a name="IsValueSecret" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters.property.isValueSecret"></a>

```csharp
public bool|IResolvable IsValueSecret { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#is_value_secret EventsConnection#is_value_secret}.

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#key EventsConnection#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#value EventsConnection#value}.

---

### EventsConnectionAuthParametersOAuthParameters <a name="EventsConnectionAuthParametersOAuthParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParameters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EventsConnectionAuthParametersOAuthParameters {
    string AuthorizationEndpoint = null,
    EventsConnectionAuthParametersOAuthParametersClientParameters ClientParameters = null,
    string HttpMethod = null,
    EventsConnectionAuthParametersOAuthParametersOAuthHttpParameters OAuthHttpParameters = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParameters.property.authorizationEndpoint">AuthorizationEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#authorization_endpoint EventsConnection#authorization_endpoint}. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParameters.property.clientParameters">ClientParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParameters">EventsConnectionAuthParametersOAuthParametersClientParameters</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#client_parameters EventsConnection#client_parameters}. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParameters.property.httpMethod">HttpMethod</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#http_method EventsConnection#http_method}. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParameters.property.oAuthHttpParameters">OAuthHttpParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParameters">EventsConnectionAuthParametersOAuthParametersOAuthHttpParameters</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#o_auth_http_parameters EventsConnection#o_auth_http_parameters}. |

---

##### `AuthorizationEndpoint`<sup>Optional</sup> <a name="AuthorizationEndpoint" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParameters.property.authorizationEndpoint"></a>

```csharp
public string AuthorizationEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#authorization_endpoint EventsConnection#authorization_endpoint}.

---

##### `ClientParameters`<sup>Optional</sup> <a name="ClientParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParameters.property.clientParameters"></a>

```csharp
public EventsConnectionAuthParametersOAuthParametersClientParameters ClientParameters { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParameters">EventsConnectionAuthParametersOAuthParametersClientParameters</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#client_parameters EventsConnection#client_parameters}.

---

##### `HttpMethod`<sup>Optional</sup> <a name="HttpMethod" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParameters.property.httpMethod"></a>

```csharp
public string HttpMethod { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#http_method EventsConnection#http_method}.

---

##### `OAuthHttpParameters`<sup>Optional</sup> <a name="OAuthHttpParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParameters.property.oAuthHttpParameters"></a>

```csharp
public EventsConnectionAuthParametersOAuthParametersOAuthHttpParameters OAuthHttpParameters { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParameters">EventsConnectionAuthParametersOAuthParametersOAuthHttpParameters</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#o_auth_http_parameters EventsConnection#o_auth_http_parameters}.

---

### EventsConnectionAuthParametersOAuthParametersClientParameters <a name="EventsConnectionAuthParametersOAuthParametersClientParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParameters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EventsConnectionAuthParametersOAuthParametersClientParameters {
    string ClientId = null,
    string ClientSecret = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParameters.property.clientId">ClientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#client_id EventsConnection#client_id}. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParameters.property.clientSecret">ClientSecret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#client_secret EventsConnection#client_secret}. |

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParameters.property.clientId"></a>

```csharp
public string ClientId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#client_id EventsConnection#client_id}.

---

##### `ClientSecret`<sup>Optional</sup> <a name="ClientSecret" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParameters.property.clientSecret"></a>

```csharp
public string ClientSecret { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#client_secret EventsConnection#client_secret}.

---

### EventsConnectionAuthParametersOAuthParametersOAuthHttpParameters <a name="EventsConnectionAuthParametersOAuthParametersOAuthHttpParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParameters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EventsConnectionAuthParametersOAuthParametersOAuthHttpParameters {
    IResolvable|EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters[] BodyParameters = null,
    IResolvable|EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters[] HeaderParameters = null,
    IResolvable|EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters[] QueryStringParameters = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParameters.property.bodyParameters">BodyParameters</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters">EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#body_parameters EventsConnection#body_parameters}. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParameters.property.headerParameters">HeaderParameters</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters">EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#header_parameters EventsConnection#header_parameters}. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParameters.property.queryStringParameters">QueryStringParameters</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters">EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#query_string_parameters EventsConnection#query_string_parameters}. |

---

##### `BodyParameters`<sup>Optional</sup> <a name="BodyParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParameters.property.bodyParameters"></a>

```csharp
public IResolvable|EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters[] BodyParameters { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters">EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#body_parameters EventsConnection#body_parameters}.

---

##### `HeaderParameters`<sup>Optional</sup> <a name="HeaderParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParameters.property.headerParameters"></a>

```csharp
public IResolvable|EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters[] HeaderParameters { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters">EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#header_parameters EventsConnection#header_parameters}.

---

##### `QueryStringParameters`<sup>Optional</sup> <a name="QueryStringParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParameters.property.queryStringParameters"></a>

```csharp
public IResolvable|EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters[] QueryStringParameters { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters">EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#query_string_parameters EventsConnection#query_string_parameters}.

---

### EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters <a name="EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters {
    bool|IResolvable IsValueSecret = null,
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters.property.isValueSecret">IsValueSecret</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#is_value_secret EventsConnection#is_value_secret}. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#key EventsConnection#key}. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#value EventsConnection#value}. |

---

##### `IsValueSecret`<sup>Optional</sup> <a name="IsValueSecret" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters.property.isValueSecret"></a>

```csharp
public bool|IResolvable IsValueSecret { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#is_value_secret EventsConnection#is_value_secret}.

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#key EventsConnection#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#value EventsConnection#value}.

---

### EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters <a name="EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters {
    bool|IResolvable IsValueSecret = null,
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters.property.isValueSecret">IsValueSecret</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#is_value_secret EventsConnection#is_value_secret}. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#key EventsConnection#key}. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#value EventsConnection#value}. |

---

##### `IsValueSecret`<sup>Optional</sup> <a name="IsValueSecret" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters.property.isValueSecret"></a>

```csharp
public bool|IResolvable IsValueSecret { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#is_value_secret EventsConnection#is_value_secret}.

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#key EventsConnection#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#value EventsConnection#value}.

---

### EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters <a name="EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters {
    bool|IResolvable IsValueSecret = null,
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters.property.isValueSecret">IsValueSecret</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#is_value_secret EventsConnection#is_value_secret}. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#key EventsConnection#key}. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#value EventsConnection#value}. |

---

##### `IsValueSecret`<sup>Optional</sup> <a name="IsValueSecret" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters.property.isValueSecret"></a>

```csharp
public bool|IResolvable IsValueSecret { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#is_value_secret EventsConnection#is_value_secret}.

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#key EventsConnection#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#value EventsConnection#value}.

---

### EventsConnectionConfig <a name="EventsConnectionConfig" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EventsConnectionConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AuthorizationType = null,
    EventsConnectionAuthParameters AuthParameters = null,
    string Description = null,
    EventsConnectionInvocationConnectivityParameters InvocationConnectivityParameters = null,
    string KmsKeyIdentifier = null,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionConfig.property.authorizationType">AuthorizationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#authorization_type EventsConnection#authorization_type}. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionConfig.property.authParameters">AuthParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParameters">EventsConnectionAuthParameters</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#auth_parameters EventsConnection#auth_parameters}. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionConfig.property.description">Description</a></code> | <code>string</code> | Description of the connection. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionConfig.property.invocationConnectivityParameters">InvocationConnectivityParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParameters">EventsConnectionInvocationConnectivityParameters</a></code> | The private resource the HTTP request will be sent to. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionConfig.property.kmsKeyIdentifier">KmsKeyIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#kms_key_identifier EventsConnection#kms_key_identifier}. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionConfig.property.name">Name</a></code> | <code>string</code> | Name of the connection. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AuthorizationType`<sup>Optional</sup> <a name="AuthorizationType" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionConfig.property.authorizationType"></a>

```csharp
public string AuthorizationType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#authorization_type EventsConnection#authorization_type}.

---

##### `AuthParameters`<sup>Optional</sup> <a name="AuthParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionConfig.property.authParameters"></a>

```csharp
public EventsConnectionAuthParameters AuthParameters { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParameters">EventsConnectionAuthParameters</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#auth_parameters EventsConnection#auth_parameters}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Description of the connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#description EventsConnection#description}

---

##### `InvocationConnectivityParameters`<sup>Optional</sup> <a name="InvocationConnectivityParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionConfig.property.invocationConnectivityParameters"></a>

```csharp
public EventsConnectionInvocationConnectivityParameters InvocationConnectivityParameters { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParameters">EventsConnectionInvocationConnectivityParameters</a>

The private resource the HTTP request will be sent to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#invocation_connectivity_parameters EventsConnection#invocation_connectivity_parameters}

---

##### `KmsKeyIdentifier`<sup>Optional</sup> <a name="KmsKeyIdentifier" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionConfig.property.kmsKeyIdentifier"></a>

```csharp
public string KmsKeyIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#kms_key_identifier EventsConnection#kms_key_identifier}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#name EventsConnection#name}

---

### EventsConnectionInvocationConnectivityParameters <a name="EventsConnectionInvocationConnectivityParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParameters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EventsConnectionInvocationConnectivityParameters {
    EventsConnectionInvocationConnectivityParametersResourceParameters ResourceParameters = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParameters.property.resourceParameters">ResourceParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParameters">EventsConnectionInvocationConnectivityParametersResourceParameters</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#resource_parameters EventsConnection#resource_parameters}. |

---

##### `ResourceParameters`<sup>Optional</sup> <a name="ResourceParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParameters.property.resourceParameters"></a>

```csharp
public EventsConnectionInvocationConnectivityParametersResourceParameters ResourceParameters { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParameters">EventsConnectionInvocationConnectivityParametersResourceParameters</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#resource_parameters EventsConnection#resource_parameters}.

---

### EventsConnectionInvocationConnectivityParametersResourceParameters <a name="EventsConnectionInvocationConnectivityParametersResourceParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParameters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EventsConnectionInvocationConnectivityParametersResourceParameters {
    string ResourceConfigurationArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParameters.property.resourceConfigurationArn">ResourceConfigurationArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#resource_configuration_arn EventsConnection#resource_configuration_arn}. |

---

##### `ResourceConfigurationArn`<sup>Optional</sup> <a name="ResourceConfigurationArn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParameters.property.resourceConfigurationArn"></a>

```csharp
public string ResourceConfigurationArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#resource_configuration_arn EventsConnection#resource_configuration_arn}.

---

## Classes <a name="Classes" id="Classes"></a>

### EventsConnectionAuthParametersApiKeyAuthParametersOutputReference <a name="EventsConnectionAuthParametersApiKeyAuthParametersOutputReference" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EventsConnectionAuthParametersApiKeyAuthParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.resetApiKeyName">ResetApiKeyName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.resetApiKeyValue">ResetApiKeyValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetApiKeyName` <a name="ResetApiKeyName" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.resetApiKeyName"></a>

```csharp
private void ResetApiKeyName()
```

##### `ResetApiKeyValue` <a name="ResetApiKeyValue" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.resetApiKeyValue"></a>

```csharp
private void ResetApiKeyValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.property.apiKeyNameInput">ApiKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.property.apiKeyValueInput">ApiKeyValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.property.apiKeyName">ApiKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.property.apiKeyValue">ApiKeyValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParameters">EventsConnectionAuthParametersApiKeyAuthParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApiKeyNameInput`<sup>Optional</sup> <a name="ApiKeyNameInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.property.apiKeyNameInput"></a>

```csharp
public string ApiKeyNameInput { get; }
```

- *Type:* string

---

##### `ApiKeyValueInput`<sup>Optional</sup> <a name="ApiKeyValueInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.property.apiKeyValueInput"></a>

```csharp
public string ApiKeyValueInput { get; }
```

- *Type:* string

---

##### `ApiKeyName`<sup>Required</sup> <a name="ApiKeyName" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.property.apiKeyName"></a>

```csharp
public string ApiKeyName { get; }
```

- *Type:* string

---

##### `ApiKeyValue`<sup>Required</sup> <a name="ApiKeyValue" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.property.apiKeyValue"></a>

```csharp
public string ApiKeyValue { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EventsConnectionAuthParametersApiKeyAuthParameters InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParameters">EventsConnectionAuthParametersApiKeyAuthParameters</a>

---


### EventsConnectionAuthParametersBasicAuthParametersOutputReference <a name="EventsConnectionAuthParametersBasicAuthParametersOutputReference" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EventsConnectionAuthParametersBasicAuthParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.resetUsername">ResetUsername</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPassword` <a name="ResetPassword" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.resetPassword"></a>

```csharp
private void ResetPassword()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.resetUsername"></a>

```csharp
private void ResetUsername()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParameters">EventsConnectionAuthParametersBasicAuthParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EventsConnectionAuthParametersBasicAuthParameters InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParameters">EventsConnectionAuthParametersBasicAuthParameters</a>

---


### EventsConnectionAuthParametersConnectivityParametersOutputReference <a name="EventsConnectionAuthParametersConnectivityParametersOutputReference" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EventsConnectionAuthParametersConnectivityParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.putResourceParameters">PutResourceParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.resetResourceParameters">ResetResourceParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutResourceParameters` <a name="PutResourceParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.putResourceParameters"></a>

```csharp
private void PutResourceParameters(EventsConnectionAuthParametersConnectivityParametersResourceParameters Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.putResourceParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParameters">EventsConnectionAuthParametersConnectivityParametersResourceParameters</a>

---

##### `ResetResourceParameters` <a name="ResetResourceParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.resetResourceParameters"></a>

```csharp
private void ResetResourceParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.property.resourceParameters">ResourceParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference">EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.property.resourceParametersInput">ResourceParametersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParameters">EventsConnectionAuthParametersConnectivityParametersResourceParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParameters">EventsConnectionAuthParametersConnectivityParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ResourceParameters`<sup>Required</sup> <a name="ResourceParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.property.resourceParameters"></a>

```csharp
public EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference ResourceParameters { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference">EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference</a>

---

##### `ResourceParametersInput`<sup>Optional</sup> <a name="ResourceParametersInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.property.resourceParametersInput"></a>

```csharp
public IResolvable|EventsConnectionAuthParametersConnectivityParametersResourceParameters ResourceParametersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParameters">EventsConnectionAuthParametersConnectivityParametersResourceParameters</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EventsConnectionAuthParametersConnectivityParameters InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParameters">EventsConnectionAuthParametersConnectivityParameters</a>

---


### EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference <a name="EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.resetResourceConfigurationArn">ResetResourceConfigurationArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetResourceConfigurationArn` <a name="ResetResourceConfigurationArn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.resetResourceConfigurationArn"></a>

```csharp
private void ResetResourceConfigurationArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.property.resourceAssociationArn">ResourceAssociationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.property.resourceConfigurationArnInput">ResourceConfigurationArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.property.resourceConfigurationArn">ResourceConfigurationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParameters">EventsConnectionAuthParametersConnectivityParametersResourceParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ResourceAssociationArn`<sup>Required</sup> <a name="ResourceAssociationArn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.property.resourceAssociationArn"></a>

```csharp
public string ResourceAssociationArn { get; }
```

- *Type:* string

---

##### `ResourceConfigurationArnInput`<sup>Optional</sup> <a name="ResourceConfigurationArnInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.property.resourceConfigurationArnInput"></a>

```csharp
public string ResourceConfigurationArnInput { get; }
```

- *Type:* string

---

##### `ResourceConfigurationArn`<sup>Required</sup> <a name="ResourceConfigurationArn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.property.resourceConfigurationArn"></a>

```csharp
public string ResourceConfigurationArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EventsConnectionAuthParametersConnectivityParametersResourceParameters InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParameters">EventsConnectionAuthParametersConnectivityParametersResourceParameters</a>

---


### EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList <a name="EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.get"></a>

```csharp
private EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParameters">EventsConnectionAuthParametersInvocationHttpParametersBodyParameters</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.property.internalValue"></a>

```csharp
public IResolvable|EventsConnectionAuthParametersInvocationHttpParametersBodyParameters[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParameters">EventsConnectionAuthParametersInvocationHttpParametersBodyParameters</a>[]

---


### EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference <a name="EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.resetIsValueSecret">ResetIsValueSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsValueSecret` <a name="ResetIsValueSecret" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.resetIsValueSecret"></a>

```csharp
private void ResetIsValueSecret()
```

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.property.isValueSecretInput">IsValueSecretInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.property.isValueSecret">IsValueSecret</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParameters">EventsConnectionAuthParametersInvocationHttpParametersBodyParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsValueSecretInput`<sup>Optional</sup> <a name="IsValueSecretInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.property.isValueSecretInput"></a>

```csharp
public bool|IResolvable IsValueSecretInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `IsValueSecret`<sup>Required</sup> <a name="IsValueSecret" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.property.isValueSecret"></a>

```csharp
public bool|IResolvable IsValueSecret { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EventsConnectionAuthParametersInvocationHttpParametersBodyParameters InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParameters">EventsConnectionAuthParametersInvocationHttpParametersBodyParameters</a>

---


### EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList <a name="EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.get"></a>

```csharp
private EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParameters">EventsConnectionAuthParametersInvocationHttpParametersHeaderParameters</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.property.internalValue"></a>

```csharp
public IResolvable|EventsConnectionAuthParametersInvocationHttpParametersHeaderParameters[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParameters">EventsConnectionAuthParametersInvocationHttpParametersHeaderParameters</a>[]

---


### EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference <a name="EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.resetIsValueSecret">ResetIsValueSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsValueSecret` <a name="ResetIsValueSecret" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.resetIsValueSecret"></a>

```csharp
private void ResetIsValueSecret()
```

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.property.isValueSecretInput">IsValueSecretInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.property.isValueSecret">IsValueSecret</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParameters">EventsConnectionAuthParametersInvocationHttpParametersHeaderParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsValueSecretInput`<sup>Optional</sup> <a name="IsValueSecretInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.property.isValueSecretInput"></a>

```csharp
public bool|IResolvable IsValueSecretInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `IsValueSecret`<sup>Required</sup> <a name="IsValueSecret" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.property.isValueSecret"></a>

```csharp
public bool|IResolvable IsValueSecret { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EventsConnectionAuthParametersInvocationHttpParametersHeaderParameters InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParameters">EventsConnectionAuthParametersInvocationHttpParametersHeaderParameters</a>

---


### EventsConnectionAuthParametersInvocationHttpParametersOutputReference <a name="EventsConnectionAuthParametersInvocationHttpParametersOutputReference" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EventsConnectionAuthParametersInvocationHttpParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.putBodyParameters">PutBodyParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.putHeaderParameters">PutHeaderParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.putQueryStringParameters">PutQueryStringParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.resetBodyParameters">ResetBodyParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.resetHeaderParameters">ResetHeaderParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.resetQueryStringParameters">ResetQueryStringParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBodyParameters` <a name="PutBodyParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.putBodyParameters"></a>

```csharp
private void PutBodyParameters(IResolvable|EventsConnectionAuthParametersInvocationHttpParametersBodyParameters[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.putBodyParameters.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParameters">EventsConnectionAuthParametersInvocationHttpParametersBodyParameters</a>[]

---

##### `PutHeaderParameters` <a name="PutHeaderParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.putHeaderParameters"></a>

```csharp
private void PutHeaderParameters(IResolvable|EventsConnectionAuthParametersInvocationHttpParametersHeaderParameters[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.putHeaderParameters.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParameters">EventsConnectionAuthParametersInvocationHttpParametersHeaderParameters</a>[]

---

##### `PutQueryStringParameters` <a name="PutQueryStringParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.putQueryStringParameters"></a>

```csharp
private void PutQueryStringParameters(IResolvable|EventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.putQueryStringParameters.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters">EventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters</a>[]

---

##### `ResetBodyParameters` <a name="ResetBodyParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.resetBodyParameters"></a>

```csharp
private void ResetBodyParameters()
```

##### `ResetHeaderParameters` <a name="ResetHeaderParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.resetHeaderParameters"></a>

```csharp
private void ResetHeaderParameters()
```

##### `ResetQueryStringParameters` <a name="ResetQueryStringParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.resetQueryStringParameters"></a>

```csharp
private void ResetQueryStringParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.property.bodyParameters">BodyParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList">EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.property.headerParameters">HeaderParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList">EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.property.queryStringParameters">QueryStringParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList">EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.property.bodyParametersInput">BodyParametersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParameters">EventsConnectionAuthParametersInvocationHttpParametersBodyParameters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.property.headerParametersInput">HeaderParametersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParameters">EventsConnectionAuthParametersInvocationHttpParametersHeaderParameters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.property.queryStringParametersInput">QueryStringParametersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters">EventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParameters">EventsConnectionAuthParametersInvocationHttpParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BodyParameters`<sup>Required</sup> <a name="BodyParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.property.bodyParameters"></a>

```csharp
public EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList BodyParameters { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList">EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList</a>

---

##### `HeaderParameters`<sup>Required</sup> <a name="HeaderParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.property.headerParameters"></a>

```csharp
public EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList HeaderParameters { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList">EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList</a>

---

##### `QueryStringParameters`<sup>Required</sup> <a name="QueryStringParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.property.queryStringParameters"></a>

```csharp
public EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList QueryStringParameters { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList">EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList</a>

---

##### `BodyParametersInput`<sup>Optional</sup> <a name="BodyParametersInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.property.bodyParametersInput"></a>

```csharp
public IResolvable|EventsConnectionAuthParametersInvocationHttpParametersBodyParameters[] BodyParametersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParameters">EventsConnectionAuthParametersInvocationHttpParametersBodyParameters</a>[]

---

##### `HeaderParametersInput`<sup>Optional</sup> <a name="HeaderParametersInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.property.headerParametersInput"></a>

```csharp
public IResolvable|EventsConnectionAuthParametersInvocationHttpParametersHeaderParameters[] HeaderParametersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParameters">EventsConnectionAuthParametersInvocationHttpParametersHeaderParameters</a>[]

---

##### `QueryStringParametersInput`<sup>Optional</sup> <a name="QueryStringParametersInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.property.queryStringParametersInput"></a>

```csharp
public IResolvable|EventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters[] QueryStringParametersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters">EventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EventsConnectionAuthParametersInvocationHttpParameters InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParameters">EventsConnectionAuthParametersInvocationHttpParameters</a>

---


### EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList <a name="EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.get"></a>

```csharp
private EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters">EventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.property.internalValue"></a>

```csharp
public IResolvable|EventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters">EventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters</a>[]

---


### EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference <a name="EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.resetIsValueSecret">ResetIsValueSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsValueSecret` <a name="ResetIsValueSecret" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.resetIsValueSecret"></a>

```csharp
private void ResetIsValueSecret()
```

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.property.isValueSecretInput">IsValueSecretInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.property.isValueSecret">IsValueSecret</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters">EventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsValueSecretInput`<sup>Optional</sup> <a name="IsValueSecretInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.property.isValueSecretInput"></a>

```csharp
public bool|IResolvable IsValueSecretInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `IsValueSecret`<sup>Required</sup> <a name="IsValueSecret" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.property.isValueSecret"></a>

```csharp
public bool|IResolvable IsValueSecret { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters">EventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters</a>

---


### EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference <a name="EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.resetClientId">ResetClientId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.resetClientSecret">ResetClientSecret</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClientId` <a name="ResetClientId" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.resetClientId"></a>

```csharp
private void ResetClientId()
```

##### `ResetClientSecret` <a name="ResetClientSecret" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.resetClientSecret"></a>

```csharp
private void ResetClientSecret()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.property.clientSecretInput">ClientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.property.clientSecret">ClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParameters">EventsConnectionAuthParametersOAuthParametersClientParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.property.clientIdInput"></a>

```csharp
public string ClientIdInput { get; }
```

- *Type:* string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.property.clientSecretInput"></a>

```csharp
public string ClientSecretInput { get; }
```

- *Type:* string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.property.clientSecret"></a>

```csharp
public string ClientSecret { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EventsConnectionAuthParametersOAuthParametersClientParameters InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParameters">EventsConnectionAuthParametersOAuthParametersClientParameters</a>

---


### EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList <a name="EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.get"></a>

```csharp
private EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters">EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.property.internalValue"></a>

```csharp
public IResolvable|EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters">EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters</a>[]

---


### EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference <a name="EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.resetIsValueSecret">ResetIsValueSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsValueSecret` <a name="ResetIsValueSecret" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.resetIsValueSecret"></a>

```csharp
private void ResetIsValueSecret()
```

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.property.isValueSecretInput">IsValueSecretInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.property.isValueSecret">IsValueSecret</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters">EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsValueSecretInput`<sup>Optional</sup> <a name="IsValueSecretInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.property.isValueSecretInput"></a>

```csharp
public bool|IResolvable IsValueSecretInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `IsValueSecret`<sup>Required</sup> <a name="IsValueSecret" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.property.isValueSecret"></a>

```csharp
public bool|IResolvable IsValueSecret { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters">EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters</a>

---


### EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList <a name="EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.get"></a>

```csharp
private EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters">EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.property.internalValue"></a>

```csharp
public IResolvable|EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters">EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters</a>[]

---


### EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference <a name="EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.resetIsValueSecret">ResetIsValueSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsValueSecret` <a name="ResetIsValueSecret" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.resetIsValueSecret"></a>

```csharp
private void ResetIsValueSecret()
```

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.property.isValueSecretInput">IsValueSecretInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.property.isValueSecret">IsValueSecret</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters">EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsValueSecretInput`<sup>Optional</sup> <a name="IsValueSecretInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.property.isValueSecretInput"></a>

```csharp
public bool|IResolvable IsValueSecretInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `IsValueSecret`<sup>Required</sup> <a name="IsValueSecret" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.property.isValueSecret"></a>

```csharp
public bool|IResolvable IsValueSecret { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters">EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters</a>

---


### EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference <a name="EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.putBodyParameters">PutBodyParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.putHeaderParameters">PutHeaderParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.putQueryStringParameters">PutQueryStringParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.resetBodyParameters">ResetBodyParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.resetHeaderParameters">ResetHeaderParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.resetQueryStringParameters">ResetQueryStringParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBodyParameters` <a name="PutBodyParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.putBodyParameters"></a>

```csharp
private void PutBodyParameters(IResolvable|EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.putBodyParameters.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters">EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters</a>[]

---

##### `PutHeaderParameters` <a name="PutHeaderParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.putHeaderParameters"></a>

```csharp
private void PutHeaderParameters(IResolvable|EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.putHeaderParameters.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters">EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters</a>[]

---

##### `PutQueryStringParameters` <a name="PutQueryStringParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.putQueryStringParameters"></a>

```csharp
private void PutQueryStringParameters(IResolvable|EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.putQueryStringParameters.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters">EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters</a>[]

---

##### `ResetBodyParameters` <a name="ResetBodyParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.resetBodyParameters"></a>

```csharp
private void ResetBodyParameters()
```

##### `ResetHeaderParameters` <a name="ResetHeaderParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.resetHeaderParameters"></a>

```csharp
private void ResetHeaderParameters()
```

##### `ResetQueryStringParameters` <a name="ResetQueryStringParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.resetQueryStringParameters"></a>

```csharp
private void ResetQueryStringParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.property.bodyParameters">BodyParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList">EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.property.headerParameters">HeaderParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList">EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.property.queryStringParameters">QueryStringParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList">EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.property.bodyParametersInput">BodyParametersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters">EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.property.headerParametersInput">HeaderParametersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters">EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.property.queryStringParametersInput">QueryStringParametersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters">EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParameters">EventsConnectionAuthParametersOAuthParametersOAuthHttpParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BodyParameters`<sup>Required</sup> <a name="BodyParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.property.bodyParameters"></a>

```csharp
public EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList BodyParameters { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList">EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList</a>

---

##### `HeaderParameters`<sup>Required</sup> <a name="HeaderParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.property.headerParameters"></a>

```csharp
public EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList HeaderParameters { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList">EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList</a>

---

##### `QueryStringParameters`<sup>Required</sup> <a name="QueryStringParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.property.queryStringParameters"></a>

```csharp
public EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList QueryStringParameters { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList">EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList</a>

---

##### `BodyParametersInput`<sup>Optional</sup> <a name="BodyParametersInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.property.bodyParametersInput"></a>

```csharp
public IResolvable|EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters[] BodyParametersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters">EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters</a>[]

---

##### `HeaderParametersInput`<sup>Optional</sup> <a name="HeaderParametersInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.property.headerParametersInput"></a>

```csharp
public IResolvable|EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters[] HeaderParametersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters">EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters</a>[]

---

##### `QueryStringParametersInput`<sup>Optional</sup> <a name="QueryStringParametersInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.property.queryStringParametersInput"></a>

```csharp
public IResolvable|EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters[] QueryStringParametersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters">EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EventsConnectionAuthParametersOAuthParametersOAuthHttpParameters InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParameters">EventsConnectionAuthParametersOAuthParametersOAuthHttpParameters</a>

---


### EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList <a name="EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.get"></a>

```csharp
private EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters">EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.property.internalValue"></a>

```csharp
public IResolvable|EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters">EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters</a>[]

---


### EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference <a name="EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.resetIsValueSecret">ResetIsValueSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsValueSecret` <a name="ResetIsValueSecret" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.resetIsValueSecret"></a>

```csharp
private void ResetIsValueSecret()
```

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.property.isValueSecretInput">IsValueSecretInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.property.isValueSecret">IsValueSecret</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters">EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsValueSecretInput`<sup>Optional</sup> <a name="IsValueSecretInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.property.isValueSecretInput"></a>

```csharp
public bool|IResolvable IsValueSecretInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `IsValueSecret`<sup>Required</sup> <a name="IsValueSecret" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.property.isValueSecret"></a>

```csharp
public bool|IResolvable IsValueSecret { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters">EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters</a>

---


### EventsConnectionAuthParametersOAuthParametersOutputReference <a name="EventsConnectionAuthParametersOAuthParametersOutputReference" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EventsConnectionAuthParametersOAuthParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.putClientParameters">PutClientParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.putOAuthHttpParameters">PutOAuthHttpParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.resetAuthorizationEndpoint">ResetAuthorizationEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.resetClientParameters">ResetClientParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.resetHttpMethod">ResetHttpMethod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.resetOAuthHttpParameters">ResetOAuthHttpParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutClientParameters` <a name="PutClientParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.putClientParameters"></a>

```csharp
private void PutClientParameters(EventsConnectionAuthParametersOAuthParametersClientParameters Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.putClientParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParameters">EventsConnectionAuthParametersOAuthParametersClientParameters</a>

---

##### `PutOAuthHttpParameters` <a name="PutOAuthHttpParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.putOAuthHttpParameters"></a>

```csharp
private void PutOAuthHttpParameters(EventsConnectionAuthParametersOAuthParametersOAuthHttpParameters Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.putOAuthHttpParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParameters">EventsConnectionAuthParametersOAuthParametersOAuthHttpParameters</a>

---

##### `ResetAuthorizationEndpoint` <a name="ResetAuthorizationEndpoint" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.resetAuthorizationEndpoint"></a>

```csharp
private void ResetAuthorizationEndpoint()
```

##### `ResetClientParameters` <a name="ResetClientParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.resetClientParameters"></a>

```csharp
private void ResetClientParameters()
```

##### `ResetHttpMethod` <a name="ResetHttpMethod" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.resetHttpMethod"></a>

```csharp
private void ResetHttpMethod()
```

##### `ResetOAuthHttpParameters` <a name="ResetOAuthHttpParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.resetOAuthHttpParameters"></a>

```csharp
private void ResetOAuthHttpParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.property.clientParameters">ClientParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference">EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.property.oAuthHttpParameters">OAuthHttpParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference">EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.property.authorizationEndpointInput">AuthorizationEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.property.clientParametersInput">ClientParametersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParameters">EventsConnectionAuthParametersOAuthParametersClientParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.property.httpMethodInput">HttpMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.property.oAuthHttpParametersInput">OAuthHttpParametersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParameters">EventsConnectionAuthParametersOAuthParametersOAuthHttpParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.property.authorizationEndpoint">AuthorizationEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.property.httpMethod">HttpMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParameters">EventsConnectionAuthParametersOAuthParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClientParameters`<sup>Required</sup> <a name="ClientParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.property.clientParameters"></a>

```csharp
public EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference ClientParameters { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference">EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference</a>

---

##### `OAuthHttpParameters`<sup>Required</sup> <a name="OAuthHttpParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.property.oAuthHttpParameters"></a>

```csharp
public EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference OAuthHttpParameters { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference">EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference</a>

---

##### `AuthorizationEndpointInput`<sup>Optional</sup> <a name="AuthorizationEndpointInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.property.authorizationEndpointInput"></a>

```csharp
public string AuthorizationEndpointInput { get; }
```

- *Type:* string

---

##### `ClientParametersInput`<sup>Optional</sup> <a name="ClientParametersInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.property.clientParametersInput"></a>

```csharp
public IResolvable|EventsConnectionAuthParametersOAuthParametersClientParameters ClientParametersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParameters">EventsConnectionAuthParametersOAuthParametersClientParameters</a>

---

##### `HttpMethodInput`<sup>Optional</sup> <a name="HttpMethodInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.property.httpMethodInput"></a>

```csharp
public string HttpMethodInput { get; }
```

- *Type:* string

---

##### `OAuthHttpParametersInput`<sup>Optional</sup> <a name="OAuthHttpParametersInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.property.oAuthHttpParametersInput"></a>

```csharp
public IResolvable|EventsConnectionAuthParametersOAuthParametersOAuthHttpParameters OAuthHttpParametersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParameters">EventsConnectionAuthParametersOAuthParametersOAuthHttpParameters</a>

---

##### `AuthorizationEndpoint`<sup>Required</sup> <a name="AuthorizationEndpoint" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.property.authorizationEndpoint"></a>

```csharp
public string AuthorizationEndpoint { get; }
```

- *Type:* string

---

##### `HttpMethod`<sup>Required</sup> <a name="HttpMethod" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.property.httpMethod"></a>

```csharp
public string HttpMethod { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EventsConnectionAuthParametersOAuthParameters InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParameters">EventsConnectionAuthParametersOAuthParameters</a>

---


### EventsConnectionAuthParametersOutputReference <a name="EventsConnectionAuthParametersOutputReference" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EventsConnectionAuthParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.putApiKeyAuthParameters">PutApiKeyAuthParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.putBasicAuthParameters">PutBasicAuthParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.putConnectivityParameters">PutConnectivityParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.putInvocationHttpParameters">PutInvocationHttpParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.putOAuthParameters">PutOAuthParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.resetApiKeyAuthParameters">ResetApiKeyAuthParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.resetBasicAuthParameters">ResetBasicAuthParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.resetConnectivityParameters">ResetConnectivityParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.resetInvocationHttpParameters">ResetInvocationHttpParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.resetOAuthParameters">ResetOAuthParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutApiKeyAuthParameters` <a name="PutApiKeyAuthParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.putApiKeyAuthParameters"></a>

```csharp
private void PutApiKeyAuthParameters(EventsConnectionAuthParametersApiKeyAuthParameters Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.putApiKeyAuthParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParameters">EventsConnectionAuthParametersApiKeyAuthParameters</a>

---

##### `PutBasicAuthParameters` <a name="PutBasicAuthParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.putBasicAuthParameters"></a>

```csharp
private void PutBasicAuthParameters(EventsConnectionAuthParametersBasicAuthParameters Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.putBasicAuthParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParameters">EventsConnectionAuthParametersBasicAuthParameters</a>

---

##### `PutConnectivityParameters` <a name="PutConnectivityParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.putConnectivityParameters"></a>

```csharp
private void PutConnectivityParameters(EventsConnectionAuthParametersConnectivityParameters Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.putConnectivityParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParameters">EventsConnectionAuthParametersConnectivityParameters</a>

---

##### `PutInvocationHttpParameters` <a name="PutInvocationHttpParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.putInvocationHttpParameters"></a>

```csharp
private void PutInvocationHttpParameters(EventsConnectionAuthParametersInvocationHttpParameters Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.putInvocationHttpParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParameters">EventsConnectionAuthParametersInvocationHttpParameters</a>

---

##### `PutOAuthParameters` <a name="PutOAuthParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.putOAuthParameters"></a>

```csharp
private void PutOAuthParameters(EventsConnectionAuthParametersOAuthParameters Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.putOAuthParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParameters">EventsConnectionAuthParametersOAuthParameters</a>

---

##### `ResetApiKeyAuthParameters` <a name="ResetApiKeyAuthParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.resetApiKeyAuthParameters"></a>

```csharp
private void ResetApiKeyAuthParameters()
```

##### `ResetBasicAuthParameters` <a name="ResetBasicAuthParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.resetBasicAuthParameters"></a>

```csharp
private void ResetBasicAuthParameters()
```

##### `ResetConnectivityParameters` <a name="ResetConnectivityParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.resetConnectivityParameters"></a>

```csharp
private void ResetConnectivityParameters()
```

##### `ResetInvocationHttpParameters` <a name="ResetInvocationHttpParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.resetInvocationHttpParameters"></a>

```csharp
private void ResetInvocationHttpParameters()
```

##### `ResetOAuthParameters` <a name="ResetOAuthParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.resetOAuthParameters"></a>

```csharp
private void ResetOAuthParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.property.apiKeyAuthParameters">ApiKeyAuthParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference">EventsConnectionAuthParametersApiKeyAuthParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.property.basicAuthParameters">BasicAuthParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference">EventsConnectionAuthParametersBasicAuthParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.property.connectivityParameters">ConnectivityParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference">EventsConnectionAuthParametersConnectivityParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.property.invocationHttpParameters">InvocationHttpParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference">EventsConnectionAuthParametersInvocationHttpParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.property.oAuthParameters">OAuthParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference">EventsConnectionAuthParametersOAuthParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.property.apiKeyAuthParametersInput">ApiKeyAuthParametersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParameters">EventsConnectionAuthParametersApiKeyAuthParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.property.basicAuthParametersInput">BasicAuthParametersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParameters">EventsConnectionAuthParametersBasicAuthParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.property.connectivityParametersInput">ConnectivityParametersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParameters">EventsConnectionAuthParametersConnectivityParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.property.invocationHttpParametersInput">InvocationHttpParametersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParameters">EventsConnectionAuthParametersInvocationHttpParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.property.oAuthParametersInput">OAuthParametersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParameters">EventsConnectionAuthParametersOAuthParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParameters">EventsConnectionAuthParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApiKeyAuthParameters`<sup>Required</sup> <a name="ApiKeyAuthParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.property.apiKeyAuthParameters"></a>

```csharp
public EventsConnectionAuthParametersApiKeyAuthParametersOutputReference ApiKeyAuthParameters { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference">EventsConnectionAuthParametersApiKeyAuthParametersOutputReference</a>

---

##### `BasicAuthParameters`<sup>Required</sup> <a name="BasicAuthParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.property.basicAuthParameters"></a>

```csharp
public EventsConnectionAuthParametersBasicAuthParametersOutputReference BasicAuthParameters { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference">EventsConnectionAuthParametersBasicAuthParametersOutputReference</a>

---

##### `ConnectivityParameters`<sup>Required</sup> <a name="ConnectivityParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.property.connectivityParameters"></a>

```csharp
public EventsConnectionAuthParametersConnectivityParametersOutputReference ConnectivityParameters { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference">EventsConnectionAuthParametersConnectivityParametersOutputReference</a>

---

##### `InvocationHttpParameters`<sup>Required</sup> <a name="InvocationHttpParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.property.invocationHttpParameters"></a>

```csharp
public EventsConnectionAuthParametersInvocationHttpParametersOutputReference InvocationHttpParameters { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference">EventsConnectionAuthParametersInvocationHttpParametersOutputReference</a>

---

##### `OAuthParameters`<sup>Required</sup> <a name="OAuthParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.property.oAuthParameters"></a>

```csharp
public EventsConnectionAuthParametersOAuthParametersOutputReference OAuthParameters { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference">EventsConnectionAuthParametersOAuthParametersOutputReference</a>

---

##### `ApiKeyAuthParametersInput`<sup>Optional</sup> <a name="ApiKeyAuthParametersInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.property.apiKeyAuthParametersInput"></a>

```csharp
public IResolvable|EventsConnectionAuthParametersApiKeyAuthParameters ApiKeyAuthParametersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParameters">EventsConnectionAuthParametersApiKeyAuthParameters</a>

---

##### `BasicAuthParametersInput`<sup>Optional</sup> <a name="BasicAuthParametersInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.property.basicAuthParametersInput"></a>

```csharp
public IResolvable|EventsConnectionAuthParametersBasicAuthParameters BasicAuthParametersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParameters">EventsConnectionAuthParametersBasicAuthParameters</a>

---

##### `ConnectivityParametersInput`<sup>Optional</sup> <a name="ConnectivityParametersInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.property.connectivityParametersInput"></a>

```csharp
public IResolvable|EventsConnectionAuthParametersConnectivityParameters ConnectivityParametersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParameters">EventsConnectionAuthParametersConnectivityParameters</a>

---

##### `InvocationHttpParametersInput`<sup>Optional</sup> <a name="InvocationHttpParametersInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.property.invocationHttpParametersInput"></a>

```csharp
public IResolvable|EventsConnectionAuthParametersInvocationHttpParameters InvocationHttpParametersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParameters">EventsConnectionAuthParametersInvocationHttpParameters</a>

---

##### `OAuthParametersInput`<sup>Optional</sup> <a name="OAuthParametersInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.property.oAuthParametersInput"></a>

```csharp
public IResolvable|EventsConnectionAuthParametersOAuthParameters OAuthParametersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParameters">EventsConnectionAuthParametersOAuthParameters</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EventsConnectionAuthParameters InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParameters">EventsConnectionAuthParameters</a>

---


### EventsConnectionInvocationConnectivityParametersOutputReference <a name="EventsConnectionInvocationConnectivityParametersOutputReference" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EventsConnectionInvocationConnectivityParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.putResourceParameters">PutResourceParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.resetResourceParameters">ResetResourceParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutResourceParameters` <a name="PutResourceParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.putResourceParameters"></a>

```csharp
private void PutResourceParameters(EventsConnectionInvocationConnectivityParametersResourceParameters Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.putResourceParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParameters">EventsConnectionInvocationConnectivityParametersResourceParameters</a>

---

##### `ResetResourceParameters` <a name="ResetResourceParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.resetResourceParameters"></a>

```csharp
private void ResetResourceParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.property.resourceParameters">ResourceParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference">EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.property.resourceParametersInput">ResourceParametersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParameters">EventsConnectionInvocationConnectivityParametersResourceParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParameters">EventsConnectionInvocationConnectivityParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ResourceParameters`<sup>Required</sup> <a name="ResourceParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.property.resourceParameters"></a>

```csharp
public EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference ResourceParameters { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference">EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference</a>

---

##### `ResourceParametersInput`<sup>Optional</sup> <a name="ResourceParametersInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.property.resourceParametersInput"></a>

```csharp
public IResolvable|EventsConnectionInvocationConnectivityParametersResourceParameters ResourceParametersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParameters">EventsConnectionInvocationConnectivityParametersResourceParameters</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EventsConnectionInvocationConnectivityParameters InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParameters">EventsConnectionInvocationConnectivityParameters</a>

---


### EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference <a name="EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.resetResourceConfigurationArn">ResetResourceConfigurationArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetResourceConfigurationArn` <a name="ResetResourceConfigurationArn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.resetResourceConfigurationArn"></a>

```csharp
private void ResetResourceConfigurationArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.property.resourceAssociationArn">ResourceAssociationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.property.resourceConfigurationArnInput">ResourceConfigurationArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.property.resourceConfigurationArn">ResourceConfigurationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParameters">EventsConnectionInvocationConnectivityParametersResourceParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ResourceAssociationArn`<sup>Required</sup> <a name="ResourceAssociationArn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.property.resourceAssociationArn"></a>

```csharp
public string ResourceAssociationArn { get; }
```

- *Type:* string

---

##### `ResourceConfigurationArnInput`<sup>Optional</sup> <a name="ResourceConfigurationArnInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.property.resourceConfigurationArnInput"></a>

```csharp
public string ResourceConfigurationArnInput { get; }
```

- *Type:* string

---

##### `ResourceConfigurationArn`<sup>Required</sup> <a name="ResourceConfigurationArn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.property.resourceConfigurationArn"></a>

```csharp
public string ResourceConfigurationArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EventsConnectionInvocationConnectivityParametersResourceParameters InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParameters">EventsConnectionInvocationConnectivityParametersResourceParameters</a>

---



