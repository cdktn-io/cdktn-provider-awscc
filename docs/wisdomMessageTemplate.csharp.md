# `wisdomMessageTemplate` Submodule <a name="`wisdomMessageTemplate` Submodule" id="@cdktn/provider-awscc.wisdomMessageTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WisdomMessageTemplate <a name="WisdomMessageTemplate" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_message_template awscc_wisdom_message_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WisdomMessageTemplate(Construct Scope, string Id, WisdomMessageTemplateConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig">WisdomMessageTemplateConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig">WisdomMessageTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.putContent">PutContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.putDefaultAttributes">PutDefaultAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.putGroupingConfiguration">PutGroupingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.putMessageTemplateAttachments">PutMessageTemplateAttachments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.resetDefaultAttributes">ResetDefaultAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.resetGroupingConfiguration">ResetGroupingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.resetLanguage">ResetLanguage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.resetMessageTemplateAttachments">ResetMessageTemplateAttachments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutContent` <a name="PutContent" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.putContent"></a>

```csharp
private void PutContent(WisdomMessageTemplateContent Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.putContent.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContent">WisdomMessageTemplateContent</a>

---

##### `PutDefaultAttributes` <a name="PutDefaultAttributes" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.putDefaultAttributes"></a>

```csharp
private void PutDefaultAttributes(WisdomMessageTemplateDefaultAttributes Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.putDefaultAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributes">WisdomMessageTemplateDefaultAttributes</a>

---

##### `PutGroupingConfiguration` <a name="PutGroupingConfiguration" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.putGroupingConfiguration"></a>

```csharp
private void PutGroupingConfiguration(WisdomMessageTemplateGroupingConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.putGroupingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfiguration">WisdomMessageTemplateGroupingConfiguration</a>

---

##### `PutMessageTemplateAttachments` <a name="PutMessageTemplateAttachments" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.putMessageTemplateAttachments"></a>

```csharp
private void PutMessageTemplateAttachments(IResolvable|WisdomMessageTemplateMessageTemplateAttachments[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.putMessageTemplateAttachments.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachments">WisdomMessageTemplateMessageTemplateAttachments</a>[]

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.putTags"></a>

```csharp
private void PutTags(IResolvable|WisdomMessageTemplateTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTags">WisdomMessageTemplateTags</a>[]

---

##### `ResetDefaultAttributes` <a name="ResetDefaultAttributes" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.resetDefaultAttributes"></a>

```csharp
private void ResetDefaultAttributes()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetGroupingConfiguration` <a name="ResetGroupingConfiguration" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.resetGroupingConfiguration"></a>

```csharp
private void ResetGroupingConfiguration()
```

##### `ResetLanguage` <a name="ResetLanguage" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.resetLanguage"></a>

```csharp
private void ResetLanguage()
```

##### `ResetMessageTemplateAttachments` <a name="ResetMessageTemplateAttachments" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.resetMessageTemplateAttachments"></a>

```csharp
private void ResetMessageTemplateAttachments()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a WisdomMessageTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

WisdomMessageTemplate.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

WisdomMessageTemplate.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

WisdomMessageTemplate.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

WisdomMessageTemplate.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a WisdomMessageTemplate resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the WisdomMessageTemplate to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing WisdomMessageTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_message_template#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the WisdomMessageTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.content">Content</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference">WisdomMessageTemplateContentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.defaultAttributes">DefaultAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference">WisdomMessageTemplateDefaultAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.groupingConfiguration">GroupingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference">WisdomMessageTemplateGroupingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.messageTemplateArn">MessageTemplateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.messageTemplateAttachments">MessageTemplateAttachments</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsList">WisdomMessageTemplateMessageTemplateAttachmentsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.messageTemplateContentSha256">MessageTemplateContentSha256</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.messageTemplateId">MessageTemplateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsList">WisdomMessageTemplateTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.channelSubtypeInput">ChannelSubtypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.contentInput">ContentInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContent">WisdomMessageTemplateContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.defaultAttributesInput">DefaultAttributesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributes">WisdomMessageTemplateDefaultAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.groupingConfigurationInput">GroupingConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfiguration">WisdomMessageTemplateGroupingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.knowledgeBaseArnInput">KnowledgeBaseArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.languageInput">LanguageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.messageTemplateAttachmentsInput">MessageTemplateAttachmentsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachments">WisdomMessageTemplateMessageTemplateAttachments</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTags">WisdomMessageTemplateTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.channelSubtype">ChannelSubtype</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.knowledgeBaseArn">KnowledgeBaseArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.language">Language</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.content"></a>

```csharp
public WisdomMessageTemplateContentOutputReference Content { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference">WisdomMessageTemplateContentOutputReference</a>

---

##### `DefaultAttributes`<sup>Required</sup> <a name="DefaultAttributes" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.defaultAttributes"></a>

```csharp
public WisdomMessageTemplateDefaultAttributesOutputReference DefaultAttributes { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference">WisdomMessageTemplateDefaultAttributesOutputReference</a>

---

##### `GroupingConfiguration`<sup>Required</sup> <a name="GroupingConfiguration" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.groupingConfiguration"></a>

```csharp
public WisdomMessageTemplateGroupingConfigurationOutputReference GroupingConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference">WisdomMessageTemplateGroupingConfigurationOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MessageTemplateArn`<sup>Required</sup> <a name="MessageTemplateArn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.messageTemplateArn"></a>

```csharp
public string MessageTemplateArn { get; }
```

- *Type:* string

---

##### `MessageTemplateAttachments`<sup>Required</sup> <a name="MessageTemplateAttachments" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.messageTemplateAttachments"></a>

```csharp
public WisdomMessageTemplateMessageTemplateAttachmentsList MessageTemplateAttachments { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsList">WisdomMessageTemplateMessageTemplateAttachmentsList</a>

---

##### `MessageTemplateContentSha256`<sup>Required</sup> <a name="MessageTemplateContentSha256" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.messageTemplateContentSha256"></a>

```csharp
public string MessageTemplateContentSha256 { get; }
```

- *Type:* string

---

##### `MessageTemplateId`<sup>Required</sup> <a name="MessageTemplateId" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.messageTemplateId"></a>

```csharp
public string MessageTemplateId { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.tags"></a>

```csharp
public WisdomMessageTemplateTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsList">WisdomMessageTemplateTagsList</a>

---

##### `ChannelSubtypeInput`<sup>Optional</sup> <a name="ChannelSubtypeInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.channelSubtypeInput"></a>

```csharp
public string ChannelSubtypeInput { get; }
```

- *Type:* string

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.contentInput"></a>

```csharp
public IResolvable|WisdomMessageTemplateContent ContentInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContent">WisdomMessageTemplateContent</a>

---

##### `DefaultAttributesInput`<sup>Optional</sup> <a name="DefaultAttributesInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.defaultAttributesInput"></a>

```csharp
public IResolvable|WisdomMessageTemplateDefaultAttributes DefaultAttributesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributes">WisdomMessageTemplateDefaultAttributes</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `GroupingConfigurationInput`<sup>Optional</sup> <a name="GroupingConfigurationInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.groupingConfigurationInput"></a>

```csharp
public IResolvable|WisdomMessageTemplateGroupingConfiguration GroupingConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfiguration">WisdomMessageTemplateGroupingConfiguration</a>

---

##### `KnowledgeBaseArnInput`<sup>Optional</sup> <a name="KnowledgeBaseArnInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.knowledgeBaseArnInput"></a>

```csharp
public string KnowledgeBaseArnInput { get; }
```

- *Type:* string

---

##### `LanguageInput`<sup>Optional</sup> <a name="LanguageInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.languageInput"></a>

```csharp
public string LanguageInput { get; }
```

- *Type:* string

---

##### `MessageTemplateAttachmentsInput`<sup>Optional</sup> <a name="MessageTemplateAttachmentsInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.messageTemplateAttachmentsInput"></a>

```csharp
public IResolvable|WisdomMessageTemplateMessageTemplateAttachments[] MessageTemplateAttachmentsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachments">WisdomMessageTemplateMessageTemplateAttachments</a>[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.tagsInput"></a>

```csharp
public IResolvable|WisdomMessageTemplateTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTags">WisdomMessageTemplateTags</a>[]

---

##### `ChannelSubtype`<sup>Required</sup> <a name="ChannelSubtype" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.channelSubtype"></a>

```csharp
public string ChannelSubtype { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `KnowledgeBaseArn`<sup>Required</sup> <a name="KnowledgeBaseArn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.knowledgeBaseArn"></a>

```csharp
public string KnowledgeBaseArn { get; }
```

- *Type:* string

---

##### `Language`<sup>Required</sup> <a name="Language" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.language"></a>

```csharp
public string Language { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WisdomMessageTemplateConfig <a name="WisdomMessageTemplateConfig" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WisdomMessageTemplateConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ChannelSubtype,
    WisdomMessageTemplateContent Content,
    string KnowledgeBaseArn,
    string Name,
    WisdomMessageTemplateDefaultAttributes DefaultAttributes = null,
    string Description = null,
    WisdomMessageTemplateGroupingConfiguration GroupingConfiguration = null,
    string Language = null,
    IResolvable|WisdomMessageTemplateMessageTemplateAttachments[] MessageTemplateAttachments = null,
    IResolvable|WisdomMessageTemplateTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig.property.channelSubtype">ChannelSubtype</a></code> | <code>string</code> | The channel subtype this message template applies to. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig.property.content">Content</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContent">WisdomMessageTemplateContent</a></code> | The content of the message template. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig.property.knowledgeBaseArn">KnowledgeBaseArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the knowledge base to which the message template belongs. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig.property.name">Name</a></code> | <code>string</code> | The name of the message template. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig.property.defaultAttributes">DefaultAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributes">WisdomMessageTemplateDefaultAttributes</a></code> | An object that specifies the default values to use for variables in the message template. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig.property.description">Description</a></code> | <code>string</code> | The description of the message template. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig.property.groupingConfiguration">GroupingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfiguration">WisdomMessageTemplateGroupingConfiguration</a></code> | The configuration information of the user groups that the message template is accessible to. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig.property.language">Language</a></code> | <code>string</code> | The language code value for the language in which the message template is written. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig.property.messageTemplateAttachments">MessageTemplateAttachments</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachments">WisdomMessageTemplateMessageTemplateAttachments</a>[]</code> | List of message template attachments. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTags">WisdomMessageTemplateTags</a>[]</code> | The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ChannelSubtype`<sup>Required</sup> <a name="ChannelSubtype" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig.property.channelSubtype"></a>

```csharp
public string ChannelSubtype { get; set; }
```

- *Type:* string

The channel subtype this message template applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_message_template#channel_subtype WisdomMessageTemplate#channel_subtype}

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig.property.content"></a>

```csharp
public WisdomMessageTemplateContent Content { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContent">WisdomMessageTemplateContent</a>

The content of the message template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_message_template#content WisdomMessageTemplate#content}

---

##### `KnowledgeBaseArn`<sup>Required</sup> <a name="KnowledgeBaseArn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig.property.knowledgeBaseArn"></a>

```csharp
public string KnowledgeBaseArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of the knowledge base to which the message template belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_message_template#knowledge_base_arn WisdomMessageTemplate#knowledge_base_arn}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the message template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_message_template#name WisdomMessageTemplate#name}

---

##### `DefaultAttributes`<sup>Optional</sup> <a name="DefaultAttributes" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig.property.defaultAttributes"></a>

```csharp
public WisdomMessageTemplateDefaultAttributes DefaultAttributes { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributes">WisdomMessageTemplateDefaultAttributes</a>

An object that specifies the default values to use for variables in the message template.

This object contains different categories of key-value pairs. Each key defines a variable or placeholder in the message template. The corresponding value defines the default value for that variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_message_template#default_attributes WisdomMessageTemplate#default_attributes}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description of the message template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_message_template#description WisdomMessageTemplate#description}

---

##### `GroupingConfiguration`<sup>Optional</sup> <a name="GroupingConfiguration" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig.property.groupingConfiguration"></a>

```csharp
public WisdomMessageTemplateGroupingConfiguration GroupingConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfiguration">WisdomMessageTemplateGroupingConfiguration</a>

The configuration information of the user groups that the message template is accessible to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_message_template#grouping_configuration WisdomMessageTemplate#grouping_configuration}

---

##### `Language`<sup>Optional</sup> <a name="Language" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig.property.language"></a>

```csharp
public string Language { get; set; }
```

- *Type:* string

The language code value for the language in which the message template is written.

The supported language codes include de_DE, en_US, es_ES, fr_FR, id_ID, it_IT, ja_JP, ko_KR, pt_BR, zh_CN, zh_TW

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_message_template#language WisdomMessageTemplate#language}

---

##### `MessageTemplateAttachments`<sup>Optional</sup> <a name="MessageTemplateAttachments" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig.property.messageTemplateAttachments"></a>

```csharp
public IResolvable|WisdomMessageTemplateMessageTemplateAttachments[] MessageTemplateAttachments { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachments">WisdomMessageTemplateMessageTemplateAttachments</a>[]

List of message template attachments.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_message_template#message_template_attachments WisdomMessageTemplate#message_template_attachments}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig.property.tags"></a>

```csharp
public IResolvable|WisdomMessageTemplateTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTags">WisdomMessageTemplateTags</a>[]

The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_message_template#tags WisdomMessageTemplate#tags}

---

### WisdomMessageTemplateContent <a name="WisdomMessageTemplateContent" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContent.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WisdomMessageTemplateContent {
    WisdomMessageTemplateContentEmailMessageTemplateContent EmailMessageTemplateContent = null,
    WisdomMessageTemplateContentSmsMessageTemplateContent SmsMessageTemplateContent = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContent.property.emailMessageTemplateContent">EmailMessageTemplateContent</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContent">WisdomMessageTemplateContentEmailMessageTemplateContent</a></code> | The content of message template that applies to email channel subtype. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContent.property.smsMessageTemplateContent">SmsMessageTemplateContent</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContent">WisdomMessageTemplateContentSmsMessageTemplateContent</a></code> | The content of message template that applies to SMS channel subtype. |

---

##### `EmailMessageTemplateContent`<sup>Optional</sup> <a name="EmailMessageTemplateContent" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContent.property.emailMessageTemplateContent"></a>

```csharp
public WisdomMessageTemplateContentEmailMessageTemplateContent EmailMessageTemplateContent { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContent">WisdomMessageTemplateContentEmailMessageTemplateContent</a>

The content of message template that applies to email channel subtype.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_message_template#email_message_template_content WisdomMessageTemplate#email_message_template_content}

---

##### `SmsMessageTemplateContent`<sup>Optional</sup> <a name="SmsMessageTemplateContent" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContent.property.smsMessageTemplateContent"></a>

```csharp
public WisdomMessageTemplateContentSmsMessageTemplateContent SmsMessageTemplateContent { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContent">WisdomMessageTemplateContentSmsMessageTemplateContent</a>

The content of message template that applies to SMS channel subtype.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_message_template#sms_message_template_content WisdomMessageTemplate#sms_message_template_content}

---

### WisdomMessageTemplateContentEmailMessageTemplateContent <a name="WisdomMessageTemplateContentEmailMessageTemplateContent" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContent.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WisdomMessageTemplateContentEmailMessageTemplateContent {
    WisdomMessageTemplateContentEmailMessageTemplateContentBody Body = null,
    IResolvable|WisdomMessageTemplateContentEmailMessageTemplateContentHeaders[] Headers = null,
    string Subject = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContent.property.body">Body</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBody">WisdomMessageTemplateContentEmailMessageTemplateContentBody</a></code> | The body to use in email messages. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContent.property.headers">Headers</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeaders">WisdomMessageTemplateContentEmailMessageTemplateContentHeaders</a>[]</code> | The email headers to include in email messages. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContent.property.subject">Subject</a></code> | <code>string</code> | The subject line, or title, to use in email messages. |

---

##### `Body`<sup>Optional</sup> <a name="Body" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContent.property.body"></a>

```csharp
public WisdomMessageTemplateContentEmailMessageTemplateContentBody Body { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBody">WisdomMessageTemplateContentEmailMessageTemplateContentBody</a>

The body to use in email messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_message_template#body WisdomMessageTemplate#body}

---

##### `Headers`<sup>Optional</sup> <a name="Headers" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContent.property.headers"></a>

```csharp
public IResolvable|WisdomMessageTemplateContentEmailMessageTemplateContentHeaders[] Headers { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeaders">WisdomMessageTemplateContentEmailMessageTemplateContentHeaders</a>[]

The email headers to include in email messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_message_template#headers WisdomMessageTemplate#headers}

---

##### `Subject`<sup>Optional</sup> <a name="Subject" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContent.property.subject"></a>

```csharp
public string Subject { get; set; }
```

- *Type:* string

The subject line, or title, to use in email messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_message_template#subject WisdomMessageTemplate#subject}

---

### WisdomMessageTemplateContentEmailMessageTemplateContentBody <a name="WisdomMessageTemplateContentEmailMessageTemplateContentBody" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBody"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBody.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WisdomMessageTemplateContentEmailMessageTemplateContentBody {
    WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtml Html = null,
    WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainText PlainText = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBody.property.html">Html</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtml">WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtml</a></code> | The message body, in HTML format, to use in email messages that are based on the message template. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBody.property.plainText">PlainText</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainText">WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainText</a></code> | The message body, in plain text format, to use in email messages that are based on the message template. |

---

##### `Html`<sup>Optional</sup> <a name="Html" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBody.property.html"></a>

```csharp
public WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtml Html { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtml">WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtml</a>

The message body, in HTML format, to use in email messages that are based on the message template.

We recommend using HTML format for email clients that render HTML content. You can include links, formatted text, and more in an HTML message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_message_template#html WisdomMessageTemplate#html}

---

##### `PlainText`<sup>Optional</sup> <a name="PlainText" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBody.property.plainText"></a>

```csharp
public WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainText PlainText { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainText">WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainText</a>

The message body, in plain text format, to use in email messages that are based on the message template.

We recommend using plain text format for email clients that don't render HTML content and clients that are connected to high-latency networks, such as mobile devices.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_message_template#plain_text WisdomMessageTemplate#plain_text}

---

### WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtml <a name="WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtml" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtml"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtml.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtml {
    string Content = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtml.property.content">Content</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_message_template#content WisdomMessageTemplate#content}. |

---

##### `Content`<sup>Optional</sup> <a name="Content" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtml.property.content"></a>

```csharp
public string Content { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_message_template#content WisdomMessageTemplate#content}.

---

### WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainText <a name="WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainText" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainText"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainText.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainText {
    string Content = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainText.property.content">Content</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_message_template#content WisdomMessageTemplate#content}. |

---

##### `Content`<sup>Optional</sup> <a name="Content" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainText.property.content"></a>

```csharp
public string Content { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_message_template#content WisdomMessageTemplate#content}.

---

### WisdomMessageTemplateContentEmailMessageTemplateContentHeaders <a name="WisdomMessageTemplateContentEmailMessageTemplateContentHeaders" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeaders.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WisdomMessageTemplateContentEmailMessageTemplateContentHeaders {
    string Name = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeaders.property.name">Name</a></code> | <code>string</code> | The name of the email header. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeaders.property.value">Value</a></code> | <code>string</code> | The value of the email header. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeaders.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the email header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_message_template#name WisdomMessageTemplate#name}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeaders.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value of the email header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_message_template#value WisdomMessageTemplate#value}

---

### WisdomMessageTemplateContentSmsMessageTemplateContent <a name="WisdomMessageTemplateContentSmsMessageTemplateContent" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContent.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WisdomMessageTemplateContentSmsMessageTemplateContent {
    WisdomMessageTemplateContentSmsMessageTemplateContentBody Body = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContent.property.body">Body</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBody">WisdomMessageTemplateContentSmsMessageTemplateContentBody</a></code> | The body to use in SMS messages. |

---

##### `Body`<sup>Optional</sup> <a name="Body" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContent.property.body"></a>

```csharp
public WisdomMessageTemplateContentSmsMessageTemplateContentBody Body { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBody">WisdomMessageTemplateContentSmsMessageTemplateContentBody</a>

The body to use in SMS messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_message_template#body WisdomMessageTemplate#body}

---

### WisdomMessageTemplateContentSmsMessageTemplateContentBody <a name="WisdomMessageTemplateContentSmsMessageTemplateContentBody" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBody"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBody.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WisdomMessageTemplateContentSmsMessageTemplateContentBody {
    WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainText PlainText = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBody.property.plainText">PlainText</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainText">WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainText</a></code> | The container of message template body. |

---

##### `PlainText`<sup>Optional</sup> <a name="PlainText" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBody.property.plainText"></a>

```csharp
public WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainText PlainText { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainText">WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainText</a>

The container of message template body.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_message_template#plain_text WisdomMessageTemplate#plain_text}

---

### WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainText <a name="WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainText" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainText"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainText.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainText {
    string Content = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainText.property.content">Content</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_message_template#content WisdomMessageTemplate#content}. |

---

##### `Content`<sup>Optional</sup> <a name="Content" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainText.property.content"></a>

```csharp
public string Content { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_message_template#content WisdomMessageTemplate#content}.

---

### WisdomMessageTemplateDefaultAttributes <a name="WisdomMessageTemplateDefaultAttributes" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributes.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WisdomMessageTemplateDefaultAttributes {
    WisdomMessageTemplateDefaultAttributesAgentAttributes AgentAttributes = null,
    System.Collections.Generic.IDictionary<string, string> CustomAttributes = null,
    WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes CustomerProfileAttributes = null,
    WisdomMessageTemplateDefaultAttributesSystemAttributes SystemAttributes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributes.property.agentAttributes">AgentAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributes">WisdomMessageTemplateDefaultAttributesAgentAttributes</a></code> | The agent attributes that are used with the message template. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributes.property.customAttributes">CustomAttributes</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | The custom attributes that are used with the message template. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributes.property.customerProfileAttributes">CustomerProfileAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes">WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes</a></code> | The customer profile attributes that are used with the message template. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributes.property.systemAttributes">SystemAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributes">WisdomMessageTemplateDefaultAttributesSystemAttributes</a></code> | The system attributes that are used with the message template. |

---

##### `AgentAttributes`<sup>Optional</sup> <a name="AgentAttributes" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributes.property.agentAttributes"></a>

```csharp
public WisdomMessageTemplateDefaultAttributesAgentAttributes AgentAttributes { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributes">WisdomMessageTemplateDefaultAttributesAgentAttributes</a>

The agent attributes that are used with the message template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_message_template#agent_attributes WisdomMessageTemplate#agent_attributes}

---

##### `CustomAttributes`<sup>Optional</sup> <a name="CustomAttributes" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributes.property.customAttributes"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> CustomAttributes { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

The custom attributes that are used with the message template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_message_template#custom_attributes WisdomMessageTemplate#custom_attributes}

---

##### `CustomerProfileAttributes`<sup>Optional</sup> <a name="CustomerProfileAttributes" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributes.property.customerProfileAttributes"></a>

```csharp
public WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes CustomerProfileAttributes { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes">WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes</a>

The customer profile attributes that are used with the message template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_message_template#customer_profile_attributes WisdomMessageTemplate#customer_profile_attributes}

---

##### `SystemAttributes`<sup>Optional</sup> <a name="SystemAttributes" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributes.property.systemAttributes"></a>

```csharp
public WisdomMessageTemplateDefaultAttributesSystemAttributes SystemAttributes { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributes">WisdomMessageTemplateDefaultAttributesSystemAttributes</a>

The system attributes that are used with the message template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_message_template#system_attributes WisdomMessageTemplate#system_attributes}

---

### WisdomMessageTemplateDefaultAttributesAgentAttributes <a name="WisdomMessageTemplateDefaultAttributesAgentAttributes" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributes.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WisdomMessageTemplateDefaultAttributesAgentAttributes {
    string FirstName = null,
    string LastName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributes.property.firstName">FirstName</a></code> | <code>string</code> | The agent?s first name as entered in their Amazon Connect user account. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributes.property.lastName">LastName</a></code> | <code>string</code> | The agent?s last name as entered in their Amazon Connect user account. |

---

##### `FirstName`<sup>Optional</sup> <a name="FirstName" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributes.property.firstName"></a>

```csharp
public string FirstName { get; set; }
```

- *Type:* string

The agent?s first name as entered in their Amazon Connect user account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_message_template#first_name WisdomMessageTemplate#first_name}

---

##### `LastName`<sup>Optional</sup> <a name="LastName" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributes.property.lastName"></a>

```csharp
public string LastName { get; set; }
```

- *Type:* string

The agent?s last name as entered in their Amazon Connect user account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_message_template#last_name WisdomMessageTemplate#last_name}

---

### WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes <a name="WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes {
    string AccountNumber = null,
    string AdditionalInformation = null,
    string Address1 = null,
    string Address2 = null,
    string Address3 = null,
    string Address4 = null,
    string BillingAddress1 = null,
    string BillingAddress2 = null,
    string BillingAddress3 = null,
    string BillingAddress4 = null,
    string BillingCity = null,
    string BillingCountry = null,
    string BillingCounty = null,
    string BillingPostalCode = null,
    string BillingProvince = null,
    string BillingState = null,
    string BirthDate = null,
    string BusinessEmailAddress = null,
    string BusinessName = null,
    string BusinessPhoneNumber = null,
    string City = null,
    string Country = null,
    string County = null,
    System.Collections.Generic.IDictionary<string, string> Custom = null,
    string EmailAddress = null,
    string FirstName = null,
    string Gender = null,
    string HomePhoneNumber = null,
    string LastName = null,
    string MailingAddress1 = null,
    string MailingAddress2 = null,
    string MailingAddress3 = null,
    string MailingAddress4 = null,
    string MailingCity = null,
    string MailingCountry = null,
    string MailingCounty = null,
    string MailingPostalCode = null,
    string MailingProvince = null,
    string MailingState = null,
    string MiddleName = null,
    string MobilePhoneNumber = null,
    string PartyType = null,
    string PhoneNumber = null,
    string PostalCode = null,
    string ProfileArn = null,
    string ProfileId = null,
    string Province = null,
    string ShippingAddress1 = null,
    string ShippingAddress2 = null,
    string ShippingAddress3 = null,
    string ShippingAddress4 = null,
    string ShippingCity = null,
    string ShippingCountry = null,
    string ShippingCounty = null,
    string ShippingPostalCode = null,
    string ShippingProvince = null,
    string ShippingState = null,
    string State = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.accountNumber">AccountNumber</a></code> | <code>string</code> | A unique account number that you have given to the customer. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.additionalInformation">AdditionalInformation</a></code> | <code>string</code> | Any additional information relevant to the customer's profile. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.address1">Address1</a></code> | <code>string</code> | The first line of a customer address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.address2">Address2</a></code> | <code>string</code> | The second line of a customer address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.address3">Address3</a></code> | <code>string</code> | The third line of a customer address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.address4">Address4</a></code> | <code>string</code> | The fourth line of a customer address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.billingAddress1">BillingAddress1</a></code> | <code>string</code> | The first line of a customer?s billing address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.billingAddress2">BillingAddress2</a></code> | <code>string</code> | The second line of a customer?s billing address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.billingAddress3">BillingAddress3</a></code> | <code>string</code> | The third line of a customer?s billing address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.billingAddress4">BillingAddress4</a></code> | <code>string</code> | The fourth line of a customer?s billing address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.billingCity">BillingCity</a></code> | <code>string</code> | The city of a customer?s billing address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.billingCountry">BillingCountry</a></code> | <code>string</code> | The country of a customer?s billing address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.billingCounty">BillingCounty</a></code> | <code>string</code> | The county of a customer?s billing address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.billingPostalCode">BillingPostalCode</a></code> | <code>string</code> | The postal code of a customer?s billing address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.billingProvince">BillingProvince</a></code> | <code>string</code> | The province of a customer?s billing address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.billingState">BillingState</a></code> | <code>string</code> | The state of a customer?s billing address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.birthDate">BirthDate</a></code> | <code>string</code> | The customer's birth date. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.businessEmailAddress">BusinessEmailAddress</a></code> | <code>string</code> | The customer's business email address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.businessName">BusinessName</a></code> | <code>string</code> | The name of the customer's business. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.businessPhoneNumber">BusinessPhoneNumber</a></code> | <code>string</code> | The customer's business phone number. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.city">City</a></code> | <code>string</code> | The city in which a customer lives. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.country">Country</a></code> | <code>string</code> | The country in which a customer lives. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.county">County</a></code> | <code>string</code> | The county in which a customer lives. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.custom">Custom</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | The custom attributes that are used with the message template. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.emailAddress">EmailAddress</a></code> | <code>string</code> | The customer's email address, which has not been specified as a personal or business address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.firstName">FirstName</a></code> | <code>string</code> | The customer's first name. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.gender">Gender</a></code> | <code>string</code> | The customer's gender. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.homePhoneNumber">HomePhoneNumber</a></code> | <code>string</code> | The customer's home phone number. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.lastName">LastName</a></code> | <code>string</code> | The customer's last name. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.mailingAddress1">MailingAddress1</a></code> | <code>string</code> | The first line of a customer?s mailing address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.mailingAddress2">MailingAddress2</a></code> | <code>string</code> | The second line of a customer?s mailing address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.mailingAddress3">MailingAddress3</a></code> | <code>string</code> | The third line of a customer?s mailing address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.mailingAddress4">MailingAddress4</a></code> | <code>string</code> | The fourth line of a customer?s mailing address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.mailingCity">MailingCity</a></code> | <code>string</code> | The city of a customer?s mailing address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.mailingCountry">MailingCountry</a></code> | <code>string</code> | The country of a customer?s mailing address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.mailingCounty">MailingCounty</a></code> | <code>string</code> | The county of a customer?s mailing address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.mailingPostalCode">MailingPostalCode</a></code> | <code>string</code> | The postal code of a customer?s mailing address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.mailingProvince">MailingProvince</a></code> | <code>string</code> | The province of a customer?s mailing address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.mailingState">MailingState</a></code> | <code>string</code> | The state of a customer?s mailing address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.middleName">MiddleName</a></code> | <code>string</code> | The customer's middle name. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.mobilePhoneNumber">MobilePhoneNumber</a></code> | <code>string</code> | The customer's mobile phone number. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.partyType">PartyType</a></code> | <code>string</code> | The customer's party type. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.phoneNumber">PhoneNumber</a></code> | <code>string</code> | The customer's phone number, which has not been specified as a mobile, home, or business number. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.postalCode">PostalCode</a></code> | <code>string</code> | The postal code of a customer address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.profileArn">ProfileArn</a></code> | <code>string</code> | The ARN of a customer profile. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.profileId">ProfileId</a></code> | <code>string</code> | The unique identifier of a customer profile. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.province">Province</a></code> | <code>string</code> | The province in which a customer lives. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.shippingAddress1">ShippingAddress1</a></code> | <code>string</code> | The first line of a customer?s shipping address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.shippingAddress2">ShippingAddress2</a></code> | <code>string</code> | The second line of a customer?s shipping address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.shippingAddress3">ShippingAddress3</a></code> | <code>string</code> | The third line of a customer?s shipping address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.shippingAddress4">ShippingAddress4</a></code> | <code>string</code> | The fourth line of a customer?s shipping address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.shippingCity">ShippingCity</a></code> | <code>string</code> | The city of a customer?s shipping address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.shippingCountry">ShippingCountry</a></code> | <code>string</code> | The country of a customer?s shipping address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.shippingCounty">ShippingCounty</a></code> | <code>string</code> | The county of a customer?s shipping address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.shippingPostalCode">ShippingPostalCode</a></code> | <code>string</code> | The postal code of a customer?s shipping address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.shippingProvince">ShippingProvince</a></code> | <code>string</code> | The province of a customer?s shipping address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.shippingState">ShippingState</a></code> | <code>string</code> | The state of a customer?s shipping address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.state">State</a></code> | <code>string</code> | The state in which a customer lives. |

---

##### `AccountNumber`<sup>Optional</sup> <a name="AccountNumber" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.accountNumber"></a>

```csharp
public string AccountNumber { get; set; }
```

- *Type:* string

A unique account number that you have given to the customer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_message_template#account_number WisdomMessageTemplate#account_number}

---

##### `AdditionalInformation`<sup>Optional</sup> <a name="AdditionalInformation" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.additionalInformation"></a>

```csharp
public string AdditionalInformation { get; set; }
```

- *Type:* string

Any additional information relevant to the customer's profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_message_template#additional_information WisdomMessageTemplate#additional_information}

---

##### `Address1`<sup>Optional</sup> <a name="Address1" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.address1"></a>

```csharp
public string Address1 { get; set; }
```

- *Type:* string

The first line of a customer address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_message_template#address_1 WisdomMessageTemplate#address_1}

---

##### `Address2`<sup>Optional</sup> <a name="Address2" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.address2"></a>

```csharp
public string Address2 { get; set; }
```

- *Type:* string

The second line of a customer address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_message_template#address_2 WisdomMessageTemplate#address_2}

---

##### `Address3`<sup>Optional</sup> <a name="Address3" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.address3"></a>

```csharp
public string Address3 { get; set; }
```

- *Type:* string

The third line of a customer address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_message_template#address_3 WisdomMessageTemplate#address_3}

---

##### `Address4`<sup>Optional</sup> <a name="Address4" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.address4"></a>

```csharp
public string Address4 { get; set; }
```

- *Type:* string

The fourth line of a customer address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_message_template#address_4 WisdomMessageTemplate#address_4}

---

##### `BillingAddress1`<sup>Optional</sup> <a name="BillingAddress1" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.billingAddress1"></a>

```csharp
public string BillingAddress1 { get; set; }
```

- *Type:* string

The first line of a customer?s billing address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_message_template#billing_address_1 WisdomMessageTemplate#billing_address_1}

---

##### `BillingAddress2`<sup>Optional</sup> <a name="BillingAddress2" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.billingAddress2"></a>

```csharp
public string BillingAddress2 { get; set; }
```

- *Type:* string

The second line of a customer?s billing address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_message_template#billing_address_2 WisdomMessageTemplate#billing_address_2}

---

##### `BillingAddress3`<sup>Optional</sup> <a name="BillingAddress3" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.billingAddress3"></a>

```csharp
public string BillingAddress3 { get; set; }
```

- *Type:* string

The third line of a customer?s billing address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_message_template#billing_address_3 WisdomMessageTemplate#billing_address_3}

---

##### `BillingAddress4`<sup>Optional</sup> <a name="BillingAddress4" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.billingAddress4"></a>

```csharp
public string BillingAddress4 { get; set; }
```

- *Type:* string

The fourth line of a customer?s billing address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_message_template#billing_address_4 WisdomMessageTemplate#billing_address_4}

---

##### `BillingCity`<sup>Optional</sup> <a name="BillingCity" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.billingCity"></a>

```csharp
public string BillingCity { get; set; }
```

- *Type:* string

The city of a customer?s billing address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_message_template#billing_city WisdomMessageTemplate#billing_city}

---

##### `BillingCountry`<sup>Optional</sup> <a name="BillingCountry" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.billingCountry"></a>

```csharp
public string BillingCountry { get; set; }
```

- *Type:* string

The country of a customer?s billing address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_message_template#billing_country WisdomMessageTemplate#billing_country}

---

##### `BillingCounty`<sup>Optional</sup> <a name="BillingCounty" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.billingCounty"></a>

```csharp
public string BillingCounty { get; set; }
```

- *Type:* string

The county of a customer?s billing address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_message_template#billing_county WisdomMessageTemplate#billing_county}

---

##### `BillingPostalCode`<sup>Optional</sup> <a name="BillingPostalCode" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.billingPostalCode"></a>

```csharp
public string BillingPostalCode { get; set; }
```

- *Type:* string

The postal code of a customer?s billing address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_message_template#billing_postal_code WisdomMessageTemplate#billing_postal_code}

---

##### `BillingProvince`<sup>Optional</sup> <a name="BillingProvince" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.billingProvince"></a>

```csharp
public string BillingProvince { get; set; }
```

- *Type:* string

The province of a customer?s billing address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_message_template#billing_province WisdomMessageTemplate#billing_province}

---

##### `BillingState`<sup>Optional</sup> <a name="BillingState" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.billingState"></a>

```csharp
public string BillingState { get; set; }
```

- *Type:* string

The state of a customer?s billing address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_message_template#billing_state WisdomMessageTemplate#billing_state}

---

##### `BirthDate`<sup>Optional</sup> <a name="BirthDate" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.birthDate"></a>

```csharp
public string BirthDate { get; set; }
```

- *Type:* string

The customer's birth date.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_message_template#birth_date WisdomMessageTemplate#birth_date}

---

##### `BusinessEmailAddress`<sup>Optional</sup> <a name="BusinessEmailAddress" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.businessEmailAddress"></a>

```csharp
public string BusinessEmailAddress { get; set; }
```

- *Type:* string

The customer's business email address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_message_template#business_email_address WisdomMessageTemplate#business_email_address}

---

##### `BusinessName`<sup>Optional</sup> <a name="BusinessName" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.businessName"></a>

```csharp
public string BusinessName { get; set; }
```

- *Type:* string

The name of the customer's business.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_message_template#business_name WisdomMessageTemplate#business_name}

---

##### `BusinessPhoneNumber`<sup>Optional</sup> <a name="BusinessPhoneNumber" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.businessPhoneNumber"></a>

```csharp
public string BusinessPhoneNumber { get; set; }
```

- *Type:* string

The customer's business phone number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_message_template#business_phone_number WisdomMessageTemplate#business_phone_number}

---

##### `City`<sup>Optional</sup> <a name="City" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.city"></a>

```csharp
public string City { get; set; }
```

- *Type:* string

The city in which a customer lives.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_message_template#city WisdomMessageTemplate#city}

---

##### `Country`<sup>Optional</sup> <a name="Country" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.country"></a>

```csharp
public string Country { get; set; }
```

- *Type:* string

The country in which a customer lives.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_message_template#country WisdomMessageTemplate#country}

---

##### `County`<sup>Optional</sup> <a name="County" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.county"></a>

```csharp
public string County { get; set; }
```

- *Type:* string

The county in which a customer lives.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_message_template#county WisdomMessageTemplate#county}

---

##### `Custom`<sup>Optional</sup> <a name="Custom" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.custom"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Custom { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

The custom attributes that are used with the message template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_message_template#custom WisdomMessageTemplate#custom}

---

##### `EmailAddress`<sup>Optional</sup> <a name="EmailAddress" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.emailAddress"></a>

```csharp
public string EmailAddress { get; set; }
```

- *Type:* string

The customer's email address, which has not been specified as a personal or business address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_message_template#email_address WisdomMessageTemplate#email_address}

---

##### `FirstName`<sup>Optional</sup> <a name="FirstName" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.firstName"></a>

```csharp
public string FirstName { get; set; }
```

- *Type:* string

The customer's first name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_message_template#first_name WisdomMessageTemplate#first_name}

---

##### `Gender`<sup>Optional</sup> <a name="Gender" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.gender"></a>

```csharp
public string Gender { get; set; }
```

- *Type:* string

The customer's gender.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_message_template#gender WisdomMessageTemplate#gender}

---

##### `HomePhoneNumber`<sup>Optional</sup> <a name="HomePhoneNumber" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.homePhoneNumber"></a>

```csharp
public string HomePhoneNumber { get; set; }
```

- *Type:* string

The customer's home phone number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_message_template#home_phone_number WisdomMessageTemplate#home_phone_number}

---

##### `LastName`<sup>Optional</sup> <a name="LastName" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.lastName"></a>

```csharp
public string LastName { get; set; }
```

- *Type:* string

The customer's last name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_message_template#last_name WisdomMessageTemplate#last_name}

---

##### `MailingAddress1`<sup>Optional</sup> <a name="MailingAddress1" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.mailingAddress1"></a>

```csharp
public string MailingAddress1 { get; set; }
```

- *Type:* string

The first line of a customer?s mailing address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_message_template#mailing_address_1 WisdomMessageTemplate#mailing_address_1}

---

##### `MailingAddress2`<sup>Optional</sup> <a name="MailingAddress2" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.mailingAddress2"></a>

```csharp
public string MailingAddress2 { get; set; }
```

- *Type:* string

The second line of a customer?s mailing address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_message_template#mailing_address_2 WisdomMessageTemplate#mailing_address_2}

---

##### `MailingAddress3`<sup>Optional</sup> <a name="MailingAddress3" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.mailingAddress3"></a>

```csharp
public string MailingAddress3 { get; set; }
```

- *Type:* string

The third line of a customer?s mailing address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_message_template#mailing_address_3 WisdomMessageTemplate#mailing_address_3}

---

##### `MailingAddress4`<sup>Optional</sup> <a name="MailingAddress4" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.mailingAddress4"></a>

```csharp
public string MailingAddress4 { get; set; }
```

- *Type:* string

The fourth line of a customer?s mailing address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_message_template#mailing_address_4 WisdomMessageTemplate#mailing_address_4}

---

##### `MailingCity`<sup>Optional</sup> <a name="MailingCity" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.mailingCity"></a>

```csharp
public string MailingCity { get; set; }
```

- *Type:* string

The city of a customer?s mailing address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_message_template#mailing_city WisdomMessageTemplate#mailing_city}

---

##### `MailingCountry`<sup>Optional</sup> <a name="MailingCountry" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.mailingCountry"></a>

```csharp
public string MailingCountry { get; set; }
```

- *Type:* string

The country of a customer?s mailing address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_message_template#mailing_country WisdomMessageTemplate#mailing_country}

---

##### `MailingCounty`<sup>Optional</sup> <a name="MailingCounty" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.mailingCounty"></a>

```csharp
public string MailingCounty { get; set; }
```

- *Type:* string

The county of a customer?s mailing address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_message_template#mailing_county WisdomMessageTemplate#mailing_county}

---

##### `MailingPostalCode`<sup>Optional</sup> <a name="MailingPostalCode" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.mailingPostalCode"></a>

```csharp
public string MailingPostalCode { get; set; }
```

- *Type:* string

The postal code of a customer?s mailing address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_message_template#mailing_postal_code WisdomMessageTemplate#mailing_postal_code}

---

##### `MailingProvince`<sup>Optional</sup> <a name="MailingProvince" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.mailingProvince"></a>

```csharp
public string MailingProvince { get; set; }
```

- *Type:* string

The province of a customer?s mailing address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_message_template#mailing_province WisdomMessageTemplate#mailing_province}

---

##### `MailingState`<sup>Optional</sup> <a name="MailingState" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.mailingState"></a>

```csharp
public string MailingState { get; set; }
```

- *Type:* string

The state of a customer?s mailing address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_message_template#mailing_state WisdomMessageTemplate#mailing_state}

---

##### `MiddleName`<sup>Optional</sup> <a name="MiddleName" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.middleName"></a>

```csharp
public string MiddleName { get; set; }
```

- *Type:* string

The customer's middle name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_message_template#middle_name WisdomMessageTemplate#middle_name}

---

##### `MobilePhoneNumber`<sup>Optional</sup> <a name="MobilePhoneNumber" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.mobilePhoneNumber"></a>

```csharp
public string MobilePhoneNumber { get; set; }
```

- *Type:* string

The customer's mobile phone number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_message_template#mobile_phone_number WisdomMessageTemplate#mobile_phone_number}

---

##### `PartyType`<sup>Optional</sup> <a name="PartyType" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.partyType"></a>

```csharp
public string PartyType { get; set; }
```

- *Type:* string

The customer's party type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_message_template#party_type WisdomMessageTemplate#party_type}

---

##### `PhoneNumber`<sup>Optional</sup> <a name="PhoneNumber" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.phoneNumber"></a>

```csharp
public string PhoneNumber { get; set; }
```

- *Type:* string

The customer's phone number, which has not been specified as a mobile, home, or business number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_message_template#phone_number WisdomMessageTemplate#phone_number}

---

##### `PostalCode`<sup>Optional</sup> <a name="PostalCode" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.postalCode"></a>

```csharp
public string PostalCode { get; set; }
```

- *Type:* string

The postal code of a customer address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_message_template#postal_code WisdomMessageTemplate#postal_code}

---

##### `ProfileArn`<sup>Optional</sup> <a name="ProfileArn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.profileArn"></a>

```csharp
public string ProfileArn { get; set; }
```

- *Type:* string

The ARN of a customer profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_message_template#profile_arn WisdomMessageTemplate#profile_arn}

---

##### `ProfileId`<sup>Optional</sup> <a name="ProfileId" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.profileId"></a>

```csharp
public string ProfileId { get; set; }
```

- *Type:* string

The unique identifier of a customer profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_message_template#profile_id WisdomMessageTemplate#profile_id}

---

##### `Province`<sup>Optional</sup> <a name="Province" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.province"></a>

```csharp
public string Province { get; set; }
```

- *Type:* string

The province in which a customer lives.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_message_template#province WisdomMessageTemplate#province}

---

##### `ShippingAddress1`<sup>Optional</sup> <a name="ShippingAddress1" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.shippingAddress1"></a>

```csharp
public string ShippingAddress1 { get; set; }
```

- *Type:* string

The first line of a customer?s shipping address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_message_template#shipping_address_1 WisdomMessageTemplate#shipping_address_1}

---

##### `ShippingAddress2`<sup>Optional</sup> <a name="ShippingAddress2" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.shippingAddress2"></a>

```csharp
public string ShippingAddress2 { get; set; }
```

- *Type:* string

The second line of a customer?s shipping address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_message_template#shipping_address_2 WisdomMessageTemplate#shipping_address_2}

---

##### `ShippingAddress3`<sup>Optional</sup> <a name="ShippingAddress3" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.shippingAddress3"></a>

```csharp
public string ShippingAddress3 { get; set; }
```

- *Type:* string

The third line of a customer?s shipping address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_message_template#shipping_address_3 WisdomMessageTemplate#shipping_address_3}

---

##### `ShippingAddress4`<sup>Optional</sup> <a name="ShippingAddress4" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.shippingAddress4"></a>

```csharp
public string ShippingAddress4 { get; set; }
```

- *Type:* string

The fourth line of a customer?s shipping address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_message_template#shipping_address_4 WisdomMessageTemplate#shipping_address_4}

---

##### `ShippingCity`<sup>Optional</sup> <a name="ShippingCity" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.shippingCity"></a>

```csharp
public string ShippingCity { get; set; }
```

- *Type:* string

The city of a customer?s shipping address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_message_template#shipping_city WisdomMessageTemplate#shipping_city}

---

##### `ShippingCountry`<sup>Optional</sup> <a name="ShippingCountry" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.shippingCountry"></a>

```csharp
public string ShippingCountry { get; set; }
```

- *Type:* string

The country of a customer?s shipping address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_message_template#shipping_country WisdomMessageTemplate#shipping_country}

---

##### `ShippingCounty`<sup>Optional</sup> <a name="ShippingCounty" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.shippingCounty"></a>

```csharp
public string ShippingCounty { get; set; }
```

- *Type:* string

The county of a customer?s shipping address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_message_template#shipping_county WisdomMessageTemplate#shipping_county}

---

##### `ShippingPostalCode`<sup>Optional</sup> <a name="ShippingPostalCode" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.shippingPostalCode"></a>

```csharp
public string ShippingPostalCode { get; set; }
```

- *Type:* string

The postal code of a customer?s shipping address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_message_template#shipping_postal_code WisdomMessageTemplate#shipping_postal_code}

---

##### `ShippingProvince`<sup>Optional</sup> <a name="ShippingProvince" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.shippingProvince"></a>

```csharp
public string ShippingProvince { get; set; }
```

- *Type:* string

The province of a customer?s shipping address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_message_template#shipping_province WisdomMessageTemplate#shipping_province}

---

##### `ShippingState`<sup>Optional</sup> <a name="ShippingState" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.shippingState"></a>

```csharp
public string ShippingState { get; set; }
```

- *Type:* string

The state of a customer?s shipping address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_message_template#shipping_state WisdomMessageTemplate#shipping_state}

---

##### `State`<sup>Optional</sup> <a name="State" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

The state in which a customer lives.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_message_template#state WisdomMessageTemplate#state}

---

### WisdomMessageTemplateDefaultAttributesSystemAttributes <a name="WisdomMessageTemplateDefaultAttributesSystemAttributes" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributes.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WisdomMessageTemplateDefaultAttributesSystemAttributes {
    WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpoint CustomerEndpoint = null,
    string Name = null,
    WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpoint SystemEndpoint = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributes.property.customerEndpoint">CustomerEndpoint</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpoint">WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpoint</a></code> | The CustomerEndpoint attribute. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributes.property.name">Name</a></code> | <code>string</code> | The name of the task. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributes.property.systemEndpoint">SystemEndpoint</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpoint">WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpoint</a></code> | The SystemEndpoint attribute. |

---

##### `CustomerEndpoint`<sup>Optional</sup> <a name="CustomerEndpoint" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributes.property.customerEndpoint"></a>

```csharp
public WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpoint CustomerEndpoint { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpoint">WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpoint</a>

The CustomerEndpoint attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_message_template#customer_endpoint WisdomMessageTemplate#customer_endpoint}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributes.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_message_template#name WisdomMessageTemplate#name}

---

##### `SystemEndpoint`<sup>Optional</sup> <a name="SystemEndpoint" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributes.property.systemEndpoint"></a>

```csharp
public WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpoint SystemEndpoint { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpoint">WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpoint</a>

The SystemEndpoint attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_message_template#system_endpoint WisdomMessageTemplate#system_endpoint}

---

### WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpoint <a name="WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpoint" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpoint.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpoint {
    string Address = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpoint.property.address">Address</a></code> | <code>string</code> | The customer's phone number if used with customerEndpoint, or the number the customer dialed to call your contact center if used with systemEndpoint. |

---

##### `Address`<sup>Optional</sup> <a name="Address" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpoint.property.address"></a>

```csharp
public string Address { get; set; }
```

- *Type:* string

The customer's phone number if used with customerEndpoint, or the number the customer dialed to call your contact center if used with systemEndpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_message_template#address WisdomMessageTemplate#address}

---

### WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpoint <a name="WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpoint" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpoint.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpoint {
    string Address = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpoint.property.address">Address</a></code> | <code>string</code> | The customer's phone number if used with customerEndpoint, or the number the customer dialed to call your contact center if used with systemEndpoint. |

---

##### `Address`<sup>Optional</sup> <a name="Address" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpoint.property.address"></a>

```csharp
public string Address { get; set; }
```

- *Type:* string

The customer's phone number if used with customerEndpoint, or the number the customer dialed to call your contact center if used with systemEndpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_message_template#address WisdomMessageTemplate#address}

---

### WisdomMessageTemplateGroupingConfiguration <a name="WisdomMessageTemplateGroupingConfiguration" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WisdomMessageTemplateGroupingConfiguration {
    string Criteria = null,
    string[] Values = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfiguration.property.criteria">Criteria</a></code> | <code>string</code> | The criteria used for grouping Amazon Q in Connect users. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfiguration.property.values">Values</a></code> | <code>string[]</code> | The list of values that define different groups of Amazon Q in Connect users. |

---

##### `Criteria`<sup>Optional</sup> <a name="Criteria" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfiguration.property.criteria"></a>

```csharp
public string Criteria { get; set; }
```

- *Type:* string

The criteria used for grouping Amazon Q in Connect users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_message_template#criteria WisdomMessageTemplate#criteria}

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfiguration.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

The list of values that define different groups of Amazon Q in Connect users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_message_template#values WisdomMessageTemplate#values}

---

### WisdomMessageTemplateMessageTemplateAttachments <a name="WisdomMessageTemplateMessageTemplateAttachments" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachments"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachments.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WisdomMessageTemplateMessageTemplateAttachments {
    string AttachmentId = null,
    string AttachmentName = null,
    string S3PresignedUrl = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachments.property.attachmentId">AttachmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_message_template#attachment_id WisdomMessageTemplate#attachment_id}. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachments.property.attachmentName">AttachmentName</a></code> | <code>string</code> | The name of the attachment file being uploaded. The name should include the file extension. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachments.property.s3PresignedUrl">S3PresignedUrl</a></code> | <code>string</code> | The S3 Presigned URL for the attachment file. |

---

##### `AttachmentId`<sup>Optional</sup> <a name="AttachmentId" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachments.property.attachmentId"></a>

```csharp
public string AttachmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_message_template#attachment_id WisdomMessageTemplate#attachment_id}.

---

##### `AttachmentName`<sup>Optional</sup> <a name="AttachmentName" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachments.property.attachmentName"></a>

```csharp
public string AttachmentName { get; set; }
```

- *Type:* string

The name of the attachment file being uploaded. The name should include the file extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_message_template#attachment_name WisdomMessageTemplate#attachment_name}

---

##### `S3PresignedUrl`<sup>Optional</sup> <a name="S3PresignedUrl" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachments.property.s3PresignedUrl"></a>

```csharp
public string S3PresignedUrl { get; set; }
```

- *Type:* string

The S3 Presigned URL for the attachment file.

When generating the PreSignedUrl, please ensure that the expires-in time is set to 30 minutes. The URL can be generated through the AWS Console or through the AWS CLI (https://docs.aws.amazon.com/AmazonS3/latest/userguide/ShareObjectPreSignedURL.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_message_template#s3_presigned_url WisdomMessageTemplate#s3_presigned_url}

---

### WisdomMessageTemplateTags <a name="WisdomMessageTemplateTags" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WisdomMessageTemplateTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_message_template#key WisdomMessageTemplate#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_message_template#value WisdomMessageTemplate#value}

---

## Classes <a name="Classes" id="Classes"></a>

### WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference <a name="WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.resetContent">ResetContent</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContent` <a name="ResetContent" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.resetContent"></a>

```csharp
private void ResetContent()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.property.contentInput">ContentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.property.content">Content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtml">WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtml</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.property.contentInput"></a>

```csharp
public string ContentInput { get; }
```

- *Type:* string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.property.content"></a>

```csharp
public string Content { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtml InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtml">WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtml</a>

---


### WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference <a name="WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.putHtml">PutHtml</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.putPlainText">PutPlainText</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.resetHtml">ResetHtml</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.resetPlainText">ResetPlainText</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHtml` <a name="PutHtml" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.putHtml"></a>

```csharp
private void PutHtml(WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtml Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.putHtml.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtml">WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtml</a>

---

##### `PutPlainText` <a name="PutPlainText" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.putPlainText"></a>

```csharp
private void PutPlainText(WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainText Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.putPlainText.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainText">WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainText</a>

---

##### `ResetHtml` <a name="ResetHtml" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.resetHtml"></a>

```csharp
private void ResetHtml()
```

##### `ResetPlainText` <a name="ResetPlainText" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.resetPlainText"></a>

```csharp
private void ResetPlainText()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.property.html">Html</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference">WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.property.plainText">PlainText</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference">WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.property.htmlInput">HtmlInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtml">WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtml</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.property.plainTextInput">PlainTextInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainText">WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainText</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBody">WisdomMessageTemplateContentEmailMessageTemplateContentBody</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Html`<sup>Required</sup> <a name="Html" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.property.html"></a>

```csharp
public WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference Html { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference">WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference</a>

---

##### `PlainText`<sup>Required</sup> <a name="PlainText" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.property.plainText"></a>

```csharp
public WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference PlainText { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference">WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference</a>

---

##### `HtmlInput`<sup>Optional</sup> <a name="HtmlInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.property.htmlInput"></a>

```csharp
public IResolvable|WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtml HtmlInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtml">WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtml</a>

---

##### `PlainTextInput`<sup>Optional</sup> <a name="PlainTextInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.property.plainTextInput"></a>

```csharp
public IResolvable|WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainText PlainTextInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainText">WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainText</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WisdomMessageTemplateContentEmailMessageTemplateContentBody InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBody">WisdomMessageTemplateContentEmailMessageTemplateContentBody</a>

---


### WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference <a name="WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.resetContent">ResetContent</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContent` <a name="ResetContent" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.resetContent"></a>

```csharp
private void ResetContent()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.property.contentInput">ContentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.property.content">Content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainText">WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainText</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.property.contentInput"></a>

```csharp
public string ContentInput { get; }
```

- *Type:* string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.property.content"></a>

```csharp
public string Content { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainText InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainText">WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainText</a>

---


### WisdomMessageTemplateContentEmailMessageTemplateContentHeadersList <a name="WisdomMessageTemplateContentEmailMessageTemplateContentHeadersList" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WisdomMessageTemplateContentEmailMessageTemplateContentHeadersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersList.get"></a>

```csharp
private WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeaders">WisdomMessageTemplateContentEmailMessageTemplateContentHeaders</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersList.property.internalValue"></a>

```csharp
public IResolvable|WisdomMessageTemplateContentEmailMessageTemplateContentHeaders[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeaders">WisdomMessageTemplateContentEmailMessageTemplateContentHeaders</a>[]

---


### WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference <a name="WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeaders">WisdomMessageTemplateContentEmailMessageTemplateContentHeaders</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WisdomMessageTemplateContentEmailMessageTemplateContentHeaders InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeaders">WisdomMessageTemplateContentEmailMessageTemplateContentHeaders</a>

---


### WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference <a name="WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.putBody">PutBody</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.putHeaders">PutHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.resetBody">ResetBody</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.resetHeaders">ResetHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.resetSubject">ResetSubject</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBody` <a name="PutBody" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.putBody"></a>

```csharp
private void PutBody(WisdomMessageTemplateContentEmailMessageTemplateContentBody Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.putBody.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBody">WisdomMessageTemplateContentEmailMessageTemplateContentBody</a>

---

##### `PutHeaders` <a name="PutHeaders" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.putHeaders"></a>

```csharp
private void PutHeaders(IResolvable|WisdomMessageTemplateContentEmailMessageTemplateContentHeaders[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.putHeaders.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeaders">WisdomMessageTemplateContentEmailMessageTemplateContentHeaders</a>[]

---

##### `ResetBody` <a name="ResetBody" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.resetBody"></a>

```csharp
private void ResetBody()
```

##### `ResetHeaders` <a name="ResetHeaders" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.resetHeaders"></a>

```csharp
private void ResetHeaders()
```

##### `ResetSubject` <a name="ResetSubject" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.resetSubject"></a>

```csharp
private void ResetSubject()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.property.body">Body</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference">WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.property.headers">Headers</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersList">WisdomMessageTemplateContentEmailMessageTemplateContentHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.property.bodyInput">BodyInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBody">WisdomMessageTemplateContentEmailMessageTemplateContentBody</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.property.headersInput">HeadersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeaders">WisdomMessageTemplateContentEmailMessageTemplateContentHeaders</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.property.subjectInput">SubjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.property.subject">Subject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContent">WisdomMessageTemplateContentEmailMessageTemplateContent</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Body`<sup>Required</sup> <a name="Body" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.property.body"></a>

```csharp
public WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference Body { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference">WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference</a>

---

##### `Headers`<sup>Required</sup> <a name="Headers" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.property.headers"></a>

```csharp
public WisdomMessageTemplateContentEmailMessageTemplateContentHeadersList Headers { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersList">WisdomMessageTemplateContentEmailMessageTemplateContentHeadersList</a>

---

##### `BodyInput`<sup>Optional</sup> <a name="BodyInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.property.bodyInput"></a>

```csharp
public IResolvable|WisdomMessageTemplateContentEmailMessageTemplateContentBody BodyInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBody">WisdomMessageTemplateContentEmailMessageTemplateContentBody</a>

---

##### `HeadersInput`<sup>Optional</sup> <a name="HeadersInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.property.headersInput"></a>

```csharp
public IResolvable|WisdomMessageTemplateContentEmailMessageTemplateContentHeaders[] HeadersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeaders">WisdomMessageTemplateContentEmailMessageTemplateContentHeaders</a>[]

---

##### `SubjectInput`<sup>Optional</sup> <a name="SubjectInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.property.subjectInput"></a>

```csharp
public string SubjectInput { get; }
```

- *Type:* string

---

##### `Subject`<sup>Required</sup> <a name="Subject" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.property.subject"></a>

```csharp
public string Subject { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WisdomMessageTemplateContentEmailMessageTemplateContent InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContent">WisdomMessageTemplateContentEmailMessageTemplateContent</a>

---


### WisdomMessageTemplateContentOutputReference <a name="WisdomMessageTemplateContentOutputReference" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WisdomMessageTemplateContentOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.putEmailMessageTemplateContent">PutEmailMessageTemplateContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.putSmsMessageTemplateContent">PutSmsMessageTemplateContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.resetEmailMessageTemplateContent">ResetEmailMessageTemplateContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.resetSmsMessageTemplateContent">ResetSmsMessageTemplateContent</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEmailMessageTemplateContent` <a name="PutEmailMessageTemplateContent" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.putEmailMessageTemplateContent"></a>

```csharp
private void PutEmailMessageTemplateContent(WisdomMessageTemplateContentEmailMessageTemplateContent Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.putEmailMessageTemplateContent.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContent">WisdomMessageTemplateContentEmailMessageTemplateContent</a>

---

##### `PutSmsMessageTemplateContent` <a name="PutSmsMessageTemplateContent" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.putSmsMessageTemplateContent"></a>

```csharp
private void PutSmsMessageTemplateContent(WisdomMessageTemplateContentSmsMessageTemplateContent Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.putSmsMessageTemplateContent.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContent">WisdomMessageTemplateContentSmsMessageTemplateContent</a>

---

##### `ResetEmailMessageTemplateContent` <a name="ResetEmailMessageTemplateContent" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.resetEmailMessageTemplateContent"></a>

```csharp
private void ResetEmailMessageTemplateContent()
```

##### `ResetSmsMessageTemplateContent` <a name="ResetSmsMessageTemplateContent" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.resetSmsMessageTemplateContent"></a>

```csharp
private void ResetSmsMessageTemplateContent()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.property.emailMessageTemplateContent">EmailMessageTemplateContent</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference">WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.property.smsMessageTemplateContent">SmsMessageTemplateContent</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference">WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.property.emailMessageTemplateContentInput">EmailMessageTemplateContentInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContent">WisdomMessageTemplateContentEmailMessageTemplateContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.property.smsMessageTemplateContentInput">SmsMessageTemplateContentInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContent">WisdomMessageTemplateContentSmsMessageTemplateContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContent">WisdomMessageTemplateContent</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EmailMessageTemplateContent`<sup>Required</sup> <a name="EmailMessageTemplateContent" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.property.emailMessageTemplateContent"></a>

```csharp
public WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference EmailMessageTemplateContent { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference">WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference</a>

---

##### `SmsMessageTemplateContent`<sup>Required</sup> <a name="SmsMessageTemplateContent" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.property.smsMessageTemplateContent"></a>

```csharp
public WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference SmsMessageTemplateContent { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference">WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference</a>

---

##### `EmailMessageTemplateContentInput`<sup>Optional</sup> <a name="EmailMessageTemplateContentInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.property.emailMessageTemplateContentInput"></a>

```csharp
public IResolvable|WisdomMessageTemplateContentEmailMessageTemplateContent EmailMessageTemplateContentInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContent">WisdomMessageTemplateContentEmailMessageTemplateContent</a>

---

##### `SmsMessageTemplateContentInput`<sup>Optional</sup> <a name="SmsMessageTemplateContentInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.property.smsMessageTemplateContentInput"></a>

```csharp
public IResolvable|WisdomMessageTemplateContentSmsMessageTemplateContent SmsMessageTemplateContentInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContent">WisdomMessageTemplateContentSmsMessageTemplateContent</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WisdomMessageTemplateContent InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContent">WisdomMessageTemplateContent</a>

---


### WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference <a name="WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.putPlainText">PutPlainText</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.resetPlainText">ResetPlainText</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPlainText` <a name="PutPlainText" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.putPlainText"></a>

```csharp
private void PutPlainText(WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainText Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.putPlainText.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainText">WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainText</a>

---

##### `ResetPlainText` <a name="ResetPlainText" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.resetPlainText"></a>

```csharp
private void ResetPlainText()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.property.plainText">PlainText</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference">WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.property.plainTextInput">PlainTextInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainText">WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainText</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBody">WisdomMessageTemplateContentSmsMessageTemplateContentBody</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PlainText`<sup>Required</sup> <a name="PlainText" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.property.plainText"></a>

```csharp
public WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference PlainText { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference">WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference</a>

---

##### `PlainTextInput`<sup>Optional</sup> <a name="PlainTextInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.property.plainTextInput"></a>

```csharp
public IResolvable|WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainText PlainTextInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainText">WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainText</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WisdomMessageTemplateContentSmsMessageTemplateContentBody InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBody">WisdomMessageTemplateContentSmsMessageTemplateContentBody</a>

---


### WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference <a name="WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.resetContent">ResetContent</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContent` <a name="ResetContent" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.resetContent"></a>

```csharp
private void ResetContent()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.property.contentInput">ContentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.property.content">Content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainText">WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainText</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.property.contentInput"></a>

```csharp
public string ContentInput { get; }
```

- *Type:* string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.property.content"></a>

```csharp
public string Content { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainText InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainText">WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainText</a>

---


### WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference <a name="WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.putBody">PutBody</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.resetBody">ResetBody</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBody` <a name="PutBody" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.putBody"></a>

```csharp
private void PutBody(WisdomMessageTemplateContentSmsMessageTemplateContentBody Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.putBody.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBody">WisdomMessageTemplateContentSmsMessageTemplateContentBody</a>

---

##### `ResetBody` <a name="ResetBody" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.resetBody"></a>

```csharp
private void ResetBody()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.property.body">Body</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference">WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.property.bodyInput">BodyInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBody">WisdomMessageTemplateContentSmsMessageTemplateContentBody</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContent">WisdomMessageTemplateContentSmsMessageTemplateContent</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Body`<sup>Required</sup> <a name="Body" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.property.body"></a>

```csharp
public WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference Body { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference">WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference</a>

---

##### `BodyInput`<sup>Optional</sup> <a name="BodyInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.property.bodyInput"></a>

```csharp
public IResolvable|WisdomMessageTemplateContentSmsMessageTemplateContentBody BodyInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBody">WisdomMessageTemplateContentSmsMessageTemplateContentBody</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WisdomMessageTemplateContentSmsMessageTemplateContent InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContent">WisdomMessageTemplateContentSmsMessageTemplateContent</a>

---


### WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference <a name="WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.resetFirstName">ResetFirstName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.resetLastName">ResetLastName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFirstName` <a name="ResetFirstName" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.resetFirstName"></a>

```csharp
private void ResetFirstName()
```

##### `ResetLastName` <a name="ResetLastName" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.resetLastName"></a>

```csharp
private void ResetLastName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.property.firstNameInput">FirstNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.property.lastNameInput">LastNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.property.firstName">FirstName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.property.lastName">LastName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributes">WisdomMessageTemplateDefaultAttributesAgentAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FirstNameInput`<sup>Optional</sup> <a name="FirstNameInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.property.firstNameInput"></a>

```csharp
public string FirstNameInput { get; }
```

- *Type:* string

---

##### `LastNameInput`<sup>Optional</sup> <a name="LastNameInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.property.lastNameInput"></a>

```csharp
public string LastNameInput { get; }
```

- *Type:* string

---

##### `FirstName`<sup>Required</sup> <a name="FirstName" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.property.firstName"></a>

```csharp
public string FirstName { get; }
```

- *Type:* string

---

##### `LastName`<sup>Required</sup> <a name="LastName" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.property.lastName"></a>

```csharp
public string LastName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WisdomMessageTemplateDefaultAttributesAgentAttributes InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributes">WisdomMessageTemplateDefaultAttributesAgentAttributes</a>

---


### WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference <a name="WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetAccountNumber">ResetAccountNumber</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetAdditionalInformation">ResetAdditionalInformation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetAddress1">ResetAddress1</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetAddress2">ResetAddress2</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetAddress3">ResetAddress3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetAddress4">ResetAddress4</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetBillingAddress1">ResetBillingAddress1</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetBillingAddress2">ResetBillingAddress2</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetBillingAddress3">ResetBillingAddress3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetBillingAddress4">ResetBillingAddress4</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetBillingCity">ResetBillingCity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetBillingCountry">ResetBillingCountry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetBillingCounty">ResetBillingCounty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetBillingPostalCode">ResetBillingPostalCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetBillingProvince">ResetBillingProvince</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetBillingState">ResetBillingState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetBirthDate">ResetBirthDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetBusinessEmailAddress">ResetBusinessEmailAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetBusinessName">ResetBusinessName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetBusinessPhoneNumber">ResetBusinessPhoneNumber</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetCity">ResetCity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetCountry">ResetCountry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetCounty">ResetCounty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetCustom">ResetCustom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetEmailAddress">ResetEmailAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetFirstName">ResetFirstName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetGender">ResetGender</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetHomePhoneNumber">ResetHomePhoneNumber</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetLastName">ResetLastName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetMailingAddress1">ResetMailingAddress1</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetMailingAddress2">ResetMailingAddress2</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetMailingAddress3">ResetMailingAddress3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetMailingAddress4">ResetMailingAddress4</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetMailingCity">ResetMailingCity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetMailingCountry">ResetMailingCountry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetMailingCounty">ResetMailingCounty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetMailingPostalCode">ResetMailingPostalCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetMailingProvince">ResetMailingProvince</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetMailingState">ResetMailingState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetMiddleName">ResetMiddleName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetMobilePhoneNumber">ResetMobilePhoneNumber</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetPartyType">ResetPartyType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetPhoneNumber">ResetPhoneNumber</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetPostalCode">ResetPostalCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetProfileArn">ResetProfileArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetProfileId">ResetProfileId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetProvince">ResetProvince</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetShippingAddress1">ResetShippingAddress1</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetShippingAddress2">ResetShippingAddress2</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetShippingAddress3">ResetShippingAddress3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetShippingAddress4">ResetShippingAddress4</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetShippingCity">ResetShippingCity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetShippingCountry">ResetShippingCountry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetShippingCounty">ResetShippingCounty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetShippingPostalCode">ResetShippingPostalCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetShippingProvince">ResetShippingProvince</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetShippingState">ResetShippingState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetState">ResetState</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccountNumber` <a name="ResetAccountNumber" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetAccountNumber"></a>

```csharp
private void ResetAccountNumber()
```

##### `ResetAdditionalInformation` <a name="ResetAdditionalInformation" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetAdditionalInformation"></a>

```csharp
private void ResetAdditionalInformation()
```

##### `ResetAddress1` <a name="ResetAddress1" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetAddress1"></a>

```csharp
private void ResetAddress1()
```

##### `ResetAddress2` <a name="ResetAddress2" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetAddress2"></a>

```csharp
private void ResetAddress2()
```

##### `ResetAddress3` <a name="ResetAddress3" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetAddress3"></a>

```csharp
private void ResetAddress3()
```

##### `ResetAddress4` <a name="ResetAddress4" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetAddress4"></a>

```csharp
private void ResetAddress4()
```

##### `ResetBillingAddress1` <a name="ResetBillingAddress1" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetBillingAddress1"></a>

```csharp
private void ResetBillingAddress1()
```

##### `ResetBillingAddress2` <a name="ResetBillingAddress2" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetBillingAddress2"></a>

```csharp
private void ResetBillingAddress2()
```

##### `ResetBillingAddress3` <a name="ResetBillingAddress3" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetBillingAddress3"></a>

```csharp
private void ResetBillingAddress3()
```

##### `ResetBillingAddress4` <a name="ResetBillingAddress4" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetBillingAddress4"></a>

```csharp
private void ResetBillingAddress4()
```

##### `ResetBillingCity` <a name="ResetBillingCity" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetBillingCity"></a>

```csharp
private void ResetBillingCity()
```

##### `ResetBillingCountry` <a name="ResetBillingCountry" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetBillingCountry"></a>

```csharp
private void ResetBillingCountry()
```

##### `ResetBillingCounty` <a name="ResetBillingCounty" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetBillingCounty"></a>

```csharp
private void ResetBillingCounty()
```

##### `ResetBillingPostalCode` <a name="ResetBillingPostalCode" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetBillingPostalCode"></a>

```csharp
private void ResetBillingPostalCode()
```

##### `ResetBillingProvince` <a name="ResetBillingProvince" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetBillingProvince"></a>

```csharp
private void ResetBillingProvince()
```

##### `ResetBillingState` <a name="ResetBillingState" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetBillingState"></a>

```csharp
private void ResetBillingState()
```

##### `ResetBirthDate` <a name="ResetBirthDate" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetBirthDate"></a>

```csharp
private void ResetBirthDate()
```

##### `ResetBusinessEmailAddress` <a name="ResetBusinessEmailAddress" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetBusinessEmailAddress"></a>

```csharp
private void ResetBusinessEmailAddress()
```

##### `ResetBusinessName` <a name="ResetBusinessName" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetBusinessName"></a>

```csharp
private void ResetBusinessName()
```

##### `ResetBusinessPhoneNumber` <a name="ResetBusinessPhoneNumber" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetBusinessPhoneNumber"></a>

```csharp
private void ResetBusinessPhoneNumber()
```

##### `ResetCity` <a name="ResetCity" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetCity"></a>

```csharp
private void ResetCity()
```

##### `ResetCountry` <a name="ResetCountry" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetCountry"></a>

```csharp
private void ResetCountry()
```

##### `ResetCounty` <a name="ResetCounty" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetCounty"></a>

```csharp
private void ResetCounty()
```

##### `ResetCustom` <a name="ResetCustom" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetCustom"></a>

```csharp
private void ResetCustom()
```

##### `ResetEmailAddress` <a name="ResetEmailAddress" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetEmailAddress"></a>

```csharp
private void ResetEmailAddress()
```

##### `ResetFirstName` <a name="ResetFirstName" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetFirstName"></a>

```csharp
private void ResetFirstName()
```

##### `ResetGender` <a name="ResetGender" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetGender"></a>

```csharp
private void ResetGender()
```

##### `ResetHomePhoneNumber` <a name="ResetHomePhoneNumber" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetHomePhoneNumber"></a>

```csharp
private void ResetHomePhoneNumber()
```

##### `ResetLastName` <a name="ResetLastName" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetLastName"></a>

```csharp
private void ResetLastName()
```

##### `ResetMailingAddress1` <a name="ResetMailingAddress1" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetMailingAddress1"></a>

```csharp
private void ResetMailingAddress1()
```

##### `ResetMailingAddress2` <a name="ResetMailingAddress2" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetMailingAddress2"></a>

```csharp
private void ResetMailingAddress2()
```

##### `ResetMailingAddress3` <a name="ResetMailingAddress3" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetMailingAddress3"></a>

```csharp
private void ResetMailingAddress3()
```

##### `ResetMailingAddress4` <a name="ResetMailingAddress4" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetMailingAddress4"></a>

```csharp
private void ResetMailingAddress4()
```

##### `ResetMailingCity` <a name="ResetMailingCity" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetMailingCity"></a>

```csharp
private void ResetMailingCity()
```

##### `ResetMailingCountry` <a name="ResetMailingCountry" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetMailingCountry"></a>

```csharp
private void ResetMailingCountry()
```

##### `ResetMailingCounty` <a name="ResetMailingCounty" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetMailingCounty"></a>

```csharp
private void ResetMailingCounty()
```

##### `ResetMailingPostalCode` <a name="ResetMailingPostalCode" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetMailingPostalCode"></a>

```csharp
private void ResetMailingPostalCode()
```

##### `ResetMailingProvince` <a name="ResetMailingProvince" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetMailingProvince"></a>

```csharp
private void ResetMailingProvince()
```

##### `ResetMailingState` <a name="ResetMailingState" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetMailingState"></a>

```csharp
private void ResetMailingState()
```

##### `ResetMiddleName` <a name="ResetMiddleName" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetMiddleName"></a>

```csharp
private void ResetMiddleName()
```

##### `ResetMobilePhoneNumber` <a name="ResetMobilePhoneNumber" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetMobilePhoneNumber"></a>

```csharp
private void ResetMobilePhoneNumber()
```

##### `ResetPartyType` <a name="ResetPartyType" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetPartyType"></a>

```csharp
private void ResetPartyType()
```

##### `ResetPhoneNumber` <a name="ResetPhoneNumber" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetPhoneNumber"></a>

```csharp
private void ResetPhoneNumber()
```

##### `ResetPostalCode` <a name="ResetPostalCode" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetPostalCode"></a>

```csharp
private void ResetPostalCode()
```

##### `ResetProfileArn` <a name="ResetProfileArn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetProfileArn"></a>

```csharp
private void ResetProfileArn()
```

##### `ResetProfileId` <a name="ResetProfileId" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetProfileId"></a>

```csharp
private void ResetProfileId()
```

##### `ResetProvince` <a name="ResetProvince" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetProvince"></a>

```csharp
private void ResetProvince()
```

##### `ResetShippingAddress1` <a name="ResetShippingAddress1" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetShippingAddress1"></a>

```csharp
private void ResetShippingAddress1()
```

##### `ResetShippingAddress2` <a name="ResetShippingAddress2" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetShippingAddress2"></a>

```csharp
private void ResetShippingAddress2()
```

##### `ResetShippingAddress3` <a name="ResetShippingAddress3" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetShippingAddress3"></a>

```csharp
private void ResetShippingAddress3()
```

##### `ResetShippingAddress4` <a name="ResetShippingAddress4" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetShippingAddress4"></a>

```csharp
private void ResetShippingAddress4()
```

##### `ResetShippingCity` <a name="ResetShippingCity" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetShippingCity"></a>

```csharp
private void ResetShippingCity()
```

##### `ResetShippingCountry` <a name="ResetShippingCountry" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetShippingCountry"></a>

```csharp
private void ResetShippingCountry()
```

##### `ResetShippingCounty` <a name="ResetShippingCounty" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetShippingCounty"></a>

```csharp
private void ResetShippingCounty()
```

##### `ResetShippingPostalCode` <a name="ResetShippingPostalCode" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetShippingPostalCode"></a>

```csharp
private void ResetShippingPostalCode()
```

##### `ResetShippingProvince` <a name="ResetShippingProvince" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetShippingProvince"></a>

```csharp
private void ResetShippingProvince()
```

##### `ResetShippingState` <a name="ResetShippingState" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetShippingState"></a>

```csharp
private void ResetShippingState()
```

##### `ResetState` <a name="ResetState" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetState"></a>

```csharp
private void ResetState()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.accountNumberInput">AccountNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.additionalInformationInput">AdditionalInformationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.address1Input">Address1Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.address2Input">Address2Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.address3Input">Address3Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.address4Input">Address4Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingAddress1Input">BillingAddress1Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingAddress2Input">BillingAddress2Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingAddress3Input">BillingAddress3Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingAddress4Input">BillingAddress4Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingCityInput">BillingCityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingCountryInput">BillingCountryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingCountyInput">BillingCountyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingPostalCodeInput">BillingPostalCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingProvinceInput">BillingProvinceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingStateInput">BillingStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.birthDateInput">BirthDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.businessEmailAddressInput">BusinessEmailAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.businessNameInput">BusinessNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.businessPhoneNumberInput">BusinessPhoneNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.cityInput">CityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.countryInput">CountryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.countyInput">CountyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.customInput">CustomInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.emailAddressInput">EmailAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.firstNameInput">FirstNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.genderInput">GenderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.homePhoneNumberInput">HomePhoneNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.lastNameInput">LastNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingAddress1Input">MailingAddress1Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingAddress2Input">MailingAddress2Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingAddress3Input">MailingAddress3Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingAddress4Input">MailingAddress4Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingCityInput">MailingCityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingCountryInput">MailingCountryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingCountyInput">MailingCountyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingPostalCodeInput">MailingPostalCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingProvinceInput">MailingProvinceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingStateInput">MailingStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.middleNameInput">MiddleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mobilePhoneNumberInput">MobilePhoneNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.partyTypeInput">PartyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.phoneNumberInput">PhoneNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.postalCodeInput">PostalCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.profileArnInput">ProfileArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.profileIdInput">ProfileIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.provinceInput">ProvinceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingAddress1Input">ShippingAddress1Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingAddress2Input">ShippingAddress2Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingAddress3Input">ShippingAddress3Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingAddress4Input">ShippingAddress4Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingCityInput">ShippingCityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingCountryInput">ShippingCountryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingCountyInput">ShippingCountyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingPostalCodeInput">ShippingPostalCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingProvinceInput">ShippingProvinceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingStateInput">ShippingStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.accountNumber">AccountNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.additionalInformation">AdditionalInformation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.address1">Address1</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.address2">Address2</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.address3">Address3</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.address4">Address4</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingAddress1">BillingAddress1</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingAddress2">BillingAddress2</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingAddress3">BillingAddress3</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingAddress4">BillingAddress4</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingCity">BillingCity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingCountry">BillingCountry</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingCounty">BillingCounty</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingPostalCode">BillingPostalCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingProvince">BillingProvince</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingState">BillingState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.birthDate">BirthDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.businessEmailAddress">BusinessEmailAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.businessName">BusinessName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.businessPhoneNumber">BusinessPhoneNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.city">City</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.country">Country</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.county">County</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.custom">Custom</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.emailAddress">EmailAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.firstName">FirstName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.gender">Gender</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.homePhoneNumber">HomePhoneNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.lastName">LastName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingAddress1">MailingAddress1</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingAddress2">MailingAddress2</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingAddress3">MailingAddress3</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingAddress4">MailingAddress4</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingCity">MailingCity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingCountry">MailingCountry</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingCounty">MailingCounty</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingPostalCode">MailingPostalCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingProvince">MailingProvince</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingState">MailingState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.middleName">MiddleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mobilePhoneNumber">MobilePhoneNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.partyType">PartyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.phoneNumber">PhoneNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.postalCode">PostalCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.profileArn">ProfileArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.profileId">ProfileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.province">Province</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingAddress1">ShippingAddress1</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingAddress2">ShippingAddress2</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingAddress3">ShippingAddress3</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingAddress4">ShippingAddress4</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingCity">ShippingCity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingCountry">ShippingCountry</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingCounty">ShippingCounty</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingPostalCode">ShippingPostalCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingProvince">ShippingProvince</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingState">ShippingState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes">WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccountNumberInput`<sup>Optional</sup> <a name="AccountNumberInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.accountNumberInput"></a>

```csharp
public string AccountNumberInput { get; }
```

- *Type:* string

---

##### `AdditionalInformationInput`<sup>Optional</sup> <a name="AdditionalInformationInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.additionalInformationInput"></a>

```csharp
public string AdditionalInformationInput { get; }
```

- *Type:* string

---

##### `Address1Input`<sup>Optional</sup> <a name="Address1Input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.address1Input"></a>

```csharp
public string Address1Input { get; }
```

- *Type:* string

---

##### `Address2Input`<sup>Optional</sup> <a name="Address2Input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.address2Input"></a>

```csharp
public string Address2Input { get; }
```

- *Type:* string

---

##### `Address3Input`<sup>Optional</sup> <a name="Address3Input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.address3Input"></a>

```csharp
public string Address3Input { get; }
```

- *Type:* string

---

##### `Address4Input`<sup>Optional</sup> <a name="Address4Input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.address4Input"></a>

```csharp
public string Address4Input { get; }
```

- *Type:* string

---

##### `BillingAddress1Input`<sup>Optional</sup> <a name="BillingAddress1Input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingAddress1Input"></a>

```csharp
public string BillingAddress1Input { get; }
```

- *Type:* string

---

##### `BillingAddress2Input`<sup>Optional</sup> <a name="BillingAddress2Input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingAddress2Input"></a>

```csharp
public string BillingAddress2Input { get; }
```

- *Type:* string

---

##### `BillingAddress3Input`<sup>Optional</sup> <a name="BillingAddress3Input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingAddress3Input"></a>

```csharp
public string BillingAddress3Input { get; }
```

- *Type:* string

---

##### `BillingAddress4Input`<sup>Optional</sup> <a name="BillingAddress4Input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingAddress4Input"></a>

```csharp
public string BillingAddress4Input { get; }
```

- *Type:* string

---

##### `BillingCityInput`<sup>Optional</sup> <a name="BillingCityInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingCityInput"></a>

```csharp
public string BillingCityInput { get; }
```

- *Type:* string

---

##### `BillingCountryInput`<sup>Optional</sup> <a name="BillingCountryInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingCountryInput"></a>

```csharp
public string BillingCountryInput { get; }
```

- *Type:* string

---

##### `BillingCountyInput`<sup>Optional</sup> <a name="BillingCountyInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingCountyInput"></a>

```csharp
public string BillingCountyInput { get; }
```

- *Type:* string

---

##### `BillingPostalCodeInput`<sup>Optional</sup> <a name="BillingPostalCodeInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingPostalCodeInput"></a>

```csharp
public string BillingPostalCodeInput { get; }
```

- *Type:* string

---

##### `BillingProvinceInput`<sup>Optional</sup> <a name="BillingProvinceInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingProvinceInput"></a>

```csharp
public string BillingProvinceInput { get; }
```

- *Type:* string

---

##### `BillingStateInput`<sup>Optional</sup> <a name="BillingStateInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingStateInput"></a>

```csharp
public string BillingStateInput { get; }
```

- *Type:* string

---

##### `BirthDateInput`<sup>Optional</sup> <a name="BirthDateInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.birthDateInput"></a>

```csharp
public string BirthDateInput { get; }
```

- *Type:* string

---

##### `BusinessEmailAddressInput`<sup>Optional</sup> <a name="BusinessEmailAddressInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.businessEmailAddressInput"></a>

```csharp
public string BusinessEmailAddressInput { get; }
```

- *Type:* string

---

##### `BusinessNameInput`<sup>Optional</sup> <a name="BusinessNameInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.businessNameInput"></a>

```csharp
public string BusinessNameInput { get; }
```

- *Type:* string

---

##### `BusinessPhoneNumberInput`<sup>Optional</sup> <a name="BusinessPhoneNumberInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.businessPhoneNumberInput"></a>

```csharp
public string BusinessPhoneNumberInput { get; }
```

- *Type:* string

---

##### `CityInput`<sup>Optional</sup> <a name="CityInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.cityInput"></a>

```csharp
public string CityInput { get; }
```

- *Type:* string

---

##### `CountryInput`<sup>Optional</sup> <a name="CountryInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.countryInput"></a>

```csharp
public string CountryInput { get; }
```

- *Type:* string

---

##### `CountyInput`<sup>Optional</sup> <a name="CountyInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.countyInput"></a>

```csharp
public string CountyInput { get; }
```

- *Type:* string

---

##### `CustomInput`<sup>Optional</sup> <a name="CustomInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.customInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> CustomInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `EmailAddressInput`<sup>Optional</sup> <a name="EmailAddressInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.emailAddressInput"></a>

```csharp
public string EmailAddressInput { get; }
```

- *Type:* string

---

##### `FirstNameInput`<sup>Optional</sup> <a name="FirstNameInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.firstNameInput"></a>

```csharp
public string FirstNameInput { get; }
```

- *Type:* string

---

##### `GenderInput`<sup>Optional</sup> <a name="GenderInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.genderInput"></a>

```csharp
public string GenderInput { get; }
```

- *Type:* string

---

##### `HomePhoneNumberInput`<sup>Optional</sup> <a name="HomePhoneNumberInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.homePhoneNumberInput"></a>

```csharp
public string HomePhoneNumberInput { get; }
```

- *Type:* string

---

##### `LastNameInput`<sup>Optional</sup> <a name="LastNameInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.lastNameInput"></a>

```csharp
public string LastNameInput { get; }
```

- *Type:* string

---

##### `MailingAddress1Input`<sup>Optional</sup> <a name="MailingAddress1Input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingAddress1Input"></a>

```csharp
public string MailingAddress1Input { get; }
```

- *Type:* string

---

##### `MailingAddress2Input`<sup>Optional</sup> <a name="MailingAddress2Input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingAddress2Input"></a>

```csharp
public string MailingAddress2Input { get; }
```

- *Type:* string

---

##### `MailingAddress3Input`<sup>Optional</sup> <a name="MailingAddress3Input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingAddress3Input"></a>

```csharp
public string MailingAddress3Input { get; }
```

- *Type:* string

---

##### `MailingAddress4Input`<sup>Optional</sup> <a name="MailingAddress4Input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingAddress4Input"></a>

```csharp
public string MailingAddress4Input { get; }
```

- *Type:* string

---

##### `MailingCityInput`<sup>Optional</sup> <a name="MailingCityInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingCityInput"></a>

```csharp
public string MailingCityInput { get; }
```

- *Type:* string

---

##### `MailingCountryInput`<sup>Optional</sup> <a name="MailingCountryInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingCountryInput"></a>

```csharp
public string MailingCountryInput { get; }
```

- *Type:* string

---

##### `MailingCountyInput`<sup>Optional</sup> <a name="MailingCountyInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingCountyInput"></a>

```csharp
public string MailingCountyInput { get; }
```

- *Type:* string

---

##### `MailingPostalCodeInput`<sup>Optional</sup> <a name="MailingPostalCodeInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingPostalCodeInput"></a>

```csharp
public string MailingPostalCodeInput { get; }
```

- *Type:* string

---

##### `MailingProvinceInput`<sup>Optional</sup> <a name="MailingProvinceInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingProvinceInput"></a>

```csharp
public string MailingProvinceInput { get; }
```

- *Type:* string

---

##### `MailingStateInput`<sup>Optional</sup> <a name="MailingStateInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingStateInput"></a>

```csharp
public string MailingStateInput { get; }
```

- *Type:* string

---

##### `MiddleNameInput`<sup>Optional</sup> <a name="MiddleNameInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.middleNameInput"></a>

```csharp
public string MiddleNameInput { get; }
```

- *Type:* string

---

##### `MobilePhoneNumberInput`<sup>Optional</sup> <a name="MobilePhoneNumberInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mobilePhoneNumberInput"></a>

```csharp
public string MobilePhoneNumberInput { get; }
```

- *Type:* string

---

##### `PartyTypeInput`<sup>Optional</sup> <a name="PartyTypeInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.partyTypeInput"></a>

```csharp
public string PartyTypeInput { get; }
```

- *Type:* string

---

##### `PhoneNumberInput`<sup>Optional</sup> <a name="PhoneNumberInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.phoneNumberInput"></a>

```csharp
public string PhoneNumberInput { get; }
```

- *Type:* string

---

##### `PostalCodeInput`<sup>Optional</sup> <a name="PostalCodeInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.postalCodeInput"></a>

```csharp
public string PostalCodeInput { get; }
```

- *Type:* string

---

##### `ProfileArnInput`<sup>Optional</sup> <a name="ProfileArnInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.profileArnInput"></a>

```csharp
public string ProfileArnInput { get; }
```

- *Type:* string

---

##### `ProfileIdInput`<sup>Optional</sup> <a name="ProfileIdInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.profileIdInput"></a>

```csharp
public string ProfileIdInput { get; }
```

- *Type:* string

---

##### `ProvinceInput`<sup>Optional</sup> <a name="ProvinceInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.provinceInput"></a>

```csharp
public string ProvinceInput { get; }
```

- *Type:* string

---

##### `ShippingAddress1Input`<sup>Optional</sup> <a name="ShippingAddress1Input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingAddress1Input"></a>

```csharp
public string ShippingAddress1Input { get; }
```

- *Type:* string

---

##### `ShippingAddress2Input`<sup>Optional</sup> <a name="ShippingAddress2Input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingAddress2Input"></a>

```csharp
public string ShippingAddress2Input { get; }
```

- *Type:* string

---

##### `ShippingAddress3Input`<sup>Optional</sup> <a name="ShippingAddress3Input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingAddress3Input"></a>

```csharp
public string ShippingAddress3Input { get; }
```

- *Type:* string

---

##### `ShippingAddress4Input`<sup>Optional</sup> <a name="ShippingAddress4Input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingAddress4Input"></a>

```csharp
public string ShippingAddress4Input { get; }
```

- *Type:* string

---

##### `ShippingCityInput`<sup>Optional</sup> <a name="ShippingCityInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingCityInput"></a>

```csharp
public string ShippingCityInput { get; }
```

- *Type:* string

---

##### `ShippingCountryInput`<sup>Optional</sup> <a name="ShippingCountryInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingCountryInput"></a>

```csharp
public string ShippingCountryInput { get; }
```

- *Type:* string

---

##### `ShippingCountyInput`<sup>Optional</sup> <a name="ShippingCountyInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingCountyInput"></a>

```csharp
public string ShippingCountyInput { get; }
```

- *Type:* string

---

##### `ShippingPostalCodeInput`<sup>Optional</sup> <a name="ShippingPostalCodeInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingPostalCodeInput"></a>

```csharp
public string ShippingPostalCodeInput { get; }
```

- *Type:* string

---

##### `ShippingProvinceInput`<sup>Optional</sup> <a name="ShippingProvinceInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingProvinceInput"></a>

```csharp
public string ShippingProvinceInput { get; }
```

- *Type:* string

---

##### `ShippingStateInput`<sup>Optional</sup> <a name="ShippingStateInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingStateInput"></a>

```csharp
public string ShippingStateInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `AccountNumber`<sup>Required</sup> <a name="AccountNumber" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.accountNumber"></a>

```csharp
public string AccountNumber { get; }
```

- *Type:* string

---

##### `AdditionalInformation`<sup>Required</sup> <a name="AdditionalInformation" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.additionalInformation"></a>

```csharp
public string AdditionalInformation { get; }
```

- *Type:* string

---

##### `Address1`<sup>Required</sup> <a name="Address1" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.address1"></a>

```csharp
public string Address1 { get; }
```

- *Type:* string

---

##### `Address2`<sup>Required</sup> <a name="Address2" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.address2"></a>

```csharp
public string Address2 { get; }
```

- *Type:* string

---

##### `Address3`<sup>Required</sup> <a name="Address3" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.address3"></a>

```csharp
public string Address3 { get; }
```

- *Type:* string

---

##### `Address4`<sup>Required</sup> <a name="Address4" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.address4"></a>

```csharp
public string Address4 { get; }
```

- *Type:* string

---

##### `BillingAddress1`<sup>Required</sup> <a name="BillingAddress1" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingAddress1"></a>

```csharp
public string BillingAddress1 { get; }
```

- *Type:* string

---

##### `BillingAddress2`<sup>Required</sup> <a name="BillingAddress2" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingAddress2"></a>

```csharp
public string BillingAddress2 { get; }
```

- *Type:* string

---

##### `BillingAddress3`<sup>Required</sup> <a name="BillingAddress3" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingAddress3"></a>

```csharp
public string BillingAddress3 { get; }
```

- *Type:* string

---

##### `BillingAddress4`<sup>Required</sup> <a name="BillingAddress4" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingAddress4"></a>

```csharp
public string BillingAddress4 { get; }
```

- *Type:* string

---

##### `BillingCity`<sup>Required</sup> <a name="BillingCity" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingCity"></a>

```csharp
public string BillingCity { get; }
```

- *Type:* string

---

##### `BillingCountry`<sup>Required</sup> <a name="BillingCountry" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingCountry"></a>

```csharp
public string BillingCountry { get; }
```

- *Type:* string

---

##### `BillingCounty`<sup>Required</sup> <a name="BillingCounty" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingCounty"></a>

```csharp
public string BillingCounty { get; }
```

- *Type:* string

---

##### `BillingPostalCode`<sup>Required</sup> <a name="BillingPostalCode" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingPostalCode"></a>

```csharp
public string BillingPostalCode { get; }
```

- *Type:* string

---

##### `BillingProvince`<sup>Required</sup> <a name="BillingProvince" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingProvince"></a>

```csharp
public string BillingProvince { get; }
```

- *Type:* string

---

##### `BillingState`<sup>Required</sup> <a name="BillingState" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingState"></a>

```csharp
public string BillingState { get; }
```

- *Type:* string

---

##### `BirthDate`<sup>Required</sup> <a name="BirthDate" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.birthDate"></a>

```csharp
public string BirthDate { get; }
```

- *Type:* string

---

##### `BusinessEmailAddress`<sup>Required</sup> <a name="BusinessEmailAddress" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.businessEmailAddress"></a>

```csharp
public string BusinessEmailAddress { get; }
```

- *Type:* string

---

##### `BusinessName`<sup>Required</sup> <a name="BusinessName" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.businessName"></a>

```csharp
public string BusinessName { get; }
```

- *Type:* string

---

##### `BusinessPhoneNumber`<sup>Required</sup> <a name="BusinessPhoneNumber" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.businessPhoneNumber"></a>

```csharp
public string BusinessPhoneNumber { get; }
```

- *Type:* string

---

##### `City`<sup>Required</sup> <a name="City" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.city"></a>

```csharp
public string City { get; }
```

- *Type:* string

---

##### `Country`<sup>Required</sup> <a name="Country" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.country"></a>

```csharp
public string Country { get; }
```

- *Type:* string

---

##### `County`<sup>Required</sup> <a name="County" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.county"></a>

```csharp
public string County { get; }
```

- *Type:* string

---

##### `Custom`<sup>Required</sup> <a name="Custom" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.custom"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Custom { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `EmailAddress`<sup>Required</sup> <a name="EmailAddress" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.emailAddress"></a>

```csharp
public string EmailAddress { get; }
```

- *Type:* string

---

##### `FirstName`<sup>Required</sup> <a name="FirstName" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.firstName"></a>

```csharp
public string FirstName { get; }
```

- *Type:* string

---

##### `Gender`<sup>Required</sup> <a name="Gender" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.gender"></a>

```csharp
public string Gender { get; }
```

- *Type:* string

---

##### `HomePhoneNumber`<sup>Required</sup> <a name="HomePhoneNumber" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.homePhoneNumber"></a>

```csharp
public string HomePhoneNumber { get; }
```

- *Type:* string

---

##### `LastName`<sup>Required</sup> <a name="LastName" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.lastName"></a>

```csharp
public string LastName { get; }
```

- *Type:* string

---

##### `MailingAddress1`<sup>Required</sup> <a name="MailingAddress1" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingAddress1"></a>

```csharp
public string MailingAddress1 { get; }
```

- *Type:* string

---

##### `MailingAddress2`<sup>Required</sup> <a name="MailingAddress2" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingAddress2"></a>

```csharp
public string MailingAddress2 { get; }
```

- *Type:* string

---

##### `MailingAddress3`<sup>Required</sup> <a name="MailingAddress3" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingAddress3"></a>

```csharp
public string MailingAddress3 { get; }
```

- *Type:* string

---

##### `MailingAddress4`<sup>Required</sup> <a name="MailingAddress4" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingAddress4"></a>

```csharp
public string MailingAddress4 { get; }
```

- *Type:* string

---

##### `MailingCity`<sup>Required</sup> <a name="MailingCity" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingCity"></a>

```csharp
public string MailingCity { get; }
```

- *Type:* string

---

##### `MailingCountry`<sup>Required</sup> <a name="MailingCountry" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingCountry"></a>

```csharp
public string MailingCountry { get; }
```

- *Type:* string

---

##### `MailingCounty`<sup>Required</sup> <a name="MailingCounty" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingCounty"></a>

```csharp
public string MailingCounty { get; }
```

- *Type:* string

---

##### `MailingPostalCode`<sup>Required</sup> <a name="MailingPostalCode" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingPostalCode"></a>

```csharp
public string MailingPostalCode { get; }
```

- *Type:* string

---

##### `MailingProvince`<sup>Required</sup> <a name="MailingProvince" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingProvince"></a>

```csharp
public string MailingProvince { get; }
```

- *Type:* string

---

##### `MailingState`<sup>Required</sup> <a name="MailingState" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingState"></a>

```csharp
public string MailingState { get; }
```

- *Type:* string

---

##### `MiddleName`<sup>Required</sup> <a name="MiddleName" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.middleName"></a>

```csharp
public string MiddleName { get; }
```

- *Type:* string

---

##### `MobilePhoneNumber`<sup>Required</sup> <a name="MobilePhoneNumber" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mobilePhoneNumber"></a>

```csharp
public string MobilePhoneNumber { get; }
```

- *Type:* string

---

##### `PartyType`<sup>Required</sup> <a name="PartyType" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.partyType"></a>

```csharp
public string PartyType { get; }
```

- *Type:* string

---

##### `PhoneNumber`<sup>Required</sup> <a name="PhoneNumber" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.phoneNumber"></a>

```csharp
public string PhoneNumber { get; }
```

- *Type:* string

---

##### `PostalCode`<sup>Required</sup> <a name="PostalCode" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.postalCode"></a>

```csharp
public string PostalCode { get; }
```

- *Type:* string

---

##### `ProfileArn`<sup>Required</sup> <a name="ProfileArn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.profileArn"></a>

```csharp
public string ProfileArn { get; }
```

- *Type:* string

---

##### `ProfileId`<sup>Required</sup> <a name="ProfileId" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.profileId"></a>

```csharp
public string ProfileId { get; }
```

- *Type:* string

---

##### `Province`<sup>Required</sup> <a name="Province" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.province"></a>

```csharp
public string Province { get; }
```

- *Type:* string

---

##### `ShippingAddress1`<sup>Required</sup> <a name="ShippingAddress1" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingAddress1"></a>

```csharp
public string ShippingAddress1 { get; }
```

- *Type:* string

---

##### `ShippingAddress2`<sup>Required</sup> <a name="ShippingAddress2" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingAddress2"></a>

```csharp
public string ShippingAddress2 { get; }
```

- *Type:* string

---

##### `ShippingAddress3`<sup>Required</sup> <a name="ShippingAddress3" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingAddress3"></a>

```csharp
public string ShippingAddress3 { get; }
```

- *Type:* string

---

##### `ShippingAddress4`<sup>Required</sup> <a name="ShippingAddress4" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingAddress4"></a>

```csharp
public string ShippingAddress4 { get; }
```

- *Type:* string

---

##### `ShippingCity`<sup>Required</sup> <a name="ShippingCity" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingCity"></a>

```csharp
public string ShippingCity { get; }
```

- *Type:* string

---

##### `ShippingCountry`<sup>Required</sup> <a name="ShippingCountry" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingCountry"></a>

```csharp
public string ShippingCountry { get; }
```

- *Type:* string

---

##### `ShippingCounty`<sup>Required</sup> <a name="ShippingCounty" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingCounty"></a>

```csharp
public string ShippingCounty { get; }
```

- *Type:* string

---

##### `ShippingPostalCode`<sup>Required</sup> <a name="ShippingPostalCode" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingPostalCode"></a>

```csharp
public string ShippingPostalCode { get; }
```

- *Type:* string

---

##### `ShippingProvince`<sup>Required</sup> <a name="ShippingProvince" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingProvince"></a>

```csharp
public string ShippingProvince { get; }
```

- *Type:* string

---

##### `ShippingState`<sup>Required</sup> <a name="ShippingState" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingState"></a>

```csharp
public string ShippingState { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes">WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes</a>

---


### WisdomMessageTemplateDefaultAttributesOutputReference <a name="WisdomMessageTemplateDefaultAttributesOutputReference" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WisdomMessageTemplateDefaultAttributesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.putAgentAttributes">PutAgentAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.putCustomerProfileAttributes">PutCustomerProfileAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.putSystemAttributes">PutSystemAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.resetAgentAttributes">ResetAgentAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.resetCustomAttributes">ResetCustomAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.resetCustomerProfileAttributes">ResetCustomerProfileAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.resetSystemAttributes">ResetSystemAttributes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAgentAttributes` <a name="PutAgentAttributes" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.putAgentAttributes"></a>

```csharp
private void PutAgentAttributes(WisdomMessageTemplateDefaultAttributesAgentAttributes Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.putAgentAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributes">WisdomMessageTemplateDefaultAttributesAgentAttributes</a>

---

##### `PutCustomerProfileAttributes` <a name="PutCustomerProfileAttributes" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.putCustomerProfileAttributes"></a>

```csharp
private void PutCustomerProfileAttributes(WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.putCustomerProfileAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes">WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes</a>

---

##### `PutSystemAttributes` <a name="PutSystemAttributes" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.putSystemAttributes"></a>

```csharp
private void PutSystemAttributes(WisdomMessageTemplateDefaultAttributesSystemAttributes Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.putSystemAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributes">WisdomMessageTemplateDefaultAttributesSystemAttributes</a>

---

##### `ResetAgentAttributes` <a name="ResetAgentAttributes" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.resetAgentAttributes"></a>

```csharp
private void ResetAgentAttributes()
```

##### `ResetCustomAttributes` <a name="ResetCustomAttributes" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.resetCustomAttributes"></a>

```csharp
private void ResetCustomAttributes()
```

##### `ResetCustomerProfileAttributes` <a name="ResetCustomerProfileAttributes" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.resetCustomerProfileAttributes"></a>

```csharp
private void ResetCustomerProfileAttributes()
```

##### `ResetSystemAttributes` <a name="ResetSystemAttributes" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.resetSystemAttributes"></a>

```csharp
private void ResetSystemAttributes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.property.agentAttributes">AgentAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference">WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.property.customerProfileAttributes">CustomerProfileAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference">WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.property.systemAttributes">SystemAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference">WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.property.agentAttributesInput">AgentAttributesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributes">WisdomMessageTemplateDefaultAttributesAgentAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.property.customAttributesInput">CustomAttributesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.property.customerProfileAttributesInput">CustomerProfileAttributesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes">WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.property.systemAttributesInput">SystemAttributesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributes">WisdomMessageTemplateDefaultAttributesSystemAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.property.customAttributes">CustomAttributes</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributes">WisdomMessageTemplateDefaultAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AgentAttributes`<sup>Required</sup> <a name="AgentAttributes" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.property.agentAttributes"></a>

```csharp
public WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference AgentAttributes { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference">WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference</a>

---

##### `CustomerProfileAttributes`<sup>Required</sup> <a name="CustomerProfileAttributes" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.property.customerProfileAttributes"></a>

```csharp
public WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference CustomerProfileAttributes { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference">WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference</a>

---

##### `SystemAttributes`<sup>Required</sup> <a name="SystemAttributes" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.property.systemAttributes"></a>

```csharp
public WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference SystemAttributes { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference">WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference</a>

---

##### `AgentAttributesInput`<sup>Optional</sup> <a name="AgentAttributesInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.property.agentAttributesInput"></a>

```csharp
public IResolvable|WisdomMessageTemplateDefaultAttributesAgentAttributes AgentAttributesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributes">WisdomMessageTemplateDefaultAttributesAgentAttributes</a>

---

##### `CustomAttributesInput`<sup>Optional</sup> <a name="CustomAttributesInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.property.customAttributesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> CustomAttributesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `CustomerProfileAttributesInput`<sup>Optional</sup> <a name="CustomerProfileAttributesInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.property.customerProfileAttributesInput"></a>

```csharp
public IResolvable|WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes CustomerProfileAttributesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes">WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes</a>

---

##### `SystemAttributesInput`<sup>Optional</sup> <a name="SystemAttributesInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.property.systemAttributesInput"></a>

```csharp
public IResolvable|WisdomMessageTemplateDefaultAttributesSystemAttributes SystemAttributesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributes">WisdomMessageTemplateDefaultAttributesSystemAttributes</a>

---

##### `CustomAttributes`<sup>Required</sup> <a name="CustomAttributes" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.property.customAttributes"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> CustomAttributes { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WisdomMessageTemplateDefaultAttributes InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributes">WisdomMessageTemplateDefaultAttributes</a>

---


### WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference <a name="WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.resetAddress">ResetAddress</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAddress` <a name="ResetAddress" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.resetAddress"></a>

```csharp
private void ResetAddress()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.property.addressInput">AddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.property.address">Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpoint">WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AddressInput`<sup>Optional</sup> <a name="AddressInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.property.addressInput"></a>

```csharp
public string AddressInput { get; }
```

- *Type:* string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.property.address"></a>

```csharp
public string Address { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpoint InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpoint">WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpoint</a>

---


### WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference <a name="WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.putCustomerEndpoint">PutCustomerEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.putSystemEndpoint">PutSystemEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.resetCustomerEndpoint">ResetCustomerEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.resetSystemEndpoint">ResetSystemEndpoint</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomerEndpoint` <a name="PutCustomerEndpoint" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.putCustomerEndpoint"></a>

```csharp
private void PutCustomerEndpoint(WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpoint Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.putCustomerEndpoint.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpoint">WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpoint</a>

---

##### `PutSystemEndpoint` <a name="PutSystemEndpoint" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.putSystemEndpoint"></a>

```csharp
private void PutSystemEndpoint(WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpoint Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.putSystemEndpoint.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpoint">WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpoint</a>

---

##### `ResetCustomerEndpoint` <a name="ResetCustomerEndpoint" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.resetCustomerEndpoint"></a>

```csharp
private void ResetCustomerEndpoint()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetSystemEndpoint` <a name="ResetSystemEndpoint" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.resetSystemEndpoint"></a>

```csharp
private void ResetSystemEndpoint()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.property.customerEndpoint">CustomerEndpoint</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference">WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.property.systemEndpoint">SystemEndpoint</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference">WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.property.customerEndpointInput">CustomerEndpointInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpoint">WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.property.systemEndpointInput">SystemEndpointInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpoint">WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributes">WisdomMessageTemplateDefaultAttributesSystemAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomerEndpoint`<sup>Required</sup> <a name="CustomerEndpoint" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.property.customerEndpoint"></a>

```csharp
public WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference CustomerEndpoint { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference">WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference</a>

---

##### `SystemEndpoint`<sup>Required</sup> <a name="SystemEndpoint" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.property.systemEndpoint"></a>

```csharp
public WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference SystemEndpoint { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference">WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference</a>

---

##### `CustomerEndpointInput`<sup>Optional</sup> <a name="CustomerEndpointInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.property.customerEndpointInput"></a>

```csharp
public IResolvable|WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpoint CustomerEndpointInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpoint">WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpoint</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SystemEndpointInput`<sup>Optional</sup> <a name="SystemEndpointInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.property.systemEndpointInput"></a>

```csharp
public IResolvable|WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpoint SystemEndpointInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpoint">WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpoint</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WisdomMessageTemplateDefaultAttributesSystemAttributes InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributes">WisdomMessageTemplateDefaultAttributesSystemAttributes</a>

---


### WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference <a name="WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.resetAddress">ResetAddress</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAddress` <a name="ResetAddress" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.resetAddress"></a>

```csharp
private void ResetAddress()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.property.addressInput">AddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.property.address">Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpoint">WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AddressInput`<sup>Optional</sup> <a name="AddressInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.property.addressInput"></a>

```csharp
public string AddressInput { get; }
```

- *Type:* string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.property.address"></a>

```csharp
public string Address { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpoint InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpoint">WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpoint</a>

---


### WisdomMessageTemplateGroupingConfigurationOutputReference <a name="WisdomMessageTemplateGroupingConfigurationOutputReference" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WisdomMessageTemplateGroupingConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.resetCriteria">ResetCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCriteria` <a name="ResetCriteria" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.resetCriteria"></a>

```csharp
private void ResetCriteria()
```

##### `ResetValues` <a name="ResetValues" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.resetValues"></a>

```csharp
private void ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.property.criteriaInput">CriteriaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.property.criteria">Criteria</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfiguration">WisdomMessageTemplateGroupingConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CriteriaInput`<sup>Optional</sup> <a name="CriteriaInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.property.criteriaInput"></a>

```csharp
public string CriteriaInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Criteria`<sup>Required</sup> <a name="Criteria" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.property.criteria"></a>

```csharp
public string Criteria { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WisdomMessageTemplateGroupingConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfiguration">WisdomMessageTemplateGroupingConfiguration</a>

---


### WisdomMessageTemplateMessageTemplateAttachmentsList <a name="WisdomMessageTemplateMessageTemplateAttachmentsList" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WisdomMessageTemplateMessageTemplateAttachmentsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsList.get"></a>

```csharp
private WisdomMessageTemplateMessageTemplateAttachmentsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachments">WisdomMessageTemplateMessageTemplateAttachments</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsList.property.internalValue"></a>

```csharp
public IResolvable|WisdomMessageTemplateMessageTemplateAttachments[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachments">WisdomMessageTemplateMessageTemplateAttachments</a>[]

---


### WisdomMessageTemplateMessageTemplateAttachmentsOutputReference <a name="WisdomMessageTemplateMessageTemplateAttachmentsOutputReference" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WisdomMessageTemplateMessageTemplateAttachmentsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.resetAttachmentId">ResetAttachmentId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.resetAttachmentName">ResetAttachmentName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.resetS3PresignedUrl">ResetS3PresignedUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAttachmentId` <a name="ResetAttachmentId" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.resetAttachmentId"></a>

```csharp
private void ResetAttachmentId()
```

##### `ResetAttachmentName` <a name="ResetAttachmentName" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.resetAttachmentName"></a>

```csharp
private void ResetAttachmentName()
```

##### `ResetS3PresignedUrl` <a name="ResetS3PresignedUrl" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.resetS3PresignedUrl"></a>

```csharp
private void ResetS3PresignedUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.property.attachmentIdInput">AttachmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.property.attachmentNameInput">AttachmentNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.property.s3PresignedUrlInput">S3PresignedUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.property.attachmentId">AttachmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.property.attachmentName">AttachmentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.property.s3PresignedUrl">S3PresignedUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachments">WisdomMessageTemplateMessageTemplateAttachments</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AttachmentIdInput`<sup>Optional</sup> <a name="AttachmentIdInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.property.attachmentIdInput"></a>

```csharp
public string AttachmentIdInput { get; }
```

- *Type:* string

---

##### `AttachmentNameInput`<sup>Optional</sup> <a name="AttachmentNameInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.property.attachmentNameInput"></a>

```csharp
public string AttachmentNameInput { get; }
```

- *Type:* string

---

##### `S3PresignedUrlInput`<sup>Optional</sup> <a name="S3PresignedUrlInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.property.s3PresignedUrlInput"></a>

```csharp
public string S3PresignedUrlInput { get; }
```

- *Type:* string

---

##### `AttachmentId`<sup>Required</sup> <a name="AttachmentId" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.property.attachmentId"></a>

```csharp
public string AttachmentId { get; }
```

- *Type:* string

---

##### `AttachmentName`<sup>Required</sup> <a name="AttachmentName" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.property.attachmentName"></a>

```csharp
public string AttachmentName { get; }
```

- *Type:* string

---

##### `S3PresignedUrl`<sup>Required</sup> <a name="S3PresignedUrl" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.property.s3PresignedUrl"></a>

```csharp
public string S3PresignedUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WisdomMessageTemplateMessageTemplateAttachments InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachments">WisdomMessageTemplateMessageTemplateAttachments</a>

---


### WisdomMessageTemplateTagsList <a name="WisdomMessageTemplateTagsList" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WisdomMessageTemplateTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsList.get"></a>

```csharp
private WisdomMessageTemplateTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTags">WisdomMessageTemplateTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsList.property.internalValue"></a>

```csharp
public IResolvable|WisdomMessageTemplateTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTags">WisdomMessageTemplateTags</a>[]

---


### WisdomMessageTemplateTagsOutputReference <a name="WisdomMessageTemplateTagsOutputReference" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WisdomMessageTemplateTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTags">WisdomMessageTemplateTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WisdomMessageTemplateTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTags">WisdomMessageTemplateTags</a>

---



