# `connectTaskTemplate` Submodule <a name="`connectTaskTemplate` Submodule" id="@cdktn/provider-awscc.connectTaskTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConnectTaskTemplate <a name="ConnectTaskTemplate" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_task_template awscc_connect_task_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectTaskTemplate(Construct Scope, string Id, ConnectTaskTemplateConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig">ConnectTaskTemplateConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig">ConnectTaskTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.putConstraints">PutConstraints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.putDefaults">PutDefaults</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.putFields">PutFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.resetClientToken">ResetClientToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.resetConstraints">ResetConstraints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.resetContactFlowArn">ResetContactFlowArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.resetDefaults">ResetDefaults</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.resetFields">ResetFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.resetSelfAssignContactFlowArn">ResetSelfAssignContactFlowArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConstraints` <a name="PutConstraints" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.putConstraints"></a>

```csharp
private void PutConstraints(ConnectTaskTemplateConstraints Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.putConstraints.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraints">ConnectTaskTemplateConstraints</a>

---

##### `PutDefaults` <a name="PutDefaults" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.putDefaults"></a>

```csharp
private void PutDefaults(IResolvable|ConnectTaskTemplateDefaults[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.putDefaults.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaults">ConnectTaskTemplateDefaults</a>[]

---

##### `PutFields` <a name="PutFields" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.putFields"></a>

```csharp
private void PutFields(IResolvable|ConnectTaskTemplateFields[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.putFields.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFields">ConnectTaskTemplateFields</a>[]

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.putTags"></a>

```csharp
private void PutTags(IResolvable|ConnectTaskTemplateTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTags">ConnectTaskTemplateTags</a>[]

---

##### `ResetClientToken` <a name="ResetClientToken" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.resetClientToken"></a>

```csharp
private void ResetClientToken()
```

##### `ResetConstraints` <a name="ResetConstraints" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.resetConstraints"></a>

```csharp
private void ResetConstraints()
```

##### `ResetContactFlowArn` <a name="ResetContactFlowArn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.resetContactFlowArn"></a>

```csharp
private void ResetContactFlowArn()
```

##### `ResetDefaults` <a name="ResetDefaults" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.resetDefaults"></a>

```csharp
private void ResetDefaults()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetFields` <a name="ResetFields" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.resetFields"></a>

```csharp
private void ResetFields()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetSelfAssignContactFlowArn` <a name="ResetSelfAssignContactFlowArn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.resetSelfAssignContactFlowArn"></a>

```csharp
private void ResetSelfAssignContactFlowArn()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.resetStatus"></a>

```csharp
private void ResetStatus()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ConnectTaskTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ConnectTaskTemplate.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ConnectTaskTemplate.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ConnectTaskTemplate.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ConnectTaskTemplate.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ConnectTaskTemplate resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ConnectTaskTemplate to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ConnectTaskTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_task_template#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ConnectTaskTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.constraints">Constraints</a></code> | <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference">ConnectTaskTemplateConstraintsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.defaults">Defaults</a></code> | <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsList">ConnectTaskTemplateDefaultsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.fields">Fields</a></code> | <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsList">ConnectTaskTemplateFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsList">ConnectTaskTemplateTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.clientTokenInput">ClientTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.constraintsInput">ConstraintsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraints">ConnectTaskTemplateConstraints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.contactFlowArnInput">ContactFlowArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.defaultsInput">DefaultsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaults">ConnectTaskTemplateDefaults</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.fieldsInput">FieldsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFields">ConnectTaskTemplateFields</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.instanceArnInput">InstanceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.selfAssignContactFlowArnInput">SelfAssignContactFlowArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTags">ConnectTaskTemplateTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.clientToken">ClientToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.contactFlowArn">ContactFlowArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.instanceArn">InstanceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.selfAssignContactFlowArn">SelfAssignContactFlowArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.status">Status</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Constraints`<sup>Required</sup> <a name="Constraints" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.constraints"></a>

```csharp
public ConnectTaskTemplateConstraintsOutputReference Constraints { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference">ConnectTaskTemplateConstraintsOutputReference</a>

---

##### `Defaults`<sup>Required</sup> <a name="Defaults" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.defaults"></a>

```csharp
public ConnectTaskTemplateDefaultsList Defaults { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsList">ConnectTaskTemplateDefaultsList</a>

---

##### `Fields`<sup>Required</sup> <a name="Fields" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.fields"></a>

```csharp
public ConnectTaskTemplateFieldsList Fields { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsList">ConnectTaskTemplateFieldsList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.tags"></a>

```csharp
public ConnectTaskTemplateTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsList">ConnectTaskTemplateTagsList</a>

---

##### `ClientTokenInput`<sup>Optional</sup> <a name="ClientTokenInput" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.clientTokenInput"></a>

```csharp
public string ClientTokenInput { get; }
```

- *Type:* string

---

##### `ConstraintsInput`<sup>Optional</sup> <a name="ConstraintsInput" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.constraintsInput"></a>

```csharp
public IResolvable|ConnectTaskTemplateConstraints ConstraintsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraints">ConnectTaskTemplateConstraints</a>

---

##### `ContactFlowArnInput`<sup>Optional</sup> <a name="ContactFlowArnInput" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.contactFlowArnInput"></a>

```csharp
public string ContactFlowArnInput { get; }
```

- *Type:* string

---

##### `DefaultsInput`<sup>Optional</sup> <a name="DefaultsInput" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.defaultsInput"></a>

```csharp
public IResolvable|ConnectTaskTemplateDefaults[] DefaultsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaults">ConnectTaskTemplateDefaults</a>[]

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `FieldsInput`<sup>Optional</sup> <a name="FieldsInput" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.fieldsInput"></a>

```csharp
public IResolvable|ConnectTaskTemplateFields[] FieldsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFields">ConnectTaskTemplateFields</a>[]

---

##### `InstanceArnInput`<sup>Optional</sup> <a name="InstanceArnInput" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.instanceArnInput"></a>

```csharp
public string InstanceArnInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SelfAssignContactFlowArnInput`<sup>Optional</sup> <a name="SelfAssignContactFlowArnInput" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.selfAssignContactFlowArnInput"></a>

```csharp
public string SelfAssignContactFlowArnInput { get; }
```

- *Type:* string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.tagsInput"></a>

```csharp
public IResolvable|ConnectTaskTemplateTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTags">ConnectTaskTemplateTags</a>[]

---

##### `ClientToken`<sup>Required</sup> <a name="ClientToken" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.clientToken"></a>

```csharp
public string ClientToken { get; }
```

- *Type:* string

---

##### `ContactFlowArn`<sup>Required</sup> <a name="ContactFlowArn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.contactFlowArn"></a>

```csharp
public string ContactFlowArn { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `InstanceArn`<sup>Required</sup> <a name="InstanceArn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.instanceArn"></a>

```csharp
public string InstanceArn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SelfAssignContactFlowArn`<sup>Required</sup> <a name="SelfAssignContactFlowArn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.selfAssignContactFlowArn"></a>

```csharp
public string SelfAssignContactFlowArn { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ConnectTaskTemplateConfig <a name="ConnectTaskTemplateConfig" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectTaskTemplateConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string InstanceArn,
    string ClientToken = null,
    ConnectTaskTemplateConstraints Constraints = null,
    string ContactFlowArn = null,
    IResolvable|ConnectTaskTemplateDefaults[] Defaults = null,
    string Description = null,
    IResolvable|ConnectTaskTemplateFields[] Fields = null,
    string Name = null,
    string SelfAssignContactFlowArn = null,
    string Status = null,
    IResolvable|ConnectTaskTemplateTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.instanceArn">InstanceArn</a></code> | <code>string</code> | The identifier (arn) of the instance. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.clientToken">ClientToken</a></code> | <code>string</code> | the client token string in uuid format. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.constraints">Constraints</a></code> | <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraints">ConnectTaskTemplateConstraints</a></code> | The constraints for the task template. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.contactFlowArn">ContactFlowArn</a></code> | <code>string</code> | The identifier of the contact flow. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.defaults">Defaults</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaults">ConnectTaskTemplateDefaults</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_task_template#defaults ConnectTaskTemplate#defaults}. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.description">Description</a></code> | <code>string</code> | The description of the task template. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.fields">Fields</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFields">ConnectTaskTemplateFields</a>[]</code> | The list of task template's fields. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.name">Name</a></code> | <code>string</code> | The name of the task template. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.selfAssignContactFlowArn">SelfAssignContactFlowArn</a></code> | <code>string</code> | The identifier of the contact flow. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.status">Status</a></code> | <code>string</code> | The status of the task template. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTags">ConnectTaskTemplateTags</a>[]</code> | One or more tags. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `InstanceArn`<sup>Required</sup> <a name="InstanceArn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.instanceArn"></a>

```csharp
public string InstanceArn { get; set; }
```

- *Type:* string

The identifier (arn) of the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_task_template#instance_arn ConnectTaskTemplate#instance_arn}

---

##### `ClientToken`<sup>Optional</sup> <a name="ClientToken" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.clientToken"></a>

```csharp
public string ClientToken { get; set; }
```

- *Type:* string

the client token string in uuid format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_task_template#client_token ConnectTaskTemplate#client_token}

---

##### `Constraints`<sup>Optional</sup> <a name="Constraints" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.constraints"></a>

```csharp
public ConnectTaskTemplateConstraints Constraints { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraints">ConnectTaskTemplateConstraints</a>

The constraints for the task template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_task_template#constraints ConnectTaskTemplate#constraints}

---

##### `ContactFlowArn`<sup>Optional</sup> <a name="ContactFlowArn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.contactFlowArn"></a>

```csharp
public string ContactFlowArn { get; set; }
```

- *Type:* string

The identifier of the contact flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_task_template#contact_flow_arn ConnectTaskTemplate#contact_flow_arn}

---

##### `Defaults`<sup>Optional</sup> <a name="Defaults" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.defaults"></a>

```csharp
public IResolvable|ConnectTaskTemplateDefaults[] Defaults { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaults">ConnectTaskTemplateDefaults</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_task_template#defaults ConnectTaskTemplate#defaults}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description of the task template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_task_template#description ConnectTaskTemplate#description}

---

##### `Fields`<sup>Optional</sup> <a name="Fields" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.fields"></a>

```csharp
public IResolvable|ConnectTaskTemplateFields[] Fields { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFields">ConnectTaskTemplateFields</a>[]

The list of task template's fields.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_task_template#fields ConnectTaskTemplate#fields}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the task template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_task_template#name ConnectTaskTemplate#name}

---

##### `SelfAssignContactFlowArn`<sup>Optional</sup> <a name="SelfAssignContactFlowArn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.selfAssignContactFlowArn"></a>

```csharp
public string SelfAssignContactFlowArn { get; set; }
```

- *Type:* string

The identifier of the contact flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_task_template#self_assign_contact_flow_arn ConnectTaskTemplate#self_assign_contact_flow_arn}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

The status of the task template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_task_template#status ConnectTaskTemplate#status}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.tags"></a>

```csharp
public IResolvable|ConnectTaskTemplateTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTags">ConnectTaskTemplateTags</a>[]

One or more tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_task_template#tags ConnectTaskTemplate#tags}

---

### ConnectTaskTemplateConstraints <a name="ConnectTaskTemplateConstraints" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraints.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectTaskTemplateConstraints {
    IResolvable|ConnectTaskTemplateConstraintsInvisibleFields[] InvisibleFields = null,
    IResolvable|ConnectTaskTemplateConstraintsReadOnlyFields[] ReadOnlyFields = null,
    IResolvable|ConnectTaskTemplateConstraintsRequiredFields[] RequiredFields = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraints.property.invisibleFields">InvisibleFields</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFields">ConnectTaskTemplateConstraintsInvisibleFields</a>[]</code> | The list of the task template's invisible fields. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraints.property.readOnlyFields">ReadOnlyFields</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFields">ConnectTaskTemplateConstraintsReadOnlyFields</a>[]</code> | The list of the task template's read only fields. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraints.property.requiredFields">RequiredFields</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFields">ConnectTaskTemplateConstraintsRequiredFields</a>[]</code> | The list of the task template's required fields. |

---

##### `InvisibleFields`<sup>Optional</sup> <a name="InvisibleFields" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraints.property.invisibleFields"></a>

```csharp
public IResolvable|ConnectTaskTemplateConstraintsInvisibleFields[] InvisibleFields { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFields">ConnectTaskTemplateConstraintsInvisibleFields</a>[]

The list of the task template's invisible fields.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_task_template#invisible_fields ConnectTaskTemplate#invisible_fields}

---

##### `ReadOnlyFields`<sup>Optional</sup> <a name="ReadOnlyFields" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraints.property.readOnlyFields"></a>

```csharp
public IResolvable|ConnectTaskTemplateConstraintsReadOnlyFields[] ReadOnlyFields { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFields">ConnectTaskTemplateConstraintsReadOnlyFields</a>[]

The list of the task template's read only fields.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_task_template#read_only_fields ConnectTaskTemplate#read_only_fields}

---

##### `RequiredFields`<sup>Optional</sup> <a name="RequiredFields" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraints.property.requiredFields"></a>

```csharp
public IResolvable|ConnectTaskTemplateConstraintsRequiredFields[] RequiredFields { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFields">ConnectTaskTemplateConstraintsRequiredFields</a>[]

The list of the task template's required fields.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_task_template#required_fields ConnectTaskTemplate#required_fields}

---

### ConnectTaskTemplateConstraintsInvisibleFields <a name="ConnectTaskTemplateConstraintsInvisibleFields" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFields.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectTaskTemplateConstraintsInvisibleFields {
    ConnectTaskTemplateConstraintsInvisibleFieldsId Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFields.property.id">Id</a></code> | <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsId">ConnectTaskTemplateConstraintsInvisibleFieldsId</a></code> | the identifier (name) for the task template field. |

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFields.property.id"></a>

```csharp
public ConnectTaskTemplateConstraintsInvisibleFieldsId Id { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsId">ConnectTaskTemplateConstraintsInvisibleFieldsId</a>

the identifier (name) for the task template field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_task_template#id ConnectTaskTemplate#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### ConnectTaskTemplateConstraintsInvisibleFieldsId <a name="ConnectTaskTemplateConstraintsInvisibleFieldsId" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsId"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsId.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectTaskTemplateConstraintsInvisibleFieldsId {
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsId.property.name">Name</a></code> | <code>string</code> | The name of the task template field. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsId.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the task template field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_task_template#name ConnectTaskTemplate#name}

---

### ConnectTaskTemplateConstraintsReadOnlyFields <a name="ConnectTaskTemplateConstraintsReadOnlyFields" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFields.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectTaskTemplateConstraintsReadOnlyFields {
    ConnectTaskTemplateConstraintsReadOnlyFieldsId Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFields.property.id">Id</a></code> | <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsId">ConnectTaskTemplateConstraintsReadOnlyFieldsId</a></code> | the identifier (name) for the task template field. |

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFields.property.id"></a>

```csharp
public ConnectTaskTemplateConstraintsReadOnlyFieldsId Id { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsId">ConnectTaskTemplateConstraintsReadOnlyFieldsId</a>

the identifier (name) for the task template field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_task_template#id ConnectTaskTemplate#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### ConnectTaskTemplateConstraintsReadOnlyFieldsId <a name="ConnectTaskTemplateConstraintsReadOnlyFieldsId" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsId"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsId.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectTaskTemplateConstraintsReadOnlyFieldsId {
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsId.property.name">Name</a></code> | <code>string</code> | The name of the task template field. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsId.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the task template field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_task_template#name ConnectTaskTemplate#name}

---

### ConnectTaskTemplateConstraintsRequiredFields <a name="ConnectTaskTemplateConstraintsRequiredFields" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFields.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectTaskTemplateConstraintsRequiredFields {
    ConnectTaskTemplateConstraintsRequiredFieldsId Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFields.property.id">Id</a></code> | <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsId">ConnectTaskTemplateConstraintsRequiredFieldsId</a></code> | the identifier (name) for the task template field. |

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFields.property.id"></a>

```csharp
public ConnectTaskTemplateConstraintsRequiredFieldsId Id { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsId">ConnectTaskTemplateConstraintsRequiredFieldsId</a>

the identifier (name) for the task template field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_task_template#id ConnectTaskTemplate#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### ConnectTaskTemplateConstraintsRequiredFieldsId <a name="ConnectTaskTemplateConstraintsRequiredFieldsId" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsId"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsId.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectTaskTemplateConstraintsRequiredFieldsId {
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsId.property.name">Name</a></code> | <code>string</code> | The name of the task template field. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsId.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the task template field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_task_template#name ConnectTaskTemplate#name}

---

### ConnectTaskTemplateDefaults <a name="ConnectTaskTemplateDefaults" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaults"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaults.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectTaskTemplateDefaults {
    string DefaultValue = null,
    ConnectTaskTemplateDefaultsId Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaults.property.defaultValue">DefaultValue</a></code> | <code>string</code> | the default value for the task template's field. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaults.property.id">Id</a></code> | <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsId">ConnectTaskTemplateDefaultsId</a></code> | the identifier (name) for the task template field. |

---

##### `DefaultValue`<sup>Optional</sup> <a name="DefaultValue" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaults.property.defaultValue"></a>

```csharp
public string DefaultValue { get; set; }
```

- *Type:* string

the default value for the task template's field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_task_template#default_value ConnectTaskTemplate#default_value}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaults.property.id"></a>

```csharp
public ConnectTaskTemplateDefaultsId Id { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsId">ConnectTaskTemplateDefaultsId</a>

the identifier (name) for the task template field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_task_template#id ConnectTaskTemplate#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### ConnectTaskTemplateDefaultsId <a name="ConnectTaskTemplateDefaultsId" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsId"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsId.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectTaskTemplateDefaultsId {
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsId.property.name">Name</a></code> | <code>string</code> | The name of the task template field. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsId.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the task template field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_task_template#name ConnectTaskTemplate#name}

---

### ConnectTaskTemplateFields <a name="ConnectTaskTemplateFields" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFields.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectTaskTemplateFields {
    string Description = null,
    ConnectTaskTemplateFieldsId Id = null,
    string[] SingleSelectOptions = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFields.property.description">Description</a></code> | <code>string</code> | The description of the task template's field. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFields.property.id">Id</a></code> | <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsId">ConnectTaskTemplateFieldsId</a></code> | the identifier (name) for the task template field. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFields.property.singleSelectOptions">SingleSelectOptions</a></code> | <code>string[]</code> | list of field options to be used with single select. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFields.property.type">Type</a></code> | <code>string</code> | The type of the task template's field. |

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFields.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description of the task template's field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_task_template#description ConnectTaskTemplate#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFields.property.id"></a>

```csharp
public ConnectTaskTemplateFieldsId Id { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsId">ConnectTaskTemplateFieldsId</a>

the identifier (name) for the task template field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_task_template#id ConnectTaskTemplate#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `SingleSelectOptions`<sup>Optional</sup> <a name="SingleSelectOptions" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFields.property.singleSelectOptions"></a>

```csharp
public string[] SingleSelectOptions { get; set; }
```

- *Type:* string[]

list of field options to be used with single select.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_task_template#single_select_options ConnectTaskTemplate#single_select_options}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFields.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The type of the task template's field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_task_template#type ConnectTaskTemplate#type}

---

### ConnectTaskTemplateFieldsId <a name="ConnectTaskTemplateFieldsId" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsId"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsId.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectTaskTemplateFieldsId {
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsId.property.name">Name</a></code> | <code>string</code> | The name of the task template field. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsId.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the task template field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_task_template#name ConnectTaskTemplate#name}

---

### ConnectTaskTemplateTags <a name="ConnectTaskTemplateTags" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectTaskTemplateTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_task_template#key ConnectTaskTemplate#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

. You can specify a value that is maximum of 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_task_template#value ConnectTaskTemplate#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference <a name="ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsId">ConnectTaskTemplateConstraintsInvisibleFieldsId</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ConnectTaskTemplateConstraintsInvisibleFieldsId InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsId">ConnectTaskTemplateConstraintsInvisibleFieldsId</a>

---


### ConnectTaskTemplateConstraintsInvisibleFieldsList <a name="ConnectTaskTemplateConstraintsInvisibleFieldsList" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectTaskTemplateConstraintsInvisibleFieldsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsList.get"></a>

```csharp
private ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFields">ConnectTaskTemplateConstraintsInvisibleFields</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsList.property.internalValue"></a>

```csharp
public IResolvable|ConnectTaskTemplateConstraintsInvisibleFields[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFields">ConnectTaskTemplateConstraintsInvisibleFields</a>[]

---


### ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference <a name="ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.putId">PutId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.resetId">ResetId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutId` <a name="PutId" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.putId"></a>

```csharp
private void PutId(ConnectTaskTemplateConstraintsInvisibleFieldsId Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.putId.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsId">ConnectTaskTemplateConstraintsInvisibleFieldsId</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.resetId"></a>

```csharp
private void ResetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.property.id">Id</a></code> | <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference">ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.property.idInput">IdInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsId">ConnectTaskTemplateConstraintsInvisibleFieldsId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFields">ConnectTaskTemplateConstraintsInvisibleFields</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.property.id"></a>

```csharp
public ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference Id { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference">ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.property.idInput"></a>

```csharp
public IResolvable|ConnectTaskTemplateConstraintsInvisibleFieldsId IdInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsId">ConnectTaskTemplateConstraintsInvisibleFieldsId</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ConnectTaskTemplateConstraintsInvisibleFields InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFields">ConnectTaskTemplateConstraintsInvisibleFields</a>

---


### ConnectTaskTemplateConstraintsOutputReference <a name="ConnectTaskTemplateConstraintsOutputReference" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectTaskTemplateConstraintsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.putInvisibleFields">PutInvisibleFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.putReadOnlyFields">PutReadOnlyFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.putRequiredFields">PutRequiredFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.resetInvisibleFields">ResetInvisibleFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.resetReadOnlyFields">ResetReadOnlyFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.resetRequiredFields">ResetRequiredFields</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInvisibleFields` <a name="PutInvisibleFields" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.putInvisibleFields"></a>

```csharp
private void PutInvisibleFields(IResolvable|ConnectTaskTemplateConstraintsInvisibleFields[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.putInvisibleFields.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFields">ConnectTaskTemplateConstraintsInvisibleFields</a>[]

---

##### `PutReadOnlyFields` <a name="PutReadOnlyFields" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.putReadOnlyFields"></a>

```csharp
private void PutReadOnlyFields(IResolvable|ConnectTaskTemplateConstraintsReadOnlyFields[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.putReadOnlyFields.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFields">ConnectTaskTemplateConstraintsReadOnlyFields</a>[]

---

##### `PutRequiredFields` <a name="PutRequiredFields" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.putRequiredFields"></a>

```csharp
private void PutRequiredFields(IResolvable|ConnectTaskTemplateConstraintsRequiredFields[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.putRequiredFields.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFields">ConnectTaskTemplateConstraintsRequiredFields</a>[]

---

##### `ResetInvisibleFields` <a name="ResetInvisibleFields" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.resetInvisibleFields"></a>

```csharp
private void ResetInvisibleFields()
```

##### `ResetReadOnlyFields` <a name="ResetReadOnlyFields" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.resetReadOnlyFields"></a>

```csharp
private void ResetReadOnlyFields()
```

##### `ResetRequiredFields` <a name="ResetRequiredFields" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.resetRequiredFields"></a>

```csharp
private void ResetRequiredFields()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.property.invisibleFields">InvisibleFields</a></code> | <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsList">ConnectTaskTemplateConstraintsInvisibleFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.property.readOnlyFields">ReadOnlyFields</a></code> | <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsList">ConnectTaskTemplateConstraintsReadOnlyFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.property.requiredFields">RequiredFields</a></code> | <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsList">ConnectTaskTemplateConstraintsRequiredFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.property.invisibleFieldsInput">InvisibleFieldsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFields">ConnectTaskTemplateConstraintsInvisibleFields</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.property.readOnlyFieldsInput">ReadOnlyFieldsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFields">ConnectTaskTemplateConstraintsReadOnlyFields</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.property.requiredFieldsInput">RequiredFieldsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFields">ConnectTaskTemplateConstraintsRequiredFields</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraints">ConnectTaskTemplateConstraints</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InvisibleFields`<sup>Required</sup> <a name="InvisibleFields" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.property.invisibleFields"></a>

```csharp
public ConnectTaskTemplateConstraintsInvisibleFieldsList InvisibleFields { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsList">ConnectTaskTemplateConstraintsInvisibleFieldsList</a>

---

##### `ReadOnlyFields`<sup>Required</sup> <a name="ReadOnlyFields" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.property.readOnlyFields"></a>

```csharp
public ConnectTaskTemplateConstraintsReadOnlyFieldsList ReadOnlyFields { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsList">ConnectTaskTemplateConstraintsReadOnlyFieldsList</a>

---

##### `RequiredFields`<sup>Required</sup> <a name="RequiredFields" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.property.requiredFields"></a>

```csharp
public ConnectTaskTemplateConstraintsRequiredFieldsList RequiredFields { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsList">ConnectTaskTemplateConstraintsRequiredFieldsList</a>

---

##### `InvisibleFieldsInput`<sup>Optional</sup> <a name="InvisibleFieldsInput" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.property.invisibleFieldsInput"></a>

```csharp
public IResolvable|ConnectTaskTemplateConstraintsInvisibleFields[] InvisibleFieldsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFields">ConnectTaskTemplateConstraintsInvisibleFields</a>[]

---

##### `ReadOnlyFieldsInput`<sup>Optional</sup> <a name="ReadOnlyFieldsInput" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.property.readOnlyFieldsInput"></a>

```csharp
public IResolvable|ConnectTaskTemplateConstraintsReadOnlyFields[] ReadOnlyFieldsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFields">ConnectTaskTemplateConstraintsReadOnlyFields</a>[]

---

##### `RequiredFieldsInput`<sup>Optional</sup> <a name="RequiredFieldsInput" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.property.requiredFieldsInput"></a>

```csharp
public IResolvable|ConnectTaskTemplateConstraintsRequiredFields[] RequiredFieldsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFields">ConnectTaskTemplateConstraintsRequiredFields</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ConnectTaskTemplateConstraints InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraints">ConnectTaskTemplateConstraints</a>

---


### ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference <a name="ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsId">ConnectTaskTemplateConstraintsReadOnlyFieldsId</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ConnectTaskTemplateConstraintsReadOnlyFieldsId InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsId">ConnectTaskTemplateConstraintsReadOnlyFieldsId</a>

---


### ConnectTaskTemplateConstraintsReadOnlyFieldsList <a name="ConnectTaskTemplateConstraintsReadOnlyFieldsList" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectTaskTemplateConstraintsReadOnlyFieldsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsList.get"></a>

```csharp
private ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFields">ConnectTaskTemplateConstraintsReadOnlyFields</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsList.property.internalValue"></a>

```csharp
public IResolvable|ConnectTaskTemplateConstraintsReadOnlyFields[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFields">ConnectTaskTemplateConstraintsReadOnlyFields</a>[]

---


### ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference <a name="ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.putId">PutId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.resetId">ResetId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutId` <a name="PutId" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.putId"></a>

```csharp
private void PutId(ConnectTaskTemplateConstraintsReadOnlyFieldsId Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.putId.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsId">ConnectTaskTemplateConstraintsReadOnlyFieldsId</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.resetId"></a>

```csharp
private void ResetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.property.id">Id</a></code> | <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference">ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.property.idInput">IdInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsId">ConnectTaskTemplateConstraintsReadOnlyFieldsId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFields">ConnectTaskTemplateConstraintsReadOnlyFields</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.property.id"></a>

```csharp
public ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference Id { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference">ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.property.idInput"></a>

```csharp
public IResolvable|ConnectTaskTemplateConstraintsReadOnlyFieldsId IdInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsId">ConnectTaskTemplateConstraintsReadOnlyFieldsId</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ConnectTaskTemplateConstraintsReadOnlyFields InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFields">ConnectTaskTemplateConstraintsReadOnlyFields</a>

---


### ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference <a name="ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsId">ConnectTaskTemplateConstraintsRequiredFieldsId</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ConnectTaskTemplateConstraintsRequiredFieldsId InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsId">ConnectTaskTemplateConstraintsRequiredFieldsId</a>

---


### ConnectTaskTemplateConstraintsRequiredFieldsList <a name="ConnectTaskTemplateConstraintsRequiredFieldsList" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectTaskTemplateConstraintsRequiredFieldsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsList.get"></a>

```csharp
private ConnectTaskTemplateConstraintsRequiredFieldsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFields">ConnectTaskTemplateConstraintsRequiredFields</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsList.property.internalValue"></a>

```csharp
public IResolvable|ConnectTaskTemplateConstraintsRequiredFields[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFields">ConnectTaskTemplateConstraintsRequiredFields</a>[]

---


### ConnectTaskTemplateConstraintsRequiredFieldsOutputReference <a name="ConnectTaskTemplateConstraintsRequiredFieldsOutputReference" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectTaskTemplateConstraintsRequiredFieldsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.putId">PutId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.resetId">ResetId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutId` <a name="PutId" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.putId"></a>

```csharp
private void PutId(ConnectTaskTemplateConstraintsRequiredFieldsId Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.putId.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsId">ConnectTaskTemplateConstraintsRequiredFieldsId</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.resetId"></a>

```csharp
private void ResetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.property.id">Id</a></code> | <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference">ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.property.idInput">IdInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsId">ConnectTaskTemplateConstraintsRequiredFieldsId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFields">ConnectTaskTemplateConstraintsRequiredFields</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.property.id"></a>

```csharp
public ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference Id { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference">ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.property.idInput"></a>

```csharp
public IResolvable|ConnectTaskTemplateConstraintsRequiredFieldsId IdInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsId">ConnectTaskTemplateConstraintsRequiredFieldsId</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ConnectTaskTemplateConstraintsRequiredFields InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFields">ConnectTaskTemplateConstraintsRequiredFields</a>

---


### ConnectTaskTemplateDefaultsIdOutputReference <a name="ConnectTaskTemplateDefaultsIdOutputReference" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectTaskTemplateDefaultsIdOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsId">ConnectTaskTemplateDefaultsId</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ConnectTaskTemplateDefaultsId InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsId">ConnectTaskTemplateDefaultsId</a>

---


### ConnectTaskTemplateDefaultsList <a name="ConnectTaskTemplateDefaultsList" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectTaskTemplateDefaultsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsList.get"></a>

```csharp
private ConnectTaskTemplateDefaultsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaults">ConnectTaskTemplateDefaults</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsList.property.internalValue"></a>

```csharp
public IResolvable|ConnectTaskTemplateDefaults[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaults">ConnectTaskTemplateDefaults</a>[]

---


### ConnectTaskTemplateDefaultsOutputReference <a name="ConnectTaskTemplateDefaultsOutputReference" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectTaskTemplateDefaultsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.putId">PutId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.resetDefaultValue">ResetDefaultValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.resetId">ResetId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutId` <a name="PutId" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.putId"></a>

```csharp
private void PutId(ConnectTaskTemplateDefaultsId Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.putId.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsId">ConnectTaskTemplateDefaultsId</a>

---

##### `ResetDefaultValue` <a name="ResetDefaultValue" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.resetDefaultValue"></a>

```csharp
private void ResetDefaultValue()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.resetId"></a>

```csharp
private void ResetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.property.id">Id</a></code> | <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference">ConnectTaskTemplateDefaultsIdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.property.defaultValueInput">DefaultValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.property.idInput">IdInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsId">ConnectTaskTemplateDefaultsId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.property.defaultValue">DefaultValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaults">ConnectTaskTemplateDefaults</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.property.id"></a>

```csharp
public ConnectTaskTemplateDefaultsIdOutputReference Id { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference">ConnectTaskTemplateDefaultsIdOutputReference</a>

---

##### `DefaultValueInput`<sup>Optional</sup> <a name="DefaultValueInput" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.property.defaultValueInput"></a>

```csharp
public string DefaultValueInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.property.idInput"></a>

```csharp
public IResolvable|ConnectTaskTemplateDefaultsId IdInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsId">ConnectTaskTemplateDefaultsId</a>

---

##### `DefaultValue`<sup>Required</sup> <a name="DefaultValue" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.property.defaultValue"></a>

```csharp
public string DefaultValue { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ConnectTaskTemplateDefaults InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaults">ConnectTaskTemplateDefaults</a>

---


### ConnectTaskTemplateFieldsIdOutputReference <a name="ConnectTaskTemplateFieldsIdOutputReference" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectTaskTemplateFieldsIdOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsId">ConnectTaskTemplateFieldsId</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ConnectTaskTemplateFieldsId InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsId">ConnectTaskTemplateFieldsId</a>

---


### ConnectTaskTemplateFieldsList <a name="ConnectTaskTemplateFieldsList" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectTaskTemplateFieldsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsList.get"></a>

```csharp
private ConnectTaskTemplateFieldsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFields">ConnectTaskTemplateFields</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsList.property.internalValue"></a>

```csharp
public IResolvable|ConnectTaskTemplateFields[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFields">ConnectTaskTemplateFields</a>[]

---


### ConnectTaskTemplateFieldsOutputReference <a name="ConnectTaskTemplateFieldsOutputReference" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectTaskTemplateFieldsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.putId">PutId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.resetSingleSelectOptions">ResetSingleSelectOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutId` <a name="PutId" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.putId"></a>

```csharp
private void PutId(ConnectTaskTemplateFieldsId Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.putId.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsId">ConnectTaskTemplateFieldsId</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetSingleSelectOptions` <a name="ResetSingleSelectOptions" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.resetSingleSelectOptions"></a>

```csharp
private void ResetSingleSelectOptions()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.property.id">Id</a></code> | <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference">ConnectTaskTemplateFieldsIdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.property.idInput">IdInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsId">ConnectTaskTemplateFieldsId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.property.singleSelectOptionsInput">SingleSelectOptionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.property.singleSelectOptions">SingleSelectOptions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFields">ConnectTaskTemplateFields</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.property.id"></a>

```csharp
public ConnectTaskTemplateFieldsIdOutputReference Id { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference">ConnectTaskTemplateFieldsIdOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.property.idInput"></a>

```csharp
public IResolvable|ConnectTaskTemplateFieldsId IdInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsId">ConnectTaskTemplateFieldsId</a>

---

##### `SingleSelectOptionsInput`<sup>Optional</sup> <a name="SingleSelectOptionsInput" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.property.singleSelectOptionsInput"></a>

```csharp
public string[] SingleSelectOptionsInput { get; }
```

- *Type:* string[]

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `SingleSelectOptions`<sup>Required</sup> <a name="SingleSelectOptions" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.property.singleSelectOptions"></a>

```csharp
public string[] SingleSelectOptions { get; }
```

- *Type:* string[]

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ConnectTaskTemplateFields InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFields">ConnectTaskTemplateFields</a>

---


### ConnectTaskTemplateTagsList <a name="ConnectTaskTemplateTagsList" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectTaskTemplateTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsList.get"></a>

```csharp
private ConnectTaskTemplateTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTags">ConnectTaskTemplateTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsList.property.internalValue"></a>

```csharp
public IResolvable|ConnectTaskTemplateTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTags">ConnectTaskTemplateTags</a>[]

---


### ConnectTaskTemplateTagsOutputReference <a name="ConnectTaskTemplateTagsOutputReference" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectTaskTemplateTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTags">ConnectTaskTemplateTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ConnectTaskTemplateTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTags">ConnectTaskTemplateTags</a>

---



