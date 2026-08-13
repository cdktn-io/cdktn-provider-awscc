# `shieldProactiveEngagement` Submodule <a name="`shieldProactiveEngagement` Submodule" id="@cdktn/provider-awscc.shieldProactiveEngagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ShieldProactiveEngagement <a name="ShieldProactiveEngagement" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/shield_proactive_engagement awscc_shield_proactive_engagement}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ShieldProactiveEngagement(Construct Scope, string Id, ShieldProactiveEngagementConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementConfig">ShieldProactiveEngagementConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementConfig">ShieldProactiveEngagementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.putEmergencyContactList">PutEmergencyContactList</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEmergencyContactList` <a name="PutEmergencyContactList" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.putEmergencyContactList"></a>

```csharp
private void PutEmergencyContactList(IResolvable|ShieldProactiveEngagementEmergencyContactListStruct[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.putEmergencyContactList.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStruct">ShieldProactiveEngagementEmergencyContactListStruct</a>[]

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ShieldProactiveEngagement resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ShieldProactiveEngagement.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ShieldProactiveEngagement.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ShieldProactiveEngagement.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ShieldProactiveEngagement.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ShieldProactiveEngagement resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ShieldProactiveEngagement to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ShieldProactiveEngagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/shield_proactive_engagement#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ShieldProactiveEngagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.property.emergencyContactList">EmergencyContactList</a></code> | <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructList">ShieldProactiveEngagementEmergencyContactListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.property.emergencyContactListInput">EmergencyContactListInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStruct">ShieldProactiveEngagementEmergencyContactListStruct</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.property.proactiveEngagementStatusInput">ProactiveEngagementStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.property.proactiveEngagementStatus">ProactiveEngagementStatus</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `EmergencyContactList`<sup>Required</sup> <a name="EmergencyContactList" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.property.emergencyContactList"></a>

```csharp
public ShieldProactiveEngagementEmergencyContactListStructList EmergencyContactList { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructList">ShieldProactiveEngagementEmergencyContactListStructList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `EmergencyContactListInput`<sup>Optional</sup> <a name="EmergencyContactListInput" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.property.emergencyContactListInput"></a>

```csharp
public IResolvable|ShieldProactiveEngagementEmergencyContactListStruct[] EmergencyContactListInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStruct">ShieldProactiveEngagementEmergencyContactListStruct</a>[]

---

##### `ProactiveEngagementStatusInput`<sup>Optional</sup> <a name="ProactiveEngagementStatusInput" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.property.proactiveEngagementStatusInput"></a>

```csharp
public string ProactiveEngagementStatusInput { get; }
```

- *Type:* string

---

##### `ProactiveEngagementStatus`<sup>Required</sup> <a name="ProactiveEngagementStatus" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.property.proactiveEngagementStatus"></a>

```csharp
public string ProactiveEngagementStatus { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ShieldProactiveEngagementConfig <a name="ShieldProactiveEngagementConfig" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ShieldProactiveEngagementConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    IResolvable|ShieldProactiveEngagementEmergencyContactListStruct[] EmergencyContactList,
    string ProactiveEngagementStatus
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementConfig.property.emergencyContactList">EmergencyContactList</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStruct">ShieldProactiveEngagementEmergencyContactListStruct</a>[]</code> | A list of email addresses and phone numbers that the Shield Response Team (SRT) can use to contact you for escalations to the SRT and to initiate proactive customer support. |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementConfig.property.proactiveEngagementStatus">ProactiveEngagementStatus</a></code> | <code>string</code> | If `ENABLED`, the Shield Response Team (SRT) will use email and phone to notify contacts about escalations to the SRT and to initiate proactive customer support. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `EmergencyContactList`<sup>Required</sup> <a name="EmergencyContactList" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementConfig.property.emergencyContactList"></a>

```csharp
public IResolvable|ShieldProactiveEngagementEmergencyContactListStruct[] EmergencyContactList { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStruct">ShieldProactiveEngagementEmergencyContactListStruct</a>[]

A list of email addresses and phone numbers that the Shield Response Team (SRT) can use to contact you for escalations to the SRT and to initiate proactive customer support.

To enable proactive engagement, the contact list must include at least one phone number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/shield_proactive_engagement#emergency_contact_list ShieldProactiveEngagement#emergency_contact_list}

---

##### `ProactiveEngagementStatus`<sup>Required</sup> <a name="ProactiveEngagementStatus" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementConfig.property.proactiveEngagementStatus"></a>

```csharp
public string ProactiveEngagementStatus { get; set; }
```

- *Type:* string

If `ENABLED`, the Shield Response Team (SRT) will use email and phone to notify contacts about escalations to the SRT and to initiate proactive customer support.

If `DISABLED`, the SRT will not proactively notify contacts about escalations or to initiate proactive customer support.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/shield_proactive_engagement#proactive_engagement_status ShieldProactiveEngagement#proactive_engagement_status}

---

### ShieldProactiveEngagementEmergencyContactListStruct <a name="ShieldProactiveEngagementEmergencyContactListStruct" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStruct.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ShieldProactiveEngagementEmergencyContactListStruct {
    string EmailAddress,
    string ContactNotes = null,
    string PhoneNumber = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStruct.property.emailAddress">EmailAddress</a></code> | <code>string</code> | The email address for the contact. |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStruct.property.contactNotes">ContactNotes</a></code> | <code>string</code> | Additional notes regarding the contact. |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStruct.property.phoneNumber">PhoneNumber</a></code> | <code>string</code> | The phone number for the contact. |

---

##### `EmailAddress`<sup>Required</sup> <a name="EmailAddress" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStruct.property.emailAddress"></a>

```csharp
public string EmailAddress { get; set; }
```

- *Type:* string

The email address for the contact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/shield_proactive_engagement#email_address ShieldProactiveEngagement#email_address}

---

##### `ContactNotes`<sup>Optional</sup> <a name="ContactNotes" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStruct.property.contactNotes"></a>

```csharp
public string ContactNotes { get; set; }
```

- *Type:* string

Additional notes regarding the contact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/shield_proactive_engagement#contact_notes ShieldProactiveEngagement#contact_notes}

---

##### `PhoneNumber`<sup>Optional</sup> <a name="PhoneNumber" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStruct.property.phoneNumber"></a>

```csharp
public string PhoneNumber { get; set; }
```

- *Type:* string

The phone number for the contact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/shield_proactive_engagement#phone_number ShieldProactiveEngagement#phone_number}

---

## Classes <a name="Classes" id="Classes"></a>

### ShieldProactiveEngagementEmergencyContactListStructList <a name="ShieldProactiveEngagementEmergencyContactListStructList" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ShieldProactiveEngagementEmergencyContactListStructList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructList.get"></a>

```csharp
private ShieldProactiveEngagementEmergencyContactListStructOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStruct">ShieldProactiveEngagementEmergencyContactListStruct</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructList.property.internalValue"></a>

```csharp
public IResolvable|ShieldProactiveEngagementEmergencyContactListStruct[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStruct">ShieldProactiveEngagementEmergencyContactListStruct</a>[]

---


### ShieldProactiveEngagementEmergencyContactListStructOutputReference <a name="ShieldProactiveEngagementEmergencyContactListStructOutputReference" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ShieldProactiveEngagementEmergencyContactListStructOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.resetContactNotes">ResetContactNotes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.resetPhoneNumber">ResetPhoneNumber</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContactNotes` <a name="ResetContactNotes" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.resetContactNotes"></a>

```csharp
private void ResetContactNotes()
```

##### `ResetPhoneNumber` <a name="ResetPhoneNumber" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.resetPhoneNumber"></a>

```csharp
private void ResetPhoneNumber()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.property.contactNotesInput">ContactNotesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.property.emailAddressInput">EmailAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.property.phoneNumberInput">PhoneNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.property.contactNotes">ContactNotes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.property.emailAddress">EmailAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.property.phoneNumber">PhoneNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStruct">ShieldProactiveEngagementEmergencyContactListStruct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContactNotesInput`<sup>Optional</sup> <a name="ContactNotesInput" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.property.contactNotesInput"></a>

```csharp
public string ContactNotesInput { get; }
```

- *Type:* string

---

##### `EmailAddressInput`<sup>Optional</sup> <a name="EmailAddressInput" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.property.emailAddressInput"></a>

```csharp
public string EmailAddressInput { get; }
```

- *Type:* string

---

##### `PhoneNumberInput`<sup>Optional</sup> <a name="PhoneNumberInput" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.property.phoneNumberInput"></a>

```csharp
public string PhoneNumberInput { get; }
```

- *Type:* string

---

##### `ContactNotes`<sup>Required</sup> <a name="ContactNotes" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.property.contactNotes"></a>

```csharp
public string ContactNotes { get; }
```

- *Type:* string

---

##### `EmailAddress`<sup>Required</sup> <a name="EmailAddress" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.property.emailAddress"></a>

```csharp
public string EmailAddress { get; }
```

- *Type:* string

---

##### `PhoneNumber`<sup>Required</sup> <a name="PhoneNumber" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.property.phoneNumber"></a>

```csharp
public string PhoneNumber { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ShieldProactiveEngagementEmergencyContactListStruct InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStruct">ShieldProactiveEngagementEmergencyContactListStruct</a>

---



