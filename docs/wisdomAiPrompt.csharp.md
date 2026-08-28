# `wisdomAiPrompt` Submodule <a name="`wisdomAiPrompt` Submodule" id="@cdktn/provider-awscc.wisdomAiPrompt"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WisdomAiPrompt <a name="WisdomAiPrompt" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_prompt awscc_wisdom_ai_prompt}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WisdomAiPrompt(Construct Scope, string Id, WisdomAiPromptConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptConfig">WisdomAiPromptConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptConfig">WisdomAiPromptConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.putTemplateConfiguration">PutTemplateConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.resetAssistantId">ResetAssistantId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTemplateConfiguration` <a name="PutTemplateConfiguration" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.putTemplateConfiguration"></a>

```csharp
private void PutTemplateConfiguration(WisdomAiPromptTemplateConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.putTemplateConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfiguration">WisdomAiPromptTemplateConfiguration</a>

---

##### `ResetAssistantId` <a name="ResetAssistantId" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.resetAssistantId"></a>

```csharp
private void ResetAssistantId()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a WisdomAiPrompt resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

WisdomAiPrompt.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

WisdomAiPrompt.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

WisdomAiPrompt.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

WisdomAiPrompt.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a WisdomAiPrompt resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the WisdomAiPrompt to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing WisdomAiPrompt that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_prompt#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the WisdomAiPrompt to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.aiPromptArn">AiPromptArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.aiPromptId">AiPromptId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.assistantArn">AssistantArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.modifiedTimeSeconds">ModifiedTimeSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.templateConfiguration">TemplateConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference">WisdomAiPromptTemplateConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.apiFormatInput">ApiFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.assistantIdInput">AssistantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.modelIdInput">ModelIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.templateConfigurationInput">TemplateConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfiguration">WisdomAiPromptTemplateConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.templateTypeInput">TemplateTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.apiFormat">ApiFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.assistantId">AssistantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.modelId">ModelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.templateType">TemplateType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.type">Type</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AiPromptArn`<sup>Required</sup> <a name="AiPromptArn" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.aiPromptArn"></a>

```csharp
public string AiPromptArn { get; }
```

- *Type:* string

---

##### `AiPromptId`<sup>Required</sup> <a name="AiPromptId" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.aiPromptId"></a>

```csharp
public string AiPromptId { get; }
```

- *Type:* string

---

##### `AssistantArn`<sup>Required</sup> <a name="AssistantArn" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.assistantArn"></a>

```csharp
public string AssistantArn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ModifiedTimeSeconds`<sup>Required</sup> <a name="ModifiedTimeSeconds" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.modifiedTimeSeconds"></a>

```csharp
public double ModifiedTimeSeconds { get; }
```

- *Type:* double

---

##### `TemplateConfiguration`<sup>Required</sup> <a name="TemplateConfiguration" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.templateConfiguration"></a>

```csharp
public WisdomAiPromptTemplateConfigurationOutputReference TemplateConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference">WisdomAiPromptTemplateConfigurationOutputReference</a>

---

##### `ApiFormatInput`<sup>Optional</sup> <a name="ApiFormatInput" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.apiFormatInput"></a>

```csharp
public string ApiFormatInput { get; }
```

- *Type:* string

---

##### `AssistantIdInput`<sup>Optional</sup> <a name="AssistantIdInput" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.assistantIdInput"></a>

```csharp
public string AssistantIdInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ModelIdInput`<sup>Optional</sup> <a name="ModelIdInput" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.modelIdInput"></a>

```csharp
public string ModelIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TemplateConfigurationInput`<sup>Optional</sup> <a name="TemplateConfigurationInput" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.templateConfigurationInput"></a>

```csharp
public IResolvable|WisdomAiPromptTemplateConfiguration TemplateConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfiguration">WisdomAiPromptTemplateConfiguration</a>

---

##### `TemplateTypeInput`<sup>Optional</sup> <a name="TemplateTypeInput" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.templateTypeInput"></a>

```csharp
public string TemplateTypeInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ApiFormat`<sup>Required</sup> <a name="ApiFormat" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.apiFormat"></a>

```csharp
public string ApiFormat { get; }
```

- *Type:* string

---

##### `AssistantId`<sup>Required</sup> <a name="AssistantId" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.assistantId"></a>

```csharp
public string AssistantId { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `ModelId`<sup>Required</sup> <a name="ModelId" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.modelId"></a>

```csharp
public string ModelId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TemplateType`<sup>Required</sup> <a name="TemplateType" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.templateType"></a>

```csharp
public string TemplateType { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WisdomAiPromptConfig <a name="WisdomAiPromptConfig" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WisdomAiPromptConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ApiFormat,
    string ModelId,
    WisdomAiPromptTemplateConfiguration TemplateConfiguration,
    string TemplateType,
    string Type,
    string AssistantId = null,
    string Description = null,
    string Name = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptConfig.property.apiFormat">ApiFormat</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_prompt#api_format WisdomAiPrompt#api_format}. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptConfig.property.modelId">ModelId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_prompt#model_id WisdomAiPrompt#model_id}. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptConfig.property.templateConfiguration">TemplateConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfiguration">WisdomAiPromptTemplateConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_prompt#template_configuration WisdomAiPrompt#template_configuration}. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptConfig.property.templateType">TemplateType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_prompt#template_type WisdomAiPrompt#template_type}. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptConfig.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_prompt#type WisdomAiPrompt#type}. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptConfig.property.assistantId">AssistantId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_prompt#assistant_id WisdomAiPrompt#assistant_id}. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_prompt#description WisdomAiPrompt#description}. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_prompt#name WisdomAiPrompt#name}. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_prompt#tags WisdomAiPrompt#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ApiFormat`<sup>Required</sup> <a name="ApiFormat" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptConfig.property.apiFormat"></a>

```csharp
public string ApiFormat { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_prompt#api_format WisdomAiPrompt#api_format}.

---

##### `ModelId`<sup>Required</sup> <a name="ModelId" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptConfig.property.modelId"></a>

```csharp
public string ModelId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_prompt#model_id WisdomAiPrompt#model_id}.

---

##### `TemplateConfiguration`<sup>Required</sup> <a name="TemplateConfiguration" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptConfig.property.templateConfiguration"></a>

```csharp
public WisdomAiPromptTemplateConfiguration TemplateConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfiguration">WisdomAiPromptTemplateConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_prompt#template_configuration WisdomAiPrompt#template_configuration}.

---

##### `TemplateType`<sup>Required</sup> <a name="TemplateType" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptConfig.property.templateType"></a>

```csharp
public string TemplateType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_prompt#template_type WisdomAiPrompt#template_type}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_prompt#type WisdomAiPrompt#type}.

---

##### `AssistantId`<sup>Optional</sup> <a name="AssistantId" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptConfig.property.assistantId"></a>

```csharp
public string AssistantId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_prompt#assistant_id WisdomAiPrompt#assistant_id}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_prompt#description WisdomAiPrompt#description}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_prompt#name WisdomAiPrompt#name}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_prompt#tags WisdomAiPrompt#tags}.

---

### WisdomAiPromptTemplateConfiguration <a name="WisdomAiPromptTemplateConfiguration" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WisdomAiPromptTemplateConfiguration {
    WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfiguration TextFullAiPromptEditTemplateConfiguration = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfiguration.property.textFullAiPromptEditTemplateConfiguration">TextFullAiPromptEditTemplateConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfiguration">WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_prompt#text_full_ai_prompt_edit_template_configuration WisdomAiPrompt#text_full_ai_prompt_edit_template_configuration}. |

---

##### `TextFullAiPromptEditTemplateConfiguration`<sup>Optional</sup> <a name="TextFullAiPromptEditTemplateConfiguration" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfiguration.property.textFullAiPromptEditTemplateConfiguration"></a>

```csharp
public WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfiguration TextFullAiPromptEditTemplateConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfiguration">WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_prompt#text_full_ai_prompt_edit_template_configuration WisdomAiPrompt#text_full_ai_prompt_edit_template_configuration}.

---

### WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfiguration <a name="WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfiguration" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfiguration {
    string Text = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfiguration.property.text">Text</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_prompt#text WisdomAiPrompt#text}. |

---

##### `Text`<sup>Optional</sup> <a name="Text" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfiguration.property.text"></a>

```csharp
public string Text { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_prompt#text WisdomAiPrompt#text}.

---

## Classes <a name="Classes" id="Classes"></a>

### WisdomAiPromptTemplateConfigurationOutputReference <a name="WisdomAiPromptTemplateConfigurationOutputReference" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WisdomAiPromptTemplateConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.putTextFullAiPromptEditTemplateConfiguration">PutTextFullAiPromptEditTemplateConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.resetTextFullAiPromptEditTemplateConfiguration">ResetTextFullAiPromptEditTemplateConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTextFullAiPromptEditTemplateConfiguration` <a name="PutTextFullAiPromptEditTemplateConfiguration" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.putTextFullAiPromptEditTemplateConfiguration"></a>

```csharp
private void PutTextFullAiPromptEditTemplateConfiguration(WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.putTextFullAiPromptEditTemplateConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfiguration">WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfiguration</a>

---

##### `ResetTextFullAiPromptEditTemplateConfiguration` <a name="ResetTextFullAiPromptEditTemplateConfiguration" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.resetTextFullAiPromptEditTemplateConfiguration"></a>

```csharp
private void ResetTextFullAiPromptEditTemplateConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.property.textFullAiPromptEditTemplateConfiguration">TextFullAiPromptEditTemplateConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference">WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.property.textFullAiPromptEditTemplateConfigurationInput">TextFullAiPromptEditTemplateConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfiguration">WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfiguration">WisdomAiPromptTemplateConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TextFullAiPromptEditTemplateConfiguration`<sup>Required</sup> <a name="TextFullAiPromptEditTemplateConfiguration" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.property.textFullAiPromptEditTemplateConfiguration"></a>

```csharp
public WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference TextFullAiPromptEditTemplateConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference">WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference</a>

---

##### `TextFullAiPromptEditTemplateConfigurationInput`<sup>Optional</sup> <a name="TextFullAiPromptEditTemplateConfigurationInput" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.property.textFullAiPromptEditTemplateConfigurationInput"></a>

```csharp
public IResolvable|WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfiguration TextFullAiPromptEditTemplateConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfiguration">WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfiguration</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WisdomAiPromptTemplateConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfiguration">WisdomAiPromptTemplateConfiguration</a>

---


### WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference <a name="WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.resetText">ResetText</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetText` <a name="ResetText" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.resetText"></a>

```csharp
private void ResetText()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.property.textInput">TextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.property.text">Text</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfiguration">WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TextInput`<sup>Optional</sup> <a name="TextInput" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.property.textInput"></a>

```csharp
public string TextInput { get; }
```

- *Type:* string

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.property.text"></a>

```csharp
public string Text { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfiguration">WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfiguration</a>

---



