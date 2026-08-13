# `connectNotification` Submodule <a name="`connectNotification` Submodule" id="@cdktn/provider-awscc.connectNotification"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConnectNotification <a name="ConnectNotification" id="@cdktn/provider-awscc.connectNotification.ConnectNotification"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_notification awscc_connect_notification}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectNotification(Construct Scope, string Id, ConnectNotificationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig">ConnectNotificationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig">ConnectNotificationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.putContent">PutContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.resetExpiresAt">ResetExpiresAt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.resetPriority">ResetPriority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.resetRecipients">ResetRecipients</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutContent` <a name="PutContent" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.putContent"></a>

```csharp
private void PutContent(ConnectNotificationContent Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.putContent.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContent">ConnectNotificationContent</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.putTags"></a>

```csharp
private void PutTags(IResolvable|ConnectNotificationTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTags">ConnectNotificationTags</a>[]

---

##### `ResetExpiresAt` <a name="ResetExpiresAt" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.resetExpiresAt"></a>

```csharp
private void ResetExpiresAt()
```

##### `ResetPriority` <a name="ResetPriority" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.resetPriority"></a>

```csharp
private void ResetPriority()
```

##### `ResetRecipients` <a name="ResetRecipients" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.resetRecipients"></a>

```csharp
private void ResetRecipients()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ConnectNotification resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ConnectNotification.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ConnectNotification.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ConnectNotification.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ConnectNotification.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ConnectNotification resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ConnectNotification to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ConnectNotification that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_notification#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ConnectNotification to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.content">Content</a></code> | <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference">ConnectNotificationContentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.notificationId">NotificationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList">ConnectNotificationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.contentInput">ContentInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContent">ConnectNotificationContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.expiresAtInput">ExpiresAtInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.instanceArnInput">InstanceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.priorityInput">PriorityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.recipientsInput">RecipientsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTags">ConnectNotificationTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.expiresAt">ExpiresAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.instanceArn">InstanceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.priority">Priority</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.recipients">Recipients</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.content"></a>

```csharp
public ConnectNotificationContentOutputReference Content { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference">ConnectNotificationContentOutputReference</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `NotificationId`<sup>Required</sup> <a name="NotificationId" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.notificationId"></a>

```csharp
public string NotificationId { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.tags"></a>

```csharp
public ConnectNotificationTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList">ConnectNotificationTagsList</a>

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.contentInput"></a>

```csharp
public IResolvable|ConnectNotificationContent ContentInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContent">ConnectNotificationContent</a>

---

##### `ExpiresAtInput`<sup>Optional</sup> <a name="ExpiresAtInput" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.expiresAtInput"></a>

```csharp
public string ExpiresAtInput { get; }
```

- *Type:* string

---

##### `InstanceArnInput`<sup>Optional</sup> <a name="InstanceArnInput" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.instanceArnInput"></a>

```csharp
public string InstanceArnInput { get; }
```

- *Type:* string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.priorityInput"></a>

```csharp
public string PriorityInput { get; }
```

- *Type:* string

---

##### `RecipientsInput`<sup>Optional</sup> <a name="RecipientsInput" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.recipientsInput"></a>

```csharp
public string[] RecipientsInput { get; }
```

- *Type:* string[]

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.tagsInput"></a>

```csharp
public IResolvable|ConnectNotificationTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTags">ConnectNotificationTags</a>[]

---

##### `ExpiresAt`<sup>Required</sup> <a name="ExpiresAt" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.expiresAt"></a>

```csharp
public string ExpiresAt { get; }
```

- *Type:* string

---

##### `InstanceArn`<sup>Required</sup> <a name="InstanceArn" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.instanceArn"></a>

```csharp
public string InstanceArn { get; }
```

- *Type:* string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.priority"></a>

```csharp
public string Priority { get; }
```

- *Type:* string

---

##### `Recipients`<sup>Required</sup> <a name="Recipients" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.recipients"></a>

```csharp
public string[] Recipients { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ConnectNotificationConfig <a name="ConnectNotificationConfig" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectNotificationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    ConnectNotificationContent Content,
    string InstanceArn,
    string ExpiresAt = null,
    string Priority = null,
    string[] Recipients = null,
    IResolvable|ConnectNotificationTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig.property.content">Content</a></code> | <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContent">ConnectNotificationContent</a></code> | The content of the notification. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig.property.instanceArn">InstanceArn</a></code> | <code>string</code> | The identifier of the Amazon Connect instance. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig.property.expiresAt">ExpiresAt</a></code> | <code>string</code> | The time a notification will expire. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig.property.priority">Priority</a></code> | <code>string</code> | The priority of the notification. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig.property.recipients">Recipients</a></code> | <code>string[]</code> | The recipients of the notification. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTags">ConnectNotificationTags</a>[]</code> | One or more tags. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig.property.content"></a>

```csharp
public ConnectNotificationContent Content { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContent">ConnectNotificationContent</a>

The content of the notification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_notification#content ConnectNotification#content}

---

##### `InstanceArn`<sup>Required</sup> <a name="InstanceArn" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig.property.instanceArn"></a>

```csharp
public string InstanceArn { get; set; }
```

- *Type:* string

The identifier of the Amazon Connect instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_notification#instance_arn ConnectNotification#instance_arn}

---

##### `ExpiresAt`<sup>Optional</sup> <a name="ExpiresAt" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig.property.expiresAt"></a>

```csharp
public string ExpiresAt { get; set; }
```

- *Type:* string

The time a notification will expire.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_notification#expires_at ConnectNotification#expires_at}

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig.property.priority"></a>

```csharp
public string Priority { get; set; }
```

- *Type:* string

The priority of the notification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_notification#priority ConnectNotification#priority}

---

##### `Recipients`<sup>Optional</sup> <a name="Recipients" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig.property.recipients"></a>

```csharp
public string[] Recipients { get; set; }
```

- *Type:* string[]

The recipients of the notification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_notification#recipients ConnectNotification#recipients}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig.property.tags"></a>

```csharp
public IResolvable|ConnectNotificationTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTags">ConnectNotificationTags</a>[]

One or more tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_notification#tags ConnectNotification#tags}

---

### ConnectNotificationContent <a name="ConnectNotificationContent" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContent.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectNotificationContent {
    string DeDe = null,
    string EnUs = null,
    string EsEs = null,
    string FrFr = null,
    string IdId = null,
    string ItIt = null,
    string JaJp = null,
    string KoKr = null,
    string PtBr = null,
    string ZhCn = null,
    string ZhTw = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContent.property.deDe">DeDe</a></code> | <code>string</code> | Localized notification content. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContent.property.enUs">EnUs</a></code> | <code>string</code> | Localized notification content. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContent.property.esEs">EsEs</a></code> | <code>string</code> | Localized notification content. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContent.property.frFr">FrFr</a></code> | <code>string</code> | Localized notification content. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContent.property.idId">IdId</a></code> | <code>string</code> | Localized notification content. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContent.property.itIt">ItIt</a></code> | <code>string</code> | Localized notification content. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContent.property.jaJp">JaJp</a></code> | <code>string</code> | Localized notification content. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContent.property.koKr">KoKr</a></code> | <code>string</code> | Localized notification content. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContent.property.ptBr">PtBr</a></code> | <code>string</code> | Localized notification content. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContent.property.zhCn">ZhCn</a></code> | <code>string</code> | Localized notification content. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContent.property.zhTw">ZhTw</a></code> | <code>string</code> | Localized notification content. |

---

##### `DeDe`<sup>Optional</sup> <a name="DeDe" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContent.property.deDe"></a>

```csharp
public string DeDe { get; set; }
```

- *Type:* string

Localized notification content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_notification#de_de ConnectNotification#de_de}

---

##### `EnUs`<sup>Optional</sup> <a name="EnUs" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContent.property.enUs"></a>

```csharp
public string EnUs { get; set; }
```

- *Type:* string

Localized notification content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_notification#en_us ConnectNotification#en_us}

---

##### `EsEs`<sup>Optional</sup> <a name="EsEs" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContent.property.esEs"></a>

```csharp
public string EsEs { get; set; }
```

- *Type:* string

Localized notification content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_notification#es_es ConnectNotification#es_es}

---

##### `FrFr`<sup>Optional</sup> <a name="FrFr" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContent.property.frFr"></a>

```csharp
public string FrFr { get; set; }
```

- *Type:* string

Localized notification content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_notification#fr_fr ConnectNotification#fr_fr}

---

##### `IdId`<sup>Optional</sup> <a name="IdId" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContent.property.idId"></a>

```csharp
public string IdId { get; set; }
```

- *Type:* string

Localized notification content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_notification#id_id ConnectNotification#id_id}

---

##### `ItIt`<sup>Optional</sup> <a name="ItIt" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContent.property.itIt"></a>

```csharp
public string ItIt { get; set; }
```

- *Type:* string

Localized notification content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_notification#it_it ConnectNotification#it_it}

---

##### `JaJp`<sup>Optional</sup> <a name="JaJp" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContent.property.jaJp"></a>

```csharp
public string JaJp { get; set; }
```

- *Type:* string

Localized notification content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_notification#ja_jp ConnectNotification#ja_jp}

---

##### `KoKr`<sup>Optional</sup> <a name="KoKr" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContent.property.koKr"></a>

```csharp
public string KoKr { get; set; }
```

- *Type:* string

Localized notification content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_notification#ko_kr ConnectNotification#ko_kr}

---

##### `PtBr`<sup>Optional</sup> <a name="PtBr" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContent.property.ptBr"></a>

```csharp
public string PtBr { get; set; }
```

- *Type:* string

Localized notification content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_notification#pt_br ConnectNotification#pt_br}

---

##### `ZhCn`<sup>Optional</sup> <a name="ZhCn" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContent.property.zhCn"></a>

```csharp
public string ZhCn { get; set; }
```

- *Type:* string

Localized notification content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_notification#zh_cn ConnectNotification#zh_cn}

---

##### `ZhTw`<sup>Optional</sup> <a name="ZhTw" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContent.property.zhTw"></a>

```csharp
public string ZhTw { get; set; }
```

- *Type:* string

Localized notification content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_notification#zh_tw ConnectNotification#zh_tw}

---

### ConnectNotificationTags <a name="ConnectNotificationTags" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectNotificationTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_notification#key ConnectNotification#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_notification#value ConnectNotification#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ConnectNotificationContentOutputReference <a name="ConnectNotificationContentOutputReference" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectNotificationContentOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.resetDeDe">ResetDeDe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.resetEnUs">ResetEnUs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.resetEsEs">ResetEsEs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.resetFrFr">ResetFrFr</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.resetIdId">ResetIdId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.resetItIt">ResetItIt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.resetJaJp">ResetJaJp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.resetKoKr">ResetKoKr</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.resetPtBr">ResetPtBr</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.resetZhCn">ResetZhCn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.resetZhTw">ResetZhTw</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDeDe` <a name="ResetDeDe" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.resetDeDe"></a>

```csharp
private void ResetDeDe()
```

##### `ResetEnUs` <a name="ResetEnUs" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.resetEnUs"></a>

```csharp
private void ResetEnUs()
```

##### `ResetEsEs` <a name="ResetEsEs" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.resetEsEs"></a>

```csharp
private void ResetEsEs()
```

##### `ResetFrFr` <a name="ResetFrFr" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.resetFrFr"></a>

```csharp
private void ResetFrFr()
```

##### `ResetIdId` <a name="ResetIdId" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.resetIdId"></a>

```csharp
private void ResetIdId()
```

##### `ResetItIt` <a name="ResetItIt" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.resetItIt"></a>

```csharp
private void ResetItIt()
```

##### `ResetJaJp` <a name="ResetJaJp" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.resetJaJp"></a>

```csharp
private void ResetJaJp()
```

##### `ResetKoKr` <a name="ResetKoKr" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.resetKoKr"></a>

```csharp
private void ResetKoKr()
```

##### `ResetPtBr` <a name="ResetPtBr" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.resetPtBr"></a>

```csharp
private void ResetPtBr()
```

##### `ResetZhCn` <a name="ResetZhCn" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.resetZhCn"></a>

```csharp
private void ResetZhCn()
```

##### `ResetZhTw` <a name="ResetZhTw" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.resetZhTw"></a>

```csharp
private void ResetZhTw()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.deDeInput">DeDeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.enUsInput">EnUsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.esEsInput">EsEsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.frFrInput">FrFrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.idIdInput">IdIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.itItInput">ItItInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.jaJpInput">JaJpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.koKrInput">KoKrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.ptBrInput">PtBrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.zhCnInput">ZhCnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.zhTwInput">ZhTwInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.deDe">DeDe</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.enUs">EnUs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.esEs">EsEs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.frFr">FrFr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.idId">IdId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.itIt">ItIt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.jaJp">JaJp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.koKr">KoKr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.ptBr">PtBr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.zhCn">ZhCn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.zhTw">ZhTw</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContent">ConnectNotificationContent</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeDeInput`<sup>Optional</sup> <a name="DeDeInput" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.deDeInput"></a>

```csharp
public string DeDeInput { get; }
```

- *Type:* string

---

##### `EnUsInput`<sup>Optional</sup> <a name="EnUsInput" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.enUsInput"></a>

```csharp
public string EnUsInput { get; }
```

- *Type:* string

---

##### `EsEsInput`<sup>Optional</sup> <a name="EsEsInput" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.esEsInput"></a>

```csharp
public string EsEsInput { get; }
```

- *Type:* string

---

##### `FrFrInput`<sup>Optional</sup> <a name="FrFrInput" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.frFrInput"></a>

```csharp
public string FrFrInput { get; }
```

- *Type:* string

---

##### `IdIdInput`<sup>Optional</sup> <a name="IdIdInput" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.idIdInput"></a>

```csharp
public string IdIdInput { get; }
```

- *Type:* string

---

##### `ItItInput`<sup>Optional</sup> <a name="ItItInput" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.itItInput"></a>

```csharp
public string ItItInput { get; }
```

- *Type:* string

---

##### `JaJpInput`<sup>Optional</sup> <a name="JaJpInput" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.jaJpInput"></a>

```csharp
public string JaJpInput { get; }
```

- *Type:* string

---

##### `KoKrInput`<sup>Optional</sup> <a name="KoKrInput" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.koKrInput"></a>

```csharp
public string KoKrInput { get; }
```

- *Type:* string

---

##### `PtBrInput`<sup>Optional</sup> <a name="PtBrInput" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.ptBrInput"></a>

```csharp
public string PtBrInput { get; }
```

- *Type:* string

---

##### `ZhCnInput`<sup>Optional</sup> <a name="ZhCnInput" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.zhCnInput"></a>

```csharp
public string ZhCnInput { get; }
```

- *Type:* string

---

##### `ZhTwInput`<sup>Optional</sup> <a name="ZhTwInput" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.zhTwInput"></a>

```csharp
public string ZhTwInput { get; }
```

- *Type:* string

---

##### `DeDe`<sup>Required</sup> <a name="DeDe" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.deDe"></a>

```csharp
public string DeDe { get; }
```

- *Type:* string

---

##### `EnUs`<sup>Required</sup> <a name="EnUs" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.enUs"></a>

```csharp
public string EnUs { get; }
```

- *Type:* string

---

##### `EsEs`<sup>Required</sup> <a name="EsEs" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.esEs"></a>

```csharp
public string EsEs { get; }
```

- *Type:* string

---

##### `FrFr`<sup>Required</sup> <a name="FrFr" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.frFr"></a>

```csharp
public string FrFr { get; }
```

- *Type:* string

---

##### `IdId`<sup>Required</sup> <a name="IdId" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.idId"></a>

```csharp
public string IdId { get; }
```

- *Type:* string

---

##### `ItIt`<sup>Required</sup> <a name="ItIt" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.itIt"></a>

```csharp
public string ItIt { get; }
```

- *Type:* string

---

##### `JaJp`<sup>Required</sup> <a name="JaJp" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.jaJp"></a>

```csharp
public string JaJp { get; }
```

- *Type:* string

---

##### `KoKr`<sup>Required</sup> <a name="KoKr" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.koKr"></a>

```csharp
public string KoKr { get; }
```

- *Type:* string

---

##### `PtBr`<sup>Required</sup> <a name="PtBr" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.ptBr"></a>

```csharp
public string PtBr { get; }
```

- *Type:* string

---

##### `ZhCn`<sup>Required</sup> <a name="ZhCn" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.zhCn"></a>

```csharp
public string ZhCn { get; }
```

- *Type:* string

---

##### `ZhTw`<sup>Required</sup> <a name="ZhTw" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.zhTw"></a>

```csharp
public string ZhTw { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ConnectNotificationContent InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContent">ConnectNotificationContent</a>

---


### ConnectNotificationTagsList <a name="ConnectNotificationTagsList" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectNotificationTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList.get"></a>

```csharp
private ConnectNotificationTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTags">ConnectNotificationTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList.property.internalValue"></a>

```csharp
public IResolvable|ConnectNotificationTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTags">ConnectNotificationTags</a>[]

---


### ConnectNotificationTagsOutputReference <a name="ConnectNotificationTagsOutputReference" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectNotificationTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTags">ConnectNotificationTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ConnectNotificationTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTags">ConnectNotificationTags</a>

---



