# `bedrockAutomatedReasoningPolicyVersion` Submodule <a name="`bedrockAutomatedReasoningPolicyVersion` Submodule" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockAutomatedReasoningPolicyVersion <a name="BedrockAutomatedReasoningPolicyVersion" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_automated_reasoning_policy_version awscc_bedrock_automated_reasoning_policy_version}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockAutomatedReasoningPolicyVersion(Construct Scope, string Id, BedrockAutomatedReasoningPolicyVersionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionConfig">BedrockAutomatedReasoningPolicyVersionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionConfig">BedrockAutomatedReasoningPolicyVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.resetLastUpdatedDefinitionHash">ResetLastUpdatedDefinitionHash</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.putTags"></a>

```csharp
private void PutTags(IResolvable|BedrockAutomatedReasoningPolicyVersionTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTags">BedrockAutomatedReasoningPolicyVersionTags</a>[]

---

##### `ResetLastUpdatedDefinitionHash` <a name="ResetLastUpdatedDefinitionHash" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.resetLastUpdatedDefinitionHash"></a>

```csharp
private void ResetLastUpdatedDefinitionHash()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a BedrockAutomatedReasoningPolicyVersion resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BedrockAutomatedReasoningPolicyVersion.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BedrockAutomatedReasoningPolicyVersion.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BedrockAutomatedReasoningPolicyVersion.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BedrockAutomatedReasoningPolicyVersion.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a BedrockAutomatedReasoningPolicyVersion resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BedrockAutomatedReasoningPolicyVersion to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BedrockAutomatedReasoningPolicyVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_automated_reasoning_policy_version#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the BedrockAutomatedReasoningPolicyVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.property.definitionHash">DefinitionHash</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.property.policyId">PolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsList">BedrockAutomatedReasoningPolicyVersionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.property.lastUpdatedDefinitionHashInput">LastUpdatedDefinitionHashInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.property.policyArnInput">PolicyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTags">BedrockAutomatedReasoningPolicyVersionTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.property.lastUpdatedDefinitionHash">LastUpdatedDefinitionHash</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.property.policyArn">PolicyArn</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `DefinitionHash`<sup>Required</sup> <a name="DefinitionHash" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.property.definitionHash"></a>

```csharp
public string DefinitionHash { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.property.policyId"></a>

```csharp
public string PolicyId { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.property.tags"></a>

```csharp
public BedrockAutomatedReasoningPolicyVersionTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsList">BedrockAutomatedReasoningPolicyVersionTagsList</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `LastUpdatedDefinitionHashInput`<sup>Optional</sup> <a name="LastUpdatedDefinitionHashInput" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.property.lastUpdatedDefinitionHashInput"></a>

```csharp
public string LastUpdatedDefinitionHashInput { get; }
```

- *Type:* string

---

##### `PolicyArnInput`<sup>Optional</sup> <a name="PolicyArnInput" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.property.policyArnInput"></a>

```csharp
public string PolicyArnInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.property.tagsInput"></a>

```csharp
public IResolvable|BedrockAutomatedReasoningPolicyVersionTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTags">BedrockAutomatedReasoningPolicyVersionTags</a>[]

---

##### `LastUpdatedDefinitionHash`<sup>Required</sup> <a name="LastUpdatedDefinitionHash" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.property.lastUpdatedDefinitionHash"></a>

```csharp
public string LastUpdatedDefinitionHash { get; }
```

- *Type:* string

---

##### `PolicyArn`<sup>Required</sup> <a name="PolicyArn" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.property.policyArn"></a>

```csharp
public string PolicyArn { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersion.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockAutomatedReasoningPolicyVersionConfig <a name="BedrockAutomatedReasoningPolicyVersionConfig" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockAutomatedReasoningPolicyVersionConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string PolicyArn,
    string LastUpdatedDefinitionHash = null,
    IResolvable|BedrockAutomatedReasoningPolicyVersionTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionConfig.property.policyArn">PolicyArn</a></code> | <code>string</code> | Arn of the policy. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionConfig.property.lastUpdatedDefinitionHash">LastUpdatedDefinitionHash</a></code> | <code>string</code> | The hash for this version. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTags">BedrockAutomatedReasoningPolicyVersionTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_automated_reasoning_policy_version#tags BedrockAutomatedReasoningPolicyVersion#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `PolicyArn`<sup>Required</sup> <a name="PolicyArn" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionConfig.property.policyArn"></a>

```csharp
public string PolicyArn { get; set; }
```

- *Type:* string

Arn of the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_automated_reasoning_policy_version#policy_arn BedrockAutomatedReasoningPolicyVersion#policy_arn}

---

##### `LastUpdatedDefinitionHash`<sup>Optional</sup> <a name="LastUpdatedDefinitionHash" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionConfig.property.lastUpdatedDefinitionHash"></a>

```csharp
public string LastUpdatedDefinitionHash { get; set; }
```

- *Type:* string

The hash for this version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_automated_reasoning_policy_version#last_updated_definition_hash BedrockAutomatedReasoningPolicyVersion#last_updated_definition_hash}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionConfig.property.tags"></a>

```csharp
public IResolvable|BedrockAutomatedReasoningPolicyVersionTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTags">BedrockAutomatedReasoningPolicyVersionTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_automated_reasoning_policy_version#tags BedrockAutomatedReasoningPolicyVersion#tags}.

---

### BedrockAutomatedReasoningPolicyVersionTags <a name="BedrockAutomatedReasoningPolicyVersionTags" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockAutomatedReasoningPolicyVersionTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTags.property.key">Key</a></code> | <code>string</code> | Tag Key. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTags.property.value">Value</a></code> | <code>string</code> | Tag Value. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Tag Key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_automated_reasoning_policy_version#key BedrockAutomatedReasoningPolicyVersion#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Tag Value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_automated_reasoning_policy_version#value BedrockAutomatedReasoningPolicyVersion#value}

---

## Classes <a name="Classes" id="Classes"></a>

### BedrockAutomatedReasoningPolicyVersionTagsList <a name="BedrockAutomatedReasoningPolicyVersionTagsList" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockAutomatedReasoningPolicyVersionTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsList.get"></a>

```csharp
private BedrockAutomatedReasoningPolicyVersionTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTags">BedrockAutomatedReasoningPolicyVersionTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsList.property.internalValue"></a>

```csharp
public IResolvable|BedrockAutomatedReasoningPolicyVersionTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTags">BedrockAutomatedReasoningPolicyVersionTags</a>[]

---


### BedrockAutomatedReasoningPolicyVersionTagsOutputReference <a name="BedrockAutomatedReasoningPolicyVersionTagsOutputReference" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockAutomatedReasoningPolicyVersionTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTags">BedrockAutomatedReasoningPolicyVersionTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockAutomatedReasoningPolicyVersionTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicyVersion.BedrockAutomatedReasoningPolicyVersionTags">BedrockAutomatedReasoningPolicyVersionTags</a>

---



