# `vpclatticeAccessLogSubscription` Submodule <a name="`vpclatticeAccessLogSubscription` Submodule" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpclatticeAccessLogSubscription <a name="VpclatticeAccessLogSubscription" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_access_log_subscription awscc_vpclattice_access_log_subscription}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new VpclatticeAccessLogSubscription(Construct Scope, string Id, VpclatticeAccessLogSubscriptionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionConfig">VpclatticeAccessLogSubscriptionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionConfig">VpclatticeAccessLogSubscriptionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.resetResourceIdentifier">ResetResourceIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.resetServiceNetworkLogType">ResetServiceNetworkLogType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.putTags"></a>

```csharp
private void PutTags(IResolvable|VpclatticeAccessLogSubscriptionTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTags">VpclatticeAccessLogSubscriptionTags</a>[]

---

##### `ResetResourceIdentifier` <a name="ResetResourceIdentifier" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.resetResourceIdentifier"></a>

```csharp
private void ResetResourceIdentifier()
```

##### `ResetServiceNetworkLogType` <a name="ResetServiceNetworkLogType" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.resetServiceNetworkLogType"></a>

```csharp
private void ResetServiceNetworkLogType()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a VpclatticeAccessLogSubscription resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

VpclatticeAccessLogSubscription.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

VpclatticeAccessLogSubscription.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

VpclatticeAccessLogSubscription.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

VpclatticeAccessLogSubscription.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a VpclatticeAccessLogSubscription resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VpclatticeAccessLogSubscription to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VpclatticeAccessLogSubscription that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_access_log_subscription#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the VpclatticeAccessLogSubscription to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.property.accessLogSubscriptionId">AccessLogSubscriptionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.property.resourceArn">ResourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.property.resourceId">ResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsList">VpclatticeAccessLogSubscriptionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.property.destinationArnInput">DestinationArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.property.resourceIdentifierInput">ResourceIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.property.serviceNetworkLogTypeInput">ServiceNetworkLogTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTags">VpclatticeAccessLogSubscriptionTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.property.destinationArn">DestinationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.property.resourceIdentifier">ResourceIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.property.serviceNetworkLogType">ServiceNetworkLogType</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AccessLogSubscriptionId`<sup>Required</sup> <a name="AccessLogSubscriptionId" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.property.accessLogSubscriptionId"></a>

```csharp
public string AccessLogSubscriptionId { get; }
```

- *Type:* string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ResourceArn`<sup>Required</sup> <a name="ResourceArn" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.property.resourceArn"></a>

```csharp
public string ResourceArn { get; }
```

- *Type:* string

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.property.resourceId"></a>

```csharp
public string ResourceId { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.property.tags"></a>

```csharp
public VpclatticeAccessLogSubscriptionTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsList">VpclatticeAccessLogSubscriptionTagsList</a>

---

##### `DestinationArnInput`<sup>Optional</sup> <a name="DestinationArnInput" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.property.destinationArnInput"></a>

```csharp
public string DestinationArnInput { get; }
```

- *Type:* string

---

##### `ResourceIdentifierInput`<sup>Optional</sup> <a name="ResourceIdentifierInput" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.property.resourceIdentifierInput"></a>

```csharp
public string ResourceIdentifierInput { get; }
```

- *Type:* string

---

##### `ServiceNetworkLogTypeInput`<sup>Optional</sup> <a name="ServiceNetworkLogTypeInput" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.property.serviceNetworkLogTypeInput"></a>

```csharp
public string ServiceNetworkLogTypeInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.property.tagsInput"></a>

```csharp
public IResolvable|VpclatticeAccessLogSubscriptionTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTags">VpclatticeAccessLogSubscriptionTags</a>[]

---

##### `DestinationArn`<sup>Required</sup> <a name="DestinationArn" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.property.destinationArn"></a>

```csharp
public string DestinationArn { get; }
```

- *Type:* string

---

##### `ResourceIdentifier`<sup>Required</sup> <a name="ResourceIdentifier" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.property.resourceIdentifier"></a>

```csharp
public string ResourceIdentifier { get; }
```

- *Type:* string

---

##### `ServiceNetworkLogType`<sup>Required</sup> <a name="ServiceNetworkLogType" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.property.serviceNetworkLogType"></a>

```csharp
public string ServiceNetworkLogType { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VpclatticeAccessLogSubscriptionConfig <a name="VpclatticeAccessLogSubscriptionConfig" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new VpclatticeAccessLogSubscriptionConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DestinationArn,
    string ResourceIdentifier = null,
    string ServiceNetworkLogType = null,
    IResolvable|VpclatticeAccessLogSubscriptionTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionConfig.property.destinationArn">DestinationArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_access_log_subscription#destination_arn VpclatticeAccessLogSubscription#destination_arn}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionConfig.property.resourceIdentifier">ResourceIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_access_log_subscription#resource_identifier VpclatticeAccessLogSubscription#resource_identifier}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionConfig.property.serviceNetworkLogType">ServiceNetworkLogType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_access_log_subscription#service_network_log_type VpclatticeAccessLogSubscription#service_network_log_type}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTags">VpclatticeAccessLogSubscriptionTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_access_log_subscription#tags VpclatticeAccessLogSubscription#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DestinationArn`<sup>Required</sup> <a name="DestinationArn" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionConfig.property.destinationArn"></a>

```csharp
public string DestinationArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_access_log_subscription#destination_arn VpclatticeAccessLogSubscription#destination_arn}.

---

##### `ResourceIdentifier`<sup>Optional</sup> <a name="ResourceIdentifier" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionConfig.property.resourceIdentifier"></a>

```csharp
public string ResourceIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_access_log_subscription#resource_identifier VpclatticeAccessLogSubscription#resource_identifier}.

---

##### `ServiceNetworkLogType`<sup>Optional</sup> <a name="ServiceNetworkLogType" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionConfig.property.serviceNetworkLogType"></a>

```csharp
public string ServiceNetworkLogType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_access_log_subscription#service_network_log_type VpclatticeAccessLogSubscription#service_network_log_type}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionConfig.property.tags"></a>

```csharp
public IResolvable|VpclatticeAccessLogSubscriptionTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTags">VpclatticeAccessLogSubscriptionTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_access_log_subscription#tags VpclatticeAccessLogSubscription#tags}.

---

### VpclatticeAccessLogSubscriptionTags <a name="VpclatticeAccessLogSubscriptionTags" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new VpclatticeAccessLogSubscriptionTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_access_log_subscription#key VpclatticeAccessLogSubscription#key}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_access_log_subscription#value VpclatticeAccessLogSubscription#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_access_log_subscription#key VpclatticeAccessLogSubscription#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_access_log_subscription#value VpclatticeAccessLogSubscription#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### VpclatticeAccessLogSubscriptionTagsList <a name="VpclatticeAccessLogSubscriptionTagsList" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new VpclatticeAccessLogSubscriptionTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsList.get"></a>

```csharp
private VpclatticeAccessLogSubscriptionTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTags">VpclatticeAccessLogSubscriptionTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsList.property.internalValue"></a>

```csharp
public IResolvable|VpclatticeAccessLogSubscriptionTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTags">VpclatticeAccessLogSubscriptionTags</a>[]

---


### VpclatticeAccessLogSubscriptionTagsOutputReference <a name="VpclatticeAccessLogSubscriptionTagsOutputReference" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new VpclatticeAccessLogSubscriptionTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTags">VpclatticeAccessLogSubscriptionTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|VpclatticeAccessLogSubscriptionTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTags">VpclatticeAccessLogSubscriptionTags</a>

---



