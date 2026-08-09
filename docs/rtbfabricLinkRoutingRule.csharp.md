# `rtbfabricLinkRoutingRule` Submodule <a name="`rtbfabricLinkRoutingRule` Submodule" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RtbfabricLinkRoutingRule <a name="RtbfabricLinkRoutingRule" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link_routing_rule awscc_rtbfabric_link_routing_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RtbfabricLinkRoutingRule(Construct Scope, string Id, RtbfabricLinkRoutingRuleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConfig">RtbfabricLinkRoutingRuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConfig">RtbfabricLinkRoutingRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.putConditions">PutConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConditions` <a name="PutConditions" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.putConditions"></a>

```csharp
private void PutConditions(RtbfabricLinkRoutingRuleConditions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.putConditions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditions">RtbfabricLinkRoutingRuleConditions</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.putTags"></a>

```csharp
private void PutTags(IResolvable|RtbfabricLinkRoutingRuleTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTags">RtbfabricLinkRoutingRuleTags</a>[]

---

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a RtbfabricLinkRoutingRule resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

RtbfabricLinkRoutingRule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

RtbfabricLinkRoutingRule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

RtbfabricLinkRoutingRule.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

RtbfabricLinkRoutingRule.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a RtbfabricLinkRoutingRule resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the RtbfabricLinkRoutingRule to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing RtbfabricLinkRoutingRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link_routing_rule#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the RtbfabricLinkRoutingRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.conditions">Conditions</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference">RtbfabricLinkRoutingRuleConditionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.createdTimestamp">CreatedTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.ruleId">RuleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList">RtbfabricLinkRoutingRuleTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.updatedTimestamp">UpdatedTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.conditionsInput">ConditionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditions">RtbfabricLinkRoutingRuleConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.gatewayIdInput">GatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.linkIdInput">LinkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.priorityInput">PriorityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTags">RtbfabricLinkRoutingRuleTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.gatewayId">GatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.linkId">LinkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.priority">Priority</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.conditions"></a>

```csharp
public RtbfabricLinkRoutingRuleConditionsOutputReference Conditions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference">RtbfabricLinkRoutingRuleConditionsOutputReference</a>

---

##### `CreatedTimestamp`<sup>Required</sup> <a name="CreatedTimestamp" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.createdTimestamp"></a>

```csharp
public string CreatedTimestamp { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `RuleId`<sup>Required</sup> <a name="RuleId" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.ruleId"></a>

```csharp
public string RuleId { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.tags"></a>

```csharp
public RtbfabricLinkRoutingRuleTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList">RtbfabricLinkRoutingRuleTagsList</a>

---

##### `UpdatedTimestamp`<sup>Required</sup> <a name="UpdatedTimestamp" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.updatedTimestamp"></a>

```csharp
public string UpdatedTimestamp { get; }
```

- *Type:* string

---

##### `ConditionsInput`<sup>Optional</sup> <a name="ConditionsInput" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.conditionsInput"></a>

```csharp
public IResolvable|RtbfabricLinkRoutingRuleConditions ConditionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditions">RtbfabricLinkRoutingRuleConditions</a>

---

##### `GatewayIdInput`<sup>Optional</sup> <a name="GatewayIdInput" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.gatewayIdInput"></a>

```csharp
public string GatewayIdInput { get; }
```

- *Type:* string

---

##### `LinkIdInput`<sup>Optional</sup> <a name="LinkIdInput" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.linkIdInput"></a>

```csharp
public string LinkIdInput { get; }
```

- *Type:* string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.priorityInput"></a>

```csharp
public double PriorityInput { get; }
```

- *Type:* double

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.tagsInput"></a>

```csharp
public IResolvable|RtbfabricLinkRoutingRuleTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTags">RtbfabricLinkRoutingRuleTags</a>[]

---

##### `GatewayId`<sup>Required</sup> <a name="GatewayId" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.gatewayId"></a>

```csharp
public string GatewayId { get; }
```

- *Type:* string

---

##### `LinkId`<sup>Required</sup> <a name="LinkId" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.linkId"></a>

```csharp
public string LinkId { get; }
```

- *Type:* string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RtbfabricLinkRoutingRuleConditions <a name="RtbfabricLinkRoutingRuleConditions" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RtbfabricLinkRoutingRuleConditions {
    string HostHeader = null,
    string HostHeaderWildcard = null,
    string PathExact = null,
    string PathPrefix = null,
    RtbfabricLinkRoutingRuleConditionsQueryStringEquals QueryStringEquals = null,
    string QueryStringExists = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditions.property.hostHeader">HostHeader</a></code> | <code>string</code> | Exact host match ? RFC 3986 unreserved characters. Mutually exclusive with HostHeaderWildcard. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditions.property.hostHeaderWildcard">HostHeaderWildcard</a></code> | <code>string</code> | Wildcard host pattern (e.g., *.example.com) ? RFC 3986 unreserved characters plus *. Mutually exclusive with HostHeader. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditions.property.pathExact">PathExact</a></code> | <code>string</code> | Exact path match ? must start with /. Mutually exclusive with PathPrefix. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditions.property.pathPrefix">PathPrefix</a></code> | <code>string</code> | Path prefix matching ? strict starts-with, must start with /. Mutually exclusive with PathExact. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditions.property.queryStringEquals">QueryStringEquals</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEquals">RtbfabricLinkRoutingRuleConditionsQueryStringEquals</a></code> | Query string key=value pair match (single pair). |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditions.property.queryStringExists">QueryStringExists</a></code> | <code>string</code> | Query string key presence check (any value accepted). |

---

##### `HostHeader`<sup>Optional</sup> <a name="HostHeader" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditions.property.hostHeader"></a>

```csharp
public string HostHeader { get; set; }
```

- *Type:* string

Exact host match ? RFC 3986 unreserved characters. Mutually exclusive with HostHeaderWildcard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link_routing_rule#host_header RtbfabricLinkRoutingRule#host_header}

---

##### `HostHeaderWildcard`<sup>Optional</sup> <a name="HostHeaderWildcard" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditions.property.hostHeaderWildcard"></a>

```csharp
public string HostHeaderWildcard { get; set; }
```

- *Type:* string

Wildcard host pattern (e.g., *.example.com) ? RFC 3986 unreserved characters plus *. Mutually exclusive with HostHeader.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link_routing_rule#host_header_wildcard RtbfabricLinkRoutingRule#host_header_wildcard}

---

##### `PathExact`<sup>Optional</sup> <a name="PathExact" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditions.property.pathExact"></a>

```csharp
public string PathExact { get; set; }
```

- *Type:* string

Exact path match ? must start with /. Mutually exclusive with PathPrefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link_routing_rule#path_exact RtbfabricLinkRoutingRule#path_exact}

---

##### `PathPrefix`<sup>Optional</sup> <a name="PathPrefix" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditions.property.pathPrefix"></a>

```csharp
public string PathPrefix { get; set; }
```

- *Type:* string

Path prefix matching ? strict starts-with, must start with /. Mutually exclusive with PathExact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link_routing_rule#path_prefix RtbfabricLinkRoutingRule#path_prefix}

---

##### `QueryStringEquals`<sup>Optional</sup> <a name="QueryStringEquals" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditions.property.queryStringEquals"></a>

```csharp
public RtbfabricLinkRoutingRuleConditionsQueryStringEquals QueryStringEquals { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEquals">RtbfabricLinkRoutingRuleConditionsQueryStringEquals</a>

Query string key=value pair match (single pair).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link_routing_rule#query_string_equals RtbfabricLinkRoutingRule#query_string_equals}

---

##### `QueryStringExists`<sup>Optional</sup> <a name="QueryStringExists" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditions.property.queryStringExists"></a>

```csharp
public string QueryStringExists { get; set; }
```

- *Type:* string

Query string key presence check (any value accepted).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link_routing_rule#query_string_exists RtbfabricLinkRoutingRule#query_string_exists}

---

### RtbfabricLinkRoutingRuleConditionsQueryStringEquals <a name="RtbfabricLinkRoutingRuleConditionsQueryStringEquals" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEquals"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEquals.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RtbfabricLinkRoutingRuleConditionsQueryStringEquals {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEquals.property.key">Key</a></code> | <code>string</code> | Query string key ? RFC 3986 unreserved characters. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEquals.property.value">Value</a></code> | <code>string</code> | Query string value ? RFC 3986 unreserved characters. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEquals.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Query string key ? RFC 3986 unreserved characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link_routing_rule#key RtbfabricLinkRoutingRule#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEquals.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Query string value ? RFC 3986 unreserved characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link_routing_rule#value RtbfabricLinkRoutingRule#value}

---

### RtbfabricLinkRoutingRuleConfig <a name="RtbfabricLinkRoutingRuleConfig" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RtbfabricLinkRoutingRuleConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    RtbfabricLinkRoutingRuleConditions Conditions,
    string GatewayId,
    string LinkId,
    double Priority,
    IResolvable|RtbfabricLinkRoutingRuleTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConfig.property.conditions">Conditions</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditions">RtbfabricLinkRoutingRuleConditions</a></code> | Conditions for a routing rule. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConfig.property.gatewayId">GatewayId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link_routing_rule#gateway_id RtbfabricLinkRoutingRule#gateway_id}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConfig.property.linkId">LinkId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link_routing_rule#link_id RtbfabricLinkRoutingRule#link_id}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConfig.property.priority">Priority</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link_routing_rule#priority RtbfabricLinkRoutingRule#priority}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTags">RtbfabricLinkRoutingRuleTags</a>[]</code> | Tags to assign to the LinkRoutingRule. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConfig.property.conditions"></a>

```csharp
public RtbfabricLinkRoutingRuleConditions Conditions { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditions">RtbfabricLinkRoutingRuleConditions</a>

Conditions for a routing rule.

All non-null fields must match (AND logic). At least one field must be set. HostHeader and HostHeaderWildcard are mutually exclusive. PathPrefix and PathExact are mutually exclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link_routing_rule#conditions RtbfabricLinkRoutingRule#conditions}

---

##### `GatewayId`<sup>Required</sup> <a name="GatewayId" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConfig.property.gatewayId"></a>

```csharp
public string GatewayId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link_routing_rule#gateway_id RtbfabricLinkRoutingRule#gateway_id}.

---

##### `LinkId`<sup>Required</sup> <a name="LinkId" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConfig.property.linkId"></a>

```csharp
public string LinkId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link_routing_rule#link_id RtbfabricLinkRoutingRule#link_id}.

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConfig.property.priority"></a>

```csharp
public double Priority { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link_routing_rule#priority RtbfabricLinkRoutingRule#priority}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConfig.property.tags"></a>

```csharp
public IResolvable|RtbfabricLinkRoutingRuleTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTags">RtbfabricLinkRoutingRuleTags</a>[]

Tags to assign to the LinkRoutingRule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link_routing_rule#tags RtbfabricLinkRoutingRule#tags}

---

### RtbfabricLinkRoutingRuleTags <a name="RtbfabricLinkRoutingRuleTags" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RtbfabricLinkRoutingRuleTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link_routing_rule#key RtbfabricLinkRoutingRule#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link_routing_rule#value RtbfabricLinkRoutingRule#value}

---

## Classes <a name="Classes" id="Classes"></a>

### RtbfabricLinkRoutingRuleConditionsOutputReference <a name="RtbfabricLinkRoutingRuleConditionsOutputReference" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RtbfabricLinkRoutingRuleConditionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.putQueryStringEquals">PutQueryStringEquals</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.resetHostHeader">ResetHostHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.resetHostHeaderWildcard">ResetHostHeaderWildcard</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.resetPathExact">ResetPathExact</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.resetPathPrefix">ResetPathPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.resetQueryStringEquals">ResetQueryStringEquals</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.resetQueryStringExists">ResetQueryStringExists</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutQueryStringEquals` <a name="PutQueryStringEquals" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.putQueryStringEquals"></a>

```csharp
private void PutQueryStringEquals(RtbfabricLinkRoutingRuleConditionsQueryStringEquals Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.putQueryStringEquals.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEquals">RtbfabricLinkRoutingRuleConditionsQueryStringEquals</a>

---

##### `ResetHostHeader` <a name="ResetHostHeader" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.resetHostHeader"></a>

```csharp
private void ResetHostHeader()
```

##### `ResetHostHeaderWildcard` <a name="ResetHostHeaderWildcard" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.resetHostHeaderWildcard"></a>

```csharp
private void ResetHostHeaderWildcard()
```

##### `ResetPathExact` <a name="ResetPathExact" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.resetPathExact"></a>

```csharp
private void ResetPathExact()
```

##### `ResetPathPrefix` <a name="ResetPathPrefix" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.resetPathPrefix"></a>

```csharp
private void ResetPathPrefix()
```

##### `ResetQueryStringEquals` <a name="ResetQueryStringEquals" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.resetQueryStringEquals"></a>

```csharp
private void ResetQueryStringEquals()
```

##### `ResetQueryStringExists` <a name="ResetQueryStringExists" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.resetQueryStringExists"></a>

```csharp
private void ResetQueryStringExists()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.queryStringEquals">QueryStringEquals</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference">RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.hostHeaderInput">HostHeaderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.hostHeaderWildcardInput">HostHeaderWildcardInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.pathExactInput">PathExactInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.pathPrefixInput">PathPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.queryStringEqualsInput">QueryStringEqualsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEquals">RtbfabricLinkRoutingRuleConditionsQueryStringEquals</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.queryStringExistsInput">QueryStringExistsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.hostHeader">HostHeader</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.hostHeaderWildcard">HostHeaderWildcard</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.pathExact">PathExact</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.pathPrefix">PathPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.queryStringExists">QueryStringExists</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditions">RtbfabricLinkRoutingRuleConditions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `QueryStringEquals`<sup>Required</sup> <a name="QueryStringEquals" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.queryStringEquals"></a>

```csharp
public RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference QueryStringEquals { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference">RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference</a>

---

##### `HostHeaderInput`<sup>Optional</sup> <a name="HostHeaderInput" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.hostHeaderInput"></a>

```csharp
public string HostHeaderInput { get; }
```

- *Type:* string

---

##### `HostHeaderWildcardInput`<sup>Optional</sup> <a name="HostHeaderWildcardInput" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.hostHeaderWildcardInput"></a>

```csharp
public string HostHeaderWildcardInput { get; }
```

- *Type:* string

---

##### `PathExactInput`<sup>Optional</sup> <a name="PathExactInput" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.pathExactInput"></a>

```csharp
public string PathExactInput { get; }
```

- *Type:* string

---

##### `PathPrefixInput`<sup>Optional</sup> <a name="PathPrefixInput" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.pathPrefixInput"></a>

```csharp
public string PathPrefixInput { get; }
```

- *Type:* string

---

##### `QueryStringEqualsInput`<sup>Optional</sup> <a name="QueryStringEqualsInput" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.queryStringEqualsInput"></a>

```csharp
public IResolvable|RtbfabricLinkRoutingRuleConditionsQueryStringEquals QueryStringEqualsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEquals">RtbfabricLinkRoutingRuleConditionsQueryStringEquals</a>

---

##### `QueryStringExistsInput`<sup>Optional</sup> <a name="QueryStringExistsInput" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.queryStringExistsInput"></a>

```csharp
public string QueryStringExistsInput { get; }
```

- *Type:* string

---

##### `HostHeader`<sup>Required</sup> <a name="HostHeader" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.hostHeader"></a>

```csharp
public string HostHeader { get; }
```

- *Type:* string

---

##### `HostHeaderWildcard`<sup>Required</sup> <a name="HostHeaderWildcard" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.hostHeaderWildcard"></a>

```csharp
public string HostHeaderWildcard { get; }
```

- *Type:* string

---

##### `PathExact`<sup>Required</sup> <a name="PathExact" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.pathExact"></a>

```csharp
public string PathExact { get; }
```

- *Type:* string

---

##### `PathPrefix`<sup>Required</sup> <a name="PathPrefix" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.pathPrefix"></a>

```csharp
public string PathPrefix { get; }
```

- *Type:* string

---

##### `QueryStringExists`<sup>Required</sup> <a name="QueryStringExists" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.queryStringExists"></a>

```csharp
public string QueryStringExists { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|RtbfabricLinkRoutingRuleConditions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditions">RtbfabricLinkRoutingRuleConditions</a>

---


### RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference <a name="RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEquals">RtbfabricLinkRoutingRuleConditionsQueryStringEquals</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|RtbfabricLinkRoutingRuleConditionsQueryStringEquals InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEquals">RtbfabricLinkRoutingRuleConditionsQueryStringEquals</a>

---


### RtbfabricLinkRoutingRuleTagsList <a name="RtbfabricLinkRoutingRuleTagsList" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RtbfabricLinkRoutingRuleTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList.get"></a>

```csharp
private RtbfabricLinkRoutingRuleTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTags">RtbfabricLinkRoutingRuleTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList.property.internalValue"></a>

```csharp
public IResolvable|RtbfabricLinkRoutingRuleTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTags">RtbfabricLinkRoutingRuleTags</a>[]

---


### RtbfabricLinkRoutingRuleTagsOutputReference <a name="RtbfabricLinkRoutingRuleTagsOutputReference" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RtbfabricLinkRoutingRuleTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTags">RtbfabricLinkRoutingRuleTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|RtbfabricLinkRoutingRuleTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTags">RtbfabricLinkRoutingRuleTags</a>

---



