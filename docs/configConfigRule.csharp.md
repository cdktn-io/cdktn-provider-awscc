# `configConfigRule` Submodule <a name="`configConfigRule` Submodule" id="@cdktn/provider-awscc.configConfigRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConfigConfigRule <a name="ConfigConfigRule" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/config_config_rule awscc_config_config_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConfigConfigRule(Construct Scope, string Id, ConfigConfigRuleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleConfig">ConfigConfigRuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleConfig">ConfigConfigRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.putCompliance">PutCompliance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.putEvaluationModes">PutEvaluationModes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.putScope">PutScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.putSource">PutSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.resetCompliance">ResetCompliance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.resetConfigRuleName">ResetConfigRuleName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.resetEvaluationModes">ResetEvaluationModes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.resetInputParameters">ResetInputParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.resetMaximumExecutionFrequency">ResetMaximumExecutionFrequency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.resetScope">ResetScope</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCompliance` <a name="PutCompliance" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.putCompliance"></a>

```csharp
private void PutCompliance(ConfigConfigRuleCompliance Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.putCompliance.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleCompliance">ConfigConfigRuleCompliance</a>

---

##### `PutEvaluationModes` <a name="PutEvaluationModes" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.putEvaluationModes"></a>

```csharp
private void PutEvaluationModes(IResolvable|ConfigConfigRuleEvaluationModes[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.putEvaluationModes.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModes">ConfigConfigRuleEvaluationModes</a>[]

---

##### `PutScope` <a name="PutScope" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.putScope"></a>

```csharp
private void PutScope(ConfigConfigRuleScope Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.putScope.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScope">ConfigConfigRuleScope</a>

---

##### `PutSource` <a name="PutSource" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.putSource"></a>

```csharp
private void PutSource(ConfigConfigRuleSource Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.putSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSource">ConfigConfigRuleSource</a>

---

##### `ResetCompliance` <a name="ResetCompliance" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.resetCompliance"></a>

```csharp
private void ResetCompliance()
```

##### `ResetConfigRuleName` <a name="ResetConfigRuleName" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.resetConfigRuleName"></a>

```csharp
private void ResetConfigRuleName()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEvaluationModes` <a name="ResetEvaluationModes" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.resetEvaluationModes"></a>

```csharp
private void ResetEvaluationModes()
```

##### `ResetInputParameters` <a name="ResetInputParameters" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.resetInputParameters"></a>

```csharp
private void ResetInputParameters()
```

##### `ResetMaximumExecutionFrequency` <a name="ResetMaximumExecutionFrequency" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.resetMaximumExecutionFrequency"></a>

```csharp
private void ResetMaximumExecutionFrequency()
```

##### `ResetScope` <a name="ResetScope" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.resetScope"></a>

```csharp
private void ResetScope()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ConfigConfigRule resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ConfigConfigRule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ConfigConfigRule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ConfigConfigRule.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ConfigConfigRule.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ConfigConfigRule resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ConfigConfigRule to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ConfigConfigRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/config_config_rule#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ConfigConfigRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.compliance">Compliance</a></code> | <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference">ConfigConfigRuleComplianceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.configRuleId">ConfigRuleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.evaluationModes">EvaluationModes</a></code> | <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesList">ConfigConfigRuleEvaluationModesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.scope">Scope</a></code> | <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference">ConfigConfigRuleScopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.source">Source</a></code> | <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference">ConfigConfigRuleSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.complianceInput">ComplianceInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleCompliance">ConfigConfigRuleCompliance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.configRuleNameInput">ConfigRuleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.evaluationModesInput">EvaluationModesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModes">ConfigConfigRuleEvaluationModes</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.inputParametersInput">InputParametersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.maximumExecutionFrequencyInput">MaximumExecutionFrequencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.scopeInput">ScopeInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScope">ConfigConfigRuleScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.sourceInput">SourceInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSource">ConfigConfigRuleSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.configRuleName">ConfigRuleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.inputParameters">InputParameters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.maximumExecutionFrequency">MaximumExecutionFrequency</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Compliance`<sup>Required</sup> <a name="Compliance" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.compliance"></a>

```csharp
public ConfigConfigRuleComplianceOutputReference Compliance { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference">ConfigConfigRuleComplianceOutputReference</a>

---

##### `ConfigRuleId`<sup>Required</sup> <a name="ConfigRuleId" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.configRuleId"></a>

```csharp
public string ConfigRuleId { get; }
```

- *Type:* string

---

##### `EvaluationModes`<sup>Required</sup> <a name="EvaluationModes" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.evaluationModes"></a>

```csharp
public ConfigConfigRuleEvaluationModesList EvaluationModes { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesList">ConfigConfigRuleEvaluationModesList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.scope"></a>

```csharp
public ConfigConfigRuleScopeOutputReference Scope { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference">ConfigConfigRuleScopeOutputReference</a>

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.source"></a>

```csharp
public ConfigConfigRuleSourceOutputReference Source { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference">ConfigConfigRuleSourceOutputReference</a>

---

##### `ComplianceInput`<sup>Optional</sup> <a name="ComplianceInput" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.complianceInput"></a>

```csharp
public IResolvable|ConfigConfigRuleCompliance ComplianceInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleCompliance">ConfigConfigRuleCompliance</a>

---

##### `ConfigRuleNameInput`<sup>Optional</sup> <a name="ConfigRuleNameInput" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.configRuleNameInput"></a>

```csharp
public string ConfigRuleNameInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EvaluationModesInput`<sup>Optional</sup> <a name="EvaluationModesInput" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.evaluationModesInput"></a>

```csharp
public IResolvable|ConfigConfigRuleEvaluationModes[] EvaluationModesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModes">ConfigConfigRuleEvaluationModes</a>[]

---

##### `InputParametersInput`<sup>Optional</sup> <a name="InputParametersInput" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.inputParametersInput"></a>

```csharp
public string InputParametersInput { get; }
```

- *Type:* string

---

##### `MaximumExecutionFrequencyInput`<sup>Optional</sup> <a name="MaximumExecutionFrequencyInput" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.maximumExecutionFrequencyInput"></a>

```csharp
public string MaximumExecutionFrequencyInput { get; }
```

- *Type:* string

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.scopeInput"></a>

```csharp
public IResolvable|ConfigConfigRuleScope ScopeInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScope">ConfigConfigRuleScope</a>

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.sourceInput"></a>

```csharp
public IResolvable|ConfigConfigRuleSource SourceInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSource">ConfigConfigRuleSource</a>

---

##### `ConfigRuleName`<sup>Required</sup> <a name="ConfigRuleName" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.configRuleName"></a>

```csharp
public string ConfigRuleName { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `InputParameters`<sup>Required</sup> <a name="InputParameters" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.inputParameters"></a>

```csharp
public string InputParameters { get; }
```

- *Type:* string

---

##### `MaximumExecutionFrequency`<sup>Required</sup> <a name="MaximumExecutionFrequency" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.maximumExecutionFrequency"></a>

```csharp
public string MaximumExecutionFrequency { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ConfigConfigRuleCompliance <a name="ConfigConfigRuleCompliance" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleCompliance"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleCompliance.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConfigConfigRuleCompliance {

};
```


### ConfigConfigRuleConfig <a name="ConfigConfigRuleConfig" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConfigConfigRuleConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    ConfigConfigRuleSource Source,
    ConfigConfigRuleCompliance Compliance = null,
    string ConfigRuleName = null,
    string Description = null,
    IResolvable|ConfigConfigRuleEvaluationModes[] EvaluationModes = null,
    string InputParameters = null,
    string MaximumExecutionFrequency = null,
    ConfigConfigRuleScope Scope = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleConfig.property.source">Source</a></code> | <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSource">ConfigConfigRuleSource</a></code> | Provides the rule owner (```` for managed rules, ``CUSTOM_POLICY`` for Custom Policy rules, and ``CUSTOM_LAMBDA`` for Custom Lambda rules), the rule identifier, and the notifications that cause the function to evaluate your AWS resources. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleConfig.property.compliance">Compliance</a></code> | <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleCompliance">ConfigConfigRuleCompliance</a></code> | Indicates whether an AWS resource or CC rule is compliant and provides the number of contributors that affect the compliance. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleConfig.property.configRuleName">ConfigRuleName</a></code> | <code>string</code> | A name for the CC rule. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleConfig.property.description">Description</a></code> | <code>string</code> | The description that you provide for the CC rule. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleConfig.property.evaluationModes">EvaluationModes</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModes">ConfigConfigRuleEvaluationModes</a>[]</code> | The modes the CC rule can be evaluated in. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleConfig.property.inputParameters">InputParameters</a></code> | <code>string</code> | A string, in JSON format, that is passed to the CC rule Lambda function. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleConfig.property.maximumExecutionFrequency">MaximumExecutionFrequency</a></code> | <code>string</code> | The maximum frequency with which CC runs evaluations for a rule. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleConfig.property.scope">Scope</a></code> | <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScope">ConfigConfigRuleScope</a></code> | Defines which resources can trigger an evaluation for the rule. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleConfig.property.source"></a>

```csharp
public ConfigConfigRuleSource Source { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSource">ConfigConfigRuleSource</a>

Provides the rule owner (```` for managed rules, ``CUSTOM_POLICY`` for Custom Policy rules, and ``CUSTOM_LAMBDA`` for Custom Lambda rules), the rule identifier, and the notifications that cause the function to evaluate your AWS resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/config_config_rule#source ConfigConfigRule#source}

---

##### `Compliance`<sup>Optional</sup> <a name="Compliance" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleConfig.property.compliance"></a>

```csharp
public ConfigConfigRuleCompliance Compliance { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleCompliance">ConfigConfigRuleCompliance</a>

Indicates whether an AWS resource or CC rule is compliant and provides the number of contributors that affect the compliance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/config_config_rule#compliance ConfigConfigRule#compliance}

---

##### `ConfigRuleName`<sup>Optional</sup> <a name="ConfigRuleName" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleConfig.property.configRuleName"></a>

```csharp
public string ConfigRuleName { get; set; }
```

- *Type:* string

A name for the CC rule.

If you don't specify a name, CFN generates a unique physical ID and uses that ID for the rule name. For more information, see [Name Type](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-name.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/config_config_rule#config_rule_name ConfigConfigRule#config_rule_name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description that you provide for the CC rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/config_config_rule#description ConfigConfigRule#description}

---

##### `EvaluationModes`<sup>Optional</sup> <a name="EvaluationModes" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleConfig.property.evaluationModes"></a>

```csharp
public IResolvable|ConfigConfigRuleEvaluationModes[] EvaluationModes { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModes">ConfigConfigRuleEvaluationModes</a>[]

The modes the CC rule can be evaluated in.

The valid values are distinct objects. By default, the value is Detective evaluation mode only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/config_config_rule#evaluation_modes ConfigConfigRule#evaluation_modes}

---

##### `InputParameters`<sup>Optional</sup> <a name="InputParameters" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleConfig.property.inputParameters"></a>

```csharp
public string InputParameters { get; set; }
```

- *Type:* string

A string, in JSON format, that is passed to the CC rule Lambda function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/config_config_rule#input_parameters ConfigConfigRule#input_parameters}

---

##### `MaximumExecutionFrequency`<sup>Optional</sup> <a name="MaximumExecutionFrequency" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleConfig.property.maximumExecutionFrequency"></a>

```csharp
public string MaximumExecutionFrequency { get; set; }
```

- *Type:* string

The maximum frequency with which CC runs evaluations for a rule.

You can specify a value for `MaximumExecutionFrequency` when:

* You are using an AWS managed rule that is triggered at a periodic frequency.
* Your custom rule is triggered when CC delivers the configuration snapshot. For more information, see [ConfigSnapshotDeliveryProperties](https://docs.aws.amazon.com/config/latest/APIReference/API_ConfigSnapshotDeliveryProperties.html).

By default, rules with a periodic trigger are evaluated every 24 hours. To change the frequency, specify a valid value for the `MaximumExecutionFrequency` parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/config_config_rule#maximum_execution_frequency ConfigConfigRule#maximum_execution_frequency}

---

##### `Scope`<sup>Optional</sup> <a name="Scope" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleConfig.property.scope"></a>

```csharp
public ConfigConfigRuleScope Scope { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScope">ConfigConfigRuleScope</a>

Defines which resources can trigger an evaluation for the rule.

The scope can include one or more resource types, a combination of one resource type and one resource ID, or a combination of a tag key and value. Specify a scope to constrain the resources that can trigger an evaluation for the rule. If you do not specify a scope, evaluations are triggered when any resource in the recording group changes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/config_config_rule#scope ConfigConfigRule#scope}

---

### ConfigConfigRuleEvaluationModes <a name="ConfigConfigRuleEvaluationModes" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModes.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConfigConfigRuleEvaluationModes {
    string Mode = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModes.property.mode">Mode</a></code> | <code>string</code> | The mode of an evaluation. The valid values are Detective or Proactive. |

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModes.property.mode"></a>

```csharp
public string Mode { get; set; }
```

- *Type:* string

The mode of an evaluation. The valid values are Detective or Proactive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/config_config_rule#mode ConfigConfigRule#mode}

---

### ConfigConfigRuleScope <a name="ConfigConfigRuleScope" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScope"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScope.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConfigConfigRuleScope {
    string ComplianceResourceId = null,
    string[] ComplianceResourceTypes = null,
    string TagKey = null,
    string TagValue = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScope.property.complianceResourceId">ComplianceResourceId</a></code> | <code>string</code> | The ID of the only AWS resource that you want to trigger an evaluation for the rule. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScope.property.complianceResourceTypes">ComplianceResourceTypes</a></code> | <code>string[]</code> | The resource types of only those AWS resources that you want to trigger an evaluation for the rule. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScope.property.tagKey">TagKey</a></code> | <code>string</code> | The tag key that is applied to only those AWS resources that you want to trigger an evaluation for the rule. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScope.property.tagValue">TagValue</a></code> | <code>string</code> | The tag value applied to only those AWS resources that you want to trigger an evaluation for the rule. |

---

##### `ComplianceResourceId`<sup>Optional</sup> <a name="ComplianceResourceId" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScope.property.complianceResourceId"></a>

```csharp
public string ComplianceResourceId { get; set; }
```

- *Type:* string

The ID of the only AWS resource that you want to trigger an evaluation for the rule.

If you specify a resource ID, you must specify one resource type for `ComplianceResourceTypes`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/config_config_rule#compliance_resource_id ConfigConfigRule#compliance_resource_id}

---

##### `ComplianceResourceTypes`<sup>Optional</sup> <a name="ComplianceResourceTypes" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScope.property.complianceResourceTypes"></a>

```csharp
public string[] ComplianceResourceTypes { get; set; }
```

- *Type:* string[]

The resource types of only those AWS resources that you want to trigger an evaluation for the rule.

You can only specify one type if you also specify a resource ID for `ComplianceResourceId`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/config_config_rule#compliance_resource_types ConfigConfigRule#compliance_resource_types}

---

##### `TagKey`<sup>Optional</sup> <a name="TagKey" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScope.property.tagKey"></a>

```csharp
public string TagKey { get; set; }
```

- *Type:* string

The tag key that is applied to only those AWS resources that you want to trigger an evaluation for the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/config_config_rule#tag_key ConfigConfigRule#tag_key}

---

##### `TagValue`<sup>Optional</sup> <a name="TagValue" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScope.property.tagValue"></a>

```csharp
public string TagValue { get; set; }
```

- *Type:* string

The tag value applied to only those AWS resources that you want to trigger an evaluation for the rule.

If you specify a value for `TagValue`, you must also specify a value for `TagKey`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/config_config_rule#tag_value ConfigConfigRule#tag_value}

---

### ConfigConfigRuleSource <a name="ConfigConfigRuleSource" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSource.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConfigConfigRuleSource {
    string Owner,
    ConfigConfigRuleSourceCustomPolicyDetails CustomPolicyDetails = null,
    IResolvable|ConfigConfigRuleSourceSourceDetails[] SourceDetails = null,
    string SourceIdentifier = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSource.property.owner">Owner</a></code> | <code>string</code> | Indicates whether AWS or the customer owns and manages the CC rule. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSource.property.customPolicyDetails">CustomPolicyDetails</a></code> | <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetails">ConfigConfigRuleSourceCustomPolicyDetails</a></code> | Provides the runtime system, policy definition, and whether debug logging is enabled. Required when owner is set to ``CUSTOM_POLICY``. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSource.property.sourceDetails">SourceDetails</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetails">ConfigConfigRuleSourceSourceDetails</a>[]</code> | Provides the source and the message types that cause CC to evaluate your AWS resources against a rule. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSource.property.sourceIdentifier">SourceIdentifier</a></code> | <code>string</code> | For CC Managed rules, a predefined identifier from a list. |

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSource.property.owner"></a>

```csharp
public string Owner { get; set; }
```

- *Type:* string

Indicates whether AWS or the customer owns and manages the CC rule.

CC Managed Rules are predefined rules owned by AWS. For more information, see [Managed Rules](https://docs.aws.amazon.com/config/latest/developerguide/evaluate-config_use-managed-rules.html) in the *developer guide*.
CC Custom Rules are rules that you can develop either with Guard (`CUSTOM_POLICY`) or LAMlong (`CUSTOM_LAMBDA`). For more information, see [Custom Rules](https://docs.aws.amazon.com/config/latest/developerguide/evaluate-config_develop-rules.html) in the *developer guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/config_config_rule#owner ConfigConfigRule#owner}

---

##### `CustomPolicyDetails`<sup>Optional</sup> <a name="CustomPolicyDetails" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSource.property.customPolicyDetails"></a>

```csharp
public ConfigConfigRuleSourceCustomPolicyDetails CustomPolicyDetails { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetails">ConfigConfigRuleSourceCustomPolicyDetails</a>

Provides the runtime system, policy definition, and whether debug logging is enabled. Required when owner is set to ``CUSTOM_POLICY``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/config_config_rule#custom_policy_details ConfigConfigRule#custom_policy_details}

---

##### `SourceDetails`<sup>Optional</sup> <a name="SourceDetails" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSource.property.sourceDetails"></a>

```csharp
public IResolvable|ConfigConfigRuleSourceSourceDetails[] SourceDetails { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetails">ConfigConfigRuleSourceSourceDetails</a>[]

Provides the source and the message types that cause CC to evaluate your AWS resources against a rule.

It also provides the frequency with which you want CC to run evaluations for the rule if the trigger type is periodic.
If the owner is set to `CUSTOM_POLICY`, the only acceptable values for the CC rule trigger message type are `ConfigurationItemChangeNotification` and `OversizedConfigurationItemChangeNotification`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/config_config_rule#source_details ConfigConfigRule#source_details}

---

##### `SourceIdentifier`<sup>Optional</sup> <a name="SourceIdentifier" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSource.property.sourceIdentifier"></a>

```csharp
public string SourceIdentifier { get; set; }
```

- *Type:* string

For CC Managed rules, a predefined identifier from a list.

For example, `IAM_PASSWORD_POLICY` is a managed rule. To reference a managed rule, see [List of Managed Rules](https://docs.aws.amazon.com/config/latest/developerguide/managed-rules-by-aws-config.html).
For CC Custom Lambda rules, the identifier is the Amazon Resource Name (ARN) of the rule's LAMlong function, such as `arn:aws:lambda:us-east-2:123456789012:function:custom_rule_name`.
For CC Custom Policy rules, this field will be ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/config_config_rule#source_identifier ConfigConfigRule#source_identifier}

---

### ConfigConfigRuleSourceCustomPolicyDetails <a name="ConfigConfigRuleSourceCustomPolicyDetails" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetails.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConfigConfigRuleSourceCustomPolicyDetails {
    bool|IResolvable EnableDebugLogDelivery = null,
    string PolicyRuntime = null,
    string PolicyText = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetails.property.enableDebugLogDelivery">EnableDebugLogDelivery</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | The boolean expression for enabling debug logging for your CC Custom Policy rule. The default value is ``false``. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetails.property.policyRuntime">PolicyRuntime</a></code> | <code>string</code> | The runtime system for your CC Custom Policy rule. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetails.property.policyText">PolicyText</a></code> | <code>string</code> | The policy definition containing the logic for your CC Custom Policy rule. |

---

##### `EnableDebugLogDelivery`<sup>Optional</sup> <a name="EnableDebugLogDelivery" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetails.property.enableDebugLogDelivery"></a>

```csharp
public bool|IResolvable EnableDebugLogDelivery { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

The boolean expression for enabling debug logging for your CC Custom Policy rule. The default value is ``false``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/config_config_rule#enable_debug_log_delivery ConfigConfigRule#enable_debug_log_delivery}

---

##### `PolicyRuntime`<sup>Optional</sup> <a name="PolicyRuntime" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetails.property.policyRuntime"></a>

```csharp
public string PolicyRuntime { get; set; }
```

- *Type:* string

The runtime system for your CC Custom Policy rule.

Guard is a policy-as-code language that allows you to write policies that are enforced by CC Custom Policy rules. For more information about Guard, see the [Guard GitHub Repository](https://docs.aws.amazon.com/https://github.com/aws-cloudformation/cloudformation-guard).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/config_config_rule#policy_runtime ConfigConfigRule#policy_runtime}

---

##### `PolicyText`<sup>Optional</sup> <a name="PolicyText" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetails.property.policyText"></a>

```csharp
public string PolicyText { get; set; }
```

- *Type:* string

The policy definition containing the logic for your CC Custom Policy rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/config_config_rule#policy_text ConfigConfigRule#policy_text}

---

### ConfigConfigRuleSourceSourceDetails <a name="ConfigConfigRuleSourceSourceDetails" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetails.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConfigConfigRuleSourceSourceDetails {
    string EventSource = null,
    string MaximumExecutionFrequency = null,
    string MessageType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetails.property.eventSource">EventSource</a></code> | <code>string</code> | The source of the event, such as an AWS service, that triggers CC to evaluate your AWS resources. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetails.property.maximumExecutionFrequency">MaximumExecutionFrequency</a></code> | <code>string</code> | The frequency at which you want CC to run evaluations for a custom rule with a periodic trigger. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetails.property.messageType">MessageType</a></code> | <code>string</code> | The type of notification that triggers CC to run an evaluation for a rule. |

---

##### `EventSource`<sup>Optional</sup> <a name="EventSource" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetails.property.eventSource"></a>

```csharp
public string EventSource { get; set; }
```

- *Type:* string

The source of the event, such as an AWS service, that triggers CC to evaluate your AWS resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/config_config_rule#event_source ConfigConfigRule#event_source}

---

##### `MaximumExecutionFrequency`<sup>Optional</sup> <a name="MaximumExecutionFrequency" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetails.property.maximumExecutionFrequency"></a>

```csharp
public string MaximumExecutionFrequency { get; set; }
```

- *Type:* string

The frequency at which you want CC to run evaluations for a custom rule with a periodic trigger.

If you specify a value for `MaximumExecutionFrequency`, then `MessageType` must use the `ScheduledNotification` value.
By default, rules with a periodic trigger are evaluated every 24 hours. To change the frequency, specify a valid value for the `MaximumExecutionFrequency` parameter.
Based on the valid value you choose, CC runs evaluations once for each valid value. For example, if you choose `Three_Hours`, CC runs evaluations once every three hours. In this case, `Three_Hours` is the frequency of this rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/config_config_rule#maximum_execution_frequency ConfigConfigRule#maximum_execution_frequency}

---

##### `MessageType`<sup>Optional</sup> <a name="MessageType" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetails.property.messageType"></a>

```csharp
public string MessageType { get; set; }
```

- *Type:* string

The type of notification that triggers CC to run an evaluation for a rule.

You can specify the following notification types:

* `ConfigurationItemChangeNotification` - Triggers an evaluation when CC delivers a configuration item as a result of a resource change.
* `OversizedConfigurationItemChangeNotification` - Triggers an evaluation when CC delivers an oversized configuration item. CC may generate this notification type when a resource changes and the notification exceeds the maximum size allowed by Amazon SNS.
* `ScheduledNotification` - Triggers a periodic evaluation at the frequency specified for `MaximumExecutionFrequency`.
* `ConfigurationSnapshotDeliveryCompleted` - Triggers a periodic evaluation when CC delivers a configuration snapshot.

If you want your custom rule to be triggered by configuration changes, specify two SourceDetail objects, one for `ConfigurationItemChangeNotification` and one for `OversizedConfigurationItemChangeNotification`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/config_config_rule#message_type ConfigConfigRule#message_type}

---

## Classes <a name="Classes" id="Classes"></a>

### ConfigConfigRuleComplianceOutputReference <a name="ConfigConfigRuleComplianceOutputReference" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConfigConfigRuleComplianceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleCompliance">ConfigConfigRuleCompliance</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ConfigConfigRuleCompliance InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleCompliance">ConfigConfigRuleCompliance</a>

---


### ConfigConfigRuleEvaluationModesList <a name="ConfigConfigRuleEvaluationModesList" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConfigConfigRuleEvaluationModesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesList.get"></a>

```csharp
private ConfigConfigRuleEvaluationModesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModes">ConfigConfigRuleEvaluationModes</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesList.property.internalValue"></a>

```csharp
public IResolvable|ConfigConfigRuleEvaluationModes[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModes">ConfigConfigRuleEvaluationModes</a>[]

---


### ConfigConfigRuleEvaluationModesOutputReference <a name="ConfigConfigRuleEvaluationModesOutputReference" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConfigConfigRuleEvaluationModesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.resetMode">ResetMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMode` <a name="ResetMode" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.resetMode"></a>

```csharp
private void ResetMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.property.modeInput">ModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModes">ConfigConfigRuleEvaluationModes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.property.modeInput"></a>

```csharp
public string ModeInput { get; }
```

- *Type:* string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ConfigConfigRuleEvaluationModes InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModes">ConfigConfigRuleEvaluationModes</a>

---


### ConfigConfigRuleScopeOutputReference <a name="ConfigConfigRuleScopeOutputReference" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConfigConfigRuleScopeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.resetComplianceResourceId">ResetComplianceResourceId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.resetComplianceResourceTypes">ResetComplianceResourceTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.resetTagKey">ResetTagKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.resetTagValue">ResetTagValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetComplianceResourceId` <a name="ResetComplianceResourceId" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.resetComplianceResourceId"></a>

```csharp
private void ResetComplianceResourceId()
```

##### `ResetComplianceResourceTypes` <a name="ResetComplianceResourceTypes" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.resetComplianceResourceTypes"></a>

```csharp
private void ResetComplianceResourceTypes()
```

##### `ResetTagKey` <a name="ResetTagKey" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.resetTagKey"></a>

```csharp
private void ResetTagKey()
```

##### `ResetTagValue` <a name="ResetTagValue" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.resetTagValue"></a>

```csharp
private void ResetTagValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.property.complianceResourceIdInput">ComplianceResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.property.complianceResourceTypesInput">ComplianceResourceTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.property.tagKeyInput">TagKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.property.tagValueInput">TagValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.property.complianceResourceId">ComplianceResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.property.complianceResourceTypes">ComplianceResourceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.property.tagKey">TagKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.property.tagValue">TagValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScope">ConfigConfigRuleScope</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ComplianceResourceIdInput`<sup>Optional</sup> <a name="ComplianceResourceIdInput" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.property.complianceResourceIdInput"></a>

```csharp
public string ComplianceResourceIdInput { get; }
```

- *Type:* string

---

##### `ComplianceResourceTypesInput`<sup>Optional</sup> <a name="ComplianceResourceTypesInput" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.property.complianceResourceTypesInput"></a>

```csharp
public string[] ComplianceResourceTypesInput { get; }
```

- *Type:* string[]

---

##### `TagKeyInput`<sup>Optional</sup> <a name="TagKeyInput" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.property.tagKeyInput"></a>

```csharp
public string TagKeyInput { get; }
```

- *Type:* string

---

##### `TagValueInput`<sup>Optional</sup> <a name="TagValueInput" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.property.tagValueInput"></a>

```csharp
public string TagValueInput { get; }
```

- *Type:* string

---

##### `ComplianceResourceId`<sup>Required</sup> <a name="ComplianceResourceId" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.property.complianceResourceId"></a>

```csharp
public string ComplianceResourceId { get; }
```

- *Type:* string

---

##### `ComplianceResourceTypes`<sup>Required</sup> <a name="ComplianceResourceTypes" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.property.complianceResourceTypes"></a>

```csharp
public string[] ComplianceResourceTypes { get; }
```

- *Type:* string[]

---

##### `TagKey`<sup>Required</sup> <a name="TagKey" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.property.tagKey"></a>

```csharp
public string TagKey { get; }
```

- *Type:* string

---

##### `TagValue`<sup>Required</sup> <a name="TagValue" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.property.tagValue"></a>

```csharp
public string TagValue { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ConfigConfigRuleScope InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScope">ConfigConfigRuleScope</a>

---


### ConfigConfigRuleSourceCustomPolicyDetailsOutputReference <a name="ConfigConfigRuleSourceCustomPolicyDetailsOutputReference" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConfigConfigRuleSourceCustomPolicyDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.resetEnableDebugLogDelivery">ResetEnableDebugLogDelivery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.resetPolicyRuntime">ResetPolicyRuntime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.resetPolicyText">ResetPolicyText</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnableDebugLogDelivery` <a name="ResetEnableDebugLogDelivery" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.resetEnableDebugLogDelivery"></a>

```csharp
private void ResetEnableDebugLogDelivery()
```

##### `ResetPolicyRuntime` <a name="ResetPolicyRuntime" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.resetPolicyRuntime"></a>

```csharp
private void ResetPolicyRuntime()
```

##### `ResetPolicyText` <a name="ResetPolicyText" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.resetPolicyText"></a>

```csharp
private void ResetPolicyText()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.property.enableDebugLogDeliveryInput">EnableDebugLogDeliveryInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.property.policyRuntimeInput">PolicyRuntimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.property.policyTextInput">PolicyTextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.property.enableDebugLogDelivery">EnableDebugLogDelivery</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.property.policyRuntime">PolicyRuntime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.property.policyText">PolicyText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetails">ConfigConfigRuleSourceCustomPolicyDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnableDebugLogDeliveryInput`<sup>Optional</sup> <a name="EnableDebugLogDeliveryInput" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.property.enableDebugLogDeliveryInput"></a>

```csharp
public bool|IResolvable EnableDebugLogDeliveryInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PolicyRuntimeInput`<sup>Optional</sup> <a name="PolicyRuntimeInput" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.property.policyRuntimeInput"></a>

```csharp
public string PolicyRuntimeInput { get; }
```

- *Type:* string

---

##### `PolicyTextInput`<sup>Optional</sup> <a name="PolicyTextInput" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.property.policyTextInput"></a>

```csharp
public string PolicyTextInput { get; }
```

- *Type:* string

---

##### `EnableDebugLogDelivery`<sup>Required</sup> <a name="EnableDebugLogDelivery" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.property.enableDebugLogDelivery"></a>

```csharp
public bool|IResolvable EnableDebugLogDelivery { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PolicyRuntime`<sup>Required</sup> <a name="PolicyRuntime" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.property.policyRuntime"></a>

```csharp
public string PolicyRuntime { get; }
```

- *Type:* string

---

##### `PolicyText`<sup>Required</sup> <a name="PolicyText" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.property.policyText"></a>

```csharp
public string PolicyText { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ConfigConfigRuleSourceCustomPolicyDetails InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetails">ConfigConfigRuleSourceCustomPolicyDetails</a>

---


### ConfigConfigRuleSourceOutputReference <a name="ConfigConfigRuleSourceOutputReference" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConfigConfigRuleSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.putCustomPolicyDetails">PutCustomPolicyDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.putSourceDetails">PutSourceDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.resetCustomPolicyDetails">ResetCustomPolicyDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.resetSourceDetails">ResetSourceDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.resetSourceIdentifier">ResetSourceIdentifier</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomPolicyDetails` <a name="PutCustomPolicyDetails" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.putCustomPolicyDetails"></a>

```csharp
private void PutCustomPolicyDetails(ConfigConfigRuleSourceCustomPolicyDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.putCustomPolicyDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetails">ConfigConfigRuleSourceCustomPolicyDetails</a>

---

##### `PutSourceDetails` <a name="PutSourceDetails" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.putSourceDetails"></a>

```csharp
private void PutSourceDetails(IResolvable|ConfigConfigRuleSourceSourceDetails[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.putSourceDetails.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetails">ConfigConfigRuleSourceSourceDetails</a>[]

---

##### `ResetCustomPolicyDetails` <a name="ResetCustomPolicyDetails" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.resetCustomPolicyDetails"></a>

```csharp
private void ResetCustomPolicyDetails()
```

##### `ResetSourceDetails` <a name="ResetSourceDetails" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.resetSourceDetails"></a>

```csharp
private void ResetSourceDetails()
```

##### `ResetSourceIdentifier` <a name="ResetSourceIdentifier" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.resetSourceIdentifier"></a>

```csharp
private void ResetSourceIdentifier()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.property.customPolicyDetails">CustomPolicyDetails</a></code> | <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference">ConfigConfigRuleSourceCustomPolicyDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.property.sourceDetails">SourceDetails</a></code> | <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsList">ConfigConfigRuleSourceSourceDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.property.customPolicyDetailsInput">CustomPolicyDetailsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetails">ConfigConfigRuleSourceCustomPolicyDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.property.ownerInput">OwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.property.sourceDetailsInput">SourceDetailsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetails">ConfigConfigRuleSourceSourceDetails</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.property.sourceIdentifierInput">SourceIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.property.owner">Owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.property.sourceIdentifier">SourceIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSource">ConfigConfigRuleSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomPolicyDetails`<sup>Required</sup> <a name="CustomPolicyDetails" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.property.customPolicyDetails"></a>

```csharp
public ConfigConfigRuleSourceCustomPolicyDetailsOutputReference CustomPolicyDetails { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference">ConfigConfigRuleSourceCustomPolicyDetailsOutputReference</a>

---

##### `SourceDetails`<sup>Required</sup> <a name="SourceDetails" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.property.sourceDetails"></a>

```csharp
public ConfigConfigRuleSourceSourceDetailsList SourceDetails { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsList">ConfigConfigRuleSourceSourceDetailsList</a>

---

##### `CustomPolicyDetailsInput`<sup>Optional</sup> <a name="CustomPolicyDetailsInput" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.property.customPolicyDetailsInput"></a>

```csharp
public IResolvable|ConfigConfigRuleSourceCustomPolicyDetails CustomPolicyDetailsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetails">ConfigConfigRuleSourceCustomPolicyDetails</a>

---

##### `OwnerInput`<sup>Optional</sup> <a name="OwnerInput" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.property.ownerInput"></a>

```csharp
public string OwnerInput { get; }
```

- *Type:* string

---

##### `SourceDetailsInput`<sup>Optional</sup> <a name="SourceDetailsInput" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.property.sourceDetailsInput"></a>

```csharp
public IResolvable|ConfigConfigRuleSourceSourceDetails[] SourceDetailsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetails">ConfigConfigRuleSourceSourceDetails</a>[]

---

##### `SourceIdentifierInput`<sup>Optional</sup> <a name="SourceIdentifierInput" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.property.sourceIdentifierInput"></a>

```csharp
public string SourceIdentifierInput { get; }
```

- *Type:* string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.property.owner"></a>

```csharp
public string Owner { get; }
```

- *Type:* string

---

##### `SourceIdentifier`<sup>Required</sup> <a name="SourceIdentifier" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.property.sourceIdentifier"></a>

```csharp
public string SourceIdentifier { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ConfigConfigRuleSource InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSource">ConfigConfigRuleSource</a>

---


### ConfigConfigRuleSourceSourceDetailsList <a name="ConfigConfigRuleSourceSourceDetailsList" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConfigConfigRuleSourceSourceDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsList.get"></a>

```csharp
private ConfigConfigRuleSourceSourceDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetails">ConfigConfigRuleSourceSourceDetails</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsList.property.internalValue"></a>

```csharp
public IResolvable|ConfigConfigRuleSourceSourceDetails[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetails">ConfigConfigRuleSourceSourceDetails</a>[]

---


### ConfigConfigRuleSourceSourceDetailsOutputReference <a name="ConfigConfigRuleSourceSourceDetailsOutputReference" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConfigConfigRuleSourceSourceDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.resetEventSource">ResetEventSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.resetMaximumExecutionFrequency">ResetMaximumExecutionFrequency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.resetMessageType">ResetMessageType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEventSource` <a name="ResetEventSource" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.resetEventSource"></a>

```csharp
private void ResetEventSource()
```

##### `ResetMaximumExecutionFrequency` <a name="ResetMaximumExecutionFrequency" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.resetMaximumExecutionFrequency"></a>

```csharp
private void ResetMaximumExecutionFrequency()
```

##### `ResetMessageType` <a name="ResetMessageType" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.resetMessageType"></a>

```csharp
private void ResetMessageType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.property.eventSourceInput">EventSourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.property.maximumExecutionFrequencyInput">MaximumExecutionFrequencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.property.messageTypeInput">MessageTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.property.eventSource">EventSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.property.maximumExecutionFrequency">MaximumExecutionFrequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.property.messageType">MessageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetails">ConfigConfigRuleSourceSourceDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EventSourceInput`<sup>Optional</sup> <a name="EventSourceInput" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.property.eventSourceInput"></a>

```csharp
public string EventSourceInput { get; }
```

- *Type:* string

---

##### `MaximumExecutionFrequencyInput`<sup>Optional</sup> <a name="MaximumExecutionFrequencyInput" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.property.maximumExecutionFrequencyInput"></a>

```csharp
public string MaximumExecutionFrequencyInput { get; }
```

- *Type:* string

---

##### `MessageTypeInput`<sup>Optional</sup> <a name="MessageTypeInput" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.property.messageTypeInput"></a>

```csharp
public string MessageTypeInput { get; }
```

- *Type:* string

---

##### `EventSource`<sup>Required</sup> <a name="EventSource" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.property.eventSource"></a>

```csharp
public string EventSource { get; }
```

- *Type:* string

---

##### `MaximumExecutionFrequency`<sup>Required</sup> <a name="MaximumExecutionFrequency" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.property.maximumExecutionFrequency"></a>

```csharp
public string MaximumExecutionFrequency { get; }
```

- *Type:* string

---

##### `MessageType`<sup>Required</sup> <a name="MessageType" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.property.messageType"></a>

```csharp
public string MessageType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ConfigConfigRuleSourceSourceDetails InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetails">ConfigConfigRuleSourceSourceDetails</a>

---



