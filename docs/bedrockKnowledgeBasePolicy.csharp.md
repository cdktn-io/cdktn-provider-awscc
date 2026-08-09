# `bedrockKnowledgeBasePolicy` Submodule <a name="`bedrockKnowledgeBasePolicy` Submodule" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockKnowledgeBasePolicy <a name="BedrockKnowledgeBasePolicy" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_knowledge_base_policy awscc_bedrock_knowledge_base_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockKnowledgeBasePolicy(Construct Scope, string Id, BedrockKnowledgeBasePolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicyConfig">BedrockKnowledgeBasePolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicyConfig">BedrockKnowledgeBasePolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a BedrockKnowledgeBasePolicy resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BedrockKnowledgeBasePolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BedrockKnowledgeBasePolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BedrockKnowledgeBasePolicy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BedrockKnowledgeBasePolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a BedrockKnowledgeBasePolicy resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BedrockKnowledgeBasePolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BedrockKnowledgeBasePolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_knowledge_base_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the BedrockKnowledgeBasePolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.property.revisionId">RevisionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.property.knowledgeBaseIdInput">KnowledgeBaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.property.policyDocumentInput">PolicyDocumentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.property.knowledgeBaseId">KnowledgeBaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.property.policyDocument">PolicyDocument</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `RevisionId`<sup>Required</sup> <a name="RevisionId" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.property.revisionId"></a>

```csharp
public string RevisionId { get; }
```

- *Type:* string

---

##### `KnowledgeBaseIdInput`<sup>Optional</sup> <a name="KnowledgeBaseIdInput" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.property.knowledgeBaseIdInput"></a>

```csharp
public string KnowledgeBaseIdInput { get; }
```

- *Type:* string

---

##### `PolicyDocumentInput`<sup>Optional</sup> <a name="PolicyDocumentInput" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.property.policyDocumentInput"></a>

```csharp
public string PolicyDocumentInput { get; }
```

- *Type:* string

---

##### `KnowledgeBaseId`<sup>Required</sup> <a name="KnowledgeBaseId" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.property.knowledgeBaseId"></a>

```csharp
public string KnowledgeBaseId { get; }
```

- *Type:* string

---

##### `PolicyDocument`<sup>Required</sup> <a name="PolicyDocument" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.property.policyDocument"></a>

```csharp
public string PolicyDocument { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockKnowledgeBasePolicyConfig <a name="BedrockKnowledgeBasePolicyConfig" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicyConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockKnowledgeBasePolicyConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string KnowledgeBaseId,
    string PolicyDocument
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicyConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicyConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicyConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicyConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicyConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicyConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicyConfig.property.knowledgeBaseId">KnowledgeBaseId</a></code> | <code>string</code> | The unique identifier of the knowledge base. |
| <code><a href="#@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicyConfig.property.policyDocument">PolicyDocument</a></code> | <code>string</code> | The IAM policy document defining access permissions for the knowledge base. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicyConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicyConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicyConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `KnowledgeBaseId`<sup>Required</sup> <a name="KnowledgeBaseId" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicyConfig.property.knowledgeBaseId"></a>

```csharp
public string KnowledgeBaseId { get; set; }
```

- *Type:* string

The unique identifier of the knowledge base.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_knowledge_base_policy#knowledge_base_id BedrockKnowledgeBasePolicy#knowledge_base_id}

---

##### `PolicyDocument`<sup>Required</sup> <a name="PolicyDocument" id="@cdktn/provider-awscc.bedrockKnowledgeBasePolicy.BedrockKnowledgeBasePolicyConfig.property.policyDocument"></a>

```csharp
public string PolicyDocument { get; set; }
```

- *Type:* string

The IAM policy document defining access permissions for the knowledge base.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_knowledge_base_policy#policy_document BedrockKnowledgeBasePolicy#policy_document}

---



