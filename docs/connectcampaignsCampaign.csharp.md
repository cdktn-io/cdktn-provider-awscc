# `connectcampaignsCampaign` Submodule <a name="`connectcampaignsCampaign` Submodule" id="@cdktn/provider-awscc.connectcampaignsCampaign"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConnectcampaignsCampaign <a name="ConnectcampaignsCampaign" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connectcampaigns_campaign awscc_connectcampaigns_campaign}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectcampaignsCampaign(Construct Scope, string Id, ConnectcampaignsCampaignConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignConfig">ConnectcampaignsCampaignConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignConfig">ConnectcampaignsCampaignConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.putDialerConfig">PutDialerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.putOutboundCallConfig">PutOutboundCallConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDialerConfig` <a name="PutDialerConfig" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.putDialerConfig"></a>

```csharp
private void PutDialerConfig(ConnectcampaignsCampaignDialerConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.putDialerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfig">ConnectcampaignsCampaignDialerConfig</a>

---

##### `PutOutboundCallConfig` <a name="PutOutboundCallConfig" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.putOutboundCallConfig"></a>

```csharp
private void PutOutboundCallConfig(ConnectcampaignsCampaignOutboundCallConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.putOutboundCallConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfig">ConnectcampaignsCampaignOutboundCallConfig</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.putTags"></a>

```csharp
private void PutTags(IResolvable|ConnectcampaignsCampaignTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTags">ConnectcampaignsCampaignTags</a>[]

---

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ConnectcampaignsCampaign resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ConnectcampaignsCampaign.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ConnectcampaignsCampaign.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ConnectcampaignsCampaign.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ConnectcampaignsCampaign.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ConnectcampaignsCampaign resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ConnectcampaignsCampaign to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ConnectcampaignsCampaign that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connectcampaigns_campaign#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ConnectcampaignsCampaign to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.dialerConfig">DialerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference">ConnectcampaignsCampaignDialerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.outboundCallConfig">OutboundCallConfig</a></code> | <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference">ConnectcampaignsCampaignOutboundCallConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsList">ConnectcampaignsCampaignTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.connectInstanceArnInput">ConnectInstanceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.dialerConfigInput">DialerConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfig">ConnectcampaignsCampaignDialerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.outboundCallConfigInput">OutboundCallConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfig">ConnectcampaignsCampaignOutboundCallConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTags">ConnectcampaignsCampaignTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.connectInstanceArn">ConnectInstanceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `DialerConfig`<sup>Required</sup> <a name="DialerConfig" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.dialerConfig"></a>

```csharp
public ConnectcampaignsCampaignDialerConfigOutputReference DialerConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference">ConnectcampaignsCampaignDialerConfigOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `OutboundCallConfig`<sup>Required</sup> <a name="OutboundCallConfig" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.outboundCallConfig"></a>

```csharp
public ConnectcampaignsCampaignOutboundCallConfigOutputReference OutboundCallConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference">ConnectcampaignsCampaignOutboundCallConfigOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.tags"></a>

```csharp
public ConnectcampaignsCampaignTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsList">ConnectcampaignsCampaignTagsList</a>

---

##### `ConnectInstanceArnInput`<sup>Optional</sup> <a name="ConnectInstanceArnInput" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.connectInstanceArnInput"></a>

```csharp
public string ConnectInstanceArnInput { get; }
```

- *Type:* string

---

##### `DialerConfigInput`<sup>Optional</sup> <a name="DialerConfigInput" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.dialerConfigInput"></a>

```csharp
public IResolvable|ConnectcampaignsCampaignDialerConfig DialerConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfig">ConnectcampaignsCampaignDialerConfig</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OutboundCallConfigInput`<sup>Optional</sup> <a name="OutboundCallConfigInput" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.outboundCallConfigInput"></a>

```csharp
public IResolvable|ConnectcampaignsCampaignOutboundCallConfig OutboundCallConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfig">ConnectcampaignsCampaignOutboundCallConfig</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.tagsInput"></a>

```csharp
public IResolvable|ConnectcampaignsCampaignTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTags">ConnectcampaignsCampaignTags</a>[]

---

##### `ConnectInstanceArn`<sup>Required</sup> <a name="ConnectInstanceArn" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.connectInstanceArn"></a>

```csharp
public string ConnectInstanceArn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ConnectcampaignsCampaignConfig <a name="ConnectcampaignsCampaignConfig" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectcampaignsCampaignConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ConnectInstanceArn,
    ConnectcampaignsCampaignDialerConfig DialerConfig,
    string Name,
    ConnectcampaignsCampaignOutboundCallConfig OutboundCallConfig,
    IResolvable|ConnectcampaignsCampaignTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignConfig.property.connectInstanceArn">ConnectInstanceArn</a></code> | <code>string</code> | Amazon Connect Instance Arn. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignConfig.property.dialerConfig">DialerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfig">ConnectcampaignsCampaignDialerConfig</a></code> | The possible types of dialer config parameters. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignConfig.property.name">Name</a></code> | <code>string</code> | Amazon Connect Campaign Name. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignConfig.property.outboundCallConfig">OutboundCallConfig</a></code> | <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfig">ConnectcampaignsCampaignOutboundCallConfig</a></code> | The configuration used for outbound calls. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTags">ConnectcampaignsCampaignTags</a>[]</code> | One or more tags. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ConnectInstanceArn`<sup>Required</sup> <a name="ConnectInstanceArn" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignConfig.property.connectInstanceArn"></a>

```csharp
public string ConnectInstanceArn { get; set; }
```

- *Type:* string

Amazon Connect Instance Arn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connectcampaigns_campaign#connect_instance_arn ConnectcampaignsCampaign#connect_instance_arn}

---

##### `DialerConfig`<sup>Required</sup> <a name="DialerConfig" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignConfig.property.dialerConfig"></a>

```csharp
public ConnectcampaignsCampaignDialerConfig DialerConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfig">ConnectcampaignsCampaignDialerConfig</a>

The possible types of dialer config parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connectcampaigns_campaign#dialer_config ConnectcampaignsCampaign#dialer_config}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Amazon Connect Campaign Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connectcampaigns_campaign#name ConnectcampaignsCampaign#name}

---

##### `OutboundCallConfig`<sup>Required</sup> <a name="OutboundCallConfig" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignConfig.property.outboundCallConfig"></a>

```csharp
public ConnectcampaignsCampaignOutboundCallConfig OutboundCallConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfig">ConnectcampaignsCampaignOutboundCallConfig</a>

The configuration used for outbound calls.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connectcampaigns_campaign#outbound_call_config ConnectcampaignsCampaign#outbound_call_config}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignConfig.property.tags"></a>

```csharp
public IResolvable|ConnectcampaignsCampaignTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTags">ConnectcampaignsCampaignTags</a>[]

One or more tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connectcampaigns_campaign#tags ConnectcampaignsCampaign#tags}

---

### ConnectcampaignsCampaignDialerConfig <a name="ConnectcampaignsCampaignDialerConfig" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectcampaignsCampaignDialerConfig {
    ConnectcampaignsCampaignDialerConfigAgentlessDialerConfig AgentlessDialerConfig = null,
    ConnectcampaignsCampaignDialerConfigPredictiveDialerConfig PredictiveDialerConfig = null,
    ConnectcampaignsCampaignDialerConfigProgressiveDialerConfig ProgressiveDialerConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfig.property.agentlessDialerConfig">AgentlessDialerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfig">ConnectcampaignsCampaignDialerConfigAgentlessDialerConfig</a></code> | Agentless Dialer config. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfig.property.predictiveDialerConfig">PredictiveDialerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfig">ConnectcampaignsCampaignDialerConfigPredictiveDialerConfig</a></code> | Predictive Dialer config. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfig.property.progressiveDialerConfig">ProgressiveDialerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfig">ConnectcampaignsCampaignDialerConfigProgressiveDialerConfig</a></code> | Progressive Dialer config. |

---

##### `AgentlessDialerConfig`<sup>Optional</sup> <a name="AgentlessDialerConfig" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfig.property.agentlessDialerConfig"></a>

```csharp
public ConnectcampaignsCampaignDialerConfigAgentlessDialerConfig AgentlessDialerConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfig">ConnectcampaignsCampaignDialerConfigAgentlessDialerConfig</a>

Agentless Dialer config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connectcampaigns_campaign#agentless_dialer_config ConnectcampaignsCampaign#agentless_dialer_config}

---

##### `PredictiveDialerConfig`<sup>Optional</sup> <a name="PredictiveDialerConfig" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfig.property.predictiveDialerConfig"></a>

```csharp
public ConnectcampaignsCampaignDialerConfigPredictiveDialerConfig PredictiveDialerConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfig">ConnectcampaignsCampaignDialerConfigPredictiveDialerConfig</a>

Predictive Dialer config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connectcampaigns_campaign#predictive_dialer_config ConnectcampaignsCampaign#predictive_dialer_config}

---

##### `ProgressiveDialerConfig`<sup>Optional</sup> <a name="ProgressiveDialerConfig" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfig.property.progressiveDialerConfig"></a>

```csharp
public ConnectcampaignsCampaignDialerConfigProgressiveDialerConfig ProgressiveDialerConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfig">ConnectcampaignsCampaignDialerConfigProgressiveDialerConfig</a>

Progressive Dialer config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connectcampaigns_campaign#progressive_dialer_config ConnectcampaignsCampaign#progressive_dialer_config}

---

### ConnectcampaignsCampaignDialerConfigAgentlessDialerConfig <a name="ConnectcampaignsCampaignDialerConfigAgentlessDialerConfig" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectcampaignsCampaignDialerConfigAgentlessDialerConfig {
    double DialingCapacity = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfig.property.dialingCapacity">DialingCapacity</a></code> | <code>double</code> | Allocates dialing capacity for this campaign between multiple active campaigns. |

---

##### `DialingCapacity`<sup>Optional</sup> <a name="DialingCapacity" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfig.property.dialingCapacity"></a>

```csharp
public double DialingCapacity { get; set; }
```

- *Type:* double

Allocates dialing capacity for this campaign between multiple active campaigns.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connectcampaigns_campaign#dialing_capacity ConnectcampaignsCampaign#dialing_capacity}

---

### ConnectcampaignsCampaignDialerConfigPredictiveDialerConfig <a name="ConnectcampaignsCampaignDialerConfigPredictiveDialerConfig" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectcampaignsCampaignDialerConfigPredictiveDialerConfig {
    double BandwidthAllocation = null,
    double DialingCapacity = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfig.property.bandwidthAllocation">BandwidthAllocation</a></code> | <code>double</code> | The bandwidth allocation of a queue resource. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfig.property.dialingCapacity">DialingCapacity</a></code> | <code>double</code> | Allocates dialing capacity for this campaign between multiple active campaigns. |

---

##### `BandwidthAllocation`<sup>Optional</sup> <a name="BandwidthAllocation" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfig.property.bandwidthAllocation"></a>

```csharp
public double BandwidthAllocation { get; set; }
```

- *Type:* double

The bandwidth allocation of a queue resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connectcampaigns_campaign#bandwidth_allocation ConnectcampaignsCampaign#bandwidth_allocation}

---

##### `DialingCapacity`<sup>Optional</sup> <a name="DialingCapacity" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfig.property.dialingCapacity"></a>

```csharp
public double DialingCapacity { get; set; }
```

- *Type:* double

Allocates dialing capacity for this campaign between multiple active campaigns.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connectcampaigns_campaign#dialing_capacity ConnectcampaignsCampaign#dialing_capacity}

---

### ConnectcampaignsCampaignDialerConfigProgressiveDialerConfig <a name="ConnectcampaignsCampaignDialerConfigProgressiveDialerConfig" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectcampaignsCampaignDialerConfigProgressiveDialerConfig {
    double BandwidthAllocation = null,
    double DialingCapacity = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfig.property.bandwidthAllocation">BandwidthAllocation</a></code> | <code>double</code> | The bandwidth allocation of a queue resource. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfig.property.dialingCapacity">DialingCapacity</a></code> | <code>double</code> | Allocates dialing capacity for this campaign between multiple active campaigns. |

---

##### `BandwidthAllocation`<sup>Optional</sup> <a name="BandwidthAllocation" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfig.property.bandwidthAllocation"></a>

```csharp
public double BandwidthAllocation { get; set; }
```

- *Type:* double

The bandwidth allocation of a queue resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connectcampaigns_campaign#bandwidth_allocation ConnectcampaignsCampaign#bandwidth_allocation}

---

##### `DialingCapacity`<sup>Optional</sup> <a name="DialingCapacity" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfig.property.dialingCapacity"></a>

```csharp
public double DialingCapacity { get; set; }
```

- *Type:* double

Allocates dialing capacity for this campaign between multiple active campaigns.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connectcampaigns_campaign#dialing_capacity ConnectcampaignsCampaign#dialing_capacity}

---

### ConnectcampaignsCampaignOutboundCallConfig <a name="ConnectcampaignsCampaignOutboundCallConfig" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectcampaignsCampaignOutboundCallConfig {
    string ConnectContactFlowArn,
    ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfig AnswerMachineDetectionConfig = null,
    string ConnectQueueArn = null,
    string ConnectSourcePhoneNumber = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfig.property.connectContactFlowArn">ConnectContactFlowArn</a></code> | <code>string</code> | The identifier of the contact flow for the outbound call. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfig.property.answerMachineDetectionConfig">AnswerMachineDetectionConfig</a></code> | <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfig">ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfig</a></code> | The configuration used for answering machine detection during outbound calls. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfig.property.connectQueueArn">ConnectQueueArn</a></code> | <code>string</code> | The queue for the call. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfig.property.connectSourcePhoneNumber">ConnectSourcePhoneNumber</a></code> | <code>string</code> | The phone number associated with the Amazon Connect instance, in E.164 format. If you do not specify a source phone number, you must specify a queue. |

---

##### `ConnectContactFlowArn`<sup>Required</sup> <a name="ConnectContactFlowArn" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfig.property.connectContactFlowArn"></a>

```csharp
public string ConnectContactFlowArn { get; set; }
```

- *Type:* string

The identifier of the contact flow for the outbound call.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connectcampaigns_campaign#connect_contact_flow_arn ConnectcampaignsCampaign#connect_contact_flow_arn}

---

##### `AnswerMachineDetectionConfig`<sup>Optional</sup> <a name="AnswerMachineDetectionConfig" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfig.property.answerMachineDetectionConfig"></a>

```csharp
public ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfig AnswerMachineDetectionConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfig">ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfig</a>

The configuration used for answering machine detection during outbound calls.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connectcampaigns_campaign#answer_machine_detection_config ConnectcampaignsCampaign#answer_machine_detection_config}

---

##### `ConnectQueueArn`<sup>Optional</sup> <a name="ConnectQueueArn" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfig.property.connectQueueArn"></a>

```csharp
public string ConnectQueueArn { get; set; }
```

- *Type:* string

The queue for the call.

If you specify a queue, the phone displayed for caller ID is the phone number specified in the queue. If you do not specify a queue, the queue defined in the contact flow is used. If you do not specify a queue, you must specify a source phone number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connectcampaigns_campaign#connect_queue_arn ConnectcampaignsCampaign#connect_queue_arn}

---

##### `ConnectSourcePhoneNumber`<sup>Optional</sup> <a name="ConnectSourcePhoneNumber" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfig.property.connectSourcePhoneNumber"></a>

```csharp
public string ConnectSourcePhoneNumber { get; set; }
```

- *Type:* string

The phone number associated with the Amazon Connect instance, in E.164 format. If you do not specify a source phone number, you must specify a queue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connectcampaigns_campaign#connect_source_phone_number ConnectcampaignsCampaign#connect_source_phone_number}

---

### ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfig <a name="ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfig" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfig {
    bool|IResolvable AwaitAnswerMachinePrompt = null,
    bool|IResolvable EnableAnswerMachineDetection = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfig.property.awaitAnswerMachinePrompt">AwaitAnswerMachinePrompt</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Enables detection of prompts (e.g., beep after after a voicemail greeting). |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfig.property.enableAnswerMachineDetection">EnableAnswerMachineDetection</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Flag to decided whether outbound calls should have answering machine detection enabled or not. |

---

##### `AwaitAnswerMachinePrompt`<sup>Optional</sup> <a name="AwaitAnswerMachinePrompt" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfig.property.awaitAnswerMachinePrompt"></a>

```csharp
public bool|IResolvable AwaitAnswerMachinePrompt { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Enables detection of prompts (e.g., beep after after a voicemail greeting).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connectcampaigns_campaign#await_answer_machine_prompt ConnectcampaignsCampaign#await_answer_machine_prompt}

---

##### `EnableAnswerMachineDetection`<sup>Optional</sup> <a name="EnableAnswerMachineDetection" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfig.property.enableAnswerMachineDetection"></a>

```csharp
public bool|IResolvable EnableAnswerMachineDetection { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Flag to decided whether outbound calls should have answering machine detection enabled or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connectcampaigns_campaign#enable_answer_machine_detection ConnectcampaignsCampaign#enable_answer_machine_detection}

---

### ConnectcampaignsCampaignTags <a name="ConnectcampaignsCampaignTags" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectcampaignsCampaignTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. You can specify a value that's 1 to 256 characters in length. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connectcampaigns_campaign#key ConnectcampaignsCampaign#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag. You can specify a value that's 1 to 256 characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connectcampaigns_campaign#value ConnectcampaignsCampaign#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference <a name="ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.resetDialingCapacity">ResetDialingCapacity</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDialingCapacity` <a name="ResetDialingCapacity" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.resetDialingCapacity"></a>

```csharp
private void ResetDialingCapacity()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.property.dialingCapacityInput">DialingCapacityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.property.dialingCapacity">DialingCapacity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfig">ConnectcampaignsCampaignDialerConfigAgentlessDialerConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DialingCapacityInput`<sup>Optional</sup> <a name="DialingCapacityInput" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.property.dialingCapacityInput"></a>

```csharp
public double DialingCapacityInput { get; }
```

- *Type:* double

---

##### `DialingCapacity`<sup>Required</sup> <a name="DialingCapacity" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.property.dialingCapacity"></a>

```csharp
public double DialingCapacity { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ConnectcampaignsCampaignDialerConfigAgentlessDialerConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfig">ConnectcampaignsCampaignDialerConfigAgentlessDialerConfig</a>

---


### ConnectcampaignsCampaignDialerConfigOutputReference <a name="ConnectcampaignsCampaignDialerConfigOutputReference" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectcampaignsCampaignDialerConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.putAgentlessDialerConfig">PutAgentlessDialerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.putPredictiveDialerConfig">PutPredictiveDialerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.putProgressiveDialerConfig">PutProgressiveDialerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.resetAgentlessDialerConfig">ResetAgentlessDialerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.resetPredictiveDialerConfig">ResetPredictiveDialerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.resetProgressiveDialerConfig">ResetProgressiveDialerConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAgentlessDialerConfig` <a name="PutAgentlessDialerConfig" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.putAgentlessDialerConfig"></a>

```csharp
private void PutAgentlessDialerConfig(ConnectcampaignsCampaignDialerConfigAgentlessDialerConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.putAgentlessDialerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfig">ConnectcampaignsCampaignDialerConfigAgentlessDialerConfig</a>

---

##### `PutPredictiveDialerConfig` <a name="PutPredictiveDialerConfig" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.putPredictiveDialerConfig"></a>

```csharp
private void PutPredictiveDialerConfig(ConnectcampaignsCampaignDialerConfigPredictiveDialerConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.putPredictiveDialerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfig">ConnectcampaignsCampaignDialerConfigPredictiveDialerConfig</a>

---

##### `PutProgressiveDialerConfig` <a name="PutProgressiveDialerConfig" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.putProgressiveDialerConfig"></a>

```csharp
private void PutProgressiveDialerConfig(ConnectcampaignsCampaignDialerConfigProgressiveDialerConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.putProgressiveDialerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfig">ConnectcampaignsCampaignDialerConfigProgressiveDialerConfig</a>

---

##### `ResetAgentlessDialerConfig` <a name="ResetAgentlessDialerConfig" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.resetAgentlessDialerConfig"></a>

```csharp
private void ResetAgentlessDialerConfig()
```

##### `ResetPredictiveDialerConfig` <a name="ResetPredictiveDialerConfig" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.resetPredictiveDialerConfig"></a>

```csharp
private void ResetPredictiveDialerConfig()
```

##### `ResetProgressiveDialerConfig` <a name="ResetProgressiveDialerConfig" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.resetProgressiveDialerConfig"></a>

```csharp
private void ResetProgressiveDialerConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.property.agentlessDialerConfig">AgentlessDialerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference">ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.property.predictiveDialerConfig">PredictiveDialerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference">ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.property.progressiveDialerConfig">ProgressiveDialerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference">ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.property.agentlessDialerConfigInput">AgentlessDialerConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfig">ConnectcampaignsCampaignDialerConfigAgentlessDialerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.property.predictiveDialerConfigInput">PredictiveDialerConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfig">ConnectcampaignsCampaignDialerConfigPredictiveDialerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.property.progressiveDialerConfigInput">ProgressiveDialerConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfig">ConnectcampaignsCampaignDialerConfigProgressiveDialerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfig">ConnectcampaignsCampaignDialerConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AgentlessDialerConfig`<sup>Required</sup> <a name="AgentlessDialerConfig" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.property.agentlessDialerConfig"></a>

```csharp
public ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference AgentlessDialerConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference">ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference</a>

---

##### `PredictiveDialerConfig`<sup>Required</sup> <a name="PredictiveDialerConfig" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.property.predictiveDialerConfig"></a>

```csharp
public ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference PredictiveDialerConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference">ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference</a>

---

##### `ProgressiveDialerConfig`<sup>Required</sup> <a name="ProgressiveDialerConfig" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.property.progressiveDialerConfig"></a>

```csharp
public ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference ProgressiveDialerConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference">ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference</a>

---

##### `AgentlessDialerConfigInput`<sup>Optional</sup> <a name="AgentlessDialerConfigInput" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.property.agentlessDialerConfigInput"></a>

```csharp
public IResolvable|ConnectcampaignsCampaignDialerConfigAgentlessDialerConfig AgentlessDialerConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfig">ConnectcampaignsCampaignDialerConfigAgentlessDialerConfig</a>

---

##### `PredictiveDialerConfigInput`<sup>Optional</sup> <a name="PredictiveDialerConfigInput" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.property.predictiveDialerConfigInput"></a>

```csharp
public IResolvable|ConnectcampaignsCampaignDialerConfigPredictiveDialerConfig PredictiveDialerConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfig">ConnectcampaignsCampaignDialerConfigPredictiveDialerConfig</a>

---

##### `ProgressiveDialerConfigInput`<sup>Optional</sup> <a name="ProgressiveDialerConfigInput" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.property.progressiveDialerConfigInput"></a>

```csharp
public IResolvable|ConnectcampaignsCampaignDialerConfigProgressiveDialerConfig ProgressiveDialerConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfig">ConnectcampaignsCampaignDialerConfigProgressiveDialerConfig</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ConnectcampaignsCampaignDialerConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfig">ConnectcampaignsCampaignDialerConfig</a>

---


### ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference <a name="ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.resetBandwidthAllocation">ResetBandwidthAllocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.resetDialingCapacity">ResetDialingCapacity</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBandwidthAllocation` <a name="ResetBandwidthAllocation" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.resetBandwidthAllocation"></a>

```csharp
private void ResetBandwidthAllocation()
```

##### `ResetDialingCapacity` <a name="ResetDialingCapacity" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.resetDialingCapacity"></a>

```csharp
private void ResetDialingCapacity()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.property.bandwidthAllocationInput">BandwidthAllocationInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.property.dialingCapacityInput">DialingCapacityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.property.bandwidthAllocation">BandwidthAllocation</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.property.dialingCapacity">DialingCapacity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfig">ConnectcampaignsCampaignDialerConfigPredictiveDialerConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BandwidthAllocationInput`<sup>Optional</sup> <a name="BandwidthAllocationInput" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.property.bandwidthAllocationInput"></a>

```csharp
public double BandwidthAllocationInput { get; }
```

- *Type:* double

---

##### `DialingCapacityInput`<sup>Optional</sup> <a name="DialingCapacityInput" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.property.dialingCapacityInput"></a>

```csharp
public double DialingCapacityInput { get; }
```

- *Type:* double

---

##### `BandwidthAllocation`<sup>Required</sup> <a name="BandwidthAllocation" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.property.bandwidthAllocation"></a>

```csharp
public double BandwidthAllocation { get; }
```

- *Type:* double

---

##### `DialingCapacity`<sup>Required</sup> <a name="DialingCapacity" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.property.dialingCapacity"></a>

```csharp
public double DialingCapacity { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ConnectcampaignsCampaignDialerConfigPredictiveDialerConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfig">ConnectcampaignsCampaignDialerConfigPredictiveDialerConfig</a>

---


### ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference <a name="ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.resetBandwidthAllocation">ResetBandwidthAllocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.resetDialingCapacity">ResetDialingCapacity</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBandwidthAllocation` <a name="ResetBandwidthAllocation" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.resetBandwidthAllocation"></a>

```csharp
private void ResetBandwidthAllocation()
```

##### `ResetDialingCapacity` <a name="ResetDialingCapacity" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.resetDialingCapacity"></a>

```csharp
private void ResetDialingCapacity()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.property.bandwidthAllocationInput">BandwidthAllocationInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.property.dialingCapacityInput">DialingCapacityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.property.bandwidthAllocation">BandwidthAllocation</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.property.dialingCapacity">DialingCapacity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfig">ConnectcampaignsCampaignDialerConfigProgressiveDialerConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BandwidthAllocationInput`<sup>Optional</sup> <a name="BandwidthAllocationInput" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.property.bandwidthAllocationInput"></a>

```csharp
public double BandwidthAllocationInput { get; }
```

- *Type:* double

---

##### `DialingCapacityInput`<sup>Optional</sup> <a name="DialingCapacityInput" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.property.dialingCapacityInput"></a>

```csharp
public double DialingCapacityInput { get; }
```

- *Type:* double

---

##### `BandwidthAllocation`<sup>Required</sup> <a name="BandwidthAllocation" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.property.bandwidthAllocation"></a>

```csharp
public double BandwidthAllocation { get; }
```

- *Type:* double

---

##### `DialingCapacity`<sup>Required</sup> <a name="DialingCapacity" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.property.dialingCapacity"></a>

```csharp
public double DialingCapacity { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ConnectcampaignsCampaignDialerConfigProgressiveDialerConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfig">ConnectcampaignsCampaignDialerConfigProgressiveDialerConfig</a>

---


### ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference <a name="ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.resetAwaitAnswerMachinePrompt">ResetAwaitAnswerMachinePrompt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.resetEnableAnswerMachineDetection">ResetEnableAnswerMachineDetection</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAwaitAnswerMachinePrompt` <a name="ResetAwaitAnswerMachinePrompt" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.resetAwaitAnswerMachinePrompt"></a>

```csharp
private void ResetAwaitAnswerMachinePrompt()
```

##### `ResetEnableAnswerMachineDetection` <a name="ResetEnableAnswerMachineDetection" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.resetEnableAnswerMachineDetection"></a>

```csharp
private void ResetEnableAnswerMachineDetection()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.property.awaitAnswerMachinePromptInput">AwaitAnswerMachinePromptInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.property.enableAnswerMachineDetectionInput">EnableAnswerMachineDetectionInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.property.awaitAnswerMachinePrompt">AwaitAnswerMachinePrompt</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.property.enableAnswerMachineDetection">EnableAnswerMachineDetection</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfig">ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AwaitAnswerMachinePromptInput`<sup>Optional</sup> <a name="AwaitAnswerMachinePromptInput" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.property.awaitAnswerMachinePromptInput"></a>

```csharp
public bool|IResolvable AwaitAnswerMachinePromptInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EnableAnswerMachineDetectionInput`<sup>Optional</sup> <a name="EnableAnswerMachineDetectionInput" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.property.enableAnswerMachineDetectionInput"></a>

```csharp
public bool|IResolvable EnableAnswerMachineDetectionInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AwaitAnswerMachinePrompt`<sup>Required</sup> <a name="AwaitAnswerMachinePrompt" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.property.awaitAnswerMachinePrompt"></a>

```csharp
public bool|IResolvable AwaitAnswerMachinePrompt { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EnableAnswerMachineDetection`<sup>Required</sup> <a name="EnableAnswerMachineDetection" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.property.enableAnswerMachineDetection"></a>

```csharp
public bool|IResolvable EnableAnswerMachineDetection { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfig">ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfig</a>

---


### ConnectcampaignsCampaignOutboundCallConfigOutputReference <a name="ConnectcampaignsCampaignOutboundCallConfigOutputReference" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectcampaignsCampaignOutboundCallConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.putAnswerMachineDetectionConfig">PutAnswerMachineDetectionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.resetAnswerMachineDetectionConfig">ResetAnswerMachineDetectionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.resetConnectQueueArn">ResetConnectQueueArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.resetConnectSourcePhoneNumber">ResetConnectSourcePhoneNumber</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAnswerMachineDetectionConfig` <a name="PutAnswerMachineDetectionConfig" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.putAnswerMachineDetectionConfig"></a>

```csharp
private void PutAnswerMachineDetectionConfig(ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.putAnswerMachineDetectionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfig">ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfig</a>

---

##### `ResetAnswerMachineDetectionConfig` <a name="ResetAnswerMachineDetectionConfig" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.resetAnswerMachineDetectionConfig"></a>

```csharp
private void ResetAnswerMachineDetectionConfig()
```

##### `ResetConnectQueueArn` <a name="ResetConnectQueueArn" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.resetConnectQueueArn"></a>

```csharp
private void ResetConnectQueueArn()
```

##### `ResetConnectSourcePhoneNumber` <a name="ResetConnectSourcePhoneNumber" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.resetConnectSourcePhoneNumber"></a>

```csharp
private void ResetConnectSourcePhoneNumber()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.property.answerMachineDetectionConfig">AnswerMachineDetectionConfig</a></code> | <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference">ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.property.answerMachineDetectionConfigInput">AnswerMachineDetectionConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfig">ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.property.connectContactFlowArnInput">ConnectContactFlowArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.property.connectQueueArnInput">ConnectQueueArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.property.connectSourcePhoneNumberInput">ConnectSourcePhoneNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.property.connectContactFlowArn">ConnectContactFlowArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.property.connectQueueArn">ConnectQueueArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.property.connectSourcePhoneNumber">ConnectSourcePhoneNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfig">ConnectcampaignsCampaignOutboundCallConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AnswerMachineDetectionConfig`<sup>Required</sup> <a name="AnswerMachineDetectionConfig" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.property.answerMachineDetectionConfig"></a>

```csharp
public ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference AnswerMachineDetectionConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference">ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference</a>

---

##### `AnswerMachineDetectionConfigInput`<sup>Optional</sup> <a name="AnswerMachineDetectionConfigInput" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.property.answerMachineDetectionConfigInput"></a>

```csharp
public IResolvable|ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfig AnswerMachineDetectionConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfig">ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfig</a>

---

##### `ConnectContactFlowArnInput`<sup>Optional</sup> <a name="ConnectContactFlowArnInput" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.property.connectContactFlowArnInput"></a>

```csharp
public string ConnectContactFlowArnInput { get; }
```

- *Type:* string

---

##### `ConnectQueueArnInput`<sup>Optional</sup> <a name="ConnectQueueArnInput" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.property.connectQueueArnInput"></a>

```csharp
public string ConnectQueueArnInput { get; }
```

- *Type:* string

---

##### `ConnectSourcePhoneNumberInput`<sup>Optional</sup> <a name="ConnectSourcePhoneNumberInput" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.property.connectSourcePhoneNumberInput"></a>

```csharp
public string ConnectSourcePhoneNumberInput { get; }
```

- *Type:* string

---

##### `ConnectContactFlowArn`<sup>Required</sup> <a name="ConnectContactFlowArn" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.property.connectContactFlowArn"></a>

```csharp
public string ConnectContactFlowArn { get; }
```

- *Type:* string

---

##### `ConnectQueueArn`<sup>Required</sup> <a name="ConnectQueueArn" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.property.connectQueueArn"></a>

```csharp
public string ConnectQueueArn { get; }
```

- *Type:* string

---

##### `ConnectSourcePhoneNumber`<sup>Required</sup> <a name="ConnectSourcePhoneNumber" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.property.connectSourcePhoneNumber"></a>

```csharp
public string ConnectSourcePhoneNumber { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ConnectcampaignsCampaignOutboundCallConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfig">ConnectcampaignsCampaignOutboundCallConfig</a>

---


### ConnectcampaignsCampaignTagsList <a name="ConnectcampaignsCampaignTagsList" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectcampaignsCampaignTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsList.get"></a>

```csharp
private ConnectcampaignsCampaignTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTags">ConnectcampaignsCampaignTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsList.property.internalValue"></a>

```csharp
public IResolvable|ConnectcampaignsCampaignTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTags">ConnectcampaignsCampaignTags</a>[]

---


### ConnectcampaignsCampaignTagsOutputReference <a name="ConnectcampaignsCampaignTagsOutputReference" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectcampaignsCampaignTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTags">ConnectcampaignsCampaignTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ConnectcampaignsCampaignTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTags">ConnectcampaignsCampaignTags</a>

---



