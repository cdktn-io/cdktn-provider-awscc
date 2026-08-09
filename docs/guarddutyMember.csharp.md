# `guarddutyMember` Submodule <a name="`guarddutyMember` Submodule" id="@cdktn/provider-awscc.guarddutyMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GuarddutyMember <a name="GuarddutyMember" id="@cdktn/provider-awscc.guarddutyMember.GuarddutyMember"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_member awscc_guardduty_member}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GuarddutyMember(Construct Scope, string Id, GuarddutyMemberConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.guarddutyMember.GuarddutyMemberConfig">GuarddutyMemberConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.guarddutyMember.GuarddutyMemberConfig">GuarddutyMemberConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.resetDetectorId">ResetDetectorId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.resetDisableEmailNotification">ResetDisableEmailNotification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.resetMemberId">ResetMemberId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.resetMessage">ResetMessage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.resetStatus">ResetStatus</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetDetectorId` <a name="ResetDetectorId" id="@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.resetDetectorId"></a>

```csharp
private void ResetDetectorId()
```

##### `ResetDisableEmailNotification` <a name="ResetDisableEmailNotification" id="@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.resetDisableEmailNotification"></a>

```csharp
private void ResetDisableEmailNotification()
```

##### `ResetMemberId` <a name="ResetMemberId" id="@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.resetMemberId"></a>

```csharp
private void ResetMemberId()
```

##### `ResetMessage` <a name="ResetMessage" id="@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.resetMessage"></a>

```csharp
private void ResetMessage()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.resetStatus"></a>

```csharp
private void ResetStatus()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GuarddutyMember resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

GuarddutyMember.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

GuarddutyMember.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

GuarddutyMember.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

GuarddutyMember.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GuarddutyMember resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GuarddutyMember to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GuarddutyMember that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_member#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GuarddutyMember to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.property.detectorIdInput">DetectorIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.property.disableEmailNotificationInput">DisableEmailNotificationInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.property.emailInput">EmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.property.memberIdInput">MemberIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.property.messageInput">MessageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.property.detectorId">DetectorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.property.disableEmailNotification">DisableEmailNotification</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.property.email">Email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.property.memberId">MemberId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.property.status">Status</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `DetectorIdInput`<sup>Optional</sup> <a name="DetectorIdInput" id="@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.property.detectorIdInput"></a>

```csharp
public string DetectorIdInput { get; }
```

- *Type:* string

---

##### `DisableEmailNotificationInput`<sup>Optional</sup> <a name="DisableEmailNotificationInput" id="@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.property.disableEmailNotificationInput"></a>

```csharp
public bool|IResolvable DisableEmailNotificationInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.property.emailInput"></a>

```csharp
public string EmailInput { get; }
```

- *Type:* string

---

##### `MemberIdInput`<sup>Optional</sup> <a name="MemberIdInput" id="@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.property.memberIdInput"></a>

```csharp
public string MemberIdInput { get; }
```

- *Type:* string

---

##### `MessageInput`<sup>Optional</sup> <a name="MessageInput" id="@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.property.messageInput"></a>

```csharp
public string MessageInput { get; }
```

- *Type:* string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `DetectorId`<sup>Required</sup> <a name="DetectorId" id="@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.property.detectorId"></a>

```csharp
public string DetectorId { get; }
```

- *Type:* string

---

##### `DisableEmailNotification`<sup>Required</sup> <a name="DisableEmailNotification" id="@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.property.disableEmailNotification"></a>

```csharp
public bool|IResolvable DisableEmailNotification { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.property.email"></a>

```csharp
public string Email { get; }
```

- *Type:* string

---

##### `MemberId`<sup>Required</sup> <a name="MemberId" id="@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.property.memberId"></a>

```csharp
public string MemberId { get; }
```

- *Type:* string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.guarddutyMember.GuarddutyMember.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GuarddutyMemberConfig <a name="GuarddutyMemberConfig" id="@cdktn/provider-awscc.guarddutyMember.GuarddutyMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.guarddutyMember.GuarddutyMemberConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GuarddutyMemberConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Email,
    string DetectorId = null,
    bool|IResolvable DisableEmailNotification = null,
    string MemberId = null,
    string Message = null,
    string Status = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyMember.GuarddutyMemberConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyMember.GuarddutyMemberConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyMember.GuarddutyMemberConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyMember.GuarddutyMemberConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyMember.GuarddutyMemberConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyMember.GuarddutyMemberConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyMember.GuarddutyMemberConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyMember.GuarddutyMemberConfig.property.email">Email</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_member#email GuarddutyMember#email}. |
| <code><a href="#@cdktn/provider-awscc.guarddutyMember.GuarddutyMemberConfig.property.detectorId">DetectorId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_member#detector_id GuarddutyMember#detector_id}. |
| <code><a href="#@cdktn/provider-awscc.guarddutyMember.GuarddutyMemberConfig.property.disableEmailNotification">DisableEmailNotification</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_member#disable_email_notification GuarddutyMember#disable_email_notification}. |
| <code><a href="#@cdktn/provider-awscc.guarddutyMember.GuarddutyMemberConfig.property.memberId">MemberId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_member#member_id GuarddutyMember#member_id}. |
| <code><a href="#@cdktn/provider-awscc.guarddutyMember.GuarddutyMemberConfig.property.message">Message</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_member#message GuarddutyMember#message}. |
| <code><a href="#@cdktn/provider-awscc.guarddutyMember.GuarddutyMemberConfig.property.status">Status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_member#status GuarddutyMember#status}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.guarddutyMember.GuarddutyMemberConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.guarddutyMember.GuarddutyMemberConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.guarddutyMember.GuarddutyMemberConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.guarddutyMember.GuarddutyMemberConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.guarddutyMember.GuarddutyMemberConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.guarddutyMember.GuarddutyMemberConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.guarddutyMember.GuarddutyMemberConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktn/provider-awscc.guarddutyMember.GuarddutyMemberConfig.property.email"></a>

```csharp
public string Email { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_member#email GuarddutyMember#email}.

---

##### `DetectorId`<sup>Optional</sup> <a name="DetectorId" id="@cdktn/provider-awscc.guarddutyMember.GuarddutyMemberConfig.property.detectorId"></a>

```csharp
public string DetectorId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_member#detector_id GuarddutyMember#detector_id}.

---

##### `DisableEmailNotification`<sup>Optional</sup> <a name="DisableEmailNotification" id="@cdktn/provider-awscc.guarddutyMember.GuarddutyMemberConfig.property.disableEmailNotification"></a>

```csharp
public bool|IResolvable DisableEmailNotification { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_member#disable_email_notification GuarddutyMember#disable_email_notification}.

---

##### `MemberId`<sup>Optional</sup> <a name="MemberId" id="@cdktn/provider-awscc.guarddutyMember.GuarddutyMemberConfig.property.memberId"></a>

```csharp
public string MemberId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_member#member_id GuarddutyMember#member_id}.

---

##### `Message`<sup>Optional</sup> <a name="Message" id="@cdktn/provider-awscc.guarddutyMember.GuarddutyMemberConfig.property.message"></a>

```csharp
public string Message { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_member#message GuarddutyMember#message}.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktn/provider-awscc.guarddutyMember.GuarddutyMemberConfig.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_member#status GuarddutyMember#status}.

---



