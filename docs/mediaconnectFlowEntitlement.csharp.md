# `mediaconnectFlowEntitlement` Submodule <a name="`mediaconnectFlowEntitlement` Submodule" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MediaconnectFlowEntitlement <a name="MediaconnectFlowEntitlement" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow_entitlement awscc_mediaconnect_flow_entitlement}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectFlowEntitlement(Construct Scope, string Id, MediaconnectFlowEntitlementConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementConfig">MediaconnectFlowEntitlementConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementConfig">MediaconnectFlowEntitlementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.putEncryption">PutEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.resetDataTransferSubscriberFeePercent">ResetDataTransferSubscriberFeePercent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.resetEncryption">ResetEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.resetEntitlementStatus">ResetEntitlementStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEncryption` <a name="PutEncryption" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.putEncryption"></a>

```csharp
private void PutEncryption(MediaconnectFlowEntitlementEncryption Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.putEncryption.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryption">MediaconnectFlowEntitlementEncryption</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.putTags"></a>

```csharp
private void PutTags(IResolvable|MediaconnectFlowEntitlementTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTags">MediaconnectFlowEntitlementTags</a>[]

---

##### `ResetDataTransferSubscriberFeePercent` <a name="ResetDataTransferSubscriberFeePercent" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.resetDataTransferSubscriberFeePercent"></a>

```csharp
private void ResetDataTransferSubscriberFeePercent()
```

##### `ResetEncryption` <a name="ResetEncryption" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.resetEncryption"></a>

```csharp
private void ResetEncryption()
```

##### `ResetEntitlementStatus` <a name="ResetEntitlementStatus" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.resetEntitlementStatus"></a>

```csharp
private void ResetEntitlementStatus()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a MediaconnectFlowEntitlement resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

MediaconnectFlowEntitlement.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

MediaconnectFlowEntitlement.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

MediaconnectFlowEntitlement.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

MediaconnectFlowEntitlement.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a MediaconnectFlowEntitlement resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MediaconnectFlowEntitlement to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MediaconnectFlowEntitlement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow_entitlement#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the MediaconnectFlowEntitlement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.encryption">Encryption</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference">MediaconnectFlowEntitlementEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.entitlementArn">EntitlementArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsList">MediaconnectFlowEntitlementTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.dataTransferSubscriberFeePercentInput">DataTransferSubscriberFeePercentInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.encryptionInput">EncryptionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryption">MediaconnectFlowEntitlementEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.entitlementStatusInput">EntitlementStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.flowArnInput">FlowArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.subscribersInput">SubscribersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTags">MediaconnectFlowEntitlementTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.dataTransferSubscriberFeePercent">DataTransferSubscriberFeePercent</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.entitlementStatus">EntitlementStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.flowArn">FlowArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.subscribers">Subscribers</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Encryption`<sup>Required</sup> <a name="Encryption" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.encryption"></a>

```csharp
public MediaconnectFlowEntitlementEncryptionOutputReference Encryption { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference">MediaconnectFlowEntitlementEncryptionOutputReference</a>

---

##### `EntitlementArn`<sup>Required</sup> <a name="EntitlementArn" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.entitlementArn"></a>

```csharp
public string EntitlementArn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.tags"></a>

```csharp
public MediaconnectFlowEntitlementTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsList">MediaconnectFlowEntitlementTagsList</a>

---

##### `DataTransferSubscriberFeePercentInput`<sup>Optional</sup> <a name="DataTransferSubscriberFeePercentInput" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.dataTransferSubscriberFeePercentInput"></a>

```csharp
public double DataTransferSubscriberFeePercentInput { get; }
```

- *Type:* double

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EncryptionInput`<sup>Optional</sup> <a name="EncryptionInput" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.encryptionInput"></a>

```csharp
public IResolvable|MediaconnectFlowEntitlementEncryption EncryptionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryption">MediaconnectFlowEntitlementEncryption</a>

---

##### `EntitlementStatusInput`<sup>Optional</sup> <a name="EntitlementStatusInput" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.entitlementStatusInput"></a>

```csharp
public string EntitlementStatusInput { get; }
```

- *Type:* string

---

##### `FlowArnInput`<sup>Optional</sup> <a name="FlowArnInput" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.flowArnInput"></a>

```csharp
public string FlowArnInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SubscribersInput`<sup>Optional</sup> <a name="SubscribersInput" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.subscribersInput"></a>

```csharp
public string[] SubscribersInput { get; }
```

- *Type:* string[]

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.tagsInput"></a>

```csharp
public IResolvable|MediaconnectFlowEntitlementTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTags">MediaconnectFlowEntitlementTags</a>[]

---

##### `DataTransferSubscriberFeePercent`<sup>Required</sup> <a name="DataTransferSubscriberFeePercent" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.dataTransferSubscriberFeePercent"></a>

```csharp
public double DataTransferSubscriberFeePercent { get; }
```

- *Type:* double

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `EntitlementStatus`<sup>Required</sup> <a name="EntitlementStatus" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.entitlementStatus"></a>

```csharp
public string EntitlementStatus { get; }
```

- *Type:* string

---

##### `FlowArn`<sup>Required</sup> <a name="FlowArn" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.flowArn"></a>

```csharp
public string FlowArn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Subscribers`<sup>Required</sup> <a name="Subscribers" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.subscribers"></a>

```csharp
public string[] Subscribers { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MediaconnectFlowEntitlementConfig <a name="MediaconnectFlowEntitlementConfig" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectFlowEntitlementConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Description,
    string FlowArn,
    string Name,
    string[] Subscribers,
    double DataTransferSubscriberFeePercent = null,
    MediaconnectFlowEntitlementEncryption Encryption = null,
    string EntitlementStatus = null,
    IResolvable|MediaconnectFlowEntitlementTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementConfig.property.description">Description</a></code> | <code>string</code> | A description of the entitlement. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementConfig.property.flowArn">FlowArn</a></code> | <code>string</code> | The ARN of the flow. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementConfig.property.name">Name</a></code> | <code>string</code> | The name of the entitlement. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementConfig.property.subscribers">Subscribers</a></code> | <code>string[]</code> | The AWS account IDs that you want to share your content with. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementConfig.property.dataTransferSubscriberFeePercent">DataTransferSubscriberFeePercent</a></code> | <code>double</code> | Percentage from 0-100 of the data transfer cost to be billed to the subscriber. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementConfig.property.encryption">Encryption</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryption">MediaconnectFlowEntitlementEncryption</a></code> | The type of encryption that will be used on the output that is associated with this entitlement. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementConfig.property.entitlementStatus">EntitlementStatus</a></code> | <code>string</code> | An indication of whether the entitlement is enabled. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTags">MediaconnectFlowEntitlementTags</a>[]</code> | Key-value pairs that can be used to tag and organize this flow entitlement. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A description of the entitlement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow_entitlement#description MediaconnectFlowEntitlement#description}

---

##### `FlowArn`<sup>Required</sup> <a name="FlowArn" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementConfig.property.flowArn"></a>

```csharp
public string FlowArn { get; set; }
```

- *Type:* string

The ARN of the flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow_entitlement#flow_arn MediaconnectFlowEntitlement#flow_arn}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the entitlement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow_entitlement#name MediaconnectFlowEntitlement#name}

---

##### `Subscribers`<sup>Required</sup> <a name="Subscribers" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementConfig.property.subscribers"></a>

```csharp
public string[] Subscribers { get; set; }
```

- *Type:* string[]

The AWS account IDs that you want to share your content with.

The receiving accounts (subscribers) will be allowed to create their own flow using your content as the source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow_entitlement#subscribers MediaconnectFlowEntitlement#subscribers}

---

##### `DataTransferSubscriberFeePercent`<sup>Optional</sup> <a name="DataTransferSubscriberFeePercent" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementConfig.property.dataTransferSubscriberFeePercent"></a>

```csharp
public double DataTransferSubscriberFeePercent { get; set; }
```

- *Type:* double

Percentage from 0-100 of the data transfer cost to be billed to the subscriber.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow_entitlement#data_transfer_subscriber_fee_percent MediaconnectFlowEntitlement#data_transfer_subscriber_fee_percent}

---

##### `Encryption`<sup>Optional</sup> <a name="Encryption" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementConfig.property.encryption"></a>

```csharp
public MediaconnectFlowEntitlementEncryption Encryption { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryption">MediaconnectFlowEntitlementEncryption</a>

The type of encryption that will be used on the output that is associated with this entitlement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow_entitlement#encryption MediaconnectFlowEntitlement#encryption}

---

##### `EntitlementStatus`<sup>Optional</sup> <a name="EntitlementStatus" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementConfig.property.entitlementStatus"></a>

```csharp
public string EntitlementStatus { get; set; }
```

- *Type:* string

An indication of whether the entitlement is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow_entitlement#entitlement_status MediaconnectFlowEntitlement#entitlement_status}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementConfig.property.tags"></a>

```csharp
public IResolvable|MediaconnectFlowEntitlementTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTags">MediaconnectFlowEntitlementTags</a>[]

Key-value pairs that can be used to tag and organize this flow entitlement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow_entitlement#tags MediaconnectFlowEntitlement#tags}

---

### MediaconnectFlowEntitlementEncryption <a name="MediaconnectFlowEntitlementEncryption" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryption.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectFlowEntitlementEncryption {
    string Algorithm = null,
    string ConstantInitializationVector = null,
    string DeviceId = null,
    string KeyType = null,
    string Region = null,
    string ResourceId = null,
    string RoleArn = null,
    string SecretArn = null,
    string Url = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryption.property.algorithm">Algorithm</a></code> | <code>string</code> | The type of algorithm that is used for the encryption (such as aes128, aes192, or aes256). |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryption.property.constantInitializationVector">ConstantInitializationVector</a></code> | <code>string</code> | A 128-bit, 16-byte hex value represented by a 32-character string, to be used with the key for encrypting content. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryption.property.deviceId">DeviceId</a></code> | <code>string</code> | The value of one of the devices that you configured with your digital rights management (DRM) platform key provider. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryption.property.keyType">KeyType</a></code> | <code>string</code> | The type of key that is used for the encryption. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryption.property.region">Region</a></code> | <code>string</code> | The AWS Region that the API Gateway proxy endpoint was created in. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryption.property.resourceId">ResourceId</a></code> | <code>string</code> | An identifier for the content. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryption.property.roleArn">RoleArn</a></code> | <code>string</code> | The ARN of the role that you created during setup (when you set up AWS Elemental MediaConnect as a trusted entity). |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryption.property.secretArn">SecretArn</a></code> | <code>string</code> | The ARN of the secret that you created in AWS Secrets Manager to store the encryption key. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryption.property.url">Url</a></code> | <code>string</code> | The URL from the API Gateway proxy that you set up to talk to your key server. |

---

##### `Algorithm`<sup>Optional</sup> <a name="Algorithm" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryption.property.algorithm"></a>

```csharp
public string Algorithm { get; set; }
```

- *Type:* string

The type of algorithm that is used for the encryption (such as aes128, aes192, or aes256).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow_entitlement#algorithm MediaconnectFlowEntitlement#algorithm}

---

##### `ConstantInitializationVector`<sup>Optional</sup> <a name="ConstantInitializationVector" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryption.property.constantInitializationVector"></a>

```csharp
public string ConstantInitializationVector { get; set; }
```

- *Type:* string

A 128-bit, 16-byte hex value represented by a 32-character string, to be used with the key for encrypting content.

This parameter is not valid for static key encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow_entitlement#constant_initialization_vector MediaconnectFlowEntitlement#constant_initialization_vector}

---

##### `DeviceId`<sup>Optional</sup> <a name="DeviceId" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryption.property.deviceId"></a>

```csharp
public string DeviceId { get; set; }
```

- *Type:* string

The value of one of the devices that you configured with your digital rights management (DRM) platform key provider.

This parameter is required for SPEKE encryption and is not valid for static key encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow_entitlement#device_id MediaconnectFlowEntitlement#device_id}

---

##### `KeyType`<sup>Optional</sup> <a name="KeyType" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryption.property.keyType"></a>

```csharp
public string KeyType { get; set; }
```

- *Type:* string

The type of key that is used for the encryption.

If no keyType is provided, the service will use the default setting (static-key).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow_entitlement#key_type MediaconnectFlowEntitlement#key_type}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryption.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

The AWS Region that the API Gateway proxy endpoint was created in.

This parameter is required for SPEKE encryption and is not valid for static key encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow_entitlement#region MediaconnectFlowEntitlement#region}

---

##### `ResourceId`<sup>Optional</sup> <a name="ResourceId" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryption.property.resourceId"></a>

```csharp
public string ResourceId { get; set; }
```

- *Type:* string

An identifier for the content.

The service sends this value to the key server to identify the current endpoint. The resource ID is also known as the content ID. This parameter is required for SPEKE encryption and is not valid for static key encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow_entitlement#resource_id MediaconnectFlowEntitlement#resource_id}

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryption.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

The ARN of the role that you created during setup (when you set up AWS Elemental MediaConnect as a trusted entity).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow_entitlement#role_arn MediaconnectFlowEntitlement#role_arn}

---

##### `SecretArn`<sup>Optional</sup> <a name="SecretArn" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryption.property.secretArn"></a>

```csharp
public string SecretArn { get; set; }
```

- *Type:* string

The ARN of the secret that you created in AWS Secrets Manager to store the encryption key.

This parameter is required for static key encryption and is not valid for SPEKE encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow_entitlement#secret_arn MediaconnectFlowEntitlement#secret_arn}

---

##### `Url`<sup>Optional</sup> <a name="Url" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryption.property.url"></a>

```csharp
public string Url { get; set; }
```

- *Type:* string

The URL from the API Gateway proxy that you set up to talk to your key server.

This parameter is required for SPEKE encryption and is not valid for static key encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow_entitlement#url MediaconnectFlowEntitlement#url}

---

### MediaconnectFlowEntitlementTags <a name="MediaconnectFlowEntitlementTags" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectFlowEntitlementTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow_entitlement#key MediaconnectFlowEntitlement#key}. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow_entitlement#value MediaconnectFlowEntitlement#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow_entitlement#key MediaconnectFlowEntitlement#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow_entitlement#value MediaconnectFlowEntitlement#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### MediaconnectFlowEntitlementEncryptionOutputReference <a name="MediaconnectFlowEntitlementEncryptionOutputReference" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectFlowEntitlementEncryptionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.resetAlgorithm">ResetAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.resetConstantInitializationVector">ResetConstantInitializationVector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.resetDeviceId">ResetDeviceId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.resetKeyType">ResetKeyType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.resetResourceId">ResetResourceId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.resetRoleArn">ResetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.resetSecretArn">ResetSecretArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.resetUrl">ResetUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAlgorithm` <a name="ResetAlgorithm" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.resetAlgorithm"></a>

```csharp
private void ResetAlgorithm()
```

##### `ResetConstantInitializationVector` <a name="ResetConstantInitializationVector" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.resetConstantInitializationVector"></a>

```csharp
private void ResetConstantInitializationVector()
```

##### `ResetDeviceId` <a name="ResetDeviceId" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.resetDeviceId"></a>

```csharp
private void ResetDeviceId()
```

##### `ResetKeyType` <a name="ResetKeyType" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.resetKeyType"></a>

```csharp
private void ResetKeyType()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetResourceId` <a name="ResetResourceId" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.resetResourceId"></a>

```csharp
private void ResetResourceId()
```

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.resetRoleArn"></a>

```csharp
private void ResetRoleArn()
```

##### `ResetSecretArn` <a name="ResetSecretArn" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.resetSecretArn"></a>

```csharp
private void ResetSecretArn()
```

##### `ResetUrl` <a name="ResetUrl" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.resetUrl"></a>

```csharp
private void ResetUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.algorithmInput">AlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.constantInitializationVectorInput">ConstantInitializationVectorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.deviceIdInput">DeviceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.keyTypeInput">KeyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.resourceIdInput">ResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.secretArnInput">SecretArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.urlInput">UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.algorithm">Algorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.constantInitializationVector">ConstantInitializationVector</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.deviceId">DeviceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.keyType">KeyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.resourceId">ResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.secretArn">SecretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryption">MediaconnectFlowEntitlementEncryption</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AlgorithmInput`<sup>Optional</sup> <a name="AlgorithmInput" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.algorithmInput"></a>

```csharp
public string AlgorithmInput { get; }
```

- *Type:* string

---

##### `ConstantInitializationVectorInput`<sup>Optional</sup> <a name="ConstantInitializationVectorInput" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.constantInitializationVectorInput"></a>

```csharp
public string ConstantInitializationVectorInput { get; }
```

- *Type:* string

---

##### `DeviceIdInput`<sup>Optional</sup> <a name="DeviceIdInput" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.deviceIdInput"></a>

```csharp
public string DeviceIdInput { get; }
```

- *Type:* string

---

##### `KeyTypeInput`<sup>Optional</sup> <a name="KeyTypeInput" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.keyTypeInput"></a>

```csharp
public string KeyTypeInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `ResourceIdInput`<sup>Optional</sup> <a name="ResourceIdInput" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.resourceIdInput"></a>

```csharp
public string ResourceIdInput { get; }
```

- *Type:* string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `SecretArnInput`<sup>Optional</sup> <a name="SecretArnInput" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.secretArnInput"></a>

```csharp
public string SecretArnInput { get; }
```

- *Type:* string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.urlInput"></a>

```csharp
public string UrlInput { get; }
```

- *Type:* string

---

##### `Algorithm`<sup>Required</sup> <a name="Algorithm" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.algorithm"></a>

```csharp
public string Algorithm { get; }
```

- *Type:* string

---

##### `ConstantInitializationVector`<sup>Required</sup> <a name="ConstantInitializationVector" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.constantInitializationVector"></a>

```csharp
public string ConstantInitializationVector { get; }
```

- *Type:* string

---

##### `DeviceId`<sup>Required</sup> <a name="DeviceId" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.deviceId"></a>

```csharp
public string DeviceId { get; }
```

- *Type:* string

---

##### `KeyType`<sup>Required</sup> <a name="KeyType" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.keyType"></a>

```csharp
public string KeyType { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.resourceId"></a>

```csharp
public string ResourceId { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `SecretArn`<sup>Required</sup> <a name="SecretArn" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.secretArn"></a>

```csharp
public string SecretArn { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MediaconnectFlowEntitlementEncryption InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryption">MediaconnectFlowEntitlementEncryption</a>

---


### MediaconnectFlowEntitlementTagsList <a name="MediaconnectFlowEntitlementTagsList" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectFlowEntitlementTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsList.get"></a>

```csharp
private MediaconnectFlowEntitlementTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTags">MediaconnectFlowEntitlementTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsList.property.internalValue"></a>

```csharp
public IResolvable|MediaconnectFlowEntitlementTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTags">MediaconnectFlowEntitlementTags</a>[]

---


### MediaconnectFlowEntitlementTagsOutputReference <a name="MediaconnectFlowEntitlementTagsOutputReference" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectFlowEntitlementTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTags">MediaconnectFlowEntitlementTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MediaconnectFlowEntitlementTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTags">MediaconnectFlowEntitlementTags</a>

---



