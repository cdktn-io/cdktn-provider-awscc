# `connectQueue` Submodule <a name="`connectQueue` Submodule" id="@cdktn/provider-awscc.connectQueue"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConnectQueue <a name="ConnectQueue" id="@cdktn/provider-awscc.connectQueue.ConnectQueue"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_queue awscc_connect_queue}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectQueue(Construct Scope, string Id, ConnectQueueConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueConfig">ConnectQueueConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueConfig">ConnectQueueConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.putAdditionalEmailAddresses">PutAdditionalEmailAddresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.putOutboundCallerConfig">PutOutboundCallerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.putOutboundEmailConfig">PutOutboundEmailConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.resetAdditionalEmailAddresses">ResetAdditionalEmailAddresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.resetMaxContacts">ResetMaxContacts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.resetOutboundCallerConfig">ResetOutboundCallerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.resetOutboundEmailConfig">ResetOutboundEmailConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.resetQuickConnectArns">ResetQuickConnectArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAdditionalEmailAddresses` <a name="PutAdditionalEmailAddresses" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.putAdditionalEmailAddresses"></a>

```csharp
private void PutAdditionalEmailAddresses(IResolvable|ConnectQueueAdditionalEmailAddresses[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.putAdditionalEmailAddresses.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddresses">ConnectQueueAdditionalEmailAddresses</a>[]

---

##### `PutOutboundCallerConfig` <a name="PutOutboundCallerConfig" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.putOutboundCallerConfig"></a>

```csharp
private void PutOutboundCallerConfig(ConnectQueueOutboundCallerConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.putOutboundCallerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfig">ConnectQueueOutboundCallerConfig</a>

---

##### `PutOutboundEmailConfig` <a name="PutOutboundEmailConfig" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.putOutboundEmailConfig"></a>

```csharp
private void PutOutboundEmailConfig(ConnectQueueOutboundEmailConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.putOutboundEmailConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfig">ConnectQueueOutboundEmailConfig</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.putTags"></a>

```csharp
private void PutTags(IResolvable|ConnectQueueTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTags">ConnectQueueTags</a>[]

---

##### `ResetAdditionalEmailAddresses` <a name="ResetAdditionalEmailAddresses" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.resetAdditionalEmailAddresses"></a>

```csharp
private void ResetAdditionalEmailAddresses()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetMaxContacts` <a name="ResetMaxContacts" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.resetMaxContacts"></a>

```csharp
private void ResetMaxContacts()
```

##### `ResetOutboundCallerConfig` <a name="ResetOutboundCallerConfig" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.resetOutboundCallerConfig"></a>

```csharp
private void ResetOutboundCallerConfig()
```

##### `ResetOutboundEmailConfig` <a name="ResetOutboundEmailConfig" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.resetOutboundEmailConfig"></a>

```csharp
private void ResetOutboundEmailConfig()
```

##### `ResetQuickConnectArns` <a name="ResetQuickConnectArns" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.resetQuickConnectArns"></a>

```csharp
private void ResetQuickConnectArns()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.resetStatus"></a>

```csharp
private void ResetStatus()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ConnectQueue resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ConnectQueue.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ConnectQueue.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ConnectQueue.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ConnectQueue.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ConnectQueue resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ConnectQueue to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ConnectQueue that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_queue#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ConnectQueue to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.additionalEmailAddresses">AdditionalEmailAddresses</a></code> | <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesList">ConnectQueueAdditionalEmailAddressesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.lastModifiedRegion">LastModifiedRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.lastModifiedTime">LastModifiedTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.outboundCallerConfig">OutboundCallerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference">ConnectQueueOutboundCallerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.outboundEmailConfig">OutboundEmailConfig</a></code> | <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference">ConnectQueueOutboundEmailConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.queueArn">QueueArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsList">ConnectQueueTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.additionalEmailAddressesInput">AdditionalEmailAddressesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddresses">ConnectQueueAdditionalEmailAddresses</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.hoursOfOperationArnInput">HoursOfOperationArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.instanceArnInput">InstanceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.maxContactsInput">MaxContactsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.outboundCallerConfigInput">OutboundCallerConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfig">ConnectQueueOutboundCallerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.outboundEmailConfigInput">OutboundEmailConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfig">ConnectQueueOutboundEmailConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.quickConnectArnsInput">QuickConnectArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTags">ConnectQueueTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.hoursOfOperationArn">HoursOfOperationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.instanceArn">InstanceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.maxContacts">MaxContacts</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.quickConnectArns">QuickConnectArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.status">Status</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AdditionalEmailAddresses`<sup>Required</sup> <a name="AdditionalEmailAddresses" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.additionalEmailAddresses"></a>

```csharp
public ConnectQueueAdditionalEmailAddressesList AdditionalEmailAddresses { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesList">ConnectQueueAdditionalEmailAddressesList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LastModifiedRegion`<sup>Required</sup> <a name="LastModifiedRegion" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.lastModifiedRegion"></a>

```csharp
public string LastModifiedRegion { get; }
```

- *Type:* string

---

##### `LastModifiedTime`<sup>Required</sup> <a name="LastModifiedTime" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.lastModifiedTime"></a>

```csharp
public double LastModifiedTime { get; }
```

- *Type:* double

---

##### `OutboundCallerConfig`<sup>Required</sup> <a name="OutboundCallerConfig" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.outboundCallerConfig"></a>

```csharp
public ConnectQueueOutboundCallerConfigOutputReference OutboundCallerConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference">ConnectQueueOutboundCallerConfigOutputReference</a>

---

##### `OutboundEmailConfig`<sup>Required</sup> <a name="OutboundEmailConfig" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.outboundEmailConfig"></a>

```csharp
public ConnectQueueOutboundEmailConfigOutputReference OutboundEmailConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference">ConnectQueueOutboundEmailConfigOutputReference</a>

---

##### `QueueArn`<sup>Required</sup> <a name="QueueArn" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.queueArn"></a>

```csharp
public string QueueArn { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.tags"></a>

```csharp
public ConnectQueueTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsList">ConnectQueueTagsList</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `AdditionalEmailAddressesInput`<sup>Optional</sup> <a name="AdditionalEmailAddressesInput" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.additionalEmailAddressesInput"></a>

```csharp
public IResolvable|ConnectQueueAdditionalEmailAddresses[] AdditionalEmailAddressesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddresses">ConnectQueueAdditionalEmailAddresses</a>[]

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `HoursOfOperationArnInput`<sup>Optional</sup> <a name="HoursOfOperationArnInput" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.hoursOfOperationArnInput"></a>

```csharp
public string HoursOfOperationArnInput { get; }
```

- *Type:* string

---

##### `InstanceArnInput`<sup>Optional</sup> <a name="InstanceArnInput" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.instanceArnInput"></a>

```csharp
public string InstanceArnInput { get; }
```

- *Type:* string

---

##### `MaxContactsInput`<sup>Optional</sup> <a name="MaxContactsInput" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.maxContactsInput"></a>

```csharp
public double MaxContactsInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OutboundCallerConfigInput`<sup>Optional</sup> <a name="OutboundCallerConfigInput" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.outboundCallerConfigInput"></a>

```csharp
public IResolvable|ConnectQueueOutboundCallerConfig OutboundCallerConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfig">ConnectQueueOutboundCallerConfig</a>

---

##### `OutboundEmailConfigInput`<sup>Optional</sup> <a name="OutboundEmailConfigInput" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.outboundEmailConfigInput"></a>

```csharp
public IResolvable|ConnectQueueOutboundEmailConfig OutboundEmailConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfig">ConnectQueueOutboundEmailConfig</a>

---

##### `QuickConnectArnsInput`<sup>Optional</sup> <a name="QuickConnectArnsInput" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.quickConnectArnsInput"></a>

```csharp
public string[] QuickConnectArnsInput { get; }
```

- *Type:* string[]

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.tagsInput"></a>

```csharp
public IResolvable|ConnectQueueTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTags">ConnectQueueTags</a>[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `HoursOfOperationArn`<sup>Required</sup> <a name="HoursOfOperationArn" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.hoursOfOperationArn"></a>

```csharp
public string HoursOfOperationArn { get; }
```

- *Type:* string

---

##### `InstanceArn`<sup>Required</sup> <a name="InstanceArn" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.instanceArn"></a>

```csharp
public string InstanceArn { get; }
```

- *Type:* string

---

##### `MaxContacts`<sup>Required</sup> <a name="MaxContacts" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.maxContacts"></a>

```csharp
public double MaxContacts { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `QuickConnectArns`<sup>Required</sup> <a name="QuickConnectArns" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.quickConnectArns"></a>

```csharp
public string[] QuickConnectArns { get; }
```

- *Type:* string[]

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ConnectQueueAdditionalEmailAddresses <a name="ConnectQueueAdditionalEmailAddresses" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddresses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddresses.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectQueueAdditionalEmailAddresses {
    string EmailAddressArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddresses.property.emailAddressArn">EmailAddressArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the email address. |

---

##### `EmailAddressArn`<sup>Optional</sup> <a name="EmailAddressArn" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddresses.property.emailAddressArn"></a>

```csharp
public string EmailAddressArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of the email address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_queue#email_address_arn ConnectQueue#email_address_arn}

---

### ConnectQueueConfig <a name="ConnectQueueConfig" id="@cdktn/provider-awscc.connectQueue.ConnectQueueConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectQueueConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string HoursOfOperationArn,
    string InstanceArn,
    string Name,
    IResolvable|ConnectQueueAdditionalEmailAddresses[] AdditionalEmailAddresses = null,
    string Description = null,
    double MaxContacts = null,
    ConnectQueueOutboundCallerConfig OutboundCallerConfig = null,
    ConnectQueueOutboundEmailConfig OutboundEmailConfig = null,
    string[] QuickConnectArns = null,
    string Status = null,
    IResolvable|ConnectQueueTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.hoursOfOperationArn">HoursOfOperationArn</a></code> | <code>string</code> | The identifier for the hours of operation. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.instanceArn">InstanceArn</a></code> | <code>string</code> | The identifier of the Amazon Connect instance. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.name">Name</a></code> | <code>string</code> | The name of the queue. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.additionalEmailAddresses">AdditionalEmailAddresses</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddresses">ConnectQueueAdditionalEmailAddresses</a>[]</code> | The email addresses that agents can use when replying to or initiating email contacts. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.description">Description</a></code> | <code>string</code> | The description of the queue. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.maxContacts">MaxContacts</a></code> | <code>double</code> | The maximum number of contacts that can be in the queue before it is considered full. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.outboundCallerConfig">OutboundCallerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfig">ConnectQueueOutboundCallerConfig</a></code> | The outbound caller ID name, number, and outbound whisper flow. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.outboundEmailConfig">OutboundEmailConfig</a></code> | <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfig">ConnectQueueOutboundEmailConfig</a></code> | The outbound email address ID. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.quickConnectArns">QuickConnectArns</a></code> | <code>string[]</code> | The quick connects available to agents who are working the queue. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.status">Status</a></code> | <code>string</code> | The status of the queue. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTags">ConnectQueueTags</a>[]</code> | An array of key-value pairs to apply to this resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `HoursOfOperationArn`<sup>Required</sup> <a name="HoursOfOperationArn" id="@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.hoursOfOperationArn"></a>

```csharp
public string HoursOfOperationArn { get; set; }
```

- *Type:* string

The identifier for the hours of operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_queue#hours_of_operation_arn ConnectQueue#hours_of_operation_arn}

---

##### `InstanceArn`<sup>Required</sup> <a name="InstanceArn" id="@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.instanceArn"></a>

```csharp
public string InstanceArn { get; set; }
```

- *Type:* string

The identifier of the Amazon Connect instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_queue#instance_arn ConnectQueue#instance_arn}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the queue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_queue#name ConnectQueue#name}

---

##### `AdditionalEmailAddresses`<sup>Optional</sup> <a name="AdditionalEmailAddresses" id="@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.additionalEmailAddresses"></a>

```csharp
public IResolvable|ConnectQueueAdditionalEmailAddresses[] AdditionalEmailAddresses { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddresses">ConnectQueueAdditionalEmailAddresses</a>[]

The email addresses that agents can use when replying to or initiating email contacts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_queue#additional_email_addresses ConnectQueue#additional_email_addresses}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description of the queue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_queue#description ConnectQueue#description}

---

##### `MaxContacts`<sup>Optional</sup> <a name="MaxContacts" id="@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.maxContacts"></a>

```csharp
public double MaxContacts { get; set; }
```

- *Type:* double

The maximum number of contacts that can be in the queue before it is considered full.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_queue#max_contacts ConnectQueue#max_contacts}

---

##### `OutboundCallerConfig`<sup>Optional</sup> <a name="OutboundCallerConfig" id="@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.outboundCallerConfig"></a>

```csharp
public ConnectQueueOutboundCallerConfig OutboundCallerConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfig">ConnectQueueOutboundCallerConfig</a>

The outbound caller ID name, number, and outbound whisper flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_queue#outbound_caller_config ConnectQueue#outbound_caller_config}

---

##### `OutboundEmailConfig`<sup>Optional</sup> <a name="OutboundEmailConfig" id="@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.outboundEmailConfig"></a>

```csharp
public ConnectQueueOutboundEmailConfig OutboundEmailConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfig">ConnectQueueOutboundEmailConfig</a>

The outbound email address ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_queue#outbound_email_config ConnectQueue#outbound_email_config}

---

##### `QuickConnectArns`<sup>Optional</sup> <a name="QuickConnectArns" id="@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.quickConnectArns"></a>

```csharp
public string[] QuickConnectArns { get; set; }
```

- *Type:* string[]

The quick connects available to agents who are working the queue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_queue#quick_connect_arns ConnectQueue#quick_connect_arns}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

The status of the queue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_queue#status ConnectQueue#status}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.tags"></a>

```csharp
public IResolvable|ConnectQueueTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTags">ConnectQueueTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_queue#tags ConnectQueue#tags}

---

### ConnectQueueOutboundCallerConfig <a name="ConnectQueueOutboundCallerConfig" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectQueueOutboundCallerConfig {
    string OutboundCallerIdName = null,
    string OutboundCallerIdNumberArn = null,
    string OutboundFlowArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfig.property.outboundCallerIdName">OutboundCallerIdName</a></code> | <code>string</code> | The caller ID name. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfig.property.outboundCallerIdNumberArn">OutboundCallerIdNumberArn</a></code> | <code>string</code> | The caller ID number. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfig.property.outboundFlowArn">OutboundFlowArn</a></code> | <code>string</code> | The outbound whisper flow to be used during an outbound call. |

---

##### `OutboundCallerIdName`<sup>Optional</sup> <a name="OutboundCallerIdName" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfig.property.outboundCallerIdName"></a>

```csharp
public string OutboundCallerIdName { get; set; }
```

- *Type:* string

The caller ID name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_queue#outbound_caller_id_name ConnectQueue#outbound_caller_id_name}

---

##### `OutboundCallerIdNumberArn`<sup>Optional</sup> <a name="OutboundCallerIdNumberArn" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfig.property.outboundCallerIdNumberArn"></a>

```csharp
public string OutboundCallerIdNumberArn { get; set; }
```

- *Type:* string

The caller ID number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_queue#outbound_caller_id_number_arn ConnectQueue#outbound_caller_id_number_arn}

---

##### `OutboundFlowArn`<sup>Optional</sup> <a name="OutboundFlowArn" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfig.property.outboundFlowArn"></a>

```csharp
public string OutboundFlowArn { get; set; }
```

- *Type:* string

The outbound whisper flow to be used during an outbound call.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_queue#outbound_flow_arn ConnectQueue#outbound_flow_arn}

---

### ConnectQueueOutboundEmailConfig <a name="ConnectQueueOutboundEmailConfig" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectQueueOutboundEmailConfig {
    string OutboundEmailAddressId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfig.property.outboundEmailAddressId">OutboundEmailAddressId</a></code> | <code>string</code> | The email address connect resource ID. |

---

##### `OutboundEmailAddressId`<sup>Optional</sup> <a name="OutboundEmailAddressId" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfig.property.outboundEmailAddressId"></a>

```csharp
public string OutboundEmailAddressId { get; set; }
```

- *Type:* string

The email address connect resource ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_queue#outbound_email_address_id ConnectQueue#outbound_email_address_id}

---

### ConnectQueueTags <a name="ConnectQueueTags" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectQueueTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_queue#key ConnectQueue#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_queue#value ConnectQueue#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ConnectQueueAdditionalEmailAddressesList <a name="ConnectQueueAdditionalEmailAddressesList" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectQueueAdditionalEmailAddressesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesList.get"></a>

```csharp
private ConnectQueueAdditionalEmailAddressesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddresses">ConnectQueueAdditionalEmailAddresses</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesList.property.internalValue"></a>

```csharp
public IResolvable|ConnectQueueAdditionalEmailAddresses[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddresses">ConnectQueueAdditionalEmailAddresses</a>[]

---


### ConnectQueueAdditionalEmailAddressesOutputReference <a name="ConnectQueueAdditionalEmailAddressesOutputReference" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectQueueAdditionalEmailAddressesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.resetEmailAddressArn">ResetEmailAddressArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEmailAddressArn` <a name="ResetEmailAddressArn" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.resetEmailAddressArn"></a>

```csharp
private void ResetEmailAddressArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.property.emailAddressArnInput">EmailAddressArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.property.emailAddressArn">EmailAddressArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddresses">ConnectQueueAdditionalEmailAddresses</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EmailAddressArnInput`<sup>Optional</sup> <a name="EmailAddressArnInput" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.property.emailAddressArnInput"></a>

```csharp
public string EmailAddressArnInput { get; }
```

- *Type:* string

---

##### `EmailAddressArn`<sup>Required</sup> <a name="EmailAddressArn" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.property.emailAddressArn"></a>

```csharp
public string EmailAddressArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ConnectQueueAdditionalEmailAddresses InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddresses">ConnectQueueAdditionalEmailAddresses</a>

---


### ConnectQueueOutboundCallerConfigOutputReference <a name="ConnectQueueOutboundCallerConfigOutputReference" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectQueueOutboundCallerConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.resetOutboundCallerIdName">ResetOutboundCallerIdName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.resetOutboundCallerIdNumberArn">ResetOutboundCallerIdNumberArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.resetOutboundFlowArn">ResetOutboundFlowArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOutboundCallerIdName` <a name="ResetOutboundCallerIdName" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.resetOutboundCallerIdName"></a>

```csharp
private void ResetOutboundCallerIdName()
```

##### `ResetOutboundCallerIdNumberArn` <a name="ResetOutboundCallerIdNumberArn" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.resetOutboundCallerIdNumberArn"></a>

```csharp
private void ResetOutboundCallerIdNumberArn()
```

##### `ResetOutboundFlowArn` <a name="ResetOutboundFlowArn" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.resetOutboundFlowArn"></a>

```csharp
private void ResetOutboundFlowArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.property.outboundCallerIdNameInput">OutboundCallerIdNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.property.outboundCallerIdNumberArnInput">OutboundCallerIdNumberArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.property.outboundFlowArnInput">OutboundFlowArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.property.outboundCallerIdName">OutboundCallerIdName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.property.outboundCallerIdNumberArn">OutboundCallerIdNumberArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.property.outboundFlowArn">OutboundFlowArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfig">ConnectQueueOutboundCallerConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OutboundCallerIdNameInput`<sup>Optional</sup> <a name="OutboundCallerIdNameInput" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.property.outboundCallerIdNameInput"></a>

```csharp
public string OutboundCallerIdNameInput { get; }
```

- *Type:* string

---

##### `OutboundCallerIdNumberArnInput`<sup>Optional</sup> <a name="OutboundCallerIdNumberArnInput" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.property.outboundCallerIdNumberArnInput"></a>

```csharp
public string OutboundCallerIdNumberArnInput { get; }
```

- *Type:* string

---

##### `OutboundFlowArnInput`<sup>Optional</sup> <a name="OutboundFlowArnInput" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.property.outboundFlowArnInput"></a>

```csharp
public string OutboundFlowArnInput { get; }
```

- *Type:* string

---

##### `OutboundCallerIdName`<sup>Required</sup> <a name="OutboundCallerIdName" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.property.outboundCallerIdName"></a>

```csharp
public string OutboundCallerIdName { get; }
```

- *Type:* string

---

##### `OutboundCallerIdNumberArn`<sup>Required</sup> <a name="OutboundCallerIdNumberArn" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.property.outboundCallerIdNumberArn"></a>

```csharp
public string OutboundCallerIdNumberArn { get; }
```

- *Type:* string

---

##### `OutboundFlowArn`<sup>Required</sup> <a name="OutboundFlowArn" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.property.outboundFlowArn"></a>

```csharp
public string OutboundFlowArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ConnectQueueOutboundCallerConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfig">ConnectQueueOutboundCallerConfig</a>

---


### ConnectQueueOutboundEmailConfigOutputReference <a name="ConnectQueueOutboundEmailConfigOutputReference" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectQueueOutboundEmailConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.resetOutboundEmailAddressId">ResetOutboundEmailAddressId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOutboundEmailAddressId` <a name="ResetOutboundEmailAddressId" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.resetOutboundEmailAddressId"></a>

```csharp
private void ResetOutboundEmailAddressId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.property.outboundEmailAddressIdInput">OutboundEmailAddressIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.property.outboundEmailAddressId">OutboundEmailAddressId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfig">ConnectQueueOutboundEmailConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OutboundEmailAddressIdInput`<sup>Optional</sup> <a name="OutboundEmailAddressIdInput" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.property.outboundEmailAddressIdInput"></a>

```csharp
public string OutboundEmailAddressIdInput { get; }
```

- *Type:* string

---

##### `OutboundEmailAddressId`<sup>Required</sup> <a name="OutboundEmailAddressId" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.property.outboundEmailAddressId"></a>

```csharp
public string OutboundEmailAddressId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ConnectQueueOutboundEmailConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfig">ConnectQueueOutboundEmailConfig</a>

---


### ConnectQueueTagsList <a name="ConnectQueueTagsList" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectQueueTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsList.get"></a>

```csharp
private ConnectQueueTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTags">ConnectQueueTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsList.property.internalValue"></a>

```csharp
public IResolvable|ConnectQueueTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTags">ConnectQueueTags</a>[]

---


### ConnectQueueTagsOutputReference <a name="ConnectQueueTagsOutputReference" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectQueueTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTags">ConnectQueueTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ConnectQueueTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTags">ConnectQueueTags</a>

---



