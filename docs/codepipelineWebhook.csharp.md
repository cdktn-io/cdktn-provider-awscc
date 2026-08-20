# `codepipelineWebhook` Submodule <a name="`codepipelineWebhook` Submodule" id="@cdktn/provider-awscc.codepipelineWebhook"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CodepipelineWebhook <a name="CodepipelineWebhook" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codepipeline_webhook awscc_codepipeline_webhook}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodepipelineWebhook(Construct Scope, string Id, CodepipelineWebhookConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookConfig">CodepipelineWebhookConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookConfig">CodepipelineWebhookConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.putAuthenticationConfiguration">PutAuthenticationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.putFilters">PutFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.resetRegisterWithThirdParty">ResetRegisterWithThirdParty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.resetTargetPipelineVersion">ResetTargetPipelineVersion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAuthenticationConfiguration` <a name="PutAuthenticationConfiguration" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.putAuthenticationConfiguration"></a>

```csharp
private void PutAuthenticationConfiguration(CodepipelineWebhookAuthenticationConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.putAuthenticationConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfiguration">CodepipelineWebhookAuthenticationConfiguration</a>

---

##### `PutFilters` <a name="PutFilters" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.putFilters"></a>

```csharp
private void PutFilters(IResolvable|CodepipelineWebhookFilters[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.putFilters.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFilters">CodepipelineWebhookFilters</a>[]

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.putTags"></a>

```csharp
private void PutTags(IResolvable|CodepipelineWebhookTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTags">CodepipelineWebhookTags</a>[]

---

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetRegisterWithThirdParty` <a name="ResetRegisterWithThirdParty" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.resetRegisterWithThirdParty"></a>

```csharp
private void ResetRegisterWithThirdParty()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTargetPipelineVersion` <a name="ResetTargetPipelineVersion" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.resetTargetPipelineVersion"></a>

```csharp
private void ResetTargetPipelineVersion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CodepipelineWebhook resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CodepipelineWebhook.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CodepipelineWebhook.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CodepipelineWebhook.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CodepipelineWebhook.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a CodepipelineWebhook resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CodepipelineWebhook to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CodepipelineWebhook that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codepipeline_webhook#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the CodepipelineWebhook to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.authenticationConfiguration">AuthenticationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference">CodepipelineWebhookAuthenticationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.filters">Filters</a></code> | <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersList">CodepipelineWebhookFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsList">CodepipelineWebhookTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.webhookId">WebhookId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.authenticationConfigurationInput">AuthenticationConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfiguration">CodepipelineWebhookAuthenticationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.authenticationInput">AuthenticationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.filtersInput">FiltersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFilters">CodepipelineWebhookFilters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.registerWithThirdPartyInput">RegisterWithThirdPartyInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTags">CodepipelineWebhookTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.targetActionInput">TargetActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.targetPipelineInput">TargetPipelineInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.targetPipelineVersionInput">TargetPipelineVersionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.authentication">Authentication</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.registerWithThirdParty">RegisterWithThirdParty</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.targetAction">TargetAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.targetPipeline">TargetPipeline</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.targetPipelineVersion">TargetPipelineVersion</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AuthenticationConfiguration`<sup>Required</sup> <a name="AuthenticationConfiguration" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.authenticationConfiguration"></a>

```csharp
public CodepipelineWebhookAuthenticationConfigurationOutputReference AuthenticationConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference">CodepipelineWebhookAuthenticationConfigurationOutputReference</a>

---

##### `Filters`<sup>Required</sup> <a name="Filters" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.filters"></a>

```csharp
public CodepipelineWebhookFiltersList Filters { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersList">CodepipelineWebhookFiltersList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.tags"></a>

```csharp
public CodepipelineWebhookTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsList">CodepipelineWebhookTagsList</a>

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `WebhookId`<sup>Required</sup> <a name="WebhookId" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.webhookId"></a>

```csharp
public string WebhookId { get; }
```

- *Type:* string

---

##### `AuthenticationConfigurationInput`<sup>Optional</sup> <a name="AuthenticationConfigurationInput" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.authenticationConfigurationInput"></a>

```csharp
public IResolvable|CodepipelineWebhookAuthenticationConfiguration AuthenticationConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfiguration">CodepipelineWebhookAuthenticationConfiguration</a>

---

##### `AuthenticationInput`<sup>Optional</sup> <a name="AuthenticationInput" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.authenticationInput"></a>

```csharp
public string AuthenticationInput { get; }
```

- *Type:* string

---

##### `FiltersInput`<sup>Optional</sup> <a name="FiltersInput" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.filtersInput"></a>

```csharp
public IResolvable|CodepipelineWebhookFilters[] FiltersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFilters">CodepipelineWebhookFilters</a>[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegisterWithThirdPartyInput`<sup>Optional</sup> <a name="RegisterWithThirdPartyInput" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.registerWithThirdPartyInput"></a>

```csharp
public bool|IResolvable RegisterWithThirdPartyInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.tagsInput"></a>

```csharp
public IResolvable|CodepipelineWebhookTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTags">CodepipelineWebhookTags</a>[]

---

##### `TargetActionInput`<sup>Optional</sup> <a name="TargetActionInput" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.targetActionInput"></a>

```csharp
public string TargetActionInput { get; }
```

- *Type:* string

---

##### `TargetPipelineInput`<sup>Optional</sup> <a name="TargetPipelineInput" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.targetPipelineInput"></a>

```csharp
public string TargetPipelineInput { get; }
```

- *Type:* string

---

##### `TargetPipelineVersionInput`<sup>Optional</sup> <a name="TargetPipelineVersionInput" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.targetPipelineVersionInput"></a>

```csharp
public double TargetPipelineVersionInput { get; }
```

- *Type:* double

---

##### `Authentication`<sup>Required</sup> <a name="Authentication" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.authentication"></a>

```csharp
public string Authentication { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RegisterWithThirdParty`<sup>Required</sup> <a name="RegisterWithThirdParty" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.registerWithThirdParty"></a>

```csharp
public bool|IResolvable RegisterWithThirdParty { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `TargetAction`<sup>Required</sup> <a name="TargetAction" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.targetAction"></a>

```csharp
public string TargetAction { get; }
```

- *Type:* string

---

##### `TargetPipeline`<sup>Required</sup> <a name="TargetPipeline" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.targetPipeline"></a>

```csharp
public string TargetPipeline { get; }
```

- *Type:* string

---

##### `TargetPipelineVersion`<sup>Required</sup> <a name="TargetPipelineVersion" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.targetPipelineVersion"></a>

```csharp
public double TargetPipelineVersion { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CodepipelineWebhookAuthenticationConfiguration <a name="CodepipelineWebhookAuthenticationConfiguration" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodepipelineWebhookAuthenticationConfiguration {
    string AllowedIpRange = null,
    string SecretToken = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfiguration.property.allowedIpRange">AllowedIpRange</a></code> | <code>string</code> | The property used to configure acceptance of webhooks in an IP address range. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfiguration.property.secretToken">SecretToken</a></code> | <code>string</code> | The property used to configure GitHub authentication. For GITHUB_HMAC, only the SecretToken property must be set. |

---

##### `AllowedIpRange`<sup>Optional</sup> <a name="AllowedIpRange" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfiguration.property.allowedIpRange"></a>

```csharp
public string AllowedIpRange { get; set; }
```

- *Type:* string

The property used to configure acceptance of webhooks in an IP address range.

For IP, only the AllowedIPRange property must be set. This property must be set to a valid CIDR range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codepipeline_webhook#allowed_ip_range CodepipelineWebhook#allowed_ip_range}

---

##### `SecretToken`<sup>Optional</sup> <a name="SecretToken" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfiguration.property.secretToken"></a>

```csharp
public string SecretToken { get; set; }
```

- *Type:* string

The property used to configure GitHub authentication. For GITHUB_HMAC, only the SecretToken property must be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codepipeline_webhook#secret_token CodepipelineWebhook#secret_token}

---

### CodepipelineWebhookConfig <a name="CodepipelineWebhookConfig" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodepipelineWebhookConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Authentication,
    CodepipelineWebhookAuthenticationConfiguration AuthenticationConfiguration,
    IResolvable|CodepipelineWebhookFilters[] Filters,
    string TargetAction,
    string TargetPipeline,
    string Name = null,
    bool|IResolvable RegisterWithThirdParty = null,
    IResolvable|CodepipelineWebhookTags[] Tags = null,
    double TargetPipelineVersion = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookConfig.property.authentication">Authentication</a></code> | <code>string</code> | Supported options are GITHUB_HMAC, IP, and UNAUTHENTICATED. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookConfig.property.authenticationConfiguration">AuthenticationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfiguration">CodepipelineWebhookAuthenticationConfiguration</a></code> | Properties that configure the authentication applied to incoming webhook trigger requests. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookConfig.property.filters">Filters</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFilters">CodepipelineWebhookFilters</a>[]</code> | A list of rules applied to the body/payload sent in the POST request to a webhook URL. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookConfig.property.targetAction">TargetAction</a></code> | <code>string</code> | The name of the action in a pipeline you want to connect to the webhook. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookConfig.property.targetPipeline">TargetPipeline</a></code> | <code>string</code> | The name of the pipeline you want to connect to the webhook. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookConfig.property.name">Name</a></code> | <code>string</code> | The name of the webhook. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookConfig.property.registerWithThirdParty">RegisterWithThirdParty</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Configures a connection between the webhook that was created and the external tool with events to be detected. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTags">CodepipelineWebhookTags</a>[]</code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookConfig.property.targetPipelineVersion">TargetPipelineVersion</a></code> | <code>double</code> | The version number of the pipeline to be connected to the trigger request. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Authentication`<sup>Required</sup> <a name="Authentication" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookConfig.property.authentication"></a>

```csharp
public string Authentication { get; set; }
```

- *Type:* string

Supported options are GITHUB_HMAC, IP, and UNAUTHENTICATED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codepipeline_webhook#authentication CodepipelineWebhook#authentication}

---

##### `AuthenticationConfiguration`<sup>Required</sup> <a name="AuthenticationConfiguration" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookConfig.property.authenticationConfiguration"></a>

```csharp
public CodepipelineWebhookAuthenticationConfiguration AuthenticationConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfiguration">CodepipelineWebhookAuthenticationConfiguration</a>

Properties that configure the authentication applied to incoming webhook trigger requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codepipeline_webhook#authentication_configuration CodepipelineWebhook#authentication_configuration}

---

##### `Filters`<sup>Required</sup> <a name="Filters" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookConfig.property.filters"></a>

```csharp
public IResolvable|CodepipelineWebhookFilters[] Filters { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFilters">CodepipelineWebhookFilters</a>[]

A list of rules applied to the body/payload sent in the POST request to a webhook URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codepipeline_webhook#filters CodepipelineWebhook#filters}

---

##### `TargetAction`<sup>Required</sup> <a name="TargetAction" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookConfig.property.targetAction"></a>

```csharp
public string TargetAction { get; set; }
```

- *Type:* string

The name of the action in a pipeline you want to connect to the webhook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codepipeline_webhook#target_action CodepipelineWebhook#target_action}

---

##### `TargetPipeline`<sup>Required</sup> <a name="TargetPipeline" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookConfig.property.targetPipeline"></a>

```csharp
public string TargetPipeline { get; set; }
```

- *Type:* string

The name of the pipeline you want to connect to the webhook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codepipeline_webhook#target_pipeline CodepipelineWebhook#target_pipeline}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the webhook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codepipeline_webhook#name CodepipelineWebhook#name}

---

##### `RegisterWithThirdParty`<sup>Optional</sup> <a name="RegisterWithThirdParty" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookConfig.property.registerWithThirdParty"></a>

```csharp
public bool|IResolvable RegisterWithThirdParty { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Configures a connection between the webhook that was created and the external tool with events to be detected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codepipeline_webhook#register_with_third_party CodepipelineWebhook#register_with_third_party}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookConfig.property.tags"></a>

```csharp
public IResolvable|CodepipelineWebhookTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTags">CodepipelineWebhookTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codepipeline_webhook#tags CodepipelineWebhook#tags}

---

##### `TargetPipelineVersion`<sup>Optional</sup> <a name="TargetPipelineVersion" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookConfig.property.targetPipelineVersion"></a>

```csharp
public double TargetPipelineVersion { get; set; }
```

- *Type:* double

The version number of the pipeline to be connected to the trigger request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codepipeline_webhook#target_pipeline_version CodepipelineWebhook#target_pipeline_version}

---

### CodepipelineWebhookFilters <a name="CodepipelineWebhookFilters" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFilters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodepipelineWebhookFilters {
    string JsonPath,
    string MatchEquals = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFilters.property.jsonPath">JsonPath</a></code> | <code>string</code> | A JsonPath expression that is applied to the body/payload of the webhook. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFilters.property.matchEquals">MatchEquals</a></code> | <code>string</code> | The value selected by the JsonPath expression must match what is supplied in the MatchEquals field. |

---

##### `JsonPath`<sup>Required</sup> <a name="JsonPath" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFilters.property.jsonPath"></a>

```csharp
public string JsonPath { get; set; }
```

- *Type:* string

A JsonPath expression that is applied to the body/payload of the webhook.

The value selected by the JsonPath expression must match the value specified in the MatchEquals field. Otherwise, the request is ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codepipeline_webhook#json_path CodepipelineWebhook#json_path}

---

##### `MatchEquals`<sup>Optional</sup> <a name="MatchEquals" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFilters.property.matchEquals"></a>

```csharp
public string MatchEquals { get; set; }
```

- *Type:* string

The value selected by the JsonPath expression must match what is supplied in the MatchEquals field.

Otherwise, the request is ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codepipeline_webhook#match_equals CodepipelineWebhook#match_equals}

---

### CodepipelineWebhookTags <a name="CodepipelineWebhookTags" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodepipelineWebhookTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codepipeline_webhook#key CodepipelineWebhook#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codepipeline_webhook#value CodepipelineWebhook#value}

---

## Classes <a name="Classes" id="Classes"></a>

### CodepipelineWebhookAuthenticationConfigurationOutputReference <a name="CodepipelineWebhookAuthenticationConfigurationOutputReference" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodepipelineWebhookAuthenticationConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.resetAllowedIpRange">ResetAllowedIpRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.resetSecretToken">ResetSecretToken</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowedIpRange` <a name="ResetAllowedIpRange" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.resetAllowedIpRange"></a>

```csharp
private void ResetAllowedIpRange()
```

##### `ResetSecretToken` <a name="ResetSecretToken" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.resetSecretToken"></a>

```csharp
private void ResetSecretToken()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.property.allowedIpRangeInput">AllowedIpRangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.property.secretTokenInput">SecretTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.property.allowedIpRange">AllowedIpRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.property.secretToken">SecretToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfiguration">CodepipelineWebhookAuthenticationConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedIpRangeInput`<sup>Optional</sup> <a name="AllowedIpRangeInput" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.property.allowedIpRangeInput"></a>

```csharp
public string AllowedIpRangeInput { get; }
```

- *Type:* string

---

##### `SecretTokenInput`<sup>Optional</sup> <a name="SecretTokenInput" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.property.secretTokenInput"></a>

```csharp
public string SecretTokenInput { get; }
```

- *Type:* string

---

##### `AllowedIpRange`<sup>Required</sup> <a name="AllowedIpRange" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.property.allowedIpRange"></a>

```csharp
public string AllowedIpRange { get; }
```

- *Type:* string

---

##### `SecretToken`<sup>Required</sup> <a name="SecretToken" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.property.secretToken"></a>

```csharp
public string SecretToken { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CodepipelineWebhookAuthenticationConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfiguration">CodepipelineWebhookAuthenticationConfiguration</a>

---


### CodepipelineWebhookFiltersList <a name="CodepipelineWebhookFiltersList" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodepipelineWebhookFiltersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersList.get"></a>

```csharp
private CodepipelineWebhookFiltersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFilters">CodepipelineWebhookFilters</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersList.property.internalValue"></a>

```csharp
public IResolvable|CodepipelineWebhookFilters[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFilters">CodepipelineWebhookFilters</a>[]

---


### CodepipelineWebhookFiltersOutputReference <a name="CodepipelineWebhookFiltersOutputReference" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodepipelineWebhookFiltersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.resetMatchEquals">ResetMatchEquals</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMatchEquals` <a name="ResetMatchEquals" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.resetMatchEquals"></a>

```csharp
private void ResetMatchEquals()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.property.jsonPathInput">JsonPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.property.matchEqualsInput">MatchEqualsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.property.jsonPath">JsonPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.property.matchEquals">MatchEquals</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFilters">CodepipelineWebhookFilters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `JsonPathInput`<sup>Optional</sup> <a name="JsonPathInput" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.property.jsonPathInput"></a>

```csharp
public string JsonPathInput { get; }
```

- *Type:* string

---

##### `MatchEqualsInput`<sup>Optional</sup> <a name="MatchEqualsInput" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.property.matchEqualsInput"></a>

```csharp
public string MatchEqualsInput { get; }
```

- *Type:* string

---

##### `JsonPath`<sup>Required</sup> <a name="JsonPath" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.property.jsonPath"></a>

```csharp
public string JsonPath { get; }
```

- *Type:* string

---

##### `MatchEquals`<sup>Required</sup> <a name="MatchEquals" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.property.matchEquals"></a>

```csharp
public string MatchEquals { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CodepipelineWebhookFilters InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFilters">CodepipelineWebhookFilters</a>

---


### CodepipelineWebhookTagsList <a name="CodepipelineWebhookTagsList" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodepipelineWebhookTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsList.get"></a>

```csharp
private CodepipelineWebhookTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTags">CodepipelineWebhookTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsList.property.internalValue"></a>

```csharp
public IResolvable|CodepipelineWebhookTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTags">CodepipelineWebhookTags</a>[]

---


### CodepipelineWebhookTagsOutputReference <a name="CodepipelineWebhookTagsOutputReference" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodepipelineWebhookTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTags">CodepipelineWebhookTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CodepipelineWebhookTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTags">CodepipelineWebhookTags</a>

---



