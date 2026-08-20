# `casesCaseRule` Submodule <a name="`casesCaseRule` Submodule" id="@cdktn/provider-awscc.casesCaseRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CasesCaseRule <a name="CasesCaseRule" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cases_case_rule awscc_cases_case_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CasesCaseRule(Construct Scope, string Id, CasesCaseRuleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleConfig">CasesCaseRuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleConfig">CasesCaseRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.putRule">PutRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.resetDomainId">ResetDomainId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRule` <a name="PutRule" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.putRule"></a>

```csharp
private void PutRule(CasesCaseRuleRule Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.putRule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRule">CasesCaseRuleRule</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.putTags"></a>

```csharp
private void PutTags(IResolvable|CasesCaseRuleTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTags">CasesCaseRuleTags</a>[]

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDomainId` <a name="ResetDomainId" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.resetDomainId"></a>

```csharp
private void ResetDomainId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CasesCaseRule resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CasesCaseRule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CasesCaseRule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CasesCaseRule.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CasesCaseRule.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a CasesCaseRule resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CasesCaseRule to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CasesCaseRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cases_case_rule#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the CasesCaseRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.caseRuleArn">CaseRuleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.caseRuleId">CaseRuleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.createdTime">CreatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.lastModifiedTime">LastModifiedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.rule">Rule</a></code> | <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference">CasesCaseRuleRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsList">CasesCaseRuleTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.domainIdInput">DomainIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.ruleInput">RuleInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRule">CasesCaseRuleRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTags">CasesCaseRuleTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.domainId">DomainId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CaseRuleArn`<sup>Required</sup> <a name="CaseRuleArn" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.caseRuleArn"></a>

```csharp
public string CaseRuleArn { get; }
```

- *Type:* string

---

##### `CaseRuleId`<sup>Required</sup> <a name="CaseRuleId" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.caseRuleId"></a>

```csharp
public string CaseRuleId { get; }
```

- *Type:* string

---

##### `CreatedTime`<sup>Required</sup> <a name="CreatedTime" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.createdTime"></a>

```csharp
public string CreatedTime { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LastModifiedTime`<sup>Required</sup> <a name="LastModifiedTime" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.lastModifiedTime"></a>

```csharp
public string LastModifiedTime { get; }
```

- *Type:* string

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.rule"></a>

```csharp
public CasesCaseRuleRuleOutputReference Rule { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference">CasesCaseRuleRuleOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.tags"></a>

```csharp
public CasesCaseRuleTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsList">CasesCaseRuleTagsList</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DomainIdInput`<sup>Optional</sup> <a name="DomainIdInput" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.domainIdInput"></a>

```csharp
public string DomainIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RuleInput`<sup>Optional</sup> <a name="RuleInput" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.ruleInput"></a>

```csharp
public IResolvable|CasesCaseRuleRule RuleInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRule">CasesCaseRuleRule</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.tagsInput"></a>

```csharp
public IResolvable|CasesCaseRuleTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTags">CasesCaseRuleTags</a>[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DomainId`<sup>Required</sup> <a name="DomainId" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.domainId"></a>

```csharp
public string DomainId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CasesCaseRuleConfig <a name="CasesCaseRuleConfig" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CasesCaseRuleConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    CasesCaseRuleRule Rule,
    string Description = null,
    string DomainId = null,
    IResolvable|CasesCaseRuleTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleConfig.property.name">Name</a></code> | <code>string</code> | A descriptive name for the case rule. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleConfig.property.rule">Rule</a></code> | <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRule">CasesCaseRuleRule</a></code> | Defines the rule behavior and conditions. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleConfig.property.description">Description</a></code> | <code>string</code> | A description explaining the purpose and behavior of this case rule. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleConfig.property.domainId">DomainId</a></code> | <code>string</code> | The unique identifier of the Cases domain. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTags">CasesCaseRuleTags</a>[]</code> | The tags that you attach to this case rule. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

A descriptive name for the case rule.

Must be unique within the domain and should clearly indicate the rule's purpose (e.g., 'Priority Field Required for Urgent Cases').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cases_case_rule#name CasesCaseRule#name}

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleConfig.property.rule"></a>

```csharp
public CasesCaseRuleRule Rule { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRule">CasesCaseRuleRule</a>

Defines the rule behavior and conditions.

Specifies the rule type and the conditions under which it applies. In the Amazon Connect admin website, this corresponds to case field conditions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cases_case_rule#rule CasesCaseRule#rule}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A description explaining the purpose and behavior of this case rule.

Helps administrators understand when and why this rule applies to case fields.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cases_case_rule#description CasesCaseRule#description}

---

##### `DomainId`<sup>Optional</sup> <a name="DomainId" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleConfig.property.domainId"></a>

```csharp
public string DomainId { get; set; }
```

- *Type:* string

The unique identifier of the Cases domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cases_case_rule#domain_id CasesCaseRule#domain_id}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleConfig.property.tags"></a>

```csharp
public IResolvable|CasesCaseRuleTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTags">CasesCaseRuleTags</a>[]

The tags that you attach to this case rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cases_case_rule#tags CasesCaseRule#tags}

---

### CasesCaseRuleRule <a name="CasesCaseRuleRule" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CasesCaseRuleRule {
    CasesCaseRuleRuleHidden Hidden = null,
    CasesCaseRuleRuleRequired Required = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRule.property.hidden">Hidden</a></code> | <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHidden">CasesCaseRuleRuleHidden</a></code> | Hidden rule type, used to indicate whether a field is hidden. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRule.property.required">Required</a></code> | <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequired">CasesCaseRuleRuleRequired</a></code> | A required rule type, used to indicate whether a field is required. |

---

##### `Hidden`<sup>Optional</sup> <a name="Hidden" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRule.property.hidden"></a>

```csharp
public CasesCaseRuleRuleHidden Hidden { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHidden">CasesCaseRuleRuleHidden</a>

Hidden rule type, used to indicate whether a field is hidden.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cases_case_rule#hidden CasesCaseRule#hidden}

---

##### `Required`<sup>Optional</sup> <a name="Required" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRule.property.required"></a>

```csharp
public CasesCaseRuleRuleRequired Required { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequired">CasesCaseRuleRuleRequired</a>

A required rule type, used to indicate whether a field is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cases_case_rule#required CasesCaseRule#required}

---

### CasesCaseRuleRuleHidden <a name="CasesCaseRuleRuleHidden" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHidden"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHidden.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CasesCaseRuleRuleHidden {
    IResolvable|CasesCaseRuleRuleHiddenConditions[] Conditions = null,
    bool|IResolvable DefaultValue = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHidden.property.conditions">Conditions</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditions">CasesCaseRuleRuleHiddenConditions</a>[]</code> | List of conditions for the hidden rule; |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHidden.property.defaultValue">DefaultValue</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | The value of the rule (i.e. whether the field is hidden) should none of the conditions evaluate to true. |

---

##### `Conditions`<sup>Optional</sup> <a name="Conditions" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHidden.property.conditions"></a>

```csharp
public IResolvable|CasesCaseRuleRuleHiddenConditions[] Conditions { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditions">CasesCaseRuleRuleHiddenConditions</a>[]

List of conditions for the hidden rule;

the first condition to evaluate to true dictates the value of the rule

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cases_case_rule#conditions CasesCaseRule#conditions}

---

##### `DefaultValue`<sup>Optional</sup> <a name="DefaultValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHidden.property.defaultValue"></a>

```csharp
public bool|IResolvable DefaultValue { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

The value of the rule (i.e. whether the field is hidden) should none of the conditions evaluate to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cases_case_rule#default_value CasesCaseRule#default_value}

---

### CasesCaseRuleRuleHiddenConditions <a name="CasesCaseRuleRuleHiddenConditions" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CasesCaseRuleRuleHiddenConditions {
    CasesCaseRuleRuleHiddenConditionsEqualTo EqualTo = null,
    CasesCaseRuleRuleHiddenConditionsNotEqualTo NotEqualTo = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditions.property.equalTo">EqualTo</a></code> | <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualTo">CasesCaseRuleRuleHiddenConditionsEqualTo</a></code> | Boolean operands for a condition. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditions.property.notEqualTo">NotEqualTo</a></code> | <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualTo">CasesCaseRuleRuleHiddenConditionsNotEqualTo</a></code> | Boolean operands for a condition. |

---

##### `EqualTo`<sup>Optional</sup> <a name="EqualTo" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditions.property.equalTo"></a>

```csharp
public CasesCaseRuleRuleHiddenConditionsEqualTo EqualTo { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualTo">CasesCaseRuleRuleHiddenConditionsEqualTo</a>

Boolean operands for a condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cases_case_rule#equal_to CasesCaseRule#equal_to}

---

##### `NotEqualTo`<sup>Optional</sup> <a name="NotEqualTo" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditions.property.notEqualTo"></a>

```csharp
public CasesCaseRuleRuleHiddenConditionsNotEqualTo NotEqualTo { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualTo">CasesCaseRuleRuleHiddenConditionsNotEqualTo</a>

Boolean operands for a condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cases_case_rule#not_equal_to CasesCaseRule#not_equal_to}

---

### CasesCaseRuleRuleHiddenConditionsEqualTo <a name="CasesCaseRuleRuleHiddenConditionsEqualTo" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualTo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualTo.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CasesCaseRuleRuleHiddenConditionsEqualTo {
    CasesCaseRuleRuleHiddenConditionsEqualToOperandOne OperandOne = null,
    CasesCaseRuleRuleHiddenConditionsEqualToOperandTwo OperandTwo = null,
    bool|IResolvable Result = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualTo.property.operandOne">OperandOne</a></code> | <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOne">CasesCaseRuleRuleHiddenConditionsEqualToOperandOne</a></code> | The left hand operand in the condition. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualTo.property.operandTwo">OperandTwo</a></code> | <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwo">CasesCaseRuleRuleHiddenConditionsEqualToOperandTwo</a></code> | The right hand operand in the condition. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualTo.property.result">Result</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | The value of the outer rule if the condition evaluates to true. |

---

##### `OperandOne`<sup>Optional</sup> <a name="OperandOne" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualTo.property.operandOne"></a>

```csharp
public CasesCaseRuleRuleHiddenConditionsEqualToOperandOne OperandOne { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOne">CasesCaseRuleRuleHiddenConditionsEqualToOperandOne</a>

The left hand operand in the condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cases_case_rule#operand_one CasesCaseRule#operand_one}

---

##### `OperandTwo`<sup>Optional</sup> <a name="OperandTwo" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualTo.property.operandTwo"></a>

```csharp
public CasesCaseRuleRuleHiddenConditionsEqualToOperandTwo OperandTwo { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwo">CasesCaseRuleRuleHiddenConditionsEqualToOperandTwo</a>

The right hand operand in the condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cases_case_rule#operand_two CasesCaseRule#operand_two}

---

##### `Result`<sup>Optional</sup> <a name="Result" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualTo.property.result"></a>

```csharp
public bool|IResolvable Result { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

The value of the outer rule if the condition evaluates to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cases_case_rule#result CasesCaseRule#result}

---

### CasesCaseRuleRuleHiddenConditionsEqualToOperandOne <a name="CasesCaseRuleRuleHiddenConditionsEqualToOperandOne" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOne"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOne.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CasesCaseRuleRuleHiddenConditionsEqualToOperandOne {
    string FieldId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOne.property.fieldId">FieldId</a></code> | <code>string</code> | The field ID this operand should take the value of. |

---

##### `FieldId`<sup>Optional</sup> <a name="FieldId" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOne.property.fieldId"></a>

```csharp
public string FieldId { get; set; }
```

- *Type:* string

The field ID this operand should take the value of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cases_case_rule#field_id CasesCaseRule#field_id}

---

### CasesCaseRuleRuleHiddenConditionsEqualToOperandTwo <a name="CasesCaseRuleRuleHiddenConditionsEqualToOperandTwo" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwo.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CasesCaseRuleRuleHiddenConditionsEqualToOperandTwo {
    bool|IResolvable BooleanValue = null,
    double DoubleValue = null,
    string EmptyValue = null,
    string StringValue = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwo.property.booleanValue">BooleanValue</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | A boolean value to compare against the field value in the condition evaluation. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwo.property.doubleValue">DoubleValue</a></code> | <code>double</code> | A numeric value to compare against the field value in the condition evaluation. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwo.property.emptyValue">EmptyValue</a></code> | <code>string</code> | An empty operand value. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwo.property.stringValue">StringValue</a></code> | <code>string</code> | A string value to compare against the field value in the condition evaluation. |

---

##### `BooleanValue`<sup>Optional</sup> <a name="BooleanValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwo.property.booleanValue"></a>

```csharp
public bool|IResolvable BooleanValue { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

A boolean value to compare against the field value in the condition evaluation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cases_case_rule#boolean_value CasesCaseRule#boolean_value}

---

##### `DoubleValue`<sup>Optional</sup> <a name="DoubleValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwo.property.doubleValue"></a>

```csharp
public double DoubleValue { get; set; }
```

- *Type:* double

A numeric value to compare against the field value in the condition evaluation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cases_case_rule#double_value CasesCaseRule#double_value}

---

##### `EmptyValue`<sup>Optional</sup> <a name="EmptyValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwo.property.emptyValue"></a>

```csharp
public string EmptyValue { get; set; }
```

- *Type:* string

An empty operand value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cases_case_rule#empty_value CasesCaseRule#empty_value}

---

##### `StringValue`<sup>Optional</sup> <a name="StringValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwo.property.stringValue"></a>

```csharp
public string StringValue { get; set; }
```

- *Type:* string

A string value to compare against the field value in the condition evaluation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cases_case_rule#string_value CasesCaseRule#string_value}

---

### CasesCaseRuleRuleHiddenConditionsNotEqualTo <a name="CasesCaseRuleRuleHiddenConditionsNotEqualTo" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualTo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualTo.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CasesCaseRuleRuleHiddenConditionsNotEqualTo {
    CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOne OperandOne = null,
    CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwo OperandTwo = null,
    bool|IResolvable Result = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualTo.property.operandOne">OperandOne</a></code> | <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOne">CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOne</a></code> | The left hand operand in the condition. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualTo.property.operandTwo">OperandTwo</a></code> | <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwo">CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwo</a></code> | The right hand operand in the condition. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualTo.property.result">Result</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | The value of the outer rule if the condition evaluates to true. |

---

##### `OperandOne`<sup>Optional</sup> <a name="OperandOne" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualTo.property.operandOne"></a>

```csharp
public CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOne OperandOne { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOne">CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOne</a>

The left hand operand in the condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cases_case_rule#operand_one CasesCaseRule#operand_one}

---

##### `OperandTwo`<sup>Optional</sup> <a name="OperandTwo" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualTo.property.operandTwo"></a>

```csharp
public CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwo OperandTwo { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwo">CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwo</a>

The right hand operand in the condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cases_case_rule#operand_two CasesCaseRule#operand_two}

---

##### `Result`<sup>Optional</sup> <a name="Result" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualTo.property.result"></a>

```csharp
public bool|IResolvable Result { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

The value of the outer rule if the condition evaluates to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cases_case_rule#result CasesCaseRule#result}

---

### CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOne <a name="CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOne" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOne"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOne.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOne {
    string FieldId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOne.property.fieldId">FieldId</a></code> | <code>string</code> | The field ID this operand should take the value of. |

---

##### `FieldId`<sup>Optional</sup> <a name="FieldId" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOne.property.fieldId"></a>

```csharp
public string FieldId { get; set; }
```

- *Type:* string

The field ID this operand should take the value of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cases_case_rule#field_id CasesCaseRule#field_id}

---

### CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwo <a name="CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwo" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwo.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwo {
    bool|IResolvable BooleanValue = null,
    double DoubleValue = null,
    string EmptyValue = null,
    string StringValue = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwo.property.booleanValue">BooleanValue</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | A boolean value to compare against the field value in the condition evaluation. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwo.property.doubleValue">DoubleValue</a></code> | <code>double</code> | A numeric value to compare against the field value in the condition evaluation. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwo.property.emptyValue">EmptyValue</a></code> | <code>string</code> | An empty operand value. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwo.property.stringValue">StringValue</a></code> | <code>string</code> | A string value to compare against the field value in the condition evaluation. |

---

##### `BooleanValue`<sup>Optional</sup> <a name="BooleanValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwo.property.booleanValue"></a>

```csharp
public bool|IResolvable BooleanValue { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

A boolean value to compare against the field value in the condition evaluation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cases_case_rule#boolean_value CasesCaseRule#boolean_value}

---

##### `DoubleValue`<sup>Optional</sup> <a name="DoubleValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwo.property.doubleValue"></a>

```csharp
public double DoubleValue { get; set; }
```

- *Type:* double

A numeric value to compare against the field value in the condition evaluation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cases_case_rule#double_value CasesCaseRule#double_value}

---

##### `EmptyValue`<sup>Optional</sup> <a name="EmptyValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwo.property.emptyValue"></a>

```csharp
public string EmptyValue { get; set; }
```

- *Type:* string

An empty operand value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cases_case_rule#empty_value CasesCaseRule#empty_value}

---

##### `StringValue`<sup>Optional</sup> <a name="StringValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwo.property.stringValue"></a>

```csharp
public string StringValue { get; set; }
```

- *Type:* string

A string value to compare against the field value in the condition evaluation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cases_case_rule#string_value CasesCaseRule#string_value}

---

### CasesCaseRuleRuleRequired <a name="CasesCaseRuleRuleRequired" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequired"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequired.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CasesCaseRuleRuleRequired {
    IResolvable|CasesCaseRuleRuleRequiredConditions[] Conditions = null,
    bool|IResolvable DefaultValue = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequired.property.conditions">Conditions</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditions">CasesCaseRuleRuleRequiredConditions</a>[]</code> | An ordered list of boolean conditions that determine when the field should be required. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequired.property.defaultValue">DefaultValue</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | The default required state for the field when none of the specified conditions are met. |

---

##### `Conditions`<sup>Optional</sup> <a name="Conditions" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequired.property.conditions"></a>

```csharp
public IResolvable|CasesCaseRuleRuleRequiredConditions[] Conditions { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditions">CasesCaseRuleRuleRequiredConditions</a>[]

An ordered list of boolean conditions that determine when the field should be required.

Conditions are evaluated in order, and the first condition that evaluates to true determines whether the field is required, overriding the default value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cases_case_rule#conditions CasesCaseRule#conditions}

---

##### `DefaultValue`<sup>Optional</sup> <a name="DefaultValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequired.property.defaultValue"></a>

```csharp
public bool|IResolvable DefaultValue { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

The default required state for the field when none of the specified conditions are met.

If true, the field is required by default; if false, the field is optional by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cases_case_rule#default_value CasesCaseRule#default_value}

---

### CasesCaseRuleRuleRequiredConditions <a name="CasesCaseRuleRuleRequiredConditions" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CasesCaseRuleRuleRequiredConditions {
    CasesCaseRuleRuleRequiredConditionsEqualTo EqualTo = null,
    CasesCaseRuleRuleRequiredConditionsNotEqualTo NotEqualTo = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditions.property.equalTo">EqualTo</a></code> | <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualTo">CasesCaseRuleRuleRequiredConditionsEqualTo</a></code> | Boolean operands for a condition. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditions.property.notEqualTo">NotEqualTo</a></code> | <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualTo">CasesCaseRuleRuleRequiredConditionsNotEqualTo</a></code> | Boolean operands for a condition. |

---

##### `EqualTo`<sup>Optional</sup> <a name="EqualTo" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditions.property.equalTo"></a>

```csharp
public CasesCaseRuleRuleRequiredConditionsEqualTo EqualTo { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualTo">CasesCaseRuleRuleRequiredConditionsEqualTo</a>

Boolean operands for a condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cases_case_rule#equal_to CasesCaseRule#equal_to}

---

##### `NotEqualTo`<sup>Optional</sup> <a name="NotEqualTo" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditions.property.notEqualTo"></a>

```csharp
public CasesCaseRuleRuleRequiredConditionsNotEqualTo NotEqualTo { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualTo">CasesCaseRuleRuleRequiredConditionsNotEqualTo</a>

Boolean operands for a condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cases_case_rule#not_equal_to CasesCaseRule#not_equal_to}

---

### CasesCaseRuleRuleRequiredConditionsEqualTo <a name="CasesCaseRuleRuleRequiredConditionsEqualTo" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualTo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualTo.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CasesCaseRuleRuleRequiredConditionsEqualTo {
    CasesCaseRuleRuleRequiredConditionsEqualToOperandOne OperandOne = null,
    CasesCaseRuleRuleRequiredConditionsEqualToOperandTwo OperandTwo = null,
    bool|IResolvable Result = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualTo.property.operandOne">OperandOne</a></code> | <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOne">CasesCaseRuleRuleRequiredConditionsEqualToOperandOne</a></code> | The left hand operand in the condition. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualTo.property.operandTwo">OperandTwo</a></code> | <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwo">CasesCaseRuleRuleRequiredConditionsEqualToOperandTwo</a></code> | The right hand operand in the condition. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualTo.property.result">Result</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | The value of the outer rule if the condition evaluates to true. |

---

##### `OperandOne`<sup>Optional</sup> <a name="OperandOne" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualTo.property.operandOne"></a>

```csharp
public CasesCaseRuleRuleRequiredConditionsEqualToOperandOne OperandOne { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOne">CasesCaseRuleRuleRequiredConditionsEqualToOperandOne</a>

The left hand operand in the condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cases_case_rule#operand_one CasesCaseRule#operand_one}

---

##### `OperandTwo`<sup>Optional</sup> <a name="OperandTwo" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualTo.property.operandTwo"></a>

```csharp
public CasesCaseRuleRuleRequiredConditionsEqualToOperandTwo OperandTwo { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwo">CasesCaseRuleRuleRequiredConditionsEqualToOperandTwo</a>

The right hand operand in the condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cases_case_rule#operand_two CasesCaseRule#operand_two}

---

##### `Result`<sup>Optional</sup> <a name="Result" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualTo.property.result"></a>

```csharp
public bool|IResolvable Result { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

The value of the outer rule if the condition evaluates to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cases_case_rule#result CasesCaseRule#result}

---

### CasesCaseRuleRuleRequiredConditionsEqualToOperandOne <a name="CasesCaseRuleRuleRequiredConditionsEqualToOperandOne" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOne"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOne.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CasesCaseRuleRuleRequiredConditionsEqualToOperandOne {
    string FieldId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOne.property.fieldId">FieldId</a></code> | <code>string</code> | The field ID this operand should take the value of. |

---

##### `FieldId`<sup>Optional</sup> <a name="FieldId" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOne.property.fieldId"></a>

```csharp
public string FieldId { get; set; }
```

- *Type:* string

The field ID this operand should take the value of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cases_case_rule#field_id CasesCaseRule#field_id}

---

### CasesCaseRuleRuleRequiredConditionsEqualToOperandTwo <a name="CasesCaseRuleRuleRequiredConditionsEqualToOperandTwo" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwo.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CasesCaseRuleRuleRequiredConditionsEqualToOperandTwo {
    bool|IResolvable BooleanValue = null,
    double DoubleValue = null,
    string EmptyValue = null,
    string StringValue = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwo.property.booleanValue">BooleanValue</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | A boolean value to compare against the field value in the condition evaluation. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwo.property.doubleValue">DoubleValue</a></code> | <code>double</code> | A numeric value to compare against the field value in the condition evaluation. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwo.property.emptyValue">EmptyValue</a></code> | <code>string</code> | An empty operand value. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwo.property.stringValue">StringValue</a></code> | <code>string</code> | A string value to compare against the field value in the condition evaluation. |

---

##### `BooleanValue`<sup>Optional</sup> <a name="BooleanValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwo.property.booleanValue"></a>

```csharp
public bool|IResolvable BooleanValue { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

A boolean value to compare against the field value in the condition evaluation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cases_case_rule#boolean_value CasesCaseRule#boolean_value}

---

##### `DoubleValue`<sup>Optional</sup> <a name="DoubleValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwo.property.doubleValue"></a>

```csharp
public double DoubleValue { get; set; }
```

- *Type:* double

A numeric value to compare against the field value in the condition evaluation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cases_case_rule#double_value CasesCaseRule#double_value}

---

##### `EmptyValue`<sup>Optional</sup> <a name="EmptyValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwo.property.emptyValue"></a>

```csharp
public string EmptyValue { get; set; }
```

- *Type:* string

An empty operand value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cases_case_rule#empty_value CasesCaseRule#empty_value}

---

##### `StringValue`<sup>Optional</sup> <a name="StringValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwo.property.stringValue"></a>

```csharp
public string StringValue { get; set; }
```

- *Type:* string

A string value to compare against the field value in the condition evaluation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cases_case_rule#string_value CasesCaseRule#string_value}

---

### CasesCaseRuleRuleRequiredConditionsNotEqualTo <a name="CasesCaseRuleRuleRequiredConditionsNotEqualTo" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualTo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualTo.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CasesCaseRuleRuleRequiredConditionsNotEqualTo {
    CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOne OperandOne = null,
    CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwo OperandTwo = null,
    bool|IResolvable Result = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualTo.property.operandOne">OperandOne</a></code> | <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOne">CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOne</a></code> | The left hand operand in the condition. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualTo.property.operandTwo">OperandTwo</a></code> | <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwo">CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwo</a></code> | The right hand operand in the condition. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualTo.property.result">Result</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | The value of the outer rule if the condition evaluates to true. |

---

##### `OperandOne`<sup>Optional</sup> <a name="OperandOne" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualTo.property.operandOne"></a>

```csharp
public CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOne OperandOne { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOne">CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOne</a>

The left hand operand in the condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cases_case_rule#operand_one CasesCaseRule#operand_one}

---

##### `OperandTwo`<sup>Optional</sup> <a name="OperandTwo" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualTo.property.operandTwo"></a>

```csharp
public CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwo OperandTwo { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwo">CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwo</a>

The right hand operand in the condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cases_case_rule#operand_two CasesCaseRule#operand_two}

---

##### `Result`<sup>Optional</sup> <a name="Result" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualTo.property.result"></a>

```csharp
public bool|IResolvable Result { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

The value of the outer rule if the condition evaluates to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cases_case_rule#result CasesCaseRule#result}

---

### CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOne <a name="CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOne" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOne"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOne.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOne {
    string FieldId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOne.property.fieldId">FieldId</a></code> | <code>string</code> | The field ID this operand should take the value of. |

---

##### `FieldId`<sup>Optional</sup> <a name="FieldId" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOne.property.fieldId"></a>

```csharp
public string FieldId { get; set; }
```

- *Type:* string

The field ID this operand should take the value of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cases_case_rule#field_id CasesCaseRule#field_id}

---

### CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwo <a name="CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwo" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwo.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwo {
    bool|IResolvable BooleanValue = null,
    double DoubleValue = null,
    string EmptyValue = null,
    string StringValue = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwo.property.booleanValue">BooleanValue</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | A boolean value to compare against the field value in the condition evaluation. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwo.property.doubleValue">DoubleValue</a></code> | <code>double</code> | A numeric value to compare against the field value in the condition evaluation. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwo.property.emptyValue">EmptyValue</a></code> | <code>string</code> | An empty operand value. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwo.property.stringValue">StringValue</a></code> | <code>string</code> | A string value to compare against the field value in the condition evaluation. |

---

##### `BooleanValue`<sup>Optional</sup> <a name="BooleanValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwo.property.booleanValue"></a>

```csharp
public bool|IResolvable BooleanValue { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

A boolean value to compare against the field value in the condition evaluation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cases_case_rule#boolean_value CasesCaseRule#boolean_value}

---

##### `DoubleValue`<sup>Optional</sup> <a name="DoubleValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwo.property.doubleValue"></a>

```csharp
public double DoubleValue { get; set; }
```

- *Type:* double

A numeric value to compare against the field value in the condition evaluation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cases_case_rule#double_value CasesCaseRule#double_value}

---

##### `EmptyValue`<sup>Optional</sup> <a name="EmptyValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwo.property.emptyValue"></a>

```csharp
public string EmptyValue { get; set; }
```

- *Type:* string

An empty operand value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cases_case_rule#empty_value CasesCaseRule#empty_value}

---

##### `StringValue`<sup>Optional</sup> <a name="StringValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwo.property.stringValue"></a>

```csharp
public string StringValue { get; set; }
```

- *Type:* string

A string value to compare against the field value in the condition evaluation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cases_case_rule#string_value CasesCaseRule#string_value}

---

### CasesCaseRuleTags <a name="CasesCaseRuleTags" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CasesCaseRuleTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cases_case_rule#key CasesCaseRule#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cases_case_rule#value CasesCaseRule#value}

---

## Classes <a name="Classes" id="Classes"></a>

### CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference <a name="CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.resetFieldId">ResetFieldId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFieldId` <a name="ResetFieldId" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.resetFieldId"></a>

```csharp
private void ResetFieldId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.property.fieldIdInput">FieldIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.property.fieldId">FieldId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOne">CasesCaseRuleRuleHiddenConditionsEqualToOperandOne</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FieldIdInput`<sup>Optional</sup> <a name="FieldIdInput" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.property.fieldIdInput"></a>

```csharp
public string FieldIdInput { get; }
```

- *Type:* string

---

##### `FieldId`<sup>Required</sup> <a name="FieldId" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.property.fieldId"></a>

```csharp
public string FieldId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CasesCaseRuleRuleHiddenConditionsEqualToOperandOne InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOne">CasesCaseRuleRuleHiddenConditionsEqualToOperandOne</a>

---


### CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference <a name="CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.resetBooleanValue">ResetBooleanValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.resetDoubleValue">ResetDoubleValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.resetEmptyValue">ResetEmptyValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.resetStringValue">ResetStringValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBooleanValue` <a name="ResetBooleanValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.resetBooleanValue"></a>

```csharp
private void ResetBooleanValue()
```

##### `ResetDoubleValue` <a name="ResetDoubleValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.resetDoubleValue"></a>

```csharp
private void ResetDoubleValue()
```

##### `ResetEmptyValue` <a name="ResetEmptyValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.resetEmptyValue"></a>

```csharp
private void ResetEmptyValue()
```

##### `ResetStringValue` <a name="ResetStringValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.resetStringValue"></a>

```csharp
private void ResetStringValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.property.booleanValueInput">BooleanValueInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.property.doubleValueInput">DoubleValueInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.property.emptyValueInput">EmptyValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.property.stringValueInput">StringValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.property.booleanValue">BooleanValue</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.property.doubleValue">DoubleValue</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.property.emptyValue">EmptyValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.property.stringValue">StringValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwo">CasesCaseRuleRuleHiddenConditionsEqualToOperandTwo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BooleanValueInput`<sup>Optional</sup> <a name="BooleanValueInput" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.property.booleanValueInput"></a>

```csharp
public bool|IResolvable BooleanValueInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DoubleValueInput`<sup>Optional</sup> <a name="DoubleValueInput" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.property.doubleValueInput"></a>

```csharp
public double DoubleValueInput { get; }
```

- *Type:* double

---

##### `EmptyValueInput`<sup>Optional</sup> <a name="EmptyValueInput" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.property.emptyValueInput"></a>

```csharp
public string EmptyValueInput { get; }
```

- *Type:* string

---

##### `StringValueInput`<sup>Optional</sup> <a name="StringValueInput" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.property.stringValueInput"></a>

```csharp
public string StringValueInput { get; }
```

- *Type:* string

---

##### `BooleanValue`<sup>Required</sup> <a name="BooleanValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.property.booleanValue"></a>

```csharp
public bool|IResolvable BooleanValue { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DoubleValue`<sup>Required</sup> <a name="DoubleValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.property.doubleValue"></a>

```csharp
public double DoubleValue { get; }
```

- *Type:* double

---

##### `EmptyValue`<sup>Required</sup> <a name="EmptyValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.property.emptyValue"></a>

```csharp
public string EmptyValue { get; }
```

- *Type:* string

---

##### `StringValue`<sup>Required</sup> <a name="StringValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.property.stringValue"></a>

```csharp
public string StringValue { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CasesCaseRuleRuleHiddenConditionsEqualToOperandTwo InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwo">CasesCaseRuleRuleHiddenConditionsEqualToOperandTwo</a>

---


### CasesCaseRuleRuleHiddenConditionsEqualToOutputReference <a name="CasesCaseRuleRuleHiddenConditionsEqualToOutputReference" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CasesCaseRuleRuleHiddenConditionsEqualToOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.putOperandOne">PutOperandOne</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.putOperandTwo">PutOperandTwo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.resetOperandOne">ResetOperandOne</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.resetOperandTwo">ResetOperandTwo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.resetResult">ResetResult</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOperandOne` <a name="PutOperandOne" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.putOperandOne"></a>

```csharp
private void PutOperandOne(CasesCaseRuleRuleHiddenConditionsEqualToOperandOne Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.putOperandOne.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOne">CasesCaseRuleRuleHiddenConditionsEqualToOperandOne</a>

---

##### `PutOperandTwo` <a name="PutOperandTwo" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.putOperandTwo"></a>

```csharp
private void PutOperandTwo(CasesCaseRuleRuleHiddenConditionsEqualToOperandTwo Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.putOperandTwo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwo">CasesCaseRuleRuleHiddenConditionsEqualToOperandTwo</a>

---

##### `ResetOperandOne` <a name="ResetOperandOne" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.resetOperandOne"></a>

```csharp
private void ResetOperandOne()
```

##### `ResetOperandTwo` <a name="ResetOperandTwo" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.resetOperandTwo"></a>

```csharp
private void ResetOperandTwo()
```

##### `ResetResult` <a name="ResetResult" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.resetResult"></a>

```csharp
private void ResetResult()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.property.operandOne">OperandOne</a></code> | <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference">CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.property.operandTwo">OperandTwo</a></code> | <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference">CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.property.operandOneInput">OperandOneInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOne">CasesCaseRuleRuleHiddenConditionsEqualToOperandOne</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.property.operandTwoInput">OperandTwoInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwo">CasesCaseRuleRuleHiddenConditionsEqualToOperandTwo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.property.resultInput">ResultInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.property.result">Result</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualTo">CasesCaseRuleRuleHiddenConditionsEqualTo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OperandOne`<sup>Required</sup> <a name="OperandOne" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.property.operandOne"></a>

```csharp
public CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference OperandOne { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference">CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference</a>

---

##### `OperandTwo`<sup>Required</sup> <a name="OperandTwo" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.property.operandTwo"></a>

```csharp
public CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference OperandTwo { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference">CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference</a>

---

##### `OperandOneInput`<sup>Optional</sup> <a name="OperandOneInput" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.property.operandOneInput"></a>

```csharp
public IResolvable|CasesCaseRuleRuleHiddenConditionsEqualToOperandOne OperandOneInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOne">CasesCaseRuleRuleHiddenConditionsEqualToOperandOne</a>

---

##### `OperandTwoInput`<sup>Optional</sup> <a name="OperandTwoInput" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.property.operandTwoInput"></a>

```csharp
public IResolvable|CasesCaseRuleRuleHiddenConditionsEqualToOperandTwo OperandTwoInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwo">CasesCaseRuleRuleHiddenConditionsEqualToOperandTwo</a>

---

##### `ResultInput`<sup>Optional</sup> <a name="ResultInput" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.property.resultInput"></a>

```csharp
public bool|IResolvable ResultInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Result`<sup>Required</sup> <a name="Result" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.property.result"></a>

```csharp
public bool|IResolvable Result { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CasesCaseRuleRuleHiddenConditionsEqualTo InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualTo">CasesCaseRuleRuleHiddenConditionsEqualTo</a>

---


### CasesCaseRuleRuleHiddenConditionsList <a name="CasesCaseRuleRuleHiddenConditionsList" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CasesCaseRuleRuleHiddenConditionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsList.get"></a>

```csharp
private CasesCaseRuleRuleHiddenConditionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditions">CasesCaseRuleRuleHiddenConditions</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsList.property.internalValue"></a>

```csharp
public IResolvable|CasesCaseRuleRuleHiddenConditions[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditions">CasesCaseRuleRuleHiddenConditions</a>[]

---


### CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference <a name="CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.resetFieldId">ResetFieldId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFieldId` <a name="ResetFieldId" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.resetFieldId"></a>

```csharp
private void ResetFieldId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.property.fieldIdInput">FieldIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.property.fieldId">FieldId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOne">CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOne</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FieldIdInput`<sup>Optional</sup> <a name="FieldIdInput" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.property.fieldIdInput"></a>

```csharp
public string FieldIdInput { get; }
```

- *Type:* string

---

##### `FieldId`<sup>Required</sup> <a name="FieldId" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.property.fieldId"></a>

```csharp
public string FieldId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOne InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOne">CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOne</a>

---


### CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference <a name="CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.resetBooleanValue">ResetBooleanValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.resetDoubleValue">ResetDoubleValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.resetEmptyValue">ResetEmptyValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.resetStringValue">ResetStringValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBooleanValue` <a name="ResetBooleanValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.resetBooleanValue"></a>

```csharp
private void ResetBooleanValue()
```

##### `ResetDoubleValue` <a name="ResetDoubleValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.resetDoubleValue"></a>

```csharp
private void ResetDoubleValue()
```

##### `ResetEmptyValue` <a name="ResetEmptyValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.resetEmptyValue"></a>

```csharp
private void ResetEmptyValue()
```

##### `ResetStringValue` <a name="ResetStringValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.resetStringValue"></a>

```csharp
private void ResetStringValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.property.booleanValueInput">BooleanValueInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.property.doubleValueInput">DoubleValueInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.property.emptyValueInput">EmptyValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.property.stringValueInput">StringValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.property.booleanValue">BooleanValue</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.property.doubleValue">DoubleValue</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.property.emptyValue">EmptyValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.property.stringValue">StringValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwo">CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BooleanValueInput`<sup>Optional</sup> <a name="BooleanValueInput" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.property.booleanValueInput"></a>

```csharp
public bool|IResolvable BooleanValueInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DoubleValueInput`<sup>Optional</sup> <a name="DoubleValueInput" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.property.doubleValueInput"></a>

```csharp
public double DoubleValueInput { get; }
```

- *Type:* double

---

##### `EmptyValueInput`<sup>Optional</sup> <a name="EmptyValueInput" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.property.emptyValueInput"></a>

```csharp
public string EmptyValueInput { get; }
```

- *Type:* string

---

##### `StringValueInput`<sup>Optional</sup> <a name="StringValueInput" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.property.stringValueInput"></a>

```csharp
public string StringValueInput { get; }
```

- *Type:* string

---

##### `BooleanValue`<sup>Required</sup> <a name="BooleanValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.property.booleanValue"></a>

```csharp
public bool|IResolvable BooleanValue { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DoubleValue`<sup>Required</sup> <a name="DoubleValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.property.doubleValue"></a>

```csharp
public double DoubleValue { get; }
```

- *Type:* double

---

##### `EmptyValue`<sup>Required</sup> <a name="EmptyValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.property.emptyValue"></a>

```csharp
public string EmptyValue { get; }
```

- *Type:* string

---

##### `StringValue`<sup>Required</sup> <a name="StringValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.property.stringValue"></a>

```csharp
public string StringValue { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwo InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwo">CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwo</a>

---


### CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference <a name="CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.putOperandOne">PutOperandOne</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.putOperandTwo">PutOperandTwo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.resetOperandOne">ResetOperandOne</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.resetOperandTwo">ResetOperandTwo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.resetResult">ResetResult</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOperandOne` <a name="PutOperandOne" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.putOperandOne"></a>

```csharp
private void PutOperandOne(CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOne Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.putOperandOne.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOne">CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOne</a>

---

##### `PutOperandTwo` <a name="PutOperandTwo" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.putOperandTwo"></a>

```csharp
private void PutOperandTwo(CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwo Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.putOperandTwo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwo">CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwo</a>

---

##### `ResetOperandOne` <a name="ResetOperandOne" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.resetOperandOne"></a>

```csharp
private void ResetOperandOne()
```

##### `ResetOperandTwo` <a name="ResetOperandTwo" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.resetOperandTwo"></a>

```csharp
private void ResetOperandTwo()
```

##### `ResetResult` <a name="ResetResult" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.resetResult"></a>

```csharp
private void ResetResult()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.property.operandOne">OperandOne</a></code> | <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference">CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.property.operandTwo">OperandTwo</a></code> | <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference">CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.property.operandOneInput">OperandOneInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOne">CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOne</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.property.operandTwoInput">OperandTwoInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwo">CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.property.resultInput">ResultInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.property.result">Result</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualTo">CasesCaseRuleRuleHiddenConditionsNotEqualTo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OperandOne`<sup>Required</sup> <a name="OperandOne" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.property.operandOne"></a>

```csharp
public CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference OperandOne { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference">CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference</a>

---

##### `OperandTwo`<sup>Required</sup> <a name="OperandTwo" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.property.operandTwo"></a>

```csharp
public CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference OperandTwo { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference">CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference</a>

---

##### `OperandOneInput`<sup>Optional</sup> <a name="OperandOneInput" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.property.operandOneInput"></a>

```csharp
public IResolvable|CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOne OperandOneInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOne">CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOne</a>

---

##### `OperandTwoInput`<sup>Optional</sup> <a name="OperandTwoInput" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.property.operandTwoInput"></a>

```csharp
public IResolvable|CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwo OperandTwoInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwo">CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwo</a>

---

##### `ResultInput`<sup>Optional</sup> <a name="ResultInput" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.property.resultInput"></a>

```csharp
public bool|IResolvable ResultInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Result`<sup>Required</sup> <a name="Result" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.property.result"></a>

```csharp
public bool|IResolvable Result { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CasesCaseRuleRuleHiddenConditionsNotEqualTo InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualTo">CasesCaseRuleRuleHiddenConditionsNotEqualTo</a>

---


### CasesCaseRuleRuleHiddenConditionsOutputReference <a name="CasesCaseRuleRuleHiddenConditionsOutputReference" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CasesCaseRuleRuleHiddenConditionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.putEqualTo">PutEqualTo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.putNotEqualTo">PutNotEqualTo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.resetEqualTo">ResetEqualTo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.resetNotEqualTo">ResetNotEqualTo</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEqualTo` <a name="PutEqualTo" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.putEqualTo"></a>

```csharp
private void PutEqualTo(CasesCaseRuleRuleHiddenConditionsEqualTo Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.putEqualTo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualTo">CasesCaseRuleRuleHiddenConditionsEqualTo</a>

---

##### `PutNotEqualTo` <a name="PutNotEqualTo" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.putNotEqualTo"></a>

```csharp
private void PutNotEqualTo(CasesCaseRuleRuleHiddenConditionsNotEqualTo Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.putNotEqualTo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualTo">CasesCaseRuleRuleHiddenConditionsNotEqualTo</a>

---

##### `ResetEqualTo` <a name="ResetEqualTo" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.resetEqualTo"></a>

```csharp
private void ResetEqualTo()
```

##### `ResetNotEqualTo` <a name="ResetNotEqualTo" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.resetNotEqualTo"></a>

```csharp
private void ResetNotEqualTo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.property.equalTo">EqualTo</a></code> | <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference">CasesCaseRuleRuleHiddenConditionsEqualToOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.property.notEqualTo">NotEqualTo</a></code> | <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference">CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.property.equalToInput">EqualToInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualTo">CasesCaseRuleRuleHiddenConditionsEqualTo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.property.notEqualToInput">NotEqualToInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualTo">CasesCaseRuleRuleHiddenConditionsNotEqualTo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditions">CasesCaseRuleRuleHiddenConditions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EqualTo`<sup>Required</sup> <a name="EqualTo" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.property.equalTo"></a>

```csharp
public CasesCaseRuleRuleHiddenConditionsEqualToOutputReference EqualTo { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference">CasesCaseRuleRuleHiddenConditionsEqualToOutputReference</a>

---

##### `NotEqualTo`<sup>Required</sup> <a name="NotEqualTo" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.property.notEqualTo"></a>

```csharp
public CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference NotEqualTo { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference">CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference</a>

---

##### `EqualToInput`<sup>Optional</sup> <a name="EqualToInput" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.property.equalToInput"></a>

```csharp
public IResolvable|CasesCaseRuleRuleHiddenConditionsEqualTo EqualToInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualTo">CasesCaseRuleRuleHiddenConditionsEqualTo</a>

---

##### `NotEqualToInput`<sup>Optional</sup> <a name="NotEqualToInput" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.property.notEqualToInput"></a>

```csharp
public IResolvable|CasesCaseRuleRuleHiddenConditionsNotEqualTo NotEqualToInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualTo">CasesCaseRuleRuleHiddenConditionsNotEqualTo</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CasesCaseRuleRuleHiddenConditions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditions">CasesCaseRuleRuleHiddenConditions</a>

---


### CasesCaseRuleRuleHiddenOutputReference <a name="CasesCaseRuleRuleHiddenOutputReference" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CasesCaseRuleRuleHiddenOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.putConditions">PutConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.resetConditions">ResetConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.resetDefaultValue">ResetDefaultValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConditions` <a name="PutConditions" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.putConditions"></a>

```csharp
private void PutConditions(IResolvable|CasesCaseRuleRuleHiddenConditions[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.putConditions.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditions">CasesCaseRuleRuleHiddenConditions</a>[]

---

##### `ResetConditions` <a name="ResetConditions" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.resetConditions"></a>

```csharp
private void ResetConditions()
```

##### `ResetDefaultValue` <a name="ResetDefaultValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.resetDefaultValue"></a>

```csharp
private void ResetDefaultValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.property.conditions">Conditions</a></code> | <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsList">CasesCaseRuleRuleHiddenConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.property.conditionsInput">ConditionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditions">CasesCaseRuleRuleHiddenConditions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.property.defaultValueInput">DefaultValueInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.property.defaultValue">DefaultValue</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHidden">CasesCaseRuleRuleHidden</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.property.conditions"></a>

```csharp
public CasesCaseRuleRuleHiddenConditionsList Conditions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsList">CasesCaseRuleRuleHiddenConditionsList</a>

---

##### `ConditionsInput`<sup>Optional</sup> <a name="ConditionsInput" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.property.conditionsInput"></a>

```csharp
public IResolvable|CasesCaseRuleRuleHiddenConditions[] ConditionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditions">CasesCaseRuleRuleHiddenConditions</a>[]

---

##### `DefaultValueInput`<sup>Optional</sup> <a name="DefaultValueInput" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.property.defaultValueInput"></a>

```csharp
public bool|IResolvable DefaultValueInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DefaultValue`<sup>Required</sup> <a name="DefaultValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.property.defaultValue"></a>

```csharp
public bool|IResolvable DefaultValue { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CasesCaseRuleRuleHidden InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHidden">CasesCaseRuleRuleHidden</a>

---


### CasesCaseRuleRuleOutputReference <a name="CasesCaseRuleRuleOutputReference" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CasesCaseRuleRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.putHidden">PutHidden</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.putRequired">PutRequired</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.resetHidden">ResetHidden</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.resetRequired">ResetRequired</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHidden` <a name="PutHidden" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.putHidden"></a>

```csharp
private void PutHidden(CasesCaseRuleRuleHidden Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.putHidden.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHidden">CasesCaseRuleRuleHidden</a>

---

##### `PutRequired` <a name="PutRequired" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.putRequired"></a>

```csharp
private void PutRequired(CasesCaseRuleRuleRequired Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.putRequired.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequired">CasesCaseRuleRuleRequired</a>

---

##### `ResetHidden` <a name="ResetHidden" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.resetHidden"></a>

```csharp
private void ResetHidden()
```

##### `ResetRequired` <a name="ResetRequired" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.resetRequired"></a>

```csharp
private void ResetRequired()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.property.hidden">Hidden</a></code> | <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference">CasesCaseRuleRuleHiddenOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.property.required">Required</a></code> | <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference">CasesCaseRuleRuleRequiredOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.property.hiddenInput">HiddenInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHidden">CasesCaseRuleRuleHidden</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.property.requiredInput">RequiredInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequired">CasesCaseRuleRuleRequired</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRule">CasesCaseRuleRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Hidden`<sup>Required</sup> <a name="Hidden" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.property.hidden"></a>

```csharp
public CasesCaseRuleRuleHiddenOutputReference Hidden { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference">CasesCaseRuleRuleHiddenOutputReference</a>

---

##### `Required`<sup>Required</sup> <a name="Required" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.property.required"></a>

```csharp
public CasesCaseRuleRuleRequiredOutputReference Required { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference">CasesCaseRuleRuleRequiredOutputReference</a>

---

##### `HiddenInput`<sup>Optional</sup> <a name="HiddenInput" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.property.hiddenInput"></a>

```csharp
public IResolvable|CasesCaseRuleRuleHidden HiddenInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHidden">CasesCaseRuleRuleHidden</a>

---

##### `RequiredInput`<sup>Optional</sup> <a name="RequiredInput" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.property.requiredInput"></a>

```csharp
public IResolvable|CasesCaseRuleRuleRequired RequiredInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequired">CasesCaseRuleRuleRequired</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CasesCaseRuleRule InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRule">CasesCaseRuleRule</a>

---


### CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference <a name="CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.resetFieldId">ResetFieldId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFieldId` <a name="ResetFieldId" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.resetFieldId"></a>

```csharp
private void ResetFieldId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.property.fieldIdInput">FieldIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.property.fieldId">FieldId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOne">CasesCaseRuleRuleRequiredConditionsEqualToOperandOne</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FieldIdInput`<sup>Optional</sup> <a name="FieldIdInput" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.property.fieldIdInput"></a>

```csharp
public string FieldIdInput { get; }
```

- *Type:* string

---

##### `FieldId`<sup>Required</sup> <a name="FieldId" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.property.fieldId"></a>

```csharp
public string FieldId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CasesCaseRuleRuleRequiredConditionsEqualToOperandOne InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOne">CasesCaseRuleRuleRequiredConditionsEqualToOperandOne</a>

---


### CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference <a name="CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.resetBooleanValue">ResetBooleanValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.resetDoubleValue">ResetDoubleValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.resetEmptyValue">ResetEmptyValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.resetStringValue">ResetStringValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBooleanValue` <a name="ResetBooleanValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.resetBooleanValue"></a>

```csharp
private void ResetBooleanValue()
```

##### `ResetDoubleValue` <a name="ResetDoubleValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.resetDoubleValue"></a>

```csharp
private void ResetDoubleValue()
```

##### `ResetEmptyValue` <a name="ResetEmptyValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.resetEmptyValue"></a>

```csharp
private void ResetEmptyValue()
```

##### `ResetStringValue` <a name="ResetStringValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.resetStringValue"></a>

```csharp
private void ResetStringValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.property.booleanValueInput">BooleanValueInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.property.doubleValueInput">DoubleValueInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.property.emptyValueInput">EmptyValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.property.stringValueInput">StringValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.property.booleanValue">BooleanValue</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.property.doubleValue">DoubleValue</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.property.emptyValue">EmptyValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.property.stringValue">StringValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwo">CasesCaseRuleRuleRequiredConditionsEqualToOperandTwo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BooleanValueInput`<sup>Optional</sup> <a name="BooleanValueInput" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.property.booleanValueInput"></a>

```csharp
public bool|IResolvable BooleanValueInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DoubleValueInput`<sup>Optional</sup> <a name="DoubleValueInput" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.property.doubleValueInput"></a>

```csharp
public double DoubleValueInput { get; }
```

- *Type:* double

---

##### `EmptyValueInput`<sup>Optional</sup> <a name="EmptyValueInput" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.property.emptyValueInput"></a>

```csharp
public string EmptyValueInput { get; }
```

- *Type:* string

---

##### `StringValueInput`<sup>Optional</sup> <a name="StringValueInput" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.property.stringValueInput"></a>

```csharp
public string StringValueInput { get; }
```

- *Type:* string

---

##### `BooleanValue`<sup>Required</sup> <a name="BooleanValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.property.booleanValue"></a>

```csharp
public bool|IResolvable BooleanValue { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DoubleValue`<sup>Required</sup> <a name="DoubleValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.property.doubleValue"></a>

```csharp
public double DoubleValue { get; }
```

- *Type:* double

---

##### `EmptyValue`<sup>Required</sup> <a name="EmptyValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.property.emptyValue"></a>

```csharp
public string EmptyValue { get; }
```

- *Type:* string

---

##### `StringValue`<sup>Required</sup> <a name="StringValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.property.stringValue"></a>

```csharp
public string StringValue { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CasesCaseRuleRuleRequiredConditionsEqualToOperandTwo InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwo">CasesCaseRuleRuleRequiredConditionsEqualToOperandTwo</a>

---


### CasesCaseRuleRuleRequiredConditionsEqualToOutputReference <a name="CasesCaseRuleRuleRequiredConditionsEqualToOutputReference" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CasesCaseRuleRuleRequiredConditionsEqualToOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.putOperandOne">PutOperandOne</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.putOperandTwo">PutOperandTwo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.resetOperandOne">ResetOperandOne</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.resetOperandTwo">ResetOperandTwo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.resetResult">ResetResult</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOperandOne` <a name="PutOperandOne" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.putOperandOne"></a>

```csharp
private void PutOperandOne(CasesCaseRuleRuleRequiredConditionsEqualToOperandOne Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.putOperandOne.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOne">CasesCaseRuleRuleRequiredConditionsEqualToOperandOne</a>

---

##### `PutOperandTwo` <a name="PutOperandTwo" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.putOperandTwo"></a>

```csharp
private void PutOperandTwo(CasesCaseRuleRuleRequiredConditionsEqualToOperandTwo Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.putOperandTwo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwo">CasesCaseRuleRuleRequiredConditionsEqualToOperandTwo</a>

---

##### `ResetOperandOne` <a name="ResetOperandOne" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.resetOperandOne"></a>

```csharp
private void ResetOperandOne()
```

##### `ResetOperandTwo` <a name="ResetOperandTwo" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.resetOperandTwo"></a>

```csharp
private void ResetOperandTwo()
```

##### `ResetResult` <a name="ResetResult" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.resetResult"></a>

```csharp
private void ResetResult()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.property.operandOne">OperandOne</a></code> | <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference">CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.property.operandTwo">OperandTwo</a></code> | <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference">CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.property.operandOneInput">OperandOneInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOne">CasesCaseRuleRuleRequiredConditionsEqualToOperandOne</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.property.operandTwoInput">OperandTwoInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwo">CasesCaseRuleRuleRequiredConditionsEqualToOperandTwo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.property.resultInput">ResultInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.property.result">Result</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualTo">CasesCaseRuleRuleRequiredConditionsEqualTo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OperandOne`<sup>Required</sup> <a name="OperandOne" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.property.operandOne"></a>

```csharp
public CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference OperandOne { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference">CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference</a>

---

##### `OperandTwo`<sup>Required</sup> <a name="OperandTwo" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.property.operandTwo"></a>

```csharp
public CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference OperandTwo { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference">CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference</a>

---

##### `OperandOneInput`<sup>Optional</sup> <a name="OperandOneInput" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.property.operandOneInput"></a>

```csharp
public IResolvable|CasesCaseRuleRuleRequiredConditionsEqualToOperandOne OperandOneInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOne">CasesCaseRuleRuleRequiredConditionsEqualToOperandOne</a>

---

##### `OperandTwoInput`<sup>Optional</sup> <a name="OperandTwoInput" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.property.operandTwoInput"></a>

```csharp
public IResolvable|CasesCaseRuleRuleRequiredConditionsEqualToOperandTwo OperandTwoInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwo">CasesCaseRuleRuleRequiredConditionsEqualToOperandTwo</a>

---

##### `ResultInput`<sup>Optional</sup> <a name="ResultInput" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.property.resultInput"></a>

```csharp
public bool|IResolvable ResultInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Result`<sup>Required</sup> <a name="Result" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.property.result"></a>

```csharp
public bool|IResolvable Result { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CasesCaseRuleRuleRequiredConditionsEqualTo InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualTo">CasesCaseRuleRuleRequiredConditionsEqualTo</a>

---


### CasesCaseRuleRuleRequiredConditionsList <a name="CasesCaseRuleRuleRequiredConditionsList" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CasesCaseRuleRuleRequiredConditionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsList.get"></a>

```csharp
private CasesCaseRuleRuleRequiredConditionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditions">CasesCaseRuleRuleRequiredConditions</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsList.property.internalValue"></a>

```csharp
public IResolvable|CasesCaseRuleRuleRequiredConditions[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditions">CasesCaseRuleRuleRequiredConditions</a>[]

---


### CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference <a name="CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.resetFieldId">ResetFieldId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFieldId` <a name="ResetFieldId" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.resetFieldId"></a>

```csharp
private void ResetFieldId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.property.fieldIdInput">FieldIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.property.fieldId">FieldId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOne">CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOne</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FieldIdInput`<sup>Optional</sup> <a name="FieldIdInput" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.property.fieldIdInput"></a>

```csharp
public string FieldIdInput { get; }
```

- *Type:* string

---

##### `FieldId`<sup>Required</sup> <a name="FieldId" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.property.fieldId"></a>

```csharp
public string FieldId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOne InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOne">CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOne</a>

---


### CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference <a name="CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.resetBooleanValue">ResetBooleanValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.resetDoubleValue">ResetDoubleValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.resetEmptyValue">ResetEmptyValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.resetStringValue">ResetStringValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBooleanValue` <a name="ResetBooleanValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.resetBooleanValue"></a>

```csharp
private void ResetBooleanValue()
```

##### `ResetDoubleValue` <a name="ResetDoubleValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.resetDoubleValue"></a>

```csharp
private void ResetDoubleValue()
```

##### `ResetEmptyValue` <a name="ResetEmptyValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.resetEmptyValue"></a>

```csharp
private void ResetEmptyValue()
```

##### `ResetStringValue` <a name="ResetStringValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.resetStringValue"></a>

```csharp
private void ResetStringValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.property.booleanValueInput">BooleanValueInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.property.doubleValueInput">DoubleValueInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.property.emptyValueInput">EmptyValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.property.stringValueInput">StringValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.property.booleanValue">BooleanValue</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.property.doubleValue">DoubleValue</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.property.emptyValue">EmptyValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.property.stringValue">StringValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwo">CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BooleanValueInput`<sup>Optional</sup> <a name="BooleanValueInput" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.property.booleanValueInput"></a>

```csharp
public bool|IResolvable BooleanValueInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DoubleValueInput`<sup>Optional</sup> <a name="DoubleValueInput" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.property.doubleValueInput"></a>

```csharp
public double DoubleValueInput { get; }
```

- *Type:* double

---

##### `EmptyValueInput`<sup>Optional</sup> <a name="EmptyValueInput" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.property.emptyValueInput"></a>

```csharp
public string EmptyValueInput { get; }
```

- *Type:* string

---

##### `StringValueInput`<sup>Optional</sup> <a name="StringValueInput" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.property.stringValueInput"></a>

```csharp
public string StringValueInput { get; }
```

- *Type:* string

---

##### `BooleanValue`<sup>Required</sup> <a name="BooleanValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.property.booleanValue"></a>

```csharp
public bool|IResolvable BooleanValue { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DoubleValue`<sup>Required</sup> <a name="DoubleValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.property.doubleValue"></a>

```csharp
public double DoubleValue { get; }
```

- *Type:* double

---

##### `EmptyValue`<sup>Required</sup> <a name="EmptyValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.property.emptyValue"></a>

```csharp
public string EmptyValue { get; }
```

- *Type:* string

---

##### `StringValue`<sup>Required</sup> <a name="StringValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.property.stringValue"></a>

```csharp
public string StringValue { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwo InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwo">CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwo</a>

---


### CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference <a name="CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.putOperandOne">PutOperandOne</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.putOperandTwo">PutOperandTwo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.resetOperandOne">ResetOperandOne</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.resetOperandTwo">ResetOperandTwo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.resetResult">ResetResult</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOperandOne` <a name="PutOperandOne" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.putOperandOne"></a>

```csharp
private void PutOperandOne(CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOne Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.putOperandOne.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOne">CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOne</a>

---

##### `PutOperandTwo` <a name="PutOperandTwo" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.putOperandTwo"></a>

```csharp
private void PutOperandTwo(CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwo Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.putOperandTwo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwo">CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwo</a>

---

##### `ResetOperandOne` <a name="ResetOperandOne" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.resetOperandOne"></a>

```csharp
private void ResetOperandOne()
```

##### `ResetOperandTwo` <a name="ResetOperandTwo" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.resetOperandTwo"></a>

```csharp
private void ResetOperandTwo()
```

##### `ResetResult` <a name="ResetResult" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.resetResult"></a>

```csharp
private void ResetResult()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.property.operandOne">OperandOne</a></code> | <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference">CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.property.operandTwo">OperandTwo</a></code> | <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference">CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.property.operandOneInput">OperandOneInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOne">CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOne</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.property.operandTwoInput">OperandTwoInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwo">CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.property.resultInput">ResultInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.property.result">Result</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualTo">CasesCaseRuleRuleRequiredConditionsNotEqualTo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OperandOne`<sup>Required</sup> <a name="OperandOne" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.property.operandOne"></a>

```csharp
public CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference OperandOne { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference">CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference</a>

---

##### `OperandTwo`<sup>Required</sup> <a name="OperandTwo" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.property.operandTwo"></a>

```csharp
public CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference OperandTwo { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference">CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference</a>

---

##### `OperandOneInput`<sup>Optional</sup> <a name="OperandOneInput" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.property.operandOneInput"></a>

```csharp
public IResolvable|CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOne OperandOneInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOne">CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOne</a>

---

##### `OperandTwoInput`<sup>Optional</sup> <a name="OperandTwoInput" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.property.operandTwoInput"></a>

```csharp
public IResolvable|CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwo OperandTwoInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwo">CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwo</a>

---

##### `ResultInput`<sup>Optional</sup> <a name="ResultInput" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.property.resultInput"></a>

```csharp
public bool|IResolvable ResultInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Result`<sup>Required</sup> <a name="Result" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.property.result"></a>

```csharp
public bool|IResolvable Result { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CasesCaseRuleRuleRequiredConditionsNotEqualTo InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualTo">CasesCaseRuleRuleRequiredConditionsNotEqualTo</a>

---


### CasesCaseRuleRuleRequiredConditionsOutputReference <a name="CasesCaseRuleRuleRequiredConditionsOutputReference" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CasesCaseRuleRuleRequiredConditionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.putEqualTo">PutEqualTo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.putNotEqualTo">PutNotEqualTo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.resetEqualTo">ResetEqualTo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.resetNotEqualTo">ResetNotEqualTo</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEqualTo` <a name="PutEqualTo" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.putEqualTo"></a>

```csharp
private void PutEqualTo(CasesCaseRuleRuleRequiredConditionsEqualTo Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.putEqualTo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualTo">CasesCaseRuleRuleRequiredConditionsEqualTo</a>

---

##### `PutNotEqualTo` <a name="PutNotEqualTo" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.putNotEqualTo"></a>

```csharp
private void PutNotEqualTo(CasesCaseRuleRuleRequiredConditionsNotEqualTo Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.putNotEqualTo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualTo">CasesCaseRuleRuleRequiredConditionsNotEqualTo</a>

---

##### `ResetEqualTo` <a name="ResetEqualTo" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.resetEqualTo"></a>

```csharp
private void ResetEqualTo()
```

##### `ResetNotEqualTo` <a name="ResetNotEqualTo" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.resetNotEqualTo"></a>

```csharp
private void ResetNotEqualTo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.property.equalTo">EqualTo</a></code> | <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference">CasesCaseRuleRuleRequiredConditionsEqualToOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.property.notEqualTo">NotEqualTo</a></code> | <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference">CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.property.equalToInput">EqualToInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualTo">CasesCaseRuleRuleRequiredConditionsEqualTo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.property.notEqualToInput">NotEqualToInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualTo">CasesCaseRuleRuleRequiredConditionsNotEqualTo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditions">CasesCaseRuleRuleRequiredConditions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EqualTo`<sup>Required</sup> <a name="EqualTo" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.property.equalTo"></a>

```csharp
public CasesCaseRuleRuleRequiredConditionsEqualToOutputReference EqualTo { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference">CasesCaseRuleRuleRequiredConditionsEqualToOutputReference</a>

---

##### `NotEqualTo`<sup>Required</sup> <a name="NotEqualTo" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.property.notEqualTo"></a>

```csharp
public CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference NotEqualTo { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference">CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference</a>

---

##### `EqualToInput`<sup>Optional</sup> <a name="EqualToInput" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.property.equalToInput"></a>

```csharp
public IResolvable|CasesCaseRuleRuleRequiredConditionsEqualTo EqualToInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualTo">CasesCaseRuleRuleRequiredConditionsEqualTo</a>

---

##### `NotEqualToInput`<sup>Optional</sup> <a name="NotEqualToInput" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.property.notEqualToInput"></a>

```csharp
public IResolvable|CasesCaseRuleRuleRequiredConditionsNotEqualTo NotEqualToInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualTo">CasesCaseRuleRuleRequiredConditionsNotEqualTo</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CasesCaseRuleRuleRequiredConditions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditions">CasesCaseRuleRuleRequiredConditions</a>

---


### CasesCaseRuleRuleRequiredOutputReference <a name="CasesCaseRuleRuleRequiredOutputReference" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CasesCaseRuleRuleRequiredOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.putConditions">PutConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.resetConditions">ResetConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.resetDefaultValue">ResetDefaultValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConditions` <a name="PutConditions" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.putConditions"></a>

```csharp
private void PutConditions(IResolvable|CasesCaseRuleRuleRequiredConditions[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.putConditions.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditions">CasesCaseRuleRuleRequiredConditions</a>[]

---

##### `ResetConditions` <a name="ResetConditions" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.resetConditions"></a>

```csharp
private void ResetConditions()
```

##### `ResetDefaultValue` <a name="ResetDefaultValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.resetDefaultValue"></a>

```csharp
private void ResetDefaultValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.property.conditions">Conditions</a></code> | <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsList">CasesCaseRuleRuleRequiredConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.property.conditionsInput">ConditionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditions">CasesCaseRuleRuleRequiredConditions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.property.defaultValueInput">DefaultValueInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.property.defaultValue">DefaultValue</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequired">CasesCaseRuleRuleRequired</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.property.conditions"></a>

```csharp
public CasesCaseRuleRuleRequiredConditionsList Conditions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsList">CasesCaseRuleRuleRequiredConditionsList</a>

---

##### `ConditionsInput`<sup>Optional</sup> <a name="ConditionsInput" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.property.conditionsInput"></a>

```csharp
public IResolvable|CasesCaseRuleRuleRequiredConditions[] ConditionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditions">CasesCaseRuleRuleRequiredConditions</a>[]

---

##### `DefaultValueInput`<sup>Optional</sup> <a name="DefaultValueInput" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.property.defaultValueInput"></a>

```csharp
public bool|IResolvable DefaultValueInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DefaultValue`<sup>Required</sup> <a name="DefaultValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.property.defaultValue"></a>

```csharp
public bool|IResolvable DefaultValue { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CasesCaseRuleRuleRequired InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequired">CasesCaseRuleRuleRequired</a>

---


### CasesCaseRuleTagsList <a name="CasesCaseRuleTagsList" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CasesCaseRuleTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsList.get"></a>

```csharp
private CasesCaseRuleTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTags">CasesCaseRuleTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsList.property.internalValue"></a>

```csharp
public IResolvable|CasesCaseRuleTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTags">CasesCaseRuleTags</a>[]

---


### CasesCaseRuleTagsOutputReference <a name="CasesCaseRuleTagsOutputReference" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CasesCaseRuleTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTags">CasesCaseRuleTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CasesCaseRuleTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTags">CasesCaseRuleTags</a>

---



