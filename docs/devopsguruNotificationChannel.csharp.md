# `devopsguruNotificationChannel` Submodule <a name="`devopsguruNotificationChannel` Submodule" id="@cdktn/provider-awscc.devopsguruNotificationChannel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DevopsguruNotificationChannel <a name="DevopsguruNotificationChannel" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsguru_notification_channel awscc_devopsguru_notification_channel}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DevopsguruNotificationChannel(Construct Scope, string Id, DevopsguruNotificationChannelConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfig">DevopsguruNotificationChannelConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfig">DevopsguruNotificationChannelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.putConfig">PutConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConfig` <a name="PutConfig" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.putConfig"></a>

```csharp
private void PutConfig(DevopsguruNotificationChannelConfigA Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigA">DevopsguruNotificationChannelConfigA</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DevopsguruNotificationChannel resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DevopsguruNotificationChannel.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DevopsguruNotificationChannel.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DevopsguruNotificationChannel.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DevopsguruNotificationChannel.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DevopsguruNotificationChannel resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DevopsguruNotificationChannel to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DevopsguruNotificationChannel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsguru_notification_channel#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DevopsguruNotificationChannel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference">DevopsguruNotificationChannelConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.notificationChannelId">NotificationChannelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.configInput">ConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigA">DevopsguruNotificationChannelConfigA</a></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.config"></a>

```csharp
public DevopsguruNotificationChannelConfigAOutputReference Config { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference">DevopsguruNotificationChannelConfigAOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `NotificationChannelId`<sup>Required</sup> <a name="NotificationChannelId" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.notificationChannelId"></a>

```csharp
public string NotificationChannelId { get; }
```

- *Type:* string

---

##### `ConfigInput`<sup>Optional</sup> <a name="ConfigInput" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.configInput"></a>

```csharp
public IResolvable|DevopsguruNotificationChannelConfigA ConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigA">DevopsguruNotificationChannelConfigA</a>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DevopsguruNotificationChannelConfig <a name="DevopsguruNotificationChannelConfig" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DevopsguruNotificationChannelConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    DevopsguruNotificationChannelConfigA Config
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfig.property.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigA">DevopsguruNotificationChannelConfigA</a></code> | Information about notification channels you have configured with DevOps Guru. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfig.property.config"></a>

```csharp
public DevopsguruNotificationChannelConfigA Config { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigA">DevopsguruNotificationChannelConfigA</a>

Information about notification channels you have configured with DevOps Guru.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsguru_notification_channel#config DevopsguruNotificationChannel#config}

---

### DevopsguruNotificationChannelConfigA <a name="DevopsguruNotificationChannelConfigA" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigA.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DevopsguruNotificationChannelConfigA {
    DevopsguruNotificationChannelConfigFilters Filters = null,
    DevopsguruNotificationChannelConfigSns Sns = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigA.property.filters">Filters</a></code> | <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFilters">DevopsguruNotificationChannelConfigFilters</a></code> | Information about filters of a notification channel configured in DevOpsGuru to filter for insights. |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigA.property.sns">Sns</a></code> | <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSns">DevopsguruNotificationChannelConfigSns</a></code> | Information about a notification channel configured in DevOps Guru to send notifications when insights are created. |

---

##### `Filters`<sup>Optional</sup> <a name="Filters" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigA.property.filters"></a>

```csharp
public DevopsguruNotificationChannelConfigFilters Filters { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFilters">DevopsguruNotificationChannelConfigFilters</a>

Information about filters of a notification channel configured in DevOpsGuru to filter for insights.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsguru_notification_channel#filters DevopsguruNotificationChannel#filters}

---

##### `Sns`<sup>Optional</sup> <a name="Sns" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigA.property.sns"></a>

```csharp
public DevopsguruNotificationChannelConfigSns Sns { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSns">DevopsguruNotificationChannelConfigSns</a>

Information about a notification channel configured in DevOps Guru to send notifications when insights are created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsguru_notification_channel#sns DevopsguruNotificationChannel#sns}

---

### DevopsguruNotificationChannelConfigFilters <a name="DevopsguruNotificationChannelConfigFilters" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFilters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DevopsguruNotificationChannelConfigFilters {
    string[] MessageTypes = null,
    string[] Severities = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFilters.property.messageTypes">MessageTypes</a></code> | <code>string[]</code> | DevOps Guru message types to filter for. |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFilters.property.severities">Severities</a></code> | <code>string[]</code> | DevOps Guru insight severities to filter for. |

---

##### `MessageTypes`<sup>Optional</sup> <a name="MessageTypes" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFilters.property.messageTypes"></a>

```csharp
public string[] MessageTypes { get; set; }
```

- *Type:* string[]

DevOps Guru message types to filter for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsguru_notification_channel#message_types DevopsguruNotificationChannel#message_types}

---

##### `Severities`<sup>Optional</sup> <a name="Severities" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFilters.property.severities"></a>

```csharp
public string[] Severities { get; set; }
```

- *Type:* string[]

DevOps Guru insight severities to filter for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsguru_notification_channel#severities DevopsguruNotificationChannel#severities}

---

### DevopsguruNotificationChannelConfigSns <a name="DevopsguruNotificationChannelConfigSns" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSns.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DevopsguruNotificationChannelConfigSns {
    string TopicArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSns.property.topicArn">TopicArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsguru_notification_channel#topic_arn DevopsguruNotificationChannel#topic_arn}. |

---

##### `TopicArn`<sup>Optional</sup> <a name="TopicArn" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSns.property.topicArn"></a>

```csharp
public string TopicArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsguru_notification_channel#topic_arn DevopsguruNotificationChannel#topic_arn}.

---

## Classes <a name="Classes" id="Classes"></a>

### DevopsguruNotificationChannelConfigAOutputReference <a name="DevopsguruNotificationChannelConfigAOutputReference" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DevopsguruNotificationChannelConfigAOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.putFilters">PutFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.putSns">PutSns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.resetFilters">ResetFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.resetSns">ResetSns</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFilters` <a name="PutFilters" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.putFilters"></a>

```csharp
private void PutFilters(DevopsguruNotificationChannelConfigFilters Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.putFilters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFilters">DevopsguruNotificationChannelConfigFilters</a>

---

##### `PutSns` <a name="PutSns" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.putSns"></a>

```csharp
private void PutSns(DevopsguruNotificationChannelConfigSns Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.putSns.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSns">DevopsguruNotificationChannelConfigSns</a>

---

##### `ResetFilters` <a name="ResetFilters" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.resetFilters"></a>

```csharp
private void ResetFilters()
```

##### `ResetSns` <a name="ResetSns" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.resetSns"></a>

```csharp
private void ResetSns()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.property.filters">Filters</a></code> | <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference">DevopsguruNotificationChannelConfigFiltersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.property.sns">Sns</a></code> | <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference">DevopsguruNotificationChannelConfigSnsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.property.filtersInput">FiltersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFilters">DevopsguruNotificationChannelConfigFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.property.snsInput">SnsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSns">DevopsguruNotificationChannelConfigSns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigA">DevopsguruNotificationChannelConfigA</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Filters`<sup>Required</sup> <a name="Filters" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.property.filters"></a>

```csharp
public DevopsguruNotificationChannelConfigFiltersOutputReference Filters { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference">DevopsguruNotificationChannelConfigFiltersOutputReference</a>

---

##### `Sns`<sup>Required</sup> <a name="Sns" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.property.sns"></a>

```csharp
public DevopsguruNotificationChannelConfigSnsOutputReference Sns { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference">DevopsguruNotificationChannelConfigSnsOutputReference</a>

---

##### `FiltersInput`<sup>Optional</sup> <a name="FiltersInput" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.property.filtersInput"></a>

```csharp
public IResolvable|DevopsguruNotificationChannelConfigFilters FiltersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFilters">DevopsguruNotificationChannelConfigFilters</a>

---

##### `SnsInput`<sup>Optional</sup> <a name="SnsInput" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.property.snsInput"></a>

```csharp
public IResolvable|DevopsguruNotificationChannelConfigSns SnsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSns">DevopsguruNotificationChannelConfigSns</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DevopsguruNotificationChannelConfigA InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigA">DevopsguruNotificationChannelConfigA</a>

---


### DevopsguruNotificationChannelConfigFiltersOutputReference <a name="DevopsguruNotificationChannelConfigFiltersOutputReference" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DevopsguruNotificationChannelConfigFiltersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.resetMessageTypes">ResetMessageTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.resetSeverities">ResetSeverities</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMessageTypes` <a name="ResetMessageTypes" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.resetMessageTypes"></a>

```csharp
private void ResetMessageTypes()
```

##### `ResetSeverities` <a name="ResetSeverities" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.resetSeverities"></a>

```csharp
private void ResetSeverities()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.property.messageTypesInput">MessageTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.property.severitiesInput">SeveritiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.property.messageTypes">MessageTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.property.severities">Severities</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFilters">DevopsguruNotificationChannelConfigFilters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MessageTypesInput`<sup>Optional</sup> <a name="MessageTypesInput" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.property.messageTypesInput"></a>

```csharp
public string[] MessageTypesInput { get; }
```

- *Type:* string[]

---

##### `SeveritiesInput`<sup>Optional</sup> <a name="SeveritiesInput" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.property.severitiesInput"></a>

```csharp
public string[] SeveritiesInput { get; }
```

- *Type:* string[]

---

##### `MessageTypes`<sup>Required</sup> <a name="MessageTypes" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.property.messageTypes"></a>

```csharp
public string[] MessageTypes { get; }
```

- *Type:* string[]

---

##### `Severities`<sup>Required</sup> <a name="Severities" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.property.severities"></a>

```csharp
public string[] Severities { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DevopsguruNotificationChannelConfigFilters InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFilters">DevopsguruNotificationChannelConfigFilters</a>

---


### DevopsguruNotificationChannelConfigSnsOutputReference <a name="DevopsguruNotificationChannelConfigSnsOutputReference" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DevopsguruNotificationChannelConfigSnsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.resetTopicArn">ResetTopicArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTopicArn` <a name="ResetTopicArn" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.resetTopicArn"></a>

```csharp
private void ResetTopicArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.property.topicArnInput">TopicArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.property.topicArn">TopicArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSns">DevopsguruNotificationChannelConfigSns</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TopicArnInput`<sup>Optional</sup> <a name="TopicArnInput" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.property.topicArnInput"></a>

```csharp
public string TopicArnInput { get; }
```

- *Type:* string

---

##### `TopicArn`<sup>Required</sup> <a name="TopicArn" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.property.topicArn"></a>

```csharp
public string TopicArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DevopsguruNotificationChannelConfigSns InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSns">DevopsguruNotificationChannelConfigSns</a>

---



