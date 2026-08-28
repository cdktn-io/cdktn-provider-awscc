# `vpclatticeRule` Submodule <a name="`vpclatticeRule` Submodule" id="@cdktn/provider-awscc.vpclatticeRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpclatticeRule <a name="VpclatticeRule" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_rule awscc_vpclattice_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new VpclatticeRule(Construct Scope, string Id, VpclatticeRuleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleConfig">VpclatticeRuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleConfig">VpclatticeRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.putAction">PutAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.putMatch">PutMatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.resetListenerIdentifier">ResetListenerIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.resetServiceIdentifier">ResetServiceIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAction` <a name="PutAction" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.putAction"></a>

```csharp
private void PutAction(VpclatticeRuleAction Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.putAction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleAction">VpclatticeRuleAction</a>

---

##### `PutMatch` <a name="PutMatch" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.putMatch"></a>

```csharp
private void PutMatch(VpclatticeRuleMatch Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.putMatch.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatch">VpclatticeRuleMatch</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.putTags"></a>

```csharp
private void PutTags(IResolvable|VpclatticeRuleTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTags">VpclatticeRuleTags</a>[]

---

##### `ResetListenerIdentifier` <a name="ResetListenerIdentifier" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.resetListenerIdentifier"></a>

```csharp
private void ResetListenerIdentifier()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetServiceIdentifier` <a name="ResetServiceIdentifier" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.resetServiceIdentifier"></a>

```csharp
private void ResetServiceIdentifier()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a VpclatticeRule resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

VpclatticeRule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

VpclatticeRule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

VpclatticeRule.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

VpclatticeRule.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a VpclatticeRule resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VpclatticeRule to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VpclatticeRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_rule#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the VpclatticeRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.property.action">Action</a></code> | <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionOutputReference">VpclatticeRuleActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.property.match">Match</a></code> | <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchOutputReference">VpclatticeRuleMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.property.ruleId">RuleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsList">VpclatticeRuleTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.property.actionInput">ActionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleAction">VpclatticeRuleAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.property.listenerIdentifierInput">ListenerIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.property.matchInput">MatchInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatch">VpclatticeRuleMatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.property.priorityInput">PriorityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.property.serviceIdentifierInput">ServiceIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTags">VpclatticeRuleTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.property.listenerIdentifier">ListenerIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.property.priority">Priority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.property.serviceIdentifier">ServiceIdentifier</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.property.action"></a>

```csharp
public VpclatticeRuleActionOutputReference Action { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionOutputReference">VpclatticeRuleActionOutputReference</a>

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Match`<sup>Required</sup> <a name="Match" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.property.match"></a>

```csharp
public VpclatticeRuleMatchOutputReference Match { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchOutputReference">VpclatticeRuleMatchOutputReference</a>

---

##### `RuleId`<sup>Required</sup> <a name="RuleId" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.property.ruleId"></a>

```csharp
public string RuleId { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.property.tags"></a>

```csharp
public VpclatticeRuleTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsList">VpclatticeRuleTagsList</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.property.actionInput"></a>

```csharp
public IResolvable|VpclatticeRuleAction ActionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleAction">VpclatticeRuleAction</a>

---

##### `ListenerIdentifierInput`<sup>Optional</sup> <a name="ListenerIdentifierInput" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.property.listenerIdentifierInput"></a>

```csharp
public string ListenerIdentifierInput { get; }
```

- *Type:* string

---

##### `MatchInput`<sup>Optional</sup> <a name="MatchInput" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.property.matchInput"></a>

```csharp
public IResolvable|VpclatticeRuleMatch MatchInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatch">VpclatticeRuleMatch</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.property.priorityInput"></a>

```csharp
public double PriorityInput { get; }
```

- *Type:* double

---

##### `ServiceIdentifierInput`<sup>Optional</sup> <a name="ServiceIdentifierInput" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.property.serviceIdentifierInput"></a>

```csharp
public string ServiceIdentifierInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.property.tagsInput"></a>

```csharp
public IResolvable|VpclatticeRuleTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTags">VpclatticeRuleTags</a>[]

---

##### `ListenerIdentifier`<sup>Required</sup> <a name="ListenerIdentifier" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.property.listenerIdentifier"></a>

```csharp
public string ListenerIdentifier { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

##### `ServiceIdentifier`<sup>Required</sup> <a name="ServiceIdentifier" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.property.serviceIdentifier"></a>

```csharp
public string ServiceIdentifier { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VpclatticeRuleAction <a name="VpclatticeRuleAction" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleAction.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new VpclatticeRuleAction {
    VpclatticeRuleActionFixedResponse FixedResponse = null,
    VpclatticeRuleActionForward Forward = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleAction.property.fixedResponse">FixedResponse</a></code> | <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionFixedResponse">VpclatticeRuleActionFixedResponse</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_rule#fixed_response VpclatticeRule#fixed_response}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleAction.property.forward">Forward</a></code> | <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForward">VpclatticeRuleActionForward</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_rule#forward VpclatticeRule#forward}. |

---

##### `FixedResponse`<sup>Optional</sup> <a name="FixedResponse" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleAction.property.fixedResponse"></a>

```csharp
public VpclatticeRuleActionFixedResponse FixedResponse { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionFixedResponse">VpclatticeRuleActionFixedResponse</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_rule#fixed_response VpclatticeRule#fixed_response}.

---

##### `Forward`<sup>Optional</sup> <a name="Forward" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleAction.property.forward"></a>

```csharp
public VpclatticeRuleActionForward Forward { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForward">VpclatticeRuleActionForward</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_rule#forward VpclatticeRule#forward}.

---

### VpclatticeRuleActionFixedResponse <a name="VpclatticeRuleActionFixedResponse" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionFixedResponse"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionFixedResponse.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new VpclatticeRuleActionFixedResponse {
    double StatusCode = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionFixedResponse.property.statusCode">StatusCode</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_rule#status_code VpclatticeRule#status_code}. |

---

##### `StatusCode`<sup>Optional</sup> <a name="StatusCode" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionFixedResponse.property.statusCode"></a>

```csharp
public double StatusCode { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_rule#status_code VpclatticeRule#status_code}.

---

### VpclatticeRuleActionForward <a name="VpclatticeRuleActionForward" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForward"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForward.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new VpclatticeRuleActionForward {
    IResolvable|VpclatticeRuleActionForwardTargetGroups[] TargetGroups = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForward.property.targetGroups">TargetGroups</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroups">VpclatticeRuleActionForwardTargetGroups</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_rule#target_groups VpclatticeRule#target_groups}. |

---

##### `TargetGroups`<sup>Optional</sup> <a name="TargetGroups" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForward.property.targetGroups"></a>

```csharp
public IResolvable|VpclatticeRuleActionForwardTargetGroups[] TargetGroups { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroups">VpclatticeRuleActionForwardTargetGroups</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_rule#target_groups VpclatticeRule#target_groups}.

---

### VpclatticeRuleActionForwardTargetGroups <a name="VpclatticeRuleActionForwardTargetGroups" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroups"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroups.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new VpclatticeRuleActionForwardTargetGroups {
    string TargetGroupIdentifier = null,
    double Weight = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroups.property.targetGroupIdentifier">TargetGroupIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_rule#target_group_identifier VpclatticeRule#target_group_identifier}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroups.property.weight">Weight</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_rule#weight VpclatticeRule#weight}. |

---

##### `TargetGroupIdentifier`<sup>Optional</sup> <a name="TargetGroupIdentifier" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroups.property.targetGroupIdentifier"></a>

```csharp
public string TargetGroupIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_rule#target_group_identifier VpclatticeRule#target_group_identifier}.

---

##### `Weight`<sup>Optional</sup> <a name="Weight" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroups.property.weight"></a>

```csharp
public double Weight { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_rule#weight VpclatticeRule#weight}.

---

### VpclatticeRuleConfig <a name="VpclatticeRuleConfig" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new VpclatticeRuleConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    VpclatticeRuleAction Action,
    VpclatticeRuleMatch Match,
    double Priority,
    string ListenerIdentifier = null,
    string Name = null,
    string ServiceIdentifier = null,
    IResolvable|VpclatticeRuleTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleConfig.property.action">Action</a></code> | <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleAction">VpclatticeRuleAction</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_rule#action VpclatticeRule#action}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleConfig.property.match">Match</a></code> | <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatch">VpclatticeRuleMatch</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_rule#match VpclatticeRule#match}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleConfig.property.priority">Priority</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_rule#priority VpclatticeRule#priority}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleConfig.property.listenerIdentifier">ListenerIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_rule#listener_identifier VpclatticeRule#listener_identifier}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_rule#name VpclatticeRule#name}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleConfig.property.serviceIdentifier">ServiceIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_rule#service_identifier VpclatticeRule#service_identifier}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTags">VpclatticeRuleTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_rule#tags VpclatticeRule#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleConfig.property.action"></a>

```csharp
public VpclatticeRuleAction Action { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleAction">VpclatticeRuleAction</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_rule#action VpclatticeRule#action}.

---

##### `Match`<sup>Required</sup> <a name="Match" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleConfig.property.match"></a>

```csharp
public VpclatticeRuleMatch Match { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatch">VpclatticeRuleMatch</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_rule#match VpclatticeRule#match}.

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleConfig.property.priority"></a>

```csharp
public double Priority { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_rule#priority VpclatticeRule#priority}.

---

##### `ListenerIdentifier`<sup>Optional</sup> <a name="ListenerIdentifier" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleConfig.property.listenerIdentifier"></a>

```csharp
public string ListenerIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_rule#listener_identifier VpclatticeRule#listener_identifier}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_rule#name VpclatticeRule#name}.

---

##### `ServiceIdentifier`<sup>Optional</sup> <a name="ServiceIdentifier" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleConfig.property.serviceIdentifier"></a>

```csharp
public string ServiceIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_rule#service_identifier VpclatticeRule#service_identifier}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleConfig.property.tags"></a>

```csharp
public IResolvable|VpclatticeRuleTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTags">VpclatticeRuleTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_rule#tags VpclatticeRule#tags}.

---

### VpclatticeRuleMatch <a name="VpclatticeRuleMatch" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatch"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatch.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new VpclatticeRuleMatch {
    VpclatticeRuleMatchHttpMatch HttpMatch
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatch.property.httpMatch">HttpMatch</a></code> | <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatch">VpclatticeRuleMatchHttpMatch</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_rule#http_match VpclatticeRule#http_match}. |

---

##### `HttpMatch`<sup>Required</sup> <a name="HttpMatch" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatch.property.httpMatch"></a>

```csharp
public VpclatticeRuleMatchHttpMatch HttpMatch { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatch">VpclatticeRuleMatchHttpMatch</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_rule#http_match VpclatticeRule#http_match}.

---

### VpclatticeRuleMatchHttpMatch <a name="VpclatticeRuleMatchHttpMatch" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatch"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatch.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new VpclatticeRuleMatchHttpMatch {
    IResolvable|VpclatticeRuleMatchHttpMatchHeaderMatches[] HeaderMatches = null,
    string Method = null,
    VpclatticeRuleMatchHttpMatchPathMatch PathMatch = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatch.property.headerMatches">HeaderMatches</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatches">VpclatticeRuleMatchHttpMatchHeaderMatches</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_rule#header_matches VpclatticeRule#header_matches}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatch.property.method">Method</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_rule#method VpclatticeRule#method}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatch.property.pathMatch">PathMatch</a></code> | <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatch">VpclatticeRuleMatchHttpMatchPathMatch</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_rule#path_match VpclatticeRule#path_match}. |

---

##### `HeaderMatches`<sup>Optional</sup> <a name="HeaderMatches" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatch.property.headerMatches"></a>

```csharp
public IResolvable|VpclatticeRuleMatchHttpMatchHeaderMatches[] HeaderMatches { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatches">VpclatticeRuleMatchHttpMatchHeaderMatches</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_rule#header_matches VpclatticeRule#header_matches}.

---

##### `Method`<sup>Optional</sup> <a name="Method" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatch.property.method"></a>

```csharp
public string Method { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_rule#method VpclatticeRule#method}.

---

##### `PathMatch`<sup>Optional</sup> <a name="PathMatch" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatch.property.pathMatch"></a>

```csharp
public VpclatticeRuleMatchHttpMatchPathMatch PathMatch { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatch">VpclatticeRuleMatchHttpMatchPathMatch</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_rule#path_match VpclatticeRule#path_match}.

---

### VpclatticeRuleMatchHttpMatchHeaderMatches <a name="VpclatticeRuleMatchHttpMatchHeaderMatches" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatches"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatches.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new VpclatticeRuleMatchHttpMatchHeaderMatches {
    bool|IResolvable CaseSensitive = null,
    VpclatticeRuleMatchHttpMatchHeaderMatchesMatch Match = null,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatches.property.caseSensitive">CaseSensitive</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_rule#case_sensitive VpclatticeRule#case_sensitive}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatches.property.match">Match</a></code> | <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatch">VpclatticeRuleMatchHttpMatchHeaderMatchesMatch</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_rule#match VpclatticeRule#match}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatches.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_rule#name VpclatticeRule#name}. |

---

##### `CaseSensitive`<sup>Optional</sup> <a name="CaseSensitive" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatches.property.caseSensitive"></a>

```csharp
public bool|IResolvable CaseSensitive { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_rule#case_sensitive VpclatticeRule#case_sensitive}.

---

##### `Match`<sup>Optional</sup> <a name="Match" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatches.property.match"></a>

```csharp
public VpclatticeRuleMatchHttpMatchHeaderMatchesMatch Match { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatch">VpclatticeRuleMatchHttpMatchHeaderMatchesMatch</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_rule#match VpclatticeRule#match}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatches.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_rule#name VpclatticeRule#name}.

---

### VpclatticeRuleMatchHttpMatchHeaderMatchesMatch <a name="VpclatticeRuleMatchHttpMatchHeaderMatchesMatch" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatch"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatch.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new VpclatticeRuleMatchHttpMatchHeaderMatchesMatch {
    string Contains = null,
    string Exact = null,
    string Prefix = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatch.property.contains">Contains</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_rule#contains VpclatticeRule#contains}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatch.property.exact">Exact</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_rule#exact VpclatticeRule#exact}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatch.property.prefix">Prefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_rule#prefix VpclatticeRule#prefix}. |

---

##### `Contains`<sup>Optional</sup> <a name="Contains" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatch.property.contains"></a>

```csharp
public string Contains { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_rule#contains VpclatticeRule#contains}.

---

##### `Exact`<sup>Optional</sup> <a name="Exact" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatch.property.exact"></a>

```csharp
public string Exact { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_rule#exact VpclatticeRule#exact}.

---

##### `Prefix`<sup>Optional</sup> <a name="Prefix" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatch.property.prefix"></a>

```csharp
public string Prefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_rule#prefix VpclatticeRule#prefix}.

---

### VpclatticeRuleMatchHttpMatchPathMatch <a name="VpclatticeRuleMatchHttpMatchPathMatch" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatch"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatch.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new VpclatticeRuleMatchHttpMatchPathMatch {
    bool|IResolvable CaseSensitive = null,
    VpclatticeRuleMatchHttpMatchPathMatchMatch Match = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatch.property.caseSensitive">CaseSensitive</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_rule#case_sensitive VpclatticeRule#case_sensitive}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatch.property.match">Match</a></code> | <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatch">VpclatticeRuleMatchHttpMatchPathMatchMatch</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_rule#match VpclatticeRule#match}. |

---

##### `CaseSensitive`<sup>Optional</sup> <a name="CaseSensitive" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatch.property.caseSensitive"></a>

```csharp
public bool|IResolvable CaseSensitive { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_rule#case_sensitive VpclatticeRule#case_sensitive}.

---

##### `Match`<sup>Optional</sup> <a name="Match" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatch.property.match"></a>

```csharp
public VpclatticeRuleMatchHttpMatchPathMatchMatch Match { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatch">VpclatticeRuleMatchHttpMatchPathMatchMatch</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_rule#match VpclatticeRule#match}.

---

### VpclatticeRuleMatchHttpMatchPathMatchMatch <a name="VpclatticeRuleMatchHttpMatchPathMatchMatch" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatch"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatch.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new VpclatticeRuleMatchHttpMatchPathMatchMatch {
    string Exact = null,
    string Prefix = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatch.property.exact">Exact</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_rule#exact VpclatticeRule#exact}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatch.property.prefix">Prefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_rule#prefix VpclatticeRule#prefix}. |

---

##### `Exact`<sup>Optional</sup> <a name="Exact" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatch.property.exact"></a>

```csharp
public string Exact { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_rule#exact VpclatticeRule#exact}.

---

##### `Prefix`<sup>Optional</sup> <a name="Prefix" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatch.property.prefix"></a>

```csharp
public string Prefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_rule#prefix VpclatticeRule#prefix}.

---

### VpclatticeRuleTags <a name="VpclatticeRuleTags" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new VpclatticeRuleTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_rule#key VpclatticeRule#key}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_rule#value VpclatticeRule#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_rule#key VpclatticeRule#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_rule#value VpclatticeRule#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### VpclatticeRuleActionFixedResponseOutputReference <a name="VpclatticeRuleActionFixedResponseOutputReference" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionFixedResponseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionFixedResponseOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new VpclatticeRuleActionFixedResponseOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionFixedResponseOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionFixedResponseOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionFixedResponseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionFixedResponseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionFixedResponseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionFixedResponseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionFixedResponseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionFixedResponseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionFixedResponseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionFixedResponseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionFixedResponseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionFixedResponseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionFixedResponseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionFixedResponseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionFixedResponseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionFixedResponseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionFixedResponseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionFixedResponseOutputReference.resetStatusCode">ResetStatusCode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionFixedResponseOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionFixedResponseOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionFixedResponseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionFixedResponseOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionFixedResponseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionFixedResponseOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionFixedResponseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionFixedResponseOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionFixedResponseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionFixedResponseOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionFixedResponseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionFixedResponseOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionFixedResponseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionFixedResponseOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionFixedResponseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionFixedResponseOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionFixedResponseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionFixedResponseOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionFixedResponseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionFixedResponseOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionFixedResponseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionFixedResponseOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionFixedResponseOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionFixedResponseOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetStatusCode` <a name="ResetStatusCode" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionFixedResponseOutputReference.resetStatusCode"></a>

```csharp
private void ResetStatusCode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionFixedResponseOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionFixedResponseOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionFixedResponseOutputReference.property.statusCodeInput">StatusCodeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionFixedResponseOutputReference.property.statusCode">StatusCode</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionFixedResponseOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionFixedResponse">VpclatticeRuleActionFixedResponse</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionFixedResponseOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionFixedResponseOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `StatusCodeInput`<sup>Optional</sup> <a name="StatusCodeInput" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionFixedResponseOutputReference.property.statusCodeInput"></a>

```csharp
public double StatusCodeInput { get; }
```

- *Type:* double

---

##### `StatusCode`<sup>Required</sup> <a name="StatusCode" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionFixedResponseOutputReference.property.statusCode"></a>

```csharp
public double StatusCode { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionFixedResponseOutputReference.property.internalValue"></a>

```csharp
public IResolvable|VpclatticeRuleActionFixedResponse InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionFixedResponse">VpclatticeRuleActionFixedResponse</a>

---


### VpclatticeRuleActionForwardOutputReference <a name="VpclatticeRuleActionForwardOutputReference" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new VpclatticeRuleActionForwardOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardOutputReference.putTargetGroups">PutTargetGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardOutputReference.resetTargetGroups">ResetTargetGroups</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTargetGroups` <a name="PutTargetGroups" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardOutputReference.putTargetGroups"></a>

```csharp
private void PutTargetGroups(IResolvable|VpclatticeRuleActionForwardTargetGroups[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardOutputReference.putTargetGroups.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroups">VpclatticeRuleActionForwardTargetGroups</a>[]

---

##### `ResetTargetGroups` <a name="ResetTargetGroups" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardOutputReference.resetTargetGroups"></a>

```csharp
private void ResetTargetGroups()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardOutputReference.property.targetGroups">TargetGroups</a></code> | <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsList">VpclatticeRuleActionForwardTargetGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardOutputReference.property.targetGroupsInput">TargetGroupsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroups">VpclatticeRuleActionForwardTargetGroups</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForward">VpclatticeRuleActionForward</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TargetGroups`<sup>Required</sup> <a name="TargetGroups" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardOutputReference.property.targetGroups"></a>

```csharp
public VpclatticeRuleActionForwardTargetGroupsList TargetGroups { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsList">VpclatticeRuleActionForwardTargetGroupsList</a>

---

##### `TargetGroupsInput`<sup>Optional</sup> <a name="TargetGroupsInput" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardOutputReference.property.targetGroupsInput"></a>

```csharp
public IResolvable|VpclatticeRuleActionForwardTargetGroups[] TargetGroupsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroups">VpclatticeRuleActionForwardTargetGroups</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardOutputReference.property.internalValue"></a>

```csharp
public IResolvable|VpclatticeRuleActionForward InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForward">VpclatticeRuleActionForward</a>

---


### VpclatticeRuleActionForwardTargetGroupsList <a name="VpclatticeRuleActionForwardTargetGroupsList" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new VpclatticeRuleActionForwardTargetGroupsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsList.get"></a>

```csharp
private VpclatticeRuleActionForwardTargetGroupsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroups">VpclatticeRuleActionForwardTargetGroups</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsList.property.internalValue"></a>

```csharp
public IResolvable|VpclatticeRuleActionForwardTargetGroups[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroups">VpclatticeRuleActionForwardTargetGroups</a>[]

---


### VpclatticeRuleActionForwardTargetGroupsOutputReference <a name="VpclatticeRuleActionForwardTargetGroupsOutputReference" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new VpclatticeRuleActionForwardTargetGroupsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsOutputReference.resetTargetGroupIdentifier">ResetTargetGroupIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsOutputReference.resetWeight">ResetWeight</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTargetGroupIdentifier` <a name="ResetTargetGroupIdentifier" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsOutputReference.resetTargetGroupIdentifier"></a>

```csharp
private void ResetTargetGroupIdentifier()
```

##### `ResetWeight` <a name="ResetWeight" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsOutputReference.resetWeight"></a>

```csharp
private void ResetWeight()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsOutputReference.property.targetGroupIdentifierInput">TargetGroupIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsOutputReference.property.weightInput">WeightInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsOutputReference.property.targetGroupIdentifier">TargetGroupIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsOutputReference.property.weight">Weight</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroups">VpclatticeRuleActionForwardTargetGroups</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TargetGroupIdentifierInput`<sup>Optional</sup> <a name="TargetGroupIdentifierInput" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsOutputReference.property.targetGroupIdentifierInput"></a>

```csharp
public string TargetGroupIdentifierInput { get; }
```

- *Type:* string

---

##### `WeightInput`<sup>Optional</sup> <a name="WeightInput" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsOutputReference.property.weightInput"></a>

```csharp
public double WeightInput { get; }
```

- *Type:* double

---

##### `TargetGroupIdentifier`<sup>Required</sup> <a name="TargetGroupIdentifier" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsOutputReference.property.targetGroupIdentifier"></a>

```csharp
public string TargetGroupIdentifier { get; }
```

- *Type:* string

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsOutputReference.property.weight"></a>

```csharp
public double Weight { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|VpclatticeRuleActionForwardTargetGroups InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroups">VpclatticeRuleActionForwardTargetGroups</a>

---


### VpclatticeRuleActionOutputReference <a name="VpclatticeRuleActionOutputReference" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new VpclatticeRuleActionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionOutputReference.putFixedResponse">PutFixedResponse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionOutputReference.putForward">PutForward</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionOutputReference.resetFixedResponse">ResetFixedResponse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionOutputReference.resetForward">ResetForward</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFixedResponse` <a name="PutFixedResponse" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionOutputReference.putFixedResponse"></a>

```csharp
private void PutFixedResponse(VpclatticeRuleActionFixedResponse Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionOutputReference.putFixedResponse.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionFixedResponse">VpclatticeRuleActionFixedResponse</a>

---

##### `PutForward` <a name="PutForward" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionOutputReference.putForward"></a>

```csharp
private void PutForward(VpclatticeRuleActionForward Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionOutputReference.putForward.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForward">VpclatticeRuleActionForward</a>

---

##### `ResetFixedResponse` <a name="ResetFixedResponse" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionOutputReference.resetFixedResponse"></a>

```csharp
private void ResetFixedResponse()
```

##### `ResetForward` <a name="ResetForward" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionOutputReference.resetForward"></a>

```csharp
private void ResetForward()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionOutputReference.property.fixedResponse">FixedResponse</a></code> | <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionFixedResponseOutputReference">VpclatticeRuleActionFixedResponseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionOutputReference.property.forward">Forward</a></code> | <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardOutputReference">VpclatticeRuleActionForwardOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionOutputReference.property.fixedResponseInput">FixedResponseInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionFixedResponse">VpclatticeRuleActionFixedResponse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionOutputReference.property.forwardInput">ForwardInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForward">VpclatticeRuleActionForward</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleAction">VpclatticeRuleAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FixedResponse`<sup>Required</sup> <a name="FixedResponse" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionOutputReference.property.fixedResponse"></a>

```csharp
public VpclatticeRuleActionFixedResponseOutputReference FixedResponse { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionFixedResponseOutputReference">VpclatticeRuleActionFixedResponseOutputReference</a>

---

##### `Forward`<sup>Required</sup> <a name="Forward" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionOutputReference.property.forward"></a>

```csharp
public VpclatticeRuleActionForwardOutputReference Forward { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardOutputReference">VpclatticeRuleActionForwardOutputReference</a>

---

##### `FixedResponseInput`<sup>Optional</sup> <a name="FixedResponseInput" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionOutputReference.property.fixedResponseInput"></a>

```csharp
public IResolvable|VpclatticeRuleActionFixedResponse FixedResponseInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionFixedResponse">VpclatticeRuleActionFixedResponse</a>

---

##### `ForwardInput`<sup>Optional</sup> <a name="ForwardInput" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionOutputReference.property.forwardInput"></a>

```csharp
public IResolvable|VpclatticeRuleActionForward ForwardInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForward">VpclatticeRuleActionForward</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|VpclatticeRuleAction InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleAction">VpclatticeRuleAction</a>

---


### VpclatticeRuleMatchHttpMatchHeaderMatchesList <a name="VpclatticeRuleMatchHttpMatchHeaderMatchesList" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new VpclatticeRuleMatchHttpMatchHeaderMatchesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesList.get"></a>

```csharp
private VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatches">VpclatticeRuleMatchHttpMatchHeaderMatches</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesList.property.internalValue"></a>

```csharp
public IResolvable|VpclatticeRuleMatchHttpMatchHeaderMatches[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatches">VpclatticeRuleMatchHttpMatchHeaderMatches</a>[]

---


### VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference <a name="VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.resetContains">ResetContains</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.resetExact">ResetExact</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.resetPrefix">ResetPrefix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContains` <a name="ResetContains" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.resetContains"></a>

```csharp
private void ResetContains()
```

##### `ResetExact` <a name="ResetExact" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.resetExact"></a>

```csharp
private void ResetExact()
```

##### `ResetPrefix` <a name="ResetPrefix" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.resetPrefix"></a>

```csharp
private void ResetPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.property.containsInput">ContainsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.property.exactInput">ExactInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.property.prefixInput">PrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.property.contains">Contains</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.property.exact">Exact</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.property.prefix">Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatch">VpclatticeRuleMatchHttpMatchHeaderMatchesMatch</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContainsInput`<sup>Optional</sup> <a name="ContainsInput" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.property.containsInput"></a>

```csharp
public string ContainsInput { get; }
```

- *Type:* string

---

##### `ExactInput`<sup>Optional</sup> <a name="ExactInput" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.property.exactInput"></a>

```csharp
public string ExactInput { get; }
```

- *Type:* string

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.property.prefixInput"></a>

```csharp
public string PrefixInput { get; }
```

- *Type:* string

---

##### `Contains`<sup>Required</sup> <a name="Contains" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.property.contains"></a>

```csharp
public string Contains { get; }
```

- *Type:* string

---

##### `Exact`<sup>Required</sup> <a name="Exact" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.property.exact"></a>

```csharp
public string Exact { get; }
```

- *Type:* string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.property.prefix"></a>

```csharp
public string Prefix { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.property.internalValue"></a>

```csharp
public IResolvable|VpclatticeRuleMatchHttpMatchHeaderMatchesMatch InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatch">VpclatticeRuleMatchHttpMatchHeaderMatchesMatch</a>

---


### VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference <a name="VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.putMatch">PutMatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.resetCaseSensitive">ResetCaseSensitive</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.resetMatch">ResetMatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMatch` <a name="PutMatch" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.putMatch"></a>

```csharp
private void PutMatch(VpclatticeRuleMatchHttpMatchHeaderMatchesMatch Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.putMatch.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatch">VpclatticeRuleMatchHttpMatchHeaderMatchesMatch</a>

---

##### `ResetCaseSensitive` <a name="ResetCaseSensitive" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.resetCaseSensitive"></a>

```csharp
private void ResetCaseSensitive()
```

##### `ResetMatch` <a name="ResetMatch" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.resetMatch"></a>

```csharp
private void ResetMatch()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.property.match">Match</a></code> | <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference">VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.property.caseSensitiveInput">CaseSensitiveInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.property.matchInput">MatchInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatch">VpclatticeRuleMatchHttpMatchHeaderMatchesMatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.property.caseSensitive">CaseSensitive</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatches">VpclatticeRuleMatchHttpMatchHeaderMatches</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Match`<sup>Required</sup> <a name="Match" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.property.match"></a>

```csharp
public VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference Match { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference">VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference</a>

---

##### `CaseSensitiveInput`<sup>Optional</sup> <a name="CaseSensitiveInput" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.property.caseSensitiveInput"></a>

```csharp
public bool|IResolvable CaseSensitiveInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MatchInput`<sup>Optional</sup> <a name="MatchInput" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.property.matchInput"></a>

```csharp
public IResolvable|VpclatticeRuleMatchHttpMatchHeaderMatchesMatch MatchInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatch">VpclatticeRuleMatchHttpMatchHeaderMatchesMatch</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `CaseSensitive`<sup>Required</sup> <a name="CaseSensitive" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.property.caseSensitive"></a>

```csharp
public bool|IResolvable CaseSensitive { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|VpclatticeRuleMatchHttpMatchHeaderMatches InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatches">VpclatticeRuleMatchHttpMatchHeaderMatches</a>

---


### VpclatticeRuleMatchHttpMatchOutputReference <a name="VpclatticeRuleMatchHttpMatchOutputReference" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new VpclatticeRuleMatchHttpMatchOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.putHeaderMatches">PutHeaderMatches</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.putPathMatch">PutPathMatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.resetHeaderMatches">ResetHeaderMatches</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.resetMethod">ResetMethod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.resetPathMatch">ResetPathMatch</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHeaderMatches` <a name="PutHeaderMatches" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.putHeaderMatches"></a>

```csharp
private void PutHeaderMatches(IResolvable|VpclatticeRuleMatchHttpMatchHeaderMatches[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.putHeaderMatches.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatches">VpclatticeRuleMatchHttpMatchHeaderMatches</a>[]

---

##### `PutPathMatch` <a name="PutPathMatch" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.putPathMatch"></a>

```csharp
private void PutPathMatch(VpclatticeRuleMatchHttpMatchPathMatch Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.putPathMatch.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatch">VpclatticeRuleMatchHttpMatchPathMatch</a>

---

##### `ResetHeaderMatches` <a name="ResetHeaderMatches" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.resetHeaderMatches"></a>

```csharp
private void ResetHeaderMatches()
```

##### `ResetMethod` <a name="ResetMethod" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.resetMethod"></a>

```csharp
private void ResetMethod()
```

##### `ResetPathMatch` <a name="ResetPathMatch" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.resetPathMatch"></a>

```csharp
private void ResetPathMatch()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.property.headerMatches">HeaderMatches</a></code> | <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesList">VpclatticeRuleMatchHttpMatchHeaderMatchesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.property.pathMatch">PathMatch</a></code> | <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchOutputReference">VpclatticeRuleMatchHttpMatchPathMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.property.headerMatchesInput">HeaderMatchesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatches">VpclatticeRuleMatchHttpMatchHeaderMatches</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.property.methodInput">MethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.property.pathMatchInput">PathMatchInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatch">VpclatticeRuleMatchHttpMatchPathMatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.property.method">Method</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatch">VpclatticeRuleMatchHttpMatch</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HeaderMatches`<sup>Required</sup> <a name="HeaderMatches" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.property.headerMatches"></a>

```csharp
public VpclatticeRuleMatchHttpMatchHeaderMatchesList HeaderMatches { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesList">VpclatticeRuleMatchHttpMatchHeaderMatchesList</a>

---

##### `PathMatch`<sup>Required</sup> <a name="PathMatch" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.property.pathMatch"></a>

```csharp
public VpclatticeRuleMatchHttpMatchPathMatchOutputReference PathMatch { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchOutputReference">VpclatticeRuleMatchHttpMatchPathMatchOutputReference</a>

---

##### `HeaderMatchesInput`<sup>Optional</sup> <a name="HeaderMatchesInput" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.property.headerMatchesInput"></a>

```csharp
public IResolvable|VpclatticeRuleMatchHttpMatchHeaderMatches[] HeaderMatchesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatches">VpclatticeRuleMatchHttpMatchHeaderMatches</a>[]

---

##### `MethodInput`<sup>Optional</sup> <a name="MethodInput" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.property.methodInput"></a>

```csharp
public string MethodInput { get; }
```

- *Type:* string

---

##### `PathMatchInput`<sup>Optional</sup> <a name="PathMatchInput" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.property.pathMatchInput"></a>

```csharp
public IResolvable|VpclatticeRuleMatchHttpMatchPathMatch PathMatchInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatch">VpclatticeRuleMatchHttpMatchPathMatch</a>

---

##### `Method`<sup>Required</sup> <a name="Method" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.property.method"></a>

```csharp
public string Method { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.property.internalValue"></a>

```csharp
public IResolvable|VpclatticeRuleMatchHttpMatch InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatch">VpclatticeRuleMatchHttpMatch</a>

---


### VpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference <a name="VpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new VpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.resetExact">ResetExact</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.resetPrefix">ResetPrefix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExact` <a name="ResetExact" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.resetExact"></a>

```csharp
private void ResetExact()
```

##### `ResetPrefix` <a name="ResetPrefix" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.resetPrefix"></a>

```csharp
private void ResetPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.property.exactInput">ExactInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.property.prefixInput">PrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.property.exact">Exact</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.property.prefix">Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatch">VpclatticeRuleMatchHttpMatchPathMatchMatch</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExactInput`<sup>Optional</sup> <a name="ExactInput" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.property.exactInput"></a>

```csharp
public string ExactInput { get; }
```

- *Type:* string

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.property.prefixInput"></a>

```csharp
public string PrefixInput { get; }
```

- *Type:* string

---

##### `Exact`<sup>Required</sup> <a name="Exact" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.property.exact"></a>

```csharp
public string Exact { get; }
```

- *Type:* string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.property.prefix"></a>

```csharp
public string Prefix { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.property.internalValue"></a>

```csharp
public IResolvable|VpclatticeRuleMatchHttpMatchPathMatchMatch InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatch">VpclatticeRuleMatchHttpMatchPathMatchMatch</a>

---


### VpclatticeRuleMatchHttpMatchPathMatchOutputReference <a name="VpclatticeRuleMatchHttpMatchPathMatchOutputReference" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new VpclatticeRuleMatchHttpMatchPathMatchOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchOutputReference.putMatch">PutMatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchOutputReference.resetCaseSensitive">ResetCaseSensitive</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchOutputReference.resetMatch">ResetMatch</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMatch` <a name="PutMatch" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchOutputReference.putMatch"></a>

```csharp
private void PutMatch(VpclatticeRuleMatchHttpMatchPathMatchMatch Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchOutputReference.putMatch.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatch">VpclatticeRuleMatchHttpMatchPathMatchMatch</a>

---

##### `ResetCaseSensitive` <a name="ResetCaseSensitive" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchOutputReference.resetCaseSensitive"></a>

```csharp
private void ResetCaseSensitive()
```

##### `ResetMatch` <a name="ResetMatch" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchOutputReference.resetMatch"></a>

```csharp
private void ResetMatch()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchOutputReference.property.match">Match</a></code> | <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference">VpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchOutputReference.property.caseSensitiveInput">CaseSensitiveInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchOutputReference.property.matchInput">MatchInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatch">VpclatticeRuleMatchHttpMatchPathMatchMatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchOutputReference.property.caseSensitive">CaseSensitive</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatch">VpclatticeRuleMatchHttpMatchPathMatch</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Match`<sup>Required</sup> <a name="Match" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchOutputReference.property.match"></a>

```csharp
public VpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference Match { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference">VpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference</a>

---

##### `CaseSensitiveInput`<sup>Optional</sup> <a name="CaseSensitiveInput" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchOutputReference.property.caseSensitiveInput"></a>

```csharp
public bool|IResolvable CaseSensitiveInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MatchInput`<sup>Optional</sup> <a name="MatchInput" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchOutputReference.property.matchInput"></a>

```csharp
public IResolvable|VpclatticeRuleMatchHttpMatchPathMatchMatch MatchInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatch">VpclatticeRuleMatchHttpMatchPathMatchMatch</a>

---

##### `CaseSensitive`<sup>Required</sup> <a name="CaseSensitive" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchOutputReference.property.caseSensitive"></a>

```csharp
public bool|IResolvable CaseSensitive { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchOutputReference.property.internalValue"></a>

```csharp
public IResolvable|VpclatticeRuleMatchHttpMatchPathMatch InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatch">VpclatticeRuleMatchHttpMatchPathMatch</a>

---


### VpclatticeRuleMatchOutputReference <a name="VpclatticeRuleMatchOutputReference" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new VpclatticeRuleMatchOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchOutputReference.putHttpMatch">PutHttpMatch</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHttpMatch` <a name="PutHttpMatch" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchOutputReference.putHttpMatch"></a>

```csharp
private void PutHttpMatch(VpclatticeRuleMatchHttpMatch Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchOutputReference.putHttpMatch.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatch">VpclatticeRuleMatchHttpMatch</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchOutputReference.property.httpMatch">HttpMatch</a></code> | <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference">VpclatticeRuleMatchHttpMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchOutputReference.property.httpMatchInput">HttpMatchInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatch">VpclatticeRuleMatchHttpMatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatch">VpclatticeRuleMatch</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HttpMatch`<sup>Required</sup> <a name="HttpMatch" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchOutputReference.property.httpMatch"></a>

```csharp
public VpclatticeRuleMatchHttpMatchOutputReference HttpMatch { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference">VpclatticeRuleMatchHttpMatchOutputReference</a>

---

##### `HttpMatchInput`<sup>Optional</sup> <a name="HttpMatchInput" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchOutputReference.property.httpMatchInput"></a>

```csharp
public IResolvable|VpclatticeRuleMatchHttpMatch HttpMatchInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatch">VpclatticeRuleMatchHttpMatch</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchOutputReference.property.internalValue"></a>

```csharp
public IResolvable|VpclatticeRuleMatch InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatch">VpclatticeRuleMatch</a>

---


### VpclatticeRuleTagsList <a name="VpclatticeRuleTagsList" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new VpclatticeRuleTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsList.get"></a>

```csharp
private VpclatticeRuleTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTags">VpclatticeRuleTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsList.property.internalValue"></a>

```csharp
public IResolvable|VpclatticeRuleTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTags">VpclatticeRuleTags</a>[]

---


### VpclatticeRuleTagsOutputReference <a name="VpclatticeRuleTagsOutputReference" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new VpclatticeRuleTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTags">VpclatticeRuleTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|VpclatticeRuleTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTags">VpclatticeRuleTags</a>

---



