# `snsSubscription` Submodule <a name="`snsSubscription` Submodule" id="@cdktn/provider-awscc.snsSubscription"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SnsSubscription <a name="SnsSubscription" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sns_subscription awscc_sns_subscription}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SnsSubscription(Construct Scope, string Id, SnsSubscriptionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig">SnsSubscriptionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig">SnsSubscriptionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.resetDeliveryPolicy">ResetDeliveryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.resetEndpoint">ResetEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.resetFilterPolicy">ResetFilterPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.resetFilterPolicyScope">ResetFilterPolicyScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.resetRawMessageDelivery">ResetRawMessageDelivery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.resetRedrivePolicy">ResetRedrivePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.resetReplayPolicy">ResetReplayPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.resetSubscriptionRoleArn">ResetSubscriptionRoleArn</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetDeliveryPolicy` <a name="ResetDeliveryPolicy" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.resetDeliveryPolicy"></a>

```csharp
private void ResetDeliveryPolicy()
```

##### `ResetEndpoint` <a name="ResetEndpoint" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.resetEndpoint"></a>

```csharp
private void ResetEndpoint()
```

##### `ResetFilterPolicy` <a name="ResetFilterPolicy" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.resetFilterPolicy"></a>

```csharp
private void ResetFilterPolicy()
```

##### `ResetFilterPolicyScope` <a name="ResetFilterPolicyScope" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.resetFilterPolicyScope"></a>

```csharp
private void ResetFilterPolicyScope()
```

##### `ResetRawMessageDelivery` <a name="ResetRawMessageDelivery" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.resetRawMessageDelivery"></a>

```csharp
private void ResetRawMessageDelivery()
```

##### `ResetRedrivePolicy` <a name="ResetRedrivePolicy" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.resetRedrivePolicy"></a>

```csharp
private void ResetRedrivePolicy()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetReplayPolicy` <a name="ResetReplayPolicy" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.resetReplayPolicy"></a>

```csharp
private void ResetReplayPolicy()
```

##### `ResetSubscriptionRoleArn` <a name="ResetSubscriptionRoleArn" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.resetSubscriptionRoleArn"></a>

```csharp
private void ResetSubscriptionRoleArn()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SnsSubscription resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SnsSubscription.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SnsSubscription.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SnsSubscription.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SnsSubscription.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a SnsSubscription resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SnsSubscription to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SnsSubscription that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sns_subscription#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the SnsSubscription to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.deliveryPolicyInput">DeliveryPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.endpointInput">EndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.filterPolicyInput">FilterPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.filterPolicyScopeInput">FilterPolicyScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.protocolInput">ProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.rawMessageDeliveryInput">RawMessageDeliveryInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.redrivePolicyInput">RedrivePolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.replayPolicyInput">ReplayPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.subscriptionRoleArnInput">SubscriptionRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.topicArnInput">TopicArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.deliveryPolicy">DeliveryPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.endpoint">Endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.filterPolicy">FilterPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.filterPolicyScope">FilterPolicyScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.rawMessageDelivery">RawMessageDelivery</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.redrivePolicy">RedrivePolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.replayPolicy">ReplayPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.subscriptionRoleArn">SubscriptionRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.topicArn">TopicArn</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `DeliveryPolicyInput`<sup>Optional</sup> <a name="DeliveryPolicyInput" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.deliveryPolicyInput"></a>

```csharp
public string DeliveryPolicyInput { get; }
```

- *Type:* string

---

##### `EndpointInput`<sup>Optional</sup> <a name="EndpointInput" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.endpointInput"></a>

```csharp
public string EndpointInput { get; }
```

- *Type:* string

---

##### `FilterPolicyInput`<sup>Optional</sup> <a name="FilterPolicyInput" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.filterPolicyInput"></a>

```csharp
public string FilterPolicyInput { get; }
```

- *Type:* string

---

##### `FilterPolicyScopeInput`<sup>Optional</sup> <a name="FilterPolicyScopeInput" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.filterPolicyScopeInput"></a>

```csharp
public string FilterPolicyScopeInput { get; }
```

- *Type:* string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.protocolInput"></a>

```csharp
public string ProtocolInput { get; }
```

- *Type:* string

---

##### `RawMessageDeliveryInput`<sup>Optional</sup> <a name="RawMessageDeliveryInput" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.rawMessageDeliveryInput"></a>

```csharp
public bool|IResolvable RawMessageDeliveryInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RedrivePolicyInput`<sup>Optional</sup> <a name="RedrivePolicyInput" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.redrivePolicyInput"></a>

```csharp
public string RedrivePolicyInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `ReplayPolicyInput`<sup>Optional</sup> <a name="ReplayPolicyInput" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.replayPolicyInput"></a>

```csharp
public string ReplayPolicyInput { get; }
```

- *Type:* string

---

##### `SubscriptionRoleArnInput`<sup>Optional</sup> <a name="SubscriptionRoleArnInput" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.subscriptionRoleArnInput"></a>

```csharp
public string SubscriptionRoleArnInput { get; }
```

- *Type:* string

---

##### `TopicArnInput`<sup>Optional</sup> <a name="TopicArnInput" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.topicArnInput"></a>

```csharp
public string TopicArnInput { get; }
```

- *Type:* string

---

##### `DeliveryPolicy`<sup>Required</sup> <a name="DeliveryPolicy" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.deliveryPolicy"></a>

```csharp
public string DeliveryPolicy { get; }
```

- *Type:* string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.endpoint"></a>

```csharp
public string Endpoint { get; }
```

- *Type:* string

---

##### `FilterPolicy`<sup>Required</sup> <a name="FilterPolicy" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.filterPolicy"></a>

```csharp
public string FilterPolicy { get; }
```

- *Type:* string

---

##### `FilterPolicyScope`<sup>Required</sup> <a name="FilterPolicyScope" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.filterPolicyScope"></a>

```csharp
public string FilterPolicyScope { get; }
```

- *Type:* string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `RawMessageDelivery`<sup>Required</sup> <a name="RawMessageDelivery" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.rawMessageDelivery"></a>

```csharp
public bool|IResolvable RawMessageDelivery { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RedrivePolicy`<sup>Required</sup> <a name="RedrivePolicy" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.redrivePolicy"></a>

```csharp
public string RedrivePolicy { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `ReplayPolicy`<sup>Required</sup> <a name="ReplayPolicy" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.replayPolicy"></a>

```csharp
public string ReplayPolicy { get; }
```

- *Type:* string

---

##### `SubscriptionRoleArn`<sup>Required</sup> <a name="SubscriptionRoleArn" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.subscriptionRoleArn"></a>

```csharp
public string SubscriptionRoleArn { get; }
```

- *Type:* string

---

##### `TopicArn`<sup>Required</sup> <a name="TopicArn" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.topicArn"></a>

```csharp
public string TopicArn { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SnsSubscriptionConfig <a name="SnsSubscriptionConfig" id="@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SnsSubscriptionConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Protocol,
    string TopicArn,
    string DeliveryPolicy = null,
    string Endpoint = null,
    string FilterPolicy = null,
    string FilterPolicyScope = null,
    bool|IResolvable RawMessageDelivery = null,
    string RedrivePolicy = null,
    string Region = null,
    string ReplayPolicy = null,
    string SubscriptionRoleArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.protocol">Protocol</a></code> | <code>string</code> | The subscription's protocol. |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.topicArn">TopicArn</a></code> | <code>string</code> | The ARN of the topic to subscribe to. |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.deliveryPolicy">DeliveryPolicy</a></code> | <code>string</code> | The delivery policy JSON assigned to the subscription. |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.endpoint">Endpoint</a></code> | <code>string</code> | The subscription's endpoint. The endpoint value depends on the protocol that you specify. |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.filterPolicy">FilterPolicy</a></code> | <code>string</code> | The filter policy JSON assigned to the subscription. Enables the subscriber to filter out unwanted messages. |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.filterPolicyScope">FilterPolicyScope</a></code> | <code>string</code> | This attribute lets you choose the filtering scope by using one of the following string value types: MessageAttributes (default) and MessageBody. |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.rawMessageDelivery">RawMessageDelivery</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | When set to true, enables raw message delivery. |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.redrivePolicy">RedrivePolicy</a></code> | <code>string</code> | When specified, sends undeliverable messages to the specified Amazon SQS dead-letter queue. |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.region">Region</a></code> | <code>string</code> | For cross-region subscriptions, the region in which the topic resides.If no region is specified, AWS CloudFormation uses the region of the caller as the default. |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.replayPolicy">ReplayPolicy</a></code> | <code>string</code> | Specifies whether Amazon SNS resends the notification to the subscription when a message's attribute changes. |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.subscriptionRoleArn">SubscriptionRoleArn</a></code> | <code>string</code> | This property applies only to Amazon Data Firehose delivery stream subscriptions. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.protocol"></a>

```csharp
public string Protocol { get; set; }
```

- *Type:* string

The subscription's protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sns_subscription#protocol SnsSubscription#protocol}

---

##### `TopicArn`<sup>Required</sup> <a name="TopicArn" id="@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.topicArn"></a>

```csharp
public string TopicArn { get; set; }
```

- *Type:* string

The ARN of the topic to subscribe to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sns_subscription#topic_arn SnsSubscription#topic_arn}

---

##### `DeliveryPolicy`<sup>Optional</sup> <a name="DeliveryPolicy" id="@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.deliveryPolicy"></a>

```csharp
public string DeliveryPolicy { get; set; }
```

- *Type:* string

The delivery policy JSON assigned to the subscription.

Enables the subscriber to define the message delivery retry strategy in the case of an HTTP/S endpoint subscribed to the topic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sns_subscription#delivery_policy SnsSubscription#delivery_policy}

---

##### `Endpoint`<sup>Optional</sup> <a name="Endpoint" id="@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.endpoint"></a>

```csharp
public string Endpoint { get; set; }
```

- *Type:* string

The subscription's endpoint. The endpoint value depends on the protocol that you specify.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sns_subscription#endpoint SnsSubscription#endpoint}

---

##### `FilterPolicy`<sup>Optional</sup> <a name="FilterPolicy" id="@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.filterPolicy"></a>

```csharp
public string FilterPolicy { get; set; }
```

- *Type:* string

The filter policy JSON assigned to the subscription. Enables the subscriber to filter out unwanted messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sns_subscription#filter_policy SnsSubscription#filter_policy}

---

##### `FilterPolicyScope`<sup>Optional</sup> <a name="FilterPolicyScope" id="@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.filterPolicyScope"></a>

```csharp
public string FilterPolicyScope { get; set; }
```

- *Type:* string

This attribute lets you choose the filtering scope by using one of the following string value types: MessageAttributes (default) and MessageBody.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sns_subscription#filter_policy_scope SnsSubscription#filter_policy_scope}

---

##### `RawMessageDelivery`<sup>Optional</sup> <a name="RawMessageDelivery" id="@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.rawMessageDelivery"></a>

```csharp
public bool|IResolvable RawMessageDelivery { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

When set to true, enables raw message delivery.

Raw messages don't contain any JSON formatting and can be sent to Amazon SQS and HTTP/S endpoints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sns_subscription#raw_message_delivery SnsSubscription#raw_message_delivery}

---

##### `RedrivePolicy`<sup>Optional</sup> <a name="RedrivePolicy" id="@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.redrivePolicy"></a>

```csharp
public string RedrivePolicy { get; set; }
```

- *Type:* string

When specified, sends undeliverable messages to the specified Amazon SQS dead-letter queue.

Messages that can't be delivered due to client errors are held in the dead-letter queue for further analysis or reprocessing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sns_subscription#redrive_policy SnsSubscription#redrive_policy}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

For cross-region subscriptions, the region in which the topic resides.If no region is specified, AWS CloudFormation uses the region of the caller as the default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sns_subscription#region SnsSubscription#region}

---

##### `ReplayPolicy`<sup>Optional</sup> <a name="ReplayPolicy" id="@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.replayPolicy"></a>

```csharp
public string ReplayPolicy { get; set; }
```

- *Type:* string

Specifies whether Amazon SNS resends the notification to the subscription when a message's attribute changes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sns_subscription#replay_policy SnsSubscription#replay_policy}

---

##### `SubscriptionRoleArn`<sup>Optional</sup> <a name="SubscriptionRoleArn" id="@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.subscriptionRoleArn"></a>

```csharp
public string SubscriptionRoleArn { get; set; }
```

- *Type:* string

This property applies only to Amazon Data Firehose delivery stream subscriptions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sns_subscription#subscription_role_arn SnsSubscription#subscription_role_arn}

---



