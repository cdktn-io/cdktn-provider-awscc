# `connectRoutingProfile` Submodule <a name="`connectRoutingProfile` Submodule" id="@cdktn/provider-awscc.connectRoutingProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConnectRoutingProfile <a name="ConnectRoutingProfile" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_routing_profile awscc_connect_routing_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectRoutingProfile(Construct Scope, string Id, ConnectRoutingProfileConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileConfig">ConnectRoutingProfileConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileConfig">ConnectRoutingProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.putManualAssignmentQueueConfigs">PutManualAssignmentQueueConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.putMediaConcurrencies">PutMediaConcurrencies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.putQueueConfigs">PutQueueConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.resetAgentAvailabilityTimer">ResetAgentAvailabilityTimer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.resetManualAssignmentQueueConfigs">ResetManualAssignmentQueueConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.resetQueueConfigs">ResetQueueConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutManualAssignmentQueueConfigs` <a name="PutManualAssignmentQueueConfigs" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.putManualAssignmentQueueConfigs"></a>

```csharp
private void PutManualAssignmentQueueConfigs(IResolvable|ConnectRoutingProfileManualAssignmentQueueConfigs[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.putManualAssignmentQueueConfigs.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigs">ConnectRoutingProfileManualAssignmentQueueConfigs</a>[]

---

##### `PutMediaConcurrencies` <a name="PutMediaConcurrencies" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.putMediaConcurrencies"></a>

```csharp
private void PutMediaConcurrencies(IResolvable|ConnectRoutingProfileMediaConcurrencies[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.putMediaConcurrencies.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrencies">ConnectRoutingProfileMediaConcurrencies</a>[]

---

##### `PutQueueConfigs` <a name="PutQueueConfigs" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.putQueueConfigs"></a>

```csharp
private void PutQueueConfigs(IResolvable|ConnectRoutingProfileQueueConfigs[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.putQueueConfigs.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigs">ConnectRoutingProfileQueueConfigs</a>[]

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.putTags"></a>

```csharp
private void PutTags(IResolvable|ConnectRoutingProfileTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTags">ConnectRoutingProfileTags</a>[]

---

##### `ResetAgentAvailabilityTimer` <a name="ResetAgentAvailabilityTimer" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.resetAgentAvailabilityTimer"></a>

```csharp
private void ResetAgentAvailabilityTimer()
```

##### `ResetManualAssignmentQueueConfigs` <a name="ResetManualAssignmentQueueConfigs" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.resetManualAssignmentQueueConfigs"></a>

```csharp
private void ResetManualAssignmentQueueConfigs()
```

##### `ResetQueueConfigs` <a name="ResetQueueConfigs" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.resetQueueConfigs"></a>

```csharp
private void ResetQueueConfigs()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ConnectRoutingProfile resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ConnectRoutingProfile.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ConnectRoutingProfile.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ConnectRoutingProfile.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ConnectRoutingProfile.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ConnectRoutingProfile resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ConnectRoutingProfile to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ConnectRoutingProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_routing_profile#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ConnectRoutingProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.manualAssignmentQueueConfigs">ManualAssignmentQueueConfigs</a></code> | <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsList">ConnectRoutingProfileManualAssignmentQueueConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.mediaConcurrencies">MediaConcurrencies</a></code> | <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList">ConnectRoutingProfileMediaConcurrenciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.queueConfigs">QueueConfigs</a></code> | <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList">ConnectRoutingProfileQueueConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.routingProfileArn">RoutingProfileArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsList">ConnectRoutingProfileTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.agentAvailabilityTimerInput">AgentAvailabilityTimerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.defaultOutboundQueueArnInput">DefaultOutboundQueueArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.instanceArnInput">InstanceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.manualAssignmentQueueConfigsInput">ManualAssignmentQueueConfigsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigs">ConnectRoutingProfileManualAssignmentQueueConfigs</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.mediaConcurrenciesInput">MediaConcurrenciesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrencies">ConnectRoutingProfileMediaConcurrencies</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.queueConfigsInput">QueueConfigsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigs">ConnectRoutingProfileQueueConfigs</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTags">ConnectRoutingProfileTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.agentAvailabilityTimer">AgentAvailabilityTimer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.defaultOutboundQueueArn">DefaultOutboundQueueArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.instanceArn">InstanceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ManualAssignmentQueueConfigs`<sup>Required</sup> <a name="ManualAssignmentQueueConfigs" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.manualAssignmentQueueConfigs"></a>

```csharp
public ConnectRoutingProfileManualAssignmentQueueConfigsList ManualAssignmentQueueConfigs { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsList">ConnectRoutingProfileManualAssignmentQueueConfigsList</a>

---

##### `MediaConcurrencies`<sup>Required</sup> <a name="MediaConcurrencies" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.mediaConcurrencies"></a>

```csharp
public ConnectRoutingProfileMediaConcurrenciesList MediaConcurrencies { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList">ConnectRoutingProfileMediaConcurrenciesList</a>

---

##### `QueueConfigs`<sup>Required</sup> <a name="QueueConfigs" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.queueConfigs"></a>

```csharp
public ConnectRoutingProfileQueueConfigsList QueueConfigs { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList">ConnectRoutingProfileQueueConfigsList</a>

---

##### `RoutingProfileArn`<sup>Required</sup> <a name="RoutingProfileArn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.routingProfileArn"></a>

```csharp
public string RoutingProfileArn { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.tags"></a>

```csharp
public ConnectRoutingProfileTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsList">ConnectRoutingProfileTagsList</a>

---

##### `AgentAvailabilityTimerInput`<sup>Optional</sup> <a name="AgentAvailabilityTimerInput" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.agentAvailabilityTimerInput"></a>

```csharp
public string AgentAvailabilityTimerInput { get; }
```

- *Type:* string

---

##### `DefaultOutboundQueueArnInput`<sup>Optional</sup> <a name="DefaultOutboundQueueArnInput" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.defaultOutboundQueueArnInput"></a>

```csharp
public string DefaultOutboundQueueArnInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `InstanceArnInput`<sup>Optional</sup> <a name="InstanceArnInput" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.instanceArnInput"></a>

```csharp
public string InstanceArnInput { get; }
```

- *Type:* string

---

##### `ManualAssignmentQueueConfigsInput`<sup>Optional</sup> <a name="ManualAssignmentQueueConfigsInput" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.manualAssignmentQueueConfigsInput"></a>

```csharp
public IResolvable|ConnectRoutingProfileManualAssignmentQueueConfigs[] ManualAssignmentQueueConfigsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigs">ConnectRoutingProfileManualAssignmentQueueConfigs</a>[]

---

##### `MediaConcurrenciesInput`<sup>Optional</sup> <a name="MediaConcurrenciesInput" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.mediaConcurrenciesInput"></a>

```csharp
public IResolvable|ConnectRoutingProfileMediaConcurrencies[] MediaConcurrenciesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrencies">ConnectRoutingProfileMediaConcurrencies</a>[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `QueueConfigsInput`<sup>Optional</sup> <a name="QueueConfigsInput" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.queueConfigsInput"></a>

```csharp
public IResolvable|ConnectRoutingProfileQueueConfigs[] QueueConfigsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigs">ConnectRoutingProfileQueueConfigs</a>[]

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.tagsInput"></a>

```csharp
public IResolvable|ConnectRoutingProfileTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTags">ConnectRoutingProfileTags</a>[]

---

##### `AgentAvailabilityTimer`<sup>Required</sup> <a name="AgentAvailabilityTimer" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.agentAvailabilityTimer"></a>

```csharp
public string AgentAvailabilityTimer { get; }
```

- *Type:* string

---

##### `DefaultOutboundQueueArn`<sup>Required</sup> <a name="DefaultOutboundQueueArn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.defaultOutboundQueueArn"></a>

```csharp
public string DefaultOutboundQueueArn { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `InstanceArn`<sup>Required</sup> <a name="InstanceArn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.instanceArn"></a>

```csharp
public string InstanceArn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ConnectRoutingProfileConfig <a name="ConnectRoutingProfileConfig" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectRoutingProfileConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DefaultOutboundQueueArn,
    string Description,
    string InstanceArn,
    IResolvable|ConnectRoutingProfileMediaConcurrencies[] MediaConcurrencies,
    string Name,
    string AgentAvailabilityTimer = null,
    IResolvable|ConnectRoutingProfileManualAssignmentQueueConfigs[] ManualAssignmentQueueConfigs = null,
    IResolvable|ConnectRoutingProfileQueueConfigs[] QueueConfigs = null,
    IResolvable|ConnectRoutingProfileTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileConfig.property.defaultOutboundQueueArn">DefaultOutboundQueueArn</a></code> | <code>string</code> | The identifier of the default outbound queue for this routing profile. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileConfig.property.description">Description</a></code> | <code>string</code> | The description of the routing profile. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileConfig.property.instanceArn">InstanceArn</a></code> | <code>string</code> | The identifier of the Amazon Connect instance. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileConfig.property.mediaConcurrencies">MediaConcurrencies</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrencies">ConnectRoutingProfileMediaConcurrencies</a>[]</code> | The channels agents can handle in the Contact Control Panel (CCP) for this routing profile. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileConfig.property.name">Name</a></code> | <code>string</code> | The name of the routing profile. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileConfig.property.agentAvailabilityTimer">AgentAvailabilityTimer</a></code> | <code>string</code> | Whether agents with this routing profile will have their routing order calculated based on longest idle time or time since their last inbound contact. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileConfig.property.manualAssignmentQueueConfigs">ManualAssignmentQueueConfigs</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigs">ConnectRoutingProfileManualAssignmentQueueConfigs</a>[]</code> | The manual assignment queues to associate with this routing profile. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileConfig.property.queueConfigs">QueueConfigs</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigs">ConnectRoutingProfileQueueConfigs</a>[]</code> | The queues to associate with this routing profile. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTags">ConnectRoutingProfileTags</a>[]</code> | An array of key-value pairs to apply to this resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DefaultOutboundQueueArn`<sup>Required</sup> <a name="DefaultOutboundQueueArn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileConfig.property.defaultOutboundQueueArn"></a>

```csharp
public string DefaultOutboundQueueArn { get; set; }
```

- *Type:* string

The identifier of the default outbound queue for this routing profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_routing_profile#default_outbound_queue_arn ConnectRoutingProfile#default_outbound_queue_arn}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description of the routing profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_routing_profile#description ConnectRoutingProfile#description}

---

##### `InstanceArn`<sup>Required</sup> <a name="InstanceArn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileConfig.property.instanceArn"></a>

```csharp
public string InstanceArn { get; set; }
```

- *Type:* string

The identifier of the Amazon Connect instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_routing_profile#instance_arn ConnectRoutingProfile#instance_arn}

---

##### `MediaConcurrencies`<sup>Required</sup> <a name="MediaConcurrencies" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileConfig.property.mediaConcurrencies"></a>

```csharp
public IResolvable|ConnectRoutingProfileMediaConcurrencies[] MediaConcurrencies { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrencies">ConnectRoutingProfileMediaConcurrencies</a>[]

The channels agents can handle in the Contact Control Panel (CCP) for this routing profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_routing_profile#media_concurrencies ConnectRoutingProfile#media_concurrencies}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the routing profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_routing_profile#name ConnectRoutingProfile#name}

---

##### `AgentAvailabilityTimer`<sup>Optional</sup> <a name="AgentAvailabilityTimer" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileConfig.property.agentAvailabilityTimer"></a>

```csharp
public string AgentAvailabilityTimer { get; set; }
```

- *Type:* string

Whether agents with this routing profile will have their routing order calculated based on longest idle time or time since their last inbound contact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_routing_profile#agent_availability_timer ConnectRoutingProfile#agent_availability_timer}

---

##### `ManualAssignmentQueueConfigs`<sup>Optional</sup> <a name="ManualAssignmentQueueConfigs" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileConfig.property.manualAssignmentQueueConfigs"></a>

```csharp
public IResolvable|ConnectRoutingProfileManualAssignmentQueueConfigs[] ManualAssignmentQueueConfigs { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigs">ConnectRoutingProfileManualAssignmentQueueConfigs</a>[]

The manual assignment queues to associate with this routing profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_routing_profile#manual_assignment_queue_configs ConnectRoutingProfile#manual_assignment_queue_configs}

---

##### `QueueConfigs`<sup>Optional</sup> <a name="QueueConfigs" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileConfig.property.queueConfigs"></a>

```csharp
public IResolvable|ConnectRoutingProfileQueueConfigs[] QueueConfigs { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigs">ConnectRoutingProfileQueueConfigs</a>[]

The queues to associate with this routing profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_routing_profile#queue_configs ConnectRoutingProfile#queue_configs}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileConfig.property.tags"></a>

```csharp
public IResolvable|ConnectRoutingProfileTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTags">ConnectRoutingProfileTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_routing_profile#tags ConnectRoutingProfile#tags}

---

### ConnectRoutingProfileManualAssignmentQueueConfigs <a name="ConnectRoutingProfileManualAssignmentQueueConfigs" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigs.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectRoutingProfileManualAssignmentQueueConfigs {
    ConnectRoutingProfileManualAssignmentQueueConfigsQueueReference QueueReference = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigs.property.queueReference">QueueReference</a></code> | <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReference">ConnectRoutingProfileManualAssignmentQueueConfigsQueueReference</a></code> | Contains the channel and queue identifier for a routing profile. |

---

##### `QueueReference`<sup>Optional</sup> <a name="QueueReference" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigs.property.queueReference"></a>

```csharp
public ConnectRoutingProfileManualAssignmentQueueConfigsQueueReference QueueReference { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReference">ConnectRoutingProfileManualAssignmentQueueConfigsQueueReference</a>

Contains the channel and queue identifier for a routing profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_routing_profile#queue_reference ConnectRoutingProfile#queue_reference}

---

### ConnectRoutingProfileManualAssignmentQueueConfigsQueueReference <a name="ConnectRoutingProfileManualAssignmentQueueConfigsQueueReference" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReference"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectRoutingProfileManualAssignmentQueueConfigsQueueReference {
    string Channel = null,
    string QueueArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReference.property.channel">Channel</a></code> | <code>string</code> | The channels that agents can handle in the Contact Control Panel (CCP). |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReference.property.queueArn">QueueArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) for the queue. |

---

##### `Channel`<sup>Optional</sup> <a name="Channel" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReference.property.channel"></a>

```csharp
public string Channel { get; set; }
```

- *Type:* string

The channels that agents can handle in the Contact Control Panel (CCP).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_routing_profile#channel ConnectRoutingProfile#channel}

---

##### `QueueArn`<sup>Optional</sup> <a name="QueueArn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReference.property.queueArn"></a>

```csharp
public string QueueArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) for the queue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_routing_profile#queue_arn ConnectRoutingProfile#queue_arn}

---

### ConnectRoutingProfileMediaConcurrencies <a name="ConnectRoutingProfileMediaConcurrencies" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrencies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrencies.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectRoutingProfileMediaConcurrencies {
    string Channel,
    double Concurrency,
    ConnectRoutingProfileMediaConcurrenciesCrossChannelBehavior CrossChannelBehavior = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrencies.property.channel">Channel</a></code> | <code>string</code> | The channels that agents can handle in the Contact Control Panel (CCP). |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrencies.property.concurrency">Concurrency</a></code> | <code>double</code> | The number of contacts an agent can have on a channel simultaneously. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrencies.property.crossChannelBehavior">CrossChannelBehavior</a></code> | <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehavior">ConnectRoutingProfileMediaConcurrenciesCrossChannelBehavior</a></code> | Defines the cross-channel routing behavior that allows an agent working on a contact in one channel to be offered a contact from a different channel. |

---

##### `Channel`<sup>Required</sup> <a name="Channel" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrencies.property.channel"></a>

```csharp
public string Channel { get; set; }
```

- *Type:* string

The channels that agents can handle in the Contact Control Panel (CCP).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_routing_profile#channel ConnectRoutingProfile#channel}

---

##### `Concurrency`<sup>Required</sup> <a name="Concurrency" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrencies.property.concurrency"></a>

```csharp
public double Concurrency { get; set; }
```

- *Type:* double

The number of contacts an agent can have on a channel simultaneously.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_routing_profile#concurrency ConnectRoutingProfile#concurrency}

---

##### `CrossChannelBehavior`<sup>Optional</sup> <a name="CrossChannelBehavior" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrencies.property.crossChannelBehavior"></a>

```csharp
public ConnectRoutingProfileMediaConcurrenciesCrossChannelBehavior CrossChannelBehavior { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehavior">ConnectRoutingProfileMediaConcurrenciesCrossChannelBehavior</a>

Defines the cross-channel routing behavior that allows an agent working on a contact in one channel to be offered a contact from a different channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_routing_profile#cross_channel_behavior ConnectRoutingProfile#cross_channel_behavior}

---

### ConnectRoutingProfileMediaConcurrenciesCrossChannelBehavior <a name="ConnectRoutingProfileMediaConcurrenciesCrossChannelBehavior" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehavior"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehavior.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectRoutingProfileMediaConcurrenciesCrossChannelBehavior {
    string BehaviorType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehavior.property.behaviorType">BehaviorType</a></code> | <code>string</code> | Specifies the other channels that can be routed to an agent handling their current channel. |

---

##### `BehaviorType`<sup>Optional</sup> <a name="BehaviorType" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehavior.property.behaviorType"></a>

```csharp
public string BehaviorType { get; set; }
```

- *Type:* string

Specifies the other channels that can be routed to an agent handling their current channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_routing_profile#behavior_type ConnectRoutingProfile#behavior_type}

---

### ConnectRoutingProfileQueueConfigs <a name="ConnectRoutingProfileQueueConfigs" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigs.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectRoutingProfileQueueConfigs {
    double Delay = null,
    double Priority = null,
    ConnectRoutingProfileQueueConfigsQueueReference QueueReference = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigs.property.delay">Delay</a></code> | <code>double</code> | The delay, in seconds, a contact should wait in the queue before they are routed to an available agent. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigs.property.priority">Priority</a></code> | <code>double</code> | The order in which contacts are to be handled for the queue. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigs.property.queueReference">QueueReference</a></code> | <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReference">ConnectRoutingProfileQueueConfigsQueueReference</a></code> | Contains the channel and queue identifier for a routing profile. |

---

##### `Delay`<sup>Optional</sup> <a name="Delay" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigs.property.delay"></a>

```csharp
public double Delay { get; set; }
```

- *Type:* double

The delay, in seconds, a contact should wait in the queue before they are routed to an available agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_routing_profile#delay ConnectRoutingProfile#delay}

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigs.property.priority"></a>

```csharp
public double Priority { get; set; }
```

- *Type:* double

The order in which contacts are to be handled for the queue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_routing_profile#priority ConnectRoutingProfile#priority}

---

##### `QueueReference`<sup>Optional</sup> <a name="QueueReference" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigs.property.queueReference"></a>

```csharp
public ConnectRoutingProfileQueueConfigsQueueReference QueueReference { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReference">ConnectRoutingProfileQueueConfigsQueueReference</a>

Contains the channel and queue identifier for a routing profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_routing_profile#queue_reference ConnectRoutingProfile#queue_reference}

---

### ConnectRoutingProfileQueueConfigsQueueReference <a name="ConnectRoutingProfileQueueConfigsQueueReference" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReference"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectRoutingProfileQueueConfigsQueueReference {
    string Channel = null,
    string QueueArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReference.property.channel">Channel</a></code> | <code>string</code> | The channels that agents can handle in the Contact Control Panel (CCP). |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReference.property.queueArn">QueueArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) for the queue. |

---

##### `Channel`<sup>Optional</sup> <a name="Channel" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReference.property.channel"></a>

```csharp
public string Channel { get; set; }
```

- *Type:* string

The channels that agents can handle in the Contact Control Panel (CCP).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_routing_profile#channel ConnectRoutingProfile#channel}

---

##### `QueueArn`<sup>Optional</sup> <a name="QueueArn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReference.property.queueArn"></a>

```csharp
public string QueueArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) for the queue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_routing_profile#queue_arn ConnectRoutingProfile#queue_arn}

---

### ConnectRoutingProfileTags <a name="ConnectRoutingProfileTags" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectRoutingProfileTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_routing_profile#key ConnectRoutingProfile#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_routing_profile#value ConnectRoutingProfile#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ConnectRoutingProfileManualAssignmentQueueConfigsList <a name="ConnectRoutingProfileManualAssignmentQueueConfigsList" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectRoutingProfileManualAssignmentQueueConfigsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsList.get"></a>

```csharp
private ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigs">ConnectRoutingProfileManualAssignmentQueueConfigs</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsList.property.internalValue"></a>

```csharp
public IResolvable|ConnectRoutingProfileManualAssignmentQueueConfigs[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigs">ConnectRoutingProfileManualAssignmentQueueConfigs</a>[]

---


### ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference <a name="ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.putQueueReference">PutQueueReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.resetQueueReference">ResetQueueReference</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutQueueReference` <a name="PutQueueReference" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.putQueueReference"></a>

```csharp
private void PutQueueReference(ConnectRoutingProfileManualAssignmentQueueConfigsQueueReference Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.putQueueReference.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReference">ConnectRoutingProfileManualAssignmentQueueConfigsQueueReference</a>

---

##### `ResetQueueReference` <a name="ResetQueueReference" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.resetQueueReference"></a>

```csharp
private void ResetQueueReference()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.property.queueReference">QueueReference</a></code> | <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference">ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.property.queueReferenceInput">QueueReferenceInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReference">ConnectRoutingProfileManualAssignmentQueueConfigsQueueReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigs">ConnectRoutingProfileManualAssignmentQueueConfigs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `QueueReference`<sup>Required</sup> <a name="QueueReference" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.property.queueReference"></a>

```csharp
public ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference QueueReference { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference">ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference</a>

---

##### `QueueReferenceInput`<sup>Optional</sup> <a name="QueueReferenceInput" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.property.queueReferenceInput"></a>

```csharp
public IResolvable|ConnectRoutingProfileManualAssignmentQueueConfigsQueueReference QueueReferenceInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReference">ConnectRoutingProfileManualAssignmentQueueConfigsQueueReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ConnectRoutingProfileManualAssignmentQueueConfigs InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigs">ConnectRoutingProfileManualAssignmentQueueConfigs</a>

---


### ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference <a name="ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.resetChannel">ResetChannel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.resetQueueArn">ResetQueueArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetChannel` <a name="ResetChannel" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.resetChannel"></a>

```csharp
private void ResetChannel()
```

##### `ResetQueueArn` <a name="ResetQueueArn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.resetQueueArn"></a>

```csharp
private void ResetQueueArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.property.channelInput">ChannelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.property.queueArnInput">QueueArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.property.channel">Channel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.property.queueArn">QueueArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReference">ConnectRoutingProfileManualAssignmentQueueConfigsQueueReference</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ChannelInput`<sup>Optional</sup> <a name="ChannelInput" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.property.channelInput"></a>

```csharp
public string ChannelInput { get; }
```

- *Type:* string

---

##### `QueueArnInput`<sup>Optional</sup> <a name="QueueArnInput" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.property.queueArnInput"></a>

```csharp
public string QueueArnInput { get; }
```

- *Type:* string

---

##### `Channel`<sup>Required</sup> <a name="Channel" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.property.channel"></a>

```csharp
public string Channel { get; }
```

- *Type:* string

---

##### `QueueArn`<sup>Required</sup> <a name="QueueArn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.property.queueArn"></a>

```csharp
public string QueueArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ConnectRoutingProfileManualAssignmentQueueConfigsQueueReference InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReference">ConnectRoutingProfileManualAssignmentQueueConfigsQueueReference</a>

---


### ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference <a name="ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.resetBehaviorType">ResetBehaviorType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBehaviorType` <a name="ResetBehaviorType" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.resetBehaviorType"></a>

```csharp
private void ResetBehaviorType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.property.behaviorTypeInput">BehaviorTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.property.behaviorType">BehaviorType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehavior">ConnectRoutingProfileMediaConcurrenciesCrossChannelBehavior</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BehaviorTypeInput`<sup>Optional</sup> <a name="BehaviorTypeInput" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.property.behaviorTypeInput"></a>

```csharp
public string BehaviorTypeInput { get; }
```

- *Type:* string

---

##### `BehaviorType`<sup>Required</sup> <a name="BehaviorType" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.property.behaviorType"></a>

```csharp
public string BehaviorType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ConnectRoutingProfileMediaConcurrenciesCrossChannelBehavior InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehavior">ConnectRoutingProfileMediaConcurrenciesCrossChannelBehavior</a>

---


### ConnectRoutingProfileMediaConcurrenciesList <a name="ConnectRoutingProfileMediaConcurrenciesList" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectRoutingProfileMediaConcurrenciesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.get"></a>

```csharp
private ConnectRoutingProfileMediaConcurrenciesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrencies">ConnectRoutingProfileMediaConcurrencies</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.property.internalValue"></a>

```csharp
public IResolvable|ConnectRoutingProfileMediaConcurrencies[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrencies">ConnectRoutingProfileMediaConcurrencies</a>[]

---


### ConnectRoutingProfileMediaConcurrenciesOutputReference <a name="ConnectRoutingProfileMediaConcurrenciesOutputReference" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectRoutingProfileMediaConcurrenciesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.putCrossChannelBehavior">PutCrossChannelBehavior</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.resetCrossChannelBehavior">ResetCrossChannelBehavior</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCrossChannelBehavior` <a name="PutCrossChannelBehavior" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.putCrossChannelBehavior"></a>

```csharp
private void PutCrossChannelBehavior(ConnectRoutingProfileMediaConcurrenciesCrossChannelBehavior Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.putCrossChannelBehavior.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehavior">ConnectRoutingProfileMediaConcurrenciesCrossChannelBehavior</a>

---

##### `ResetCrossChannelBehavior` <a name="ResetCrossChannelBehavior" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.resetCrossChannelBehavior"></a>

```csharp
private void ResetCrossChannelBehavior()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.property.crossChannelBehavior">CrossChannelBehavior</a></code> | <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference">ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.property.channelInput">ChannelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.property.concurrencyInput">ConcurrencyInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.property.crossChannelBehaviorInput">CrossChannelBehaviorInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehavior">ConnectRoutingProfileMediaConcurrenciesCrossChannelBehavior</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.property.channel">Channel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.property.concurrency">Concurrency</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrencies">ConnectRoutingProfileMediaConcurrencies</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CrossChannelBehavior`<sup>Required</sup> <a name="CrossChannelBehavior" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.property.crossChannelBehavior"></a>

```csharp
public ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference CrossChannelBehavior { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference">ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference</a>

---

##### `ChannelInput`<sup>Optional</sup> <a name="ChannelInput" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.property.channelInput"></a>

```csharp
public string ChannelInput { get; }
```

- *Type:* string

---

##### `ConcurrencyInput`<sup>Optional</sup> <a name="ConcurrencyInput" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.property.concurrencyInput"></a>

```csharp
public double ConcurrencyInput { get; }
```

- *Type:* double

---

##### `CrossChannelBehaviorInput`<sup>Optional</sup> <a name="CrossChannelBehaviorInput" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.property.crossChannelBehaviorInput"></a>

```csharp
public IResolvable|ConnectRoutingProfileMediaConcurrenciesCrossChannelBehavior CrossChannelBehaviorInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehavior">ConnectRoutingProfileMediaConcurrenciesCrossChannelBehavior</a>

---

##### `Channel`<sup>Required</sup> <a name="Channel" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.property.channel"></a>

```csharp
public string Channel { get; }
```

- *Type:* string

---

##### `Concurrency`<sup>Required</sup> <a name="Concurrency" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.property.concurrency"></a>

```csharp
public double Concurrency { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ConnectRoutingProfileMediaConcurrencies InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrencies">ConnectRoutingProfileMediaConcurrencies</a>

---


### ConnectRoutingProfileQueueConfigsList <a name="ConnectRoutingProfileQueueConfigsList" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectRoutingProfileQueueConfigsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.get"></a>

```csharp
private ConnectRoutingProfileQueueConfigsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigs">ConnectRoutingProfileQueueConfigs</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.property.internalValue"></a>

```csharp
public IResolvable|ConnectRoutingProfileQueueConfigs[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigs">ConnectRoutingProfileQueueConfigs</a>[]

---


### ConnectRoutingProfileQueueConfigsOutputReference <a name="ConnectRoutingProfileQueueConfigsOutputReference" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectRoutingProfileQueueConfigsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.putQueueReference">PutQueueReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.resetDelay">ResetDelay</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.resetPriority">ResetPriority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.resetQueueReference">ResetQueueReference</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutQueueReference` <a name="PutQueueReference" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.putQueueReference"></a>

```csharp
private void PutQueueReference(ConnectRoutingProfileQueueConfigsQueueReference Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.putQueueReference.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReference">ConnectRoutingProfileQueueConfigsQueueReference</a>

---

##### `ResetDelay` <a name="ResetDelay" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.resetDelay"></a>

```csharp
private void ResetDelay()
```

##### `ResetPriority` <a name="ResetPriority" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.resetPriority"></a>

```csharp
private void ResetPriority()
```

##### `ResetQueueReference` <a name="ResetQueueReference" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.resetQueueReference"></a>

```csharp
private void ResetQueueReference()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.queueReference">QueueReference</a></code> | <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference">ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.delayInput">DelayInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.priorityInput">PriorityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.queueReferenceInput">QueueReferenceInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReference">ConnectRoutingProfileQueueConfigsQueueReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.delay">Delay</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.priority">Priority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigs">ConnectRoutingProfileQueueConfigs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `QueueReference`<sup>Required</sup> <a name="QueueReference" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.queueReference"></a>

```csharp
public ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference QueueReference { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference">ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference</a>

---

##### `DelayInput`<sup>Optional</sup> <a name="DelayInput" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.delayInput"></a>

```csharp
public double DelayInput { get; }
```

- *Type:* double

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.priorityInput"></a>

```csharp
public double PriorityInput { get; }
```

- *Type:* double

---

##### `QueueReferenceInput`<sup>Optional</sup> <a name="QueueReferenceInput" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.queueReferenceInput"></a>

```csharp
public IResolvable|ConnectRoutingProfileQueueConfigsQueueReference QueueReferenceInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReference">ConnectRoutingProfileQueueConfigsQueueReference</a>

---

##### `Delay`<sup>Required</sup> <a name="Delay" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.delay"></a>

```csharp
public double Delay { get; }
```

- *Type:* double

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ConnectRoutingProfileQueueConfigs InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigs">ConnectRoutingProfileQueueConfigs</a>

---


### ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference <a name="ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.resetChannel">ResetChannel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.resetQueueArn">ResetQueueArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetChannel` <a name="ResetChannel" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.resetChannel"></a>

```csharp
private void ResetChannel()
```

##### `ResetQueueArn` <a name="ResetQueueArn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.resetQueueArn"></a>

```csharp
private void ResetQueueArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.property.channelInput">ChannelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.property.queueArnInput">QueueArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.property.channel">Channel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.property.queueArn">QueueArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReference">ConnectRoutingProfileQueueConfigsQueueReference</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ChannelInput`<sup>Optional</sup> <a name="ChannelInput" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.property.channelInput"></a>

```csharp
public string ChannelInput { get; }
```

- *Type:* string

---

##### `QueueArnInput`<sup>Optional</sup> <a name="QueueArnInput" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.property.queueArnInput"></a>

```csharp
public string QueueArnInput { get; }
```

- *Type:* string

---

##### `Channel`<sup>Required</sup> <a name="Channel" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.property.channel"></a>

```csharp
public string Channel { get; }
```

- *Type:* string

---

##### `QueueArn`<sup>Required</sup> <a name="QueueArn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.property.queueArn"></a>

```csharp
public string QueueArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ConnectRoutingProfileQueueConfigsQueueReference InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReference">ConnectRoutingProfileQueueConfigsQueueReference</a>

---


### ConnectRoutingProfileTagsList <a name="ConnectRoutingProfileTagsList" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectRoutingProfileTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsList.get"></a>

```csharp
private ConnectRoutingProfileTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTags">ConnectRoutingProfileTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsList.property.internalValue"></a>

```csharp
public IResolvable|ConnectRoutingProfileTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTags">ConnectRoutingProfileTags</a>[]

---


### ConnectRoutingProfileTagsOutputReference <a name="ConnectRoutingProfileTagsOutputReference" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectRoutingProfileTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTags">ConnectRoutingProfileTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ConnectRoutingProfileTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTags">ConnectRoutingProfileTags</a>

---



