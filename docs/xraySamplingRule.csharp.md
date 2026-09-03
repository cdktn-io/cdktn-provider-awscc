# `xraySamplingRule` Submodule <a name="`xraySamplingRule` Submodule" id="@cdktn/provider-awscc.xraySamplingRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### XraySamplingRule <a name="XraySamplingRule" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/xray_sampling_rule awscc_xray_sampling_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new XraySamplingRule(Construct Scope, string Id, XraySamplingRuleConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleConfig">XraySamplingRuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleConfig">XraySamplingRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.putSamplingRule">PutSamplingRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.putSamplingRuleRecord">PutSamplingRuleRecord</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.putSamplingRuleUpdate">PutSamplingRuleUpdate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.resetRuleName">ResetRuleName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.resetSamplingRule">ResetSamplingRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.resetSamplingRuleRecord">ResetSamplingRuleRecord</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.resetSamplingRuleUpdate">ResetSamplingRuleUpdate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSamplingRule` <a name="PutSamplingRule" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.putSamplingRule"></a>

```csharp
private void PutSamplingRule(XraySamplingRuleSamplingRule Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.putSamplingRule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule">XraySamplingRuleSamplingRule</a>

---

##### `PutSamplingRuleRecord` <a name="PutSamplingRuleRecord" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.putSamplingRuleRecord"></a>

```csharp
private void PutSamplingRuleRecord(XraySamplingRuleSamplingRuleRecord Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.putSamplingRuleRecord.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecord">XraySamplingRuleSamplingRuleRecord</a>

---

##### `PutSamplingRuleUpdate` <a name="PutSamplingRuleUpdate" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.putSamplingRuleUpdate"></a>

```csharp
private void PutSamplingRuleUpdate(XraySamplingRuleSamplingRuleUpdate Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.putSamplingRuleUpdate.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate">XraySamplingRuleSamplingRuleUpdate</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.putTags"></a>

```csharp
private void PutTags(IResolvable|XraySamplingRuleTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTags">XraySamplingRuleTags</a>[]

---

##### `ResetRuleName` <a name="ResetRuleName" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.resetRuleName"></a>

```csharp
private void ResetRuleName()
```

##### `ResetSamplingRule` <a name="ResetSamplingRule" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.resetSamplingRule"></a>

```csharp
private void ResetSamplingRule()
```

##### `ResetSamplingRuleRecord` <a name="ResetSamplingRuleRecord" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.resetSamplingRuleRecord"></a>

```csharp
private void ResetSamplingRuleRecord()
```

##### `ResetSamplingRuleUpdate` <a name="ResetSamplingRuleUpdate" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.resetSamplingRuleUpdate"></a>

```csharp
private void ResetSamplingRuleUpdate()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a XraySamplingRule resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

XraySamplingRule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

XraySamplingRule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

XraySamplingRule.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

XraySamplingRule.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a XraySamplingRule resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the XraySamplingRule to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing XraySamplingRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/xray_sampling_rule#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the XraySamplingRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.ruleArn">RuleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.samplingRule">SamplingRule</a></code> | <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference">XraySamplingRuleSamplingRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.samplingRuleRecord">SamplingRuleRecord</a></code> | <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference">XraySamplingRuleSamplingRuleRecordOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.samplingRuleUpdate">SamplingRuleUpdate</a></code> | <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference">XraySamplingRuleSamplingRuleUpdateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsList">XraySamplingRuleTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.ruleNameInput">RuleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.samplingRuleInput">SamplingRuleInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule">XraySamplingRuleSamplingRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.samplingRuleRecordInput">SamplingRuleRecordInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecord">XraySamplingRuleSamplingRuleRecord</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.samplingRuleUpdateInput">SamplingRuleUpdateInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate">XraySamplingRuleSamplingRuleUpdate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTags">XraySamplingRuleTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.ruleName">RuleName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `RuleArn`<sup>Required</sup> <a name="RuleArn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.ruleArn"></a>

```csharp
public string RuleArn { get; }
```

- *Type:* string

---

##### `SamplingRule`<sup>Required</sup> <a name="SamplingRule" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.samplingRule"></a>

```csharp
public XraySamplingRuleSamplingRuleOutputReference SamplingRule { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference">XraySamplingRuleSamplingRuleOutputReference</a>

---

##### `SamplingRuleRecord`<sup>Required</sup> <a name="SamplingRuleRecord" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.samplingRuleRecord"></a>

```csharp
public XraySamplingRuleSamplingRuleRecordOutputReference SamplingRuleRecord { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference">XraySamplingRuleSamplingRuleRecordOutputReference</a>

---

##### `SamplingRuleUpdate`<sup>Required</sup> <a name="SamplingRuleUpdate" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.samplingRuleUpdate"></a>

```csharp
public XraySamplingRuleSamplingRuleUpdateOutputReference SamplingRuleUpdate { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference">XraySamplingRuleSamplingRuleUpdateOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.tags"></a>

```csharp
public XraySamplingRuleTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsList">XraySamplingRuleTagsList</a>

---

##### `RuleNameInput`<sup>Optional</sup> <a name="RuleNameInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.ruleNameInput"></a>

```csharp
public string RuleNameInput { get; }
```

- *Type:* string

---

##### `SamplingRuleInput`<sup>Optional</sup> <a name="SamplingRuleInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.samplingRuleInput"></a>

```csharp
public IResolvable|XraySamplingRuleSamplingRule SamplingRuleInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule">XraySamplingRuleSamplingRule</a>

---

##### `SamplingRuleRecordInput`<sup>Optional</sup> <a name="SamplingRuleRecordInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.samplingRuleRecordInput"></a>

```csharp
public IResolvable|XraySamplingRuleSamplingRuleRecord SamplingRuleRecordInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecord">XraySamplingRuleSamplingRuleRecord</a>

---

##### `SamplingRuleUpdateInput`<sup>Optional</sup> <a name="SamplingRuleUpdateInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.samplingRuleUpdateInput"></a>

```csharp
public IResolvable|XraySamplingRuleSamplingRuleUpdate SamplingRuleUpdateInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate">XraySamplingRuleSamplingRuleUpdate</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.tagsInput"></a>

```csharp
public IResolvable|XraySamplingRuleTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTags">XraySamplingRuleTags</a>[]

---

##### `RuleName`<sup>Required</sup> <a name="RuleName" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.ruleName"></a>

```csharp
public string RuleName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### XraySamplingRuleConfig <a name="XraySamplingRuleConfig" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new XraySamplingRuleConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string RuleName = null,
    XraySamplingRuleSamplingRule SamplingRule = null,
    XraySamplingRuleSamplingRuleRecord SamplingRuleRecord = null,
    XraySamplingRuleSamplingRuleUpdate SamplingRuleUpdate = null,
    IResolvable|XraySamplingRuleTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleConfig.property.ruleName">RuleName</a></code> | <code>string</code> | The ARN of the sampling rule. Specify a rule by either name or ARN, but not both. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleConfig.property.samplingRule">SamplingRule</a></code> | <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule">XraySamplingRuleSamplingRule</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/xray_sampling_rule#sampling_rule XraySamplingRule#sampling_rule}. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleConfig.property.samplingRuleRecord">SamplingRuleRecord</a></code> | <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecord">XraySamplingRuleSamplingRuleRecord</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/xray_sampling_rule#sampling_rule_record XraySamplingRule#sampling_rule_record}. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleConfig.property.samplingRuleUpdate">SamplingRuleUpdate</a></code> | <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate">XraySamplingRuleSamplingRuleUpdate</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/xray_sampling_rule#sampling_rule_update XraySamplingRule#sampling_rule_update}. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTags">XraySamplingRuleTags</a>[]</code> | An array of key-value pairs to apply to this resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `RuleName`<sup>Optional</sup> <a name="RuleName" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleConfig.property.ruleName"></a>

```csharp
public string RuleName { get; set; }
```

- *Type:* string

The ARN of the sampling rule. Specify a rule by either name or ARN, but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/xray_sampling_rule#rule_name XraySamplingRule#rule_name}

---

##### `SamplingRule`<sup>Optional</sup> <a name="SamplingRule" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleConfig.property.samplingRule"></a>

```csharp
public XraySamplingRuleSamplingRule SamplingRule { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule">XraySamplingRuleSamplingRule</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/xray_sampling_rule#sampling_rule XraySamplingRule#sampling_rule}.

---

##### `SamplingRuleRecord`<sup>Optional</sup> <a name="SamplingRuleRecord" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleConfig.property.samplingRuleRecord"></a>

```csharp
public XraySamplingRuleSamplingRuleRecord SamplingRuleRecord { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecord">XraySamplingRuleSamplingRuleRecord</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/xray_sampling_rule#sampling_rule_record XraySamplingRule#sampling_rule_record}.

---

##### `SamplingRuleUpdate`<sup>Optional</sup> <a name="SamplingRuleUpdate" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleConfig.property.samplingRuleUpdate"></a>

```csharp
public XraySamplingRuleSamplingRuleUpdate SamplingRuleUpdate { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate">XraySamplingRuleSamplingRuleUpdate</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/xray_sampling_rule#sampling_rule_update XraySamplingRule#sampling_rule_update}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleConfig.property.tags"></a>

```csharp
public IResolvable|XraySamplingRuleTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTags">XraySamplingRuleTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/xray_sampling_rule#tags XraySamplingRule#tags}

---

### XraySamplingRuleSamplingRule <a name="XraySamplingRuleSamplingRule" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new XraySamplingRuleSamplingRule {
    System.Collections.Generic.IDictionary<string, string> Attributes = null,
    double FixedRate = null,
    string Host = null,
    string HttpMethod = null,
    double Priority = null,
    double ReservoirSize = null,
    string ResourceArn = null,
    string RuleArn = null,
    string RuleName = null,
    XraySamplingRuleSamplingRuleSamplingRateBoost SamplingRateBoost = null,
    string ServiceName = null,
    string ServiceType = null,
    string UrlPath = null,
    double Version = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule.property.attributes">Attributes</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Matches attributes derived from the request. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule.property.fixedRate">FixedRate</a></code> | <code>double</code> | The percentage of matching requests to instrument, after the reservoir is exhausted. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule.property.host">Host</a></code> | <code>string</code> | Matches the hostname from a request URL. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule.property.httpMethod">HttpMethod</a></code> | <code>string</code> | Matches the HTTP method from a request URL. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule.property.priority">Priority</a></code> | <code>double</code> | The priority of the sampling rule. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule.property.reservoirSize">ReservoirSize</a></code> | <code>double</code> | A fixed number of matching requests to instrument per second, prior to applying the fixed rate. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule.property.resourceArn">ResourceArn</a></code> | <code>string</code> | Matches the ARN of the AWS resource on which the service runs. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule.property.ruleArn">RuleArn</a></code> | <code>string</code> | The ARN of the sampling rule. Specify a rule by either name or ARN, but not both. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule.property.ruleName">RuleName</a></code> | <code>string</code> | The ARN of the sampling rule. Specify a rule by either name or ARN, but not both. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule.property.samplingRateBoost">SamplingRateBoost</a></code> | <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoost">XraySamplingRuleSamplingRuleSamplingRateBoost</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/xray_sampling_rule#sampling_rate_boost XraySamplingRule#sampling_rate_boost}. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule.property.serviceName">ServiceName</a></code> | <code>string</code> | Matches the name that the service uses to identify itself in segments. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule.property.serviceType">ServiceType</a></code> | <code>string</code> | Matches the origin that the service uses to identify its type in segments. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule.property.urlPath">UrlPath</a></code> | <code>string</code> | Matches the path from a request URL. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule.property.version">Version</a></code> | <code>double</code> | The version of the sampling rule format (1). |

---

##### `Attributes`<sup>Optional</sup> <a name="Attributes" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule.property.attributes"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Attributes { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Matches attributes derived from the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/xray_sampling_rule#attributes XraySamplingRule#attributes}

---

##### `FixedRate`<sup>Optional</sup> <a name="FixedRate" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule.property.fixedRate"></a>

```csharp
public double FixedRate { get; set; }
```

- *Type:* double

The percentage of matching requests to instrument, after the reservoir is exhausted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/xray_sampling_rule#fixed_rate XraySamplingRule#fixed_rate}

---

##### `Host`<sup>Optional</sup> <a name="Host" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule.property.host"></a>

```csharp
public string Host { get; set; }
```

- *Type:* string

Matches the hostname from a request URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/xray_sampling_rule#host XraySamplingRule#host}

---

##### `HttpMethod`<sup>Optional</sup> <a name="HttpMethod" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule.property.httpMethod"></a>

```csharp
public string HttpMethod { get; set; }
```

- *Type:* string

Matches the HTTP method from a request URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/xray_sampling_rule#http_method XraySamplingRule#http_method}

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule.property.priority"></a>

```csharp
public double Priority { get; set; }
```

- *Type:* double

The priority of the sampling rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/xray_sampling_rule#priority XraySamplingRule#priority}

---

##### `ReservoirSize`<sup>Optional</sup> <a name="ReservoirSize" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule.property.reservoirSize"></a>

```csharp
public double ReservoirSize { get; set; }
```

- *Type:* double

A fixed number of matching requests to instrument per second, prior to applying the fixed rate.

The reservoir is not used directly by services, but applies to all services using the rule collectively.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/xray_sampling_rule#reservoir_size XraySamplingRule#reservoir_size}

---

##### `ResourceArn`<sup>Optional</sup> <a name="ResourceArn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule.property.resourceArn"></a>

```csharp
public string ResourceArn { get; set; }
```

- *Type:* string

Matches the ARN of the AWS resource on which the service runs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/xray_sampling_rule#resource_arn XraySamplingRule#resource_arn}

---

##### `RuleArn`<sup>Optional</sup> <a name="RuleArn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule.property.ruleArn"></a>

```csharp
public string RuleArn { get; set; }
```

- *Type:* string

The ARN of the sampling rule. Specify a rule by either name or ARN, but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/xray_sampling_rule#rule_arn XraySamplingRule#rule_arn}

---

##### `RuleName`<sup>Optional</sup> <a name="RuleName" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule.property.ruleName"></a>

```csharp
public string RuleName { get; set; }
```

- *Type:* string

The ARN of the sampling rule. Specify a rule by either name or ARN, but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/xray_sampling_rule#rule_name XraySamplingRule#rule_name}

---

##### `SamplingRateBoost`<sup>Optional</sup> <a name="SamplingRateBoost" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule.property.samplingRateBoost"></a>

```csharp
public XraySamplingRuleSamplingRuleSamplingRateBoost SamplingRateBoost { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoost">XraySamplingRuleSamplingRuleSamplingRateBoost</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/xray_sampling_rule#sampling_rate_boost XraySamplingRule#sampling_rate_boost}.

---

##### `ServiceName`<sup>Optional</sup> <a name="ServiceName" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule.property.serviceName"></a>

```csharp
public string ServiceName { get; set; }
```

- *Type:* string

Matches the name that the service uses to identify itself in segments.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/xray_sampling_rule#service_name XraySamplingRule#service_name}

---

##### `ServiceType`<sup>Optional</sup> <a name="ServiceType" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule.property.serviceType"></a>

```csharp
public string ServiceType { get; set; }
```

- *Type:* string

Matches the origin that the service uses to identify its type in segments.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/xray_sampling_rule#service_type XraySamplingRule#service_type}

---

##### `UrlPath`<sup>Optional</sup> <a name="UrlPath" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule.property.urlPath"></a>

```csharp
public string UrlPath { get; set; }
```

- *Type:* string

Matches the path from a request URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/xray_sampling_rule#url_path XraySamplingRule#url_path}

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule.property.version"></a>

```csharp
public double Version { get; set; }
```

- *Type:* double

The version of the sampling rule format (1).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/xray_sampling_rule#version XraySamplingRule#version}

---

### XraySamplingRuleSamplingRuleRecord <a name="XraySamplingRuleSamplingRuleRecord" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecord"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecord.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new XraySamplingRuleSamplingRuleRecord {
    string CreatedAt = null,
    string ModifiedAt = null,
    XraySamplingRuleSamplingRuleRecordSamplingRule SamplingRule = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecord.property.createdAt">CreatedAt</a></code> | <code>string</code> | When the rule was created, in Unix time seconds. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecord.property.modifiedAt">ModifiedAt</a></code> | <code>string</code> | When the rule was modified, in Unix time seconds. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecord.property.samplingRule">SamplingRule</a></code> | <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule">XraySamplingRuleSamplingRuleRecordSamplingRule</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/xray_sampling_rule#sampling_rule XraySamplingRule#sampling_rule}. |

---

##### `CreatedAt`<sup>Optional</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecord.property.createdAt"></a>

```csharp
public string CreatedAt { get; set; }
```

- *Type:* string

When the rule was created, in Unix time seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/xray_sampling_rule#created_at XraySamplingRule#created_at}

---

##### `ModifiedAt`<sup>Optional</sup> <a name="ModifiedAt" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecord.property.modifiedAt"></a>

```csharp
public string ModifiedAt { get; set; }
```

- *Type:* string

When the rule was modified, in Unix time seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/xray_sampling_rule#modified_at XraySamplingRule#modified_at}

---

##### `SamplingRule`<sup>Optional</sup> <a name="SamplingRule" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecord.property.samplingRule"></a>

```csharp
public XraySamplingRuleSamplingRuleRecordSamplingRule SamplingRule { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule">XraySamplingRuleSamplingRuleRecordSamplingRule</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/xray_sampling_rule#sampling_rule XraySamplingRule#sampling_rule}.

---

### XraySamplingRuleSamplingRuleRecordSamplingRule <a name="XraySamplingRuleSamplingRuleRecordSamplingRule" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new XraySamplingRuleSamplingRuleRecordSamplingRule {
    System.Collections.Generic.IDictionary<string, string> Attributes = null,
    double FixedRate = null,
    string Host = null,
    string HttpMethod = null,
    double Priority = null,
    double ReservoirSize = null,
    string ResourceArn = null,
    string RuleArn = null,
    string RuleName = null,
    XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoost SamplingRateBoost = null,
    string ServiceName = null,
    string ServiceType = null,
    string UrlPath = null,
    double Version = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule.property.attributes">Attributes</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Matches attributes derived from the request. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule.property.fixedRate">FixedRate</a></code> | <code>double</code> | The percentage of matching requests to instrument, after the reservoir is exhausted. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule.property.host">Host</a></code> | <code>string</code> | Matches the hostname from a request URL. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule.property.httpMethod">HttpMethod</a></code> | <code>string</code> | Matches the HTTP method from a request URL. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule.property.priority">Priority</a></code> | <code>double</code> | The priority of the sampling rule. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule.property.reservoirSize">ReservoirSize</a></code> | <code>double</code> | A fixed number of matching requests to instrument per second, prior to applying the fixed rate. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule.property.resourceArn">ResourceArn</a></code> | <code>string</code> | Matches the ARN of the AWS resource on which the service runs. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule.property.ruleArn">RuleArn</a></code> | <code>string</code> | The ARN of the sampling rule. Specify a rule by either name or ARN, but not both. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule.property.ruleName">RuleName</a></code> | <code>string</code> | The ARN of the sampling rule. Specify a rule by either name or ARN, but not both. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule.property.samplingRateBoost">SamplingRateBoost</a></code> | <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoost">XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoost</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/xray_sampling_rule#sampling_rate_boost XraySamplingRule#sampling_rate_boost}. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule.property.serviceName">ServiceName</a></code> | <code>string</code> | Matches the name that the service uses to identify itself in segments. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule.property.serviceType">ServiceType</a></code> | <code>string</code> | Matches the origin that the service uses to identify its type in segments. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule.property.urlPath">UrlPath</a></code> | <code>string</code> | Matches the path from a request URL. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule.property.version">Version</a></code> | <code>double</code> | The version of the sampling rule format (1). |

---

##### `Attributes`<sup>Optional</sup> <a name="Attributes" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule.property.attributes"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Attributes { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Matches attributes derived from the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/xray_sampling_rule#attributes XraySamplingRule#attributes}

---

##### `FixedRate`<sup>Optional</sup> <a name="FixedRate" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule.property.fixedRate"></a>

```csharp
public double FixedRate { get; set; }
```

- *Type:* double

The percentage of matching requests to instrument, after the reservoir is exhausted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/xray_sampling_rule#fixed_rate XraySamplingRule#fixed_rate}

---

##### `Host`<sup>Optional</sup> <a name="Host" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule.property.host"></a>

```csharp
public string Host { get; set; }
```

- *Type:* string

Matches the hostname from a request URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/xray_sampling_rule#host XraySamplingRule#host}

---

##### `HttpMethod`<sup>Optional</sup> <a name="HttpMethod" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule.property.httpMethod"></a>

```csharp
public string HttpMethod { get; set; }
```

- *Type:* string

Matches the HTTP method from a request URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/xray_sampling_rule#http_method XraySamplingRule#http_method}

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule.property.priority"></a>

```csharp
public double Priority { get; set; }
```

- *Type:* double

The priority of the sampling rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/xray_sampling_rule#priority XraySamplingRule#priority}

---

##### `ReservoirSize`<sup>Optional</sup> <a name="ReservoirSize" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule.property.reservoirSize"></a>

```csharp
public double ReservoirSize { get; set; }
```

- *Type:* double

A fixed number of matching requests to instrument per second, prior to applying the fixed rate.

The reservoir is not used directly by services, but applies to all services using the rule collectively.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/xray_sampling_rule#reservoir_size XraySamplingRule#reservoir_size}

---

##### `ResourceArn`<sup>Optional</sup> <a name="ResourceArn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule.property.resourceArn"></a>

```csharp
public string ResourceArn { get; set; }
```

- *Type:* string

Matches the ARN of the AWS resource on which the service runs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/xray_sampling_rule#resource_arn XraySamplingRule#resource_arn}

---

##### `RuleArn`<sup>Optional</sup> <a name="RuleArn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule.property.ruleArn"></a>

```csharp
public string RuleArn { get; set; }
```

- *Type:* string

The ARN of the sampling rule. Specify a rule by either name or ARN, but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/xray_sampling_rule#rule_arn XraySamplingRule#rule_arn}

---

##### `RuleName`<sup>Optional</sup> <a name="RuleName" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule.property.ruleName"></a>

```csharp
public string RuleName { get; set; }
```

- *Type:* string

The ARN of the sampling rule. Specify a rule by either name or ARN, but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/xray_sampling_rule#rule_name XraySamplingRule#rule_name}

---

##### `SamplingRateBoost`<sup>Optional</sup> <a name="SamplingRateBoost" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule.property.samplingRateBoost"></a>

```csharp
public XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoost SamplingRateBoost { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoost">XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoost</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/xray_sampling_rule#sampling_rate_boost XraySamplingRule#sampling_rate_boost}.

---

##### `ServiceName`<sup>Optional</sup> <a name="ServiceName" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule.property.serviceName"></a>

```csharp
public string ServiceName { get; set; }
```

- *Type:* string

Matches the name that the service uses to identify itself in segments.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/xray_sampling_rule#service_name XraySamplingRule#service_name}

---

##### `ServiceType`<sup>Optional</sup> <a name="ServiceType" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule.property.serviceType"></a>

```csharp
public string ServiceType { get; set; }
```

- *Type:* string

Matches the origin that the service uses to identify its type in segments.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/xray_sampling_rule#service_type XraySamplingRule#service_type}

---

##### `UrlPath`<sup>Optional</sup> <a name="UrlPath" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule.property.urlPath"></a>

```csharp
public string UrlPath { get; set; }
```

- *Type:* string

Matches the path from a request URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/xray_sampling_rule#url_path XraySamplingRule#url_path}

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule.property.version"></a>

```csharp
public double Version { get; set; }
```

- *Type:* double

The version of the sampling rule format (1).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/xray_sampling_rule#version XraySamplingRule#version}

---

### XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoost <a name="XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoost" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoost"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoost.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoost {
    double CooldownWindowMinutes = null,
    double MaxRate = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoost.property.cooldownWindowMinutes">CooldownWindowMinutes</a></code> | <code>double</code> | Time window (in minutes) in which only one sampling rate boost can be triggered. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoost.property.maxRate">MaxRate</a></code> | <code>double</code> | The maximum sampling rate X-Ray will apply when it detects anomalies. |

---

##### `CooldownWindowMinutes`<sup>Optional</sup> <a name="CooldownWindowMinutes" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoost.property.cooldownWindowMinutes"></a>

```csharp
public double CooldownWindowMinutes { get; set; }
```

- *Type:* double

Time window (in minutes) in which only one sampling rate boost can be triggered.

After a boost occurs, no further boosts are allowed until the next window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/xray_sampling_rule#cooldown_window_minutes XraySamplingRule#cooldown_window_minutes}

---

##### `MaxRate`<sup>Optional</sup> <a name="MaxRate" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoost.property.maxRate"></a>

```csharp
public double MaxRate { get; set; }
```

- *Type:* double

The maximum sampling rate X-Ray will apply when it detects anomalies.

X-Ray determines the appropriate rate between your baseline and the maximum, depending on anomaly activity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/xray_sampling_rule#max_rate XraySamplingRule#max_rate}

---

### XraySamplingRuleSamplingRuleSamplingRateBoost <a name="XraySamplingRuleSamplingRuleSamplingRateBoost" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoost"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoost.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new XraySamplingRuleSamplingRuleSamplingRateBoost {
    double CooldownWindowMinutes = null,
    double MaxRate = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoost.property.cooldownWindowMinutes">CooldownWindowMinutes</a></code> | <code>double</code> | Time window (in minutes) in which only one sampling rate boost can be triggered. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoost.property.maxRate">MaxRate</a></code> | <code>double</code> | The maximum sampling rate X-Ray will apply when it detects anomalies. |

---

##### `CooldownWindowMinutes`<sup>Optional</sup> <a name="CooldownWindowMinutes" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoost.property.cooldownWindowMinutes"></a>

```csharp
public double CooldownWindowMinutes { get; set; }
```

- *Type:* double

Time window (in minutes) in which only one sampling rate boost can be triggered.

After a boost occurs, no further boosts are allowed until the next window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/xray_sampling_rule#cooldown_window_minutes XraySamplingRule#cooldown_window_minutes}

---

##### `MaxRate`<sup>Optional</sup> <a name="MaxRate" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoost.property.maxRate"></a>

```csharp
public double MaxRate { get; set; }
```

- *Type:* double

The maximum sampling rate X-Ray will apply when it detects anomalies.

X-Ray determines the appropriate rate between your baseline and the maximum, depending on anomaly activity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/xray_sampling_rule#max_rate XraySamplingRule#max_rate}

---

### XraySamplingRuleSamplingRuleUpdate <a name="XraySamplingRuleSamplingRuleUpdate" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new XraySamplingRuleSamplingRuleUpdate {
    System.Collections.Generic.IDictionary<string, string> Attributes = null,
    double FixedRate = null,
    string Host = null,
    string HttpMethod = null,
    double Priority = null,
    double ReservoirSize = null,
    string ResourceArn = null,
    string RuleArn = null,
    string RuleName = null,
    XraySamplingRuleSamplingRuleUpdateSamplingRateBoost SamplingRateBoost = null,
    string ServiceName = null,
    string ServiceType = null,
    string UrlPath = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate.property.attributes">Attributes</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Matches attributes derived from the request. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate.property.fixedRate">FixedRate</a></code> | <code>double</code> | The percentage of matching requests to instrument, after the reservoir is exhausted. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate.property.host">Host</a></code> | <code>string</code> | Matches the hostname from a request URL. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate.property.httpMethod">HttpMethod</a></code> | <code>string</code> | Matches the HTTP method from a request URL. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate.property.priority">Priority</a></code> | <code>double</code> | The priority of the sampling rule. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate.property.reservoirSize">ReservoirSize</a></code> | <code>double</code> | A fixed number of matching requests to instrument per second, prior to applying the fixed rate. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate.property.resourceArn">ResourceArn</a></code> | <code>string</code> | Matches the ARN of the AWS resource on which the service runs. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate.property.ruleArn">RuleArn</a></code> | <code>string</code> | The ARN of the sampling rule. Specify a rule by either name or ARN, but not both. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate.property.ruleName">RuleName</a></code> | <code>string</code> | The ARN of the sampling rule. Specify a rule by either name or ARN, but not both. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate.property.samplingRateBoost">SamplingRateBoost</a></code> | <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoost">XraySamplingRuleSamplingRuleUpdateSamplingRateBoost</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/xray_sampling_rule#sampling_rate_boost XraySamplingRule#sampling_rate_boost}. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate.property.serviceName">ServiceName</a></code> | <code>string</code> | Matches the name that the service uses to identify itself in segments. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate.property.serviceType">ServiceType</a></code> | <code>string</code> | Matches the origin that the service uses to identify its type in segments. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate.property.urlPath">UrlPath</a></code> | <code>string</code> | Matches the path from a request URL. |

---

##### `Attributes`<sup>Optional</sup> <a name="Attributes" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate.property.attributes"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Attributes { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Matches attributes derived from the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/xray_sampling_rule#attributes XraySamplingRule#attributes}

---

##### `FixedRate`<sup>Optional</sup> <a name="FixedRate" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate.property.fixedRate"></a>

```csharp
public double FixedRate { get; set; }
```

- *Type:* double

The percentage of matching requests to instrument, after the reservoir is exhausted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/xray_sampling_rule#fixed_rate XraySamplingRule#fixed_rate}

---

##### `Host`<sup>Optional</sup> <a name="Host" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate.property.host"></a>

```csharp
public string Host { get; set; }
```

- *Type:* string

Matches the hostname from a request URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/xray_sampling_rule#host XraySamplingRule#host}

---

##### `HttpMethod`<sup>Optional</sup> <a name="HttpMethod" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate.property.httpMethod"></a>

```csharp
public string HttpMethod { get; set; }
```

- *Type:* string

Matches the HTTP method from a request URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/xray_sampling_rule#http_method XraySamplingRule#http_method}

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate.property.priority"></a>

```csharp
public double Priority { get; set; }
```

- *Type:* double

The priority of the sampling rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/xray_sampling_rule#priority XraySamplingRule#priority}

---

##### `ReservoirSize`<sup>Optional</sup> <a name="ReservoirSize" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate.property.reservoirSize"></a>

```csharp
public double ReservoirSize { get; set; }
```

- *Type:* double

A fixed number of matching requests to instrument per second, prior to applying the fixed rate.

The reservoir is not used directly by services, but applies to all services using the rule collectively.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/xray_sampling_rule#reservoir_size XraySamplingRule#reservoir_size}

---

##### `ResourceArn`<sup>Optional</sup> <a name="ResourceArn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate.property.resourceArn"></a>

```csharp
public string ResourceArn { get; set; }
```

- *Type:* string

Matches the ARN of the AWS resource on which the service runs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/xray_sampling_rule#resource_arn XraySamplingRule#resource_arn}

---

##### `RuleArn`<sup>Optional</sup> <a name="RuleArn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate.property.ruleArn"></a>

```csharp
public string RuleArn { get; set; }
```

- *Type:* string

The ARN of the sampling rule. Specify a rule by either name or ARN, but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/xray_sampling_rule#rule_arn XraySamplingRule#rule_arn}

---

##### `RuleName`<sup>Optional</sup> <a name="RuleName" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate.property.ruleName"></a>

```csharp
public string RuleName { get; set; }
```

- *Type:* string

The ARN of the sampling rule. Specify a rule by either name or ARN, but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/xray_sampling_rule#rule_name XraySamplingRule#rule_name}

---

##### `SamplingRateBoost`<sup>Optional</sup> <a name="SamplingRateBoost" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate.property.samplingRateBoost"></a>

```csharp
public XraySamplingRuleSamplingRuleUpdateSamplingRateBoost SamplingRateBoost { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoost">XraySamplingRuleSamplingRuleUpdateSamplingRateBoost</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/xray_sampling_rule#sampling_rate_boost XraySamplingRule#sampling_rate_boost}.

---

##### `ServiceName`<sup>Optional</sup> <a name="ServiceName" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate.property.serviceName"></a>

```csharp
public string ServiceName { get; set; }
```

- *Type:* string

Matches the name that the service uses to identify itself in segments.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/xray_sampling_rule#service_name XraySamplingRule#service_name}

---

##### `ServiceType`<sup>Optional</sup> <a name="ServiceType" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate.property.serviceType"></a>

```csharp
public string ServiceType { get; set; }
```

- *Type:* string

Matches the origin that the service uses to identify its type in segments.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/xray_sampling_rule#service_type XraySamplingRule#service_type}

---

##### `UrlPath`<sup>Optional</sup> <a name="UrlPath" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate.property.urlPath"></a>

```csharp
public string UrlPath { get; set; }
```

- *Type:* string

Matches the path from a request URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/xray_sampling_rule#url_path XraySamplingRule#url_path}

---

### XraySamplingRuleSamplingRuleUpdateSamplingRateBoost <a name="XraySamplingRuleSamplingRuleUpdateSamplingRateBoost" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoost"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoost.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new XraySamplingRuleSamplingRuleUpdateSamplingRateBoost {
    double CooldownWindowMinutes = null,
    double MaxRate = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoost.property.cooldownWindowMinutes">CooldownWindowMinutes</a></code> | <code>double</code> | Time window (in minutes) in which only one sampling rate boost can be triggered. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoost.property.maxRate">MaxRate</a></code> | <code>double</code> | The maximum sampling rate X-Ray will apply when it detects anomalies. |

---

##### `CooldownWindowMinutes`<sup>Optional</sup> <a name="CooldownWindowMinutes" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoost.property.cooldownWindowMinutes"></a>

```csharp
public double CooldownWindowMinutes { get; set; }
```

- *Type:* double

Time window (in minutes) in which only one sampling rate boost can be triggered.

After a boost occurs, no further boosts are allowed until the next window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/xray_sampling_rule#cooldown_window_minutes XraySamplingRule#cooldown_window_minutes}

---

##### `MaxRate`<sup>Optional</sup> <a name="MaxRate" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoost.property.maxRate"></a>

```csharp
public double MaxRate { get; set; }
```

- *Type:* double

The maximum sampling rate X-Ray will apply when it detects anomalies.

X-Ray determines the appropriate rate between your baseline and the maximum, depending on anomaly activity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/xray_sampling_rule#max_rate XraySamplingRule#max_rate}

---

### XraySamplingRuleTags <a name="XraySamplingRuleTags" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new XraySamplingRuleTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/xray_sampling_rule#key XraySamplingRule#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/xray_sampling_rule#value XraySamplingRule#value}

---

## Classes <a name="Classes" id="Classes"></a>

### XraySamplingRuleSamplingRuleOutputReference <a name="XraySamplingRuleSamplingRuleOutputReference" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new XraySamplingRuleSamplingRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.putSamplingRateBoost">PutSamplingRateBoost</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.resetAttributes">ResetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.resetFixedRate">ResetFixedRate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.resetHost">ResetHost</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.resetHttpMethod">ResetHttpMethod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.resetPriority">ResetPriority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.resetReservoirSize">ResetReservoirSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.resetResourceArn">ResetResourceArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.resetRuleArn">ResetRuleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.resetRuleName">ResetRuleName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.resetSamplingRateBoost">ResetSamplingRateBoost</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.resetServiceName">ResetServiceName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.resetServiceType">ResetServiceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.resetUrlPath">ResetUrlPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSamplingRateBoost` <a name="PutSamplingRateBoost" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.putSamplingRateBoost"></a>

```csharp
private void PutSamplingRateBoost(XraySamplingRuleSamplingRuleSamplingRateBoost Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.putSamplingRateBoost.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoost">XraySamplingRuleSamplingRuleSamplingRateBoost</a>

---

##### `ResetAttributes` <a name="ResetAttributes" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.resetAttributes"></a>

```csharp
private void ResetAttributes()
```

##### `ResetFixedRate` <a name="ResetFixedRate" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.resetFixedRate"></a>

```csharp
private void ResetFixedRate()
```

##### `ResetHost` <a name="ResetHost" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.resetHost"></a>

```csharp
private void ResetHost()
```

##### `ResetHttpMethod` <a name="ResetHttpMethod" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.resetHttpMethod"></a>

```csharp
private void ResetHttpMethod()
```

##### `ResetPriority` <a name="ResetPriority" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.resetPriority"></a>

```csharp
private void ResetPriority()
```

##### `ResetReservoirSize` <a name="ResetReservoirSize" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.resetReservoirSize"></a>

```csharp
private void ResetReservoirSize()
```

##### `ResetResourceArn` <a name="ResetResourceArn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.resetResourceArn"></a>

```csharp
private void ResetResourceArn()
```

##### `ResetRuleArn` <a name="ResetRuleArn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.resetRuleArn"></a>

```csharp
private void ResetRuleArn()
```

##### `ResetRuleName` <a name="ResetRuleName" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.resetRuleName"></a>

```csharp
private void ResetRuleName()
```

##### `ResetSamplingRateBoost` <a name="ResetSamplingRateBoost" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.resetSamplingRateBoost"></a>

```csharp
private void ResetSamplingRateBoost()
```

##### `ResetServiceName` <a name="ResetServiceName" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.resetServiceName"></a>

```csharp
private void ResetServiceName()
```

##### `ResetServiceType` <a name="ResetServiceType" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.resetServiceType"></a>

```csharp
private void ResetServiceType()
```

##### `ResetUrlPath` <a name="ResetUrlPath" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.resetUrlPath"></a>

```csharp
private void ResetUrlPath()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.resetVersion"></a>

```csharp
private void ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.samplingRateBoost">SamplingRateBoost</a></code> | <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference">XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.attributesInput">AttributesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.fixedRateInput">FixedRateInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.hostInput">HostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.httpMethodInput">HttpMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.priorityInput">PriorityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.reservoirSizeInput">ReservoirSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.resourceArnInput">ResourceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.ruleArnInput">RuleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.ruleNameInput">RuleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.samplingRateBoostInput">SamplingRateBoostInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoost">XraySamplingRuleSamplingRuleSamplingRateBoost</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.serviceNameInput">ServiceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.serviceTypeInput">ServiceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.urlPathInput">UrlPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.versionInput">VersionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.attributes">Attributes</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.fixedRate">FixedRate</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.host">Host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.httpMethod">HttpMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.priority">Priority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.reservoirSize">ReservoirSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.resourceArn">ResourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.ruleArn">RuleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.ruleName">RuleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.serviceName">ServiceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.serviceType">ServiceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.urlPath">UrlPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.version">Version</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule">XraySamplingRuleSamplingRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SamplingRateBoost`<sup>Required</sup> <a name="SamplingRateBoost" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.samplingRateBoost"></a>

```csharp
public XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference SamplingRateBoost { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference">XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference</a>

---

##### `AttributesInput`<sup>Optional</sup> <a name="AttributesInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.attributesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AttributesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `FixedRateInput`<sup>Optional</sup> <a name="FixedRateInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.fixedRateInput"></a>

```csharp
public double FixedRateInput { get; }
```

- *Type:* double

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.hostInput"></a>

```csharp
public string HostInput { get; }
```

- *Type:* string

---

##### `HttpMethodInput`<sup>Optional</sup> <a name="HttpMethodInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.httpMethodInput"></a>

```csharp
public string HttpMethodInput { get; }
```

- *Type:* string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.priorityInput"></a>

```csharp
public double PriorityInput { get; }
```

- *Type:* double

---

##### `ReservoirSizeInput`<sup>Optional</sup> <a name="ReservoirSizeInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.reservoirSizeInput"></a>

```csharp
public double ReservoirSizeInput { get; }
```

- *Type:* double

---

##### `ResourceArnInput`<sup>Optional</sup> <a name="ResourceArnInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.resourceArnInput"></a>

```csharp
public string ResourceArnInput { get; }
```

- *Type:* string

---

##### `RuleArnInput`<sup>Optional</sup> <a name="RuleArnInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.ruleArnInput"></a>

```csharp
public string RuleArnInput { get; }
```

- *Type:* string

---

##### `RuleNameInput`<sup>Optional</sup> <a name="RuleNameInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.ruleNameInput"></a>

```csharp
public string RuleNameInput { get; }
```

- *Type:* string

---

##### `SamplingRateBoostInput`<sup>Optional</sup> <a name="SamplingRateBoostInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.samplingRateBoostInput"></a>

```csharp
public IResolvable|XraySamplingRuleSamplingRuleSamplingRateBoost SamplingRateBoostInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoost">XraySamplingRuleSamplingRuleSamplingRateBoost</a>

---

##### `ServiceNameInput`<sup>Optional</sup> <a name="ServiceNameInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.serviceNameInput"></a>

```csharp
public string ServiceNameInput { get; }
```

- *Type:* string

---

##### `ServiceTypeInput`<sup>Optional</sup> <a name="ServiceTypeInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.serviceTypeInput"></a>

```csharp
public string ServiceTypeInput { get; }
```

- *Type:* string

---

##### `UrlPathInput`<sup>Optional</sup> <a name="UrlPathInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.urlPathInput"></a>

```csharp
public string UrlPathInput { get; }
```

- *Type:* string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.versionInput"></a>

```csharp
public double VersionInput { get; }
```

- *Type:* double

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.attributes"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Attributes { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `FixedRate`<sup>Required</sup> <a name="FixedRate" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.fixedRate"></a>

```csharp
public double FixedRate { get; }
```

- *Type:* double

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.host"></a>

```csharp
public string Host { get; }
```

- *Type:* string

---

##### `HttpMethod`<sup>Required</sup> <a name="HttpMethod" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.httpMethod"></a>

```csharp
public string HttpMethod { get; }
```

- *Type:* string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

##### `ReservoirSize`<sup>Required</sup> <a name="ReservoirSize" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.reservoirSize"></a>

```csharp
public double ReservoirSize { get; }
```

- *Type:* double

---

##### `ResourceArn`<sup>Required</sup> <a name="ResourceArn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.resourceArn"></a>

```csharp
public string ResourceArn { get; }
```

- *Type:* string

---

##### `RuleArn`<sup>Required</sup> <a name="RuleArn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.ruleArn"></a>

```csharp
public string RuleArn { get; }
```

- *Type:* string

---

##### `RuleName`<sup>Required</sup> <a name="RuleName" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.ruleName"></a>

```csharp
public string RuleName { get; }
```

- *Type:* string

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.serviceName"></a>

```csharp
public string ServiceName { get; }
```

- *Type:* string

---

##### `ServiceType`<sup>Required</sup> <a name="ServiceType" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.serviceType"></a>

```csharp
public string ServiceType { get; }
```

- *Type:* string

---

##### `UrlPath`<sup>Required</sup> <a name="UrlPath" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.urlPath"></a>

```csharp
public string UrlPath { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.version"></a>

```csharp
public double Version { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.internalValue"></a>

```csharp
public IResolvable|XraySamplingRuleSamplingRule InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule">XraySamplingRuleSamplingRule</a>

---


### XraySamplingRuleSamplingRuleRecordOutputReference <a name="XraySamplingRuleSamplingRuleRecordOutputReference" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new XraySamplingRuleSamplingRuleRecordOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.putSamplingRule">PutSamplingRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.resetCreatedAt">ResetCreatedAt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.resetModifiedAt">ResetModifiedAt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.resetSamplingRule">ResetSamplingRule</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSamplingRule` <a name="PutSamplingRule" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.putSamplingRule"></a>

```csharp
private void PutSamplingRule(XraySamplingRuleSamplingRuleRecordSamplingRule Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.putSamplingRule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule">XraySamplingRuleSamplingRuleRecordSamplingRule</a>

---

##### `ResetCreatedAt` <a name="ResetCreatedAt" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.resetCreatedAt"></a>

```csharp
private void ResetCreatedAt()
```

##### `ResetModifiedAt` <a name="ResetModifiedAt" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.resetModifiedAt"></a>

```csharp
private void ResetModifiedAt()
```

##### `ResetSamplingRule` <a name="ResetSamplingRule" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.resetSamplingRule"></a>

```csharp
private void ResetSamplingRule()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.property.samplingRule">SamplingRule</a></code> | <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference">XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.property.createdAtInput">CreatedAtInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.property.modifiedAtInput">ModifiedAtInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.property.samplingRuleInput">SamplingRuleInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule">XraySamplingRuleSamplingRuleRecordSamplingRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.property.modifiedAt">ModifiedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecord">XraySamplingRuleSamplingRuleRecord</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SamplingRule`<sup>Required</sup> <a name="SamplingRule" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.property.samplingRule"></a>

```csharp
public XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference SamplingRule { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference">XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference</a>

---

##### `CreatedAtInput`<sup>Optional</sup> <a name="CreatedAtInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.property.createdAtInput"></a>

```csharp
public string CreatedAtInput { get; }
```

- *Type:* string

---

##### `ModifiedAtInput`<sup>Optional</sup> <a name="ModifiedAtInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.property.modifiedAtInput"></a>

```csharp
public string ModifiedAtInput { get; }
```

- *Type:* string

---

##### `SamplingRuleInput`<sup>Optional</sup> <a name="SamplingRuleInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.property.samplingRuleInput"></a>

```csharp
public IResolvable|XraySamplingRuleSamplingRuleRecordSamplingRule SamplingRuleInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule">XraySamplingRuleSamplingRuleRecordSamplingRule</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `ModifiedAt`<sup>Required</sup> <a name="ModifiedAt" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.property.modifiedAt"></a>

```csharp
public string ModifiedAt { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.property.internalValue"></a>

```csharp
public IResolvable|XraySamplingRuleSamplingRuleRecord InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecord">XraySamplingRuleSamplingRuleRecord</a>

---


### XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference <a name="XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.putSamplingRateBoost">PutSamplingRateBoost</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.resetAttributes">ResetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.resetFixedRate">ResetFixedRate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.resetHost">ResetHost</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.resetHttpMethod">ResetHttpMethod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.resetPriority">ResetPriority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.resetReservoirSize">ResetReservoirSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.resetResourceArn">ResetResourceArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.resetRuleArn">ResetRuleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.resetRuleName">ResetRuleName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.resetSamplingRateBoost">ResetSamplingRateBoost</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.resetServiceName">ResetServiceName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.resetServiceType">ResetServiceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.resetUrlPath">ResetUrlPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSamplingRateBoost` <a name="PutSamplingRateBoost" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.putSamplingRateBoost"></a>

```csharp
private void PutSamplingRateBoost(XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoost Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.putSamplingRateBoost.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoost">XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoost</a>

---

##### `ResetAttributes` <a name="ResetAttributes" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.resetAttributes"></a>

```csharp
private void ResetAttributes()
```

##### `ResetFixedRate` <a name="ResetFixedRate" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.resetFixedRate"></a>

```csharp
private void ResetFixedRate()
```

##### `ResetHost` <a name="ResetHost" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.resetHost"></a>

```csharp
private void ResetHost()
```

##### `ResetHttpMethod` <a name="ResetHttpMethod" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.resetHttpMethod"></a>

```csharp
private void ResetHttpMethod()
```

##### `ResetPriority` <a name="ResetPriority" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.resetPriority"></a>

```csharp
private void ResetPriority()
```

##### `ResetReservoirSize` <a name="ResetReservoirSize" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.resetReservoirSize"></a>

```csharp
private void ResetReservoirSize()
```

##### `ResetResourceArn` <a name="ResetResourceArn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.resetResourceArn"></a>

```csharp
private void ResetResourceArn()
```

##### `ResetRuleArn` <a name="ResetRuleArn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.resetRuleArn"></a>

```csharp
private void ResetRuleArn()
```

##### `ResetRuleName` <a name="ResetRuleName" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.resetRuleName"></a>

```csharp
private void ResetRuleName()
```

##### `ResetSamplingRateBoost` <a name="ResetSamplingRateBoost" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.resetSamplingRateBoost"></a>

```csharp
private void ResetSamplingRateBoost()
```

##### `ResetServiceName` <a name="ResetServiceName" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.resetServiceName"></a>

```csharp
private void ResetServiceName()
```

##### `ResetServiceType` <a name="ResetServiceType" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.resetServiceType"></a>

```csharp
private void ResetServiceType()
```

##### `ResetUrlPath` <a name="ResetUrlPath" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.resetUrlPath"></a>

```csharp
private void ResetUrlPath()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.resetVersion"></a>

```csharp
private void ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.samplingRateBoost">SamplingRateBoost</a></code> | <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference">XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.attributesInput">AttributesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.fixedRateInput">FixedRateInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.hostInput">HostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.httpMethodInput">HttpMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.priorityInput">PriorityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.reservoirSizeInput">ReservoirSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.resourceArnInput">ResourceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.ruleArnInput">RuleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.ruleNameInput">RuleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.samplingRateBoostInput">SamplingRateBoostInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoost">XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoost</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.serviceNameInput">ServiceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.serviceTypeInput">ServiceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.urlPathInput">UrlPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.versionInput">VersionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.attributes">Attributes</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.fixedRate">FixedRate</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.host">Host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.httpMethod">HttpMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.priority">Priority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.reservoirSize">ReservoirSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.resourceArn">ResourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.ruleArn">RuleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.ruleName">RuleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.serviceName">ServiceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.serviceType">ServiceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.urlPath">UrlPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.version">Version</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule">XraySamplingRuleSamplingRuleRecordSamplingRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SamplingRateBoost`<sup>Required</sup> <a name="SamplingRateBoost" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.samplingRateBoost"></a>

```csharp
public XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference SamplingRateBoost { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference">XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference</a>

---

##### `AttributesInput`<sup>Optional</sup> <a name="AttributesInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.attributesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AttributesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `FixedRateInput`<sup>Optional</sup> <a name="FixedRateInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.fixedRateInput"></a>

```csharp
public double FixedRateInput { get; }
```

- *Type:* double

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.hostInput"></a>

```csharp
public string HostInput { get; }
```

- *Type:* string

---

##### `HttpMethodInput`<sup>Optional</sup> <a name="HttpMethodInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.httpMethodInput"></a>

```csharp
public string HttpMethodInput { get; }
```

- *Type:* string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.priorityInput"></a>

```csharp
public double PriorityInput { get; }
```

- *Type:* double

---

##### `ReservoirSizeInput`<sup>Optional</sup> <a name="ReservoirSizeInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.reservoirSizeInput"></a>

```csharp
public double ReservoirSizeInput { get; }
```

- *Type:* double

---

##### `ResourceArnInput`<sup>Optional</sup> <a name="ResourceArnInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.resourceArnInput"></a>

```csharp
public string ResourceArnInput { get; }
```

- *Type:* string

---

##### `RuleArnInput`<sup>Optional</sup> <a name="RuleArnInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.ruleArnInput"></a>

```csharp
public string RuleArnInput { get; }
```

- *Type:* string

---

##### `RuleNameInput`<sup>Optional</sup> <a name="RuleNameInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.ruleNameInput"></a>

```csharp
public string RuleNameInput { get; }
```

- *Type:* string

---

##### `SamplingRateBoostInput`<sup>Optional</sup> <a name="SamplingRateBoostInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.samplingRateBoostInput"></a>

```csharp
public IResolvable|XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoost SamplingRateBoostInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoost">XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoost</a>

---

##### `ServiceNameInput`<sup>Optional</sup> <a name="ServiceNameInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.serviceNameInput"></a>

```csharp
public string ServiceNameInput { get; }
```

- *Type:* string

---

##### `ServiceTypeInput`<sup>Optional</sup> <a name="ServiceTypeInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.serviceTypeInput"></a>

```csharp
public string ServiceTypeInput { get; }
```

- *Type:* string

---

##### `UrlPathInput`<sup>Optional</sup> <a name="UrlPathInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.urlPathInput"></a>

```csharp
public string UrlPathInput { get; }
```

- *Type:* string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.versionInput"></a>

```csharp
public double VersionInput { get; }
```

- *Type:* double

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.attributes"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Attributes { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `FixedRate`<sup>Required</sup> <a name="FixedRate" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.fixedRate"></a>

```csharp
public double FixedRate { get; }
```

- *Type:* double

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.host"></a>

```csharp
public string Host { get; }
```

- *Type:* string

---

##### `HttpMethod`<sup>Required</sup> <a name="HttpMethod" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.httpMethod"></a>

```csharp
public string HttpMethod { get; }
```

- *Type:* string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

##### `ReservoirSize`<sup>Required</sup> <a name="ReservoirSize" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.reservoirSize"></a>

```csharp
public double ReservoirSize { get; }
```

- *Type:* double

---

##### `ResourceArn`<sup>Required</sup> <a name="ResourceArn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.resourceArn"></a>

```csharp
public string ResourceArn { get; }
```

- *Type:* string

---

##### `RuleArn`<sup>Required</sup> <a name="RuleArn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.ruleArn"></a>

```csharp
public string RuleArn { get; }
```

- *Type:* string

---

##### `RuleName`<sup>Required</sup> <a name="RuleName" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.ruleName"></a>

```csharp
public string RuleName { get; }
```

- *Type:* string

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.serviceName"></a>

```csharp
public string ServiceName { get; }
```

- *Type:* string

---

##### `ServiceType`<sup>Required</sup> <a name="ServiceType" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.serviceType"></a>

```csharp
public string ServiceType { get; }
```

- *Type:* string

---

##### `UrlPath`<sup>Required</sup> <a name="UrlPath" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.urlPath"></a>

```csharp
public string UrlPath { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.version"></a>

```csharp
public double Version { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.internalValue"></a>

```csharp
public IResolvable|XraySamplingRuleSamplingRuleRecordSamplingRule InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule">XraySamplingRuleSamplingRuleRecordSamplingRule</a>

---


### XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference <a name="XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.resetCooldownWindowMinutes">ResetCooldownWindowMinutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.resetMaxRate">ResetMaxRate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCooldownWindowMinutes` <a name="ResetCooldownWindowMinutes" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.resetCooldownWindowMinutes"></a>

```csharp
private void ResetCooldownWindowMinutes()
```

##### `ResetMaxRate` <a name="ResetMaxRate" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.resetMaxRate"></a>

```csharp
private void ResetMaxRate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.property.cooldownWindowMinutesInput">CooldownWindowMinutesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.property.maxRateInput">MaxRateInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.property.cooldownWindowMinutes">CooldownWindowMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.property.maxRate">MaxRate</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoost">XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoost</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CooldownWindowMinutesInput`<sup>Optional</sup> <a name="CooldownWindowMinutesInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.property.cooldownWindowMinutesInput"></a>

```csharp
public double CooldownWindowMinutesInput { get; }
```

- *Type:* double

---

##### `MaxRateInput`<sup>Optional</sup> <a name="MaxRateInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.property.maxRateInput"></a>

```csharp
public double MaxRateInput { get; }
```

- *Type:* double

---

##### `CooldownWindowMinutes`<sup>Required</sup> <a name="CooldownWindowMinutes" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.property.cooldownWindowMinutes"></a>

```csharp
public double CooldownWindowMinutes { get; }
```

- *Type:* double

---

##### `MaxRate`<sup>Required</sup> <a name="MaxRate" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.property.maxRate"></a>

```csharp
public double MaxRate { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.property.internalValue"></a>

```csharp
public IResolvable|XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoost InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoost">XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoost</a>

---


### XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference <a name="XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.resetCooldownWindowMinutes">ResetCooldownWindowMinutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.resetMaxRate">ResetMaxRate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCooldownWindowMinutes` <a name="ResetCooldownWindowMinutes" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.resetCooldownWindowMinutes"></a>

```csharp
private void ResetCooldownWindowMinutes()
```

##### `ResetMaxRate` <a name="ResetMaxRate" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.resetMaxRate"></a>

```csharp
private void ResetMaxRate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.property.cooldownWindowMinutesInput">CooldownWindowMinutesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.property.maxRateInput">MaxRateInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.property.cooldownWindowMinutes">CooldownWindowMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.property.maxRate">MaxRate</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoost">XraySamplingRuleSamplingRuleSamplingRateBoost</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CooldownWindowMinutesInput`<sup>Optional</sup> <a name="CooldownWindowMinutesInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.property.cooldownWindowMinutesInput"></a>

```csharp
public double CooldownWindowMinutesInput { get; }
```

- *Type:* double

---

##### `MaxRateInput`<sup>Optional</sup> <a name="MaxRateInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.property.maxRateInput"></a>

```csharp
public double MaxRateInput { get; }
```

- *Type:* double

---

##### `CooldownWindowMinutes`<sup>Required</sup> <a name="CooldownWindowMinutes" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.property.cooldownWindowMinutes"></a>

```csharp
public double CooldownWindowMinutes { get; }
```

- *Type:* double

---

##### `MaxRate`<sup>Required</sup> <a name="MaxRate" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.property.maxRate"></a>

```csharp
public double MaxRate { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.property.internalValue"></a>

```csharp
public IResolvable|XraySamplingRuleSamplingRuleSamplingRateBoost InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoost">XraySamplingRuleSamplingRuleSamplingRateBoost</a>

---


### XraySamplingRuleSamplingRuleUpdateOutputReference <a name="XraySamplingRuleSamplingRuleUpdateOutputReference" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new XraySamplingRuleSamplingRuleUpdateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.putSamplingRateBoost">PutSamplingRateBoost</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.resetAttributes">ResetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.resetFixedRate">ResetFixedRate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.resetHost">ResetHost</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.resetHttpMethod">ResetHttpMethod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.resetPriority">ResetPriority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.resetReservoirSize">ResetReservoirSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.resetResourceArn">ResetResourceArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.resetRuleArn">ResetRuleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.resetRuleName">ResetRuleName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.resetSamplingRateBoost">ResetSamplingRateBoost</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.resetServiceName">ResetServiceName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.resetServiceType">ResetServiceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.resetUrlPath">ResetUrlPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSamplingRateBoost` <a name="PutSamplingRateBoost" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.putSamplingRateBoost"></a>

```csharp
private void PutSamplingRateBoost(XraySamplingRuleSamplingRuleUpdateSamplingRateBoost Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.putSamplingRateBoost.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoost">XraySamplingRuleSamplingRuleUpdateSamplingRateBoost</a>

---

##### `ResetAttributes` <a name="ResetAttributes" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.resetAttributes"></a>

```csharp
private void ResetAttributes()
```

##### `ResetFixedRate` <a name="ResetFixedRate" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.resetFixedRate"></a>

```csharp
private void ResetFixedRate()
```

##### `ResetHost` <a name="ResetHost" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.resetHost"></a>

```csharp
private void ResetHost()
```

##### `ResetHttpMethod` <a name="ResetHttpMethod" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.resetHttpMethod"></a>

```csharp
private void ResetHttpMethod()
```

##### `ResetPriority` <a name="ResetPriority" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.resetPriority"></a>

```csharp
private void ResetPriority()
```

##### `ResetReservoirSize` <a name="ResetReservoirSize" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.resetReservoirSize"></a>

```csharp
private void ResetReservoirSize()
```

##### `ResetResourceArn` <a name="ResetResourceArn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.resetResourceArn"></a>

```csharp
private void ResetResourceArn()
```

##### `ResetRuleArn` <a name="ResetRuleArn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.resetRuleArn"></a>

```csharp
private void ResetRuleArn()
```

##### `ResetRuleName` <a name="ResetRuleName" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.resetRuleName"></a>

```csharp
private void ResetRuleName()
```

##### `ResetSamplingRateBoost` <a name="ResetSamplingRateBoost" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.resetSamplingRateBoost"></a>

```csharp
private void ResetSamplingRateBoost()
```

##### `ResetServiceName` <a name="ResetServiceName" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.resetServiceName"></a>

```csharp
private void ResetServiceName()
```

##### `ResetServiceType` <a name="ResetServiceType" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.resetServiceType"></a>

```csharp
private void ResetServiceType()
```

##### `ResetUrlPath` <a name="ResetUrlPath" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.resetUrlPath"></a>

```csharp
private void ResetUrlPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.samplingRateBoost">SamplingRateBoost</a></code> | <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference">XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.attributesInput">AttributesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.fixedRateInput">FixedRateInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.hostInput">HostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.httpMethodInput">HttpMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.priorityInput">PriorityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.reservoirSizeInput">ReservoirSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.resourceArnInput">ResourceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.ruleArnInput">RuleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.ruleNameInput">RuleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.samplingRateBoostInput">SamplingRateBoostInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoost">XraySamplingRuleSamplingRuleUpdateSamplingRateBoost</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.serviceNameInput">ServiceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.serviceTypeInput">ServiceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.urlPathInput">UrlPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.attributes">Attributes</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.fixedRate">FixedRate</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.host">Host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.httpMethod">HttpMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.priority">Priority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.reservoirSize">ReservoirSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.resourceArn">ResourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.ruleArn">RuleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.ruleName">RuleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.serviceName">ServiceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.serviceType">ServiceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.urlPath">UrlPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate">XraySamplingRuleSamplingRuleUpdate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SamplingRateBoost`<sup>Required</sup> <a name="SamplingRateBoost" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.samplingRateBoost"></a>

```csharp
public XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference SamplingRateBoost { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference">XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference</a>

---

##### `AttributesInput`<sup>Optional</sup> <a name="AttributesInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.attributesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AttributesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `FixedRateInput`<sup>Optional</sup> <a name="FixedRateInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.fixedRateInput"></a>

```csharp
public double FixedRateInput { get; }
```

- *Type:* double

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.hostInput"></a>

```csharp
public string HostInput { get; }
```

- *Type:* string

---

##### `HttpMethodInput`<sup>Optional</sup> <a name="HttpMethodInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.httpMethodInput"></a>

```csharp
public string HttpMethodInput { get; }
```

- *Type:* string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.priorityInput"></a>

```csharp
public double PriorityInput { get; }
```

- *Type:* double

---

##### `ReservoirSizeInput`<sup>Optional</sup> <a name="ReservoirSizeInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.reservoirSizeInput"></a>

```csharp
public double ReservoirSizeInput { get; }
```

- *Type:* double

---

##### `ResourceArnInput`<sup>Optional</sup> <a name="ResourceArnInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.resourceArnInput"></a>

```csharp
public string ResourceArnInput { get; }
```

- *Type:* string

---

##### `RuleArnInput`<sup>Optional</sup> <a name="RuleArnInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.ruleArnInput"></a>

```csharp
public string RuleArnInput { get; }
```

- *Type:* string

---

##### `RuleNameInput`<sup>Optional</sup> <a name="RuleNameInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.ruleNameInput"></a>

```csharp
public string RuleNameInput { get; }
```

- *Type:* string

---

##### `SamplingRateBoostInput`<sup>Optional</sup> <a name="SamplingRateBoostInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.samplingRateBoostInput"></a>

```csharp
public IResolvable|XraySamplingRuleSamplingRuleUpdateSamplingRateBoost SamplingRateBoostInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoost">XraySamplingRuleSamplingRuleUpdateSamplingRateBoost</a>

---

##### `ServiceNameInput`<sup>Optional</sup> <a name="ServiceNameInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.serviceNameInput"></a>

```csharp
public string ServiceNameInput { get; }
```

- *Type:* string

---

##### `ServiceTypeInput`<sup>Optional</sup> <a name="ServiceTypeInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.serviceTypeInput"></a>

```csharp
public string ServiceTypeInput { get; }
```

- *Type:* string

---

##### `UrlPathInput`<sup>Optional</sup> <a name="UrlPathInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.urlPathInput"></a>

```csharp
public string UrlPathInput { get; }
```

- *Type:* string

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.attributes"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Attributes { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `FixedRate`<sup>Required</sup> <a name="FixedRate" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.fixedRate"></a>

```csharp
public double FixedRate { get; }
```

- *Type:* double

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.host"></a>

```csharp
public string Host { get; }
```

- *Type:* string

---

##### `HttpMethod`<sup>Required</sup> <a name="HttpMethod" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.httpMethod"></a>

```csharp
public string HttpMethod { get; }
```

- *Type:* string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

##### `ReservoirSize`<sup>Required</sup> <a name="ReservoirSize" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.reservoirSize"></a>

```csharp
public double ReservoirSize { get; }
```

- *Type:* double

---

##### `ResourceArn`<sup>Required</sup> <a name="ResourceArn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.resourceArn"></a>

```csharp
public string ResourceArn { get; }
```

- *Type:* string

---

##### `RuleArn`<sup>Required</sup> <a name="RuleArn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.ruleArn"></a>

```csharp
public string RuleArn { get; }
```

- *Type:* string

---

##### `RuleName`<sup>Required</sup> <a name="RuleName" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.ruleName"></a>

```csharp
public string RuleName { get; }
```

- *Type:* string

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.serviceName"></a>

```csharp
public string ServiceName { get; }
```

- *Type:* string

---

##### `ServiceType`<sup>Required</sup> <a name="ServiceType" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.serviceType"></a>

```csharp
public string ServiceType { get; }
```

- *Type:* string

---

##### `UrlPath`<sup>Required</sup> <a name="UrlPath" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.urlPath"></a>

```csharp
public string UrlPath { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.internalValue"></a>

```csharp
public IResolvable|XraySamplingRuleSamplingRuleUpdate InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate">XraySamplingRuleSamplingRuleUpdate</a>

---


### XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference <a name="XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.resetCooldownWindowMinutes">ResetCooldownWindowMinutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.resetMaxRate">ResetMaxRate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCooldownWindowMinutes` <a name="ResetCooldownWindowMinutes" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.resetCooldownWindowMinutes"></a>

```csharp
private void ResetCooldownWindowMinutes()
```

##### `ResetMaxRate` <a name="ResetMaxRate" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.resetMaxRate"></a>

```csharp
private void ResetMaxRate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.property.cooldownWindowMinutesInput">CooldownWindowMinutesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.property.maxRateInput">MaxRateInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.property.cooldownWindowMinutes">CooldownWindowMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.property.maxRate">MaxRate</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoost">XraySamplingRuleSamplingRuleUpdateSamplingRateBoost</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CooldownWindowMinutesInput`<sup>Optional</sup> <a name="CooldownWindowMinutesInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.property.cooldownWindowMinutesInput"></a>

```csharp
public double CooldownWindowMinutesInput { get; }
```

- *Type:* double

---

##### `MaxRateInput`<sup>Optional</sup> <a name="MaxRateInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.property.maxRateInput"></a>

```csharp
public double MaxRateInput { get; }
```

- *Type:* double

---

##### `CooldownWindowMinutes`<sup>Required</sup> <a name="CooldownWindowMinutes" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.property.cooldownWindowMinutes"></a>

```csharp
public double CooldownWindowMinutes { get; }
```

- *Type:* double

---

##### `MaxRate`<sup>Required</sup> <a name="MaxRate" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.property.maxRate"></a>

```csharp
public double MaxRate { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.property.internalValue"></a>

```csharp
public IResolvable|XraySamplingRuleSamplingRuleUpdateSamplingRateBoost InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoost">XraySamplingRuleSamplingRuleUpdateSamplingRateBoost</a>

---


### XraySamplingRuleTagsList <a name="XraySamplingRuleTagsList" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new XraySamplingRuleTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsList.get"></a>

```csharp
private XraySamplingRuleTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTags">XraySamplingRuleTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsList.property.internalValue"></a>

```csharp
public IResolvable|XraySamplingRuleTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTags">XraySamplingRuleTags</a>[]

---


### XraySamplingRuleTagsOutputReference <a name="XraySamplingRuleTagsOutputReference" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new XraySamplingRuleTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTags">XraySamplingRuleTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|XraySamplingRuleTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTags">XraySamplingRuleTags</a>

---



