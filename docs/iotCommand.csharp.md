# `iotCommand` Submodule <a name="`iotCommand` Submodule" id="@cdktn/provider-awscc.iotCommand"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotCommand <a name="IotCommand" id="@cdktn/provider-awscc.iotCommand.IotCommand"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_command awscc_iot_command}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotCommand.IotCommand.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotCommand(Construct Scope, string Id, IotCommandConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandConfig">IotCommandConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.iotCommand.IotCommand.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iotCommand.IotCommand.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.iotCommand.IotCommand.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotCommand.IotCommandConfig">IotCommandConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.putMandatoryParameters">PutMandatoryParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.putPayload">PutPayload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.putPreprocessor">PutPreprocessor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.resetCreatedAt">ResetCreatedAt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.resetDeprecated">ResetDeprecated</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.resetLastUpdatedAt">ResetLastUpdatedAt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.resetMandatoryParameters">ResetMandatoryParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.resetPayload">ResetPayload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.resetPayloadTemplate">ResetPayloadTemplate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.resetPendingDeletion">ResetPendingDeletion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.resetPreprocessor">ResetPreprocessor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.resetRoleArn">ResetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotCommand.IotCommand.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.iotCommand.IotCommand.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.iotCommand.IotCommand.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.iotCommand.IotCommand.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.iotCommand.IotCommand.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotCommand.IotCommand.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.iotCommand.IotCommand.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.iotCommand.IotCommand.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.iotCommand.IotCommand.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.iotCommand.IotCommand.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.iotCommand.IotCommand.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.iotCommand.IotCommand.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.iotCommand.IotCommand.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.iotCommand.IotCommand.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommand.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommand.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommand.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommand.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommand.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommand.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommand.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommand.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommand.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommand.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommand.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommand.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommand.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommand.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommand.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommand.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommand.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommand.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.iotCommand.IotCommand.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.iotCommand.IotCommand.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iotCommand.IotCommand.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.iotCommand.IotCommand.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommand.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommand.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.iotCommand.IotCommand.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iotCommand.IotCommand.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.iotCommand.IotCommand.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.iotCommand.IotCommand.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.iotCommand.IotCommand.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.iotCommand.IotCommand.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iotCommand.IotCommand.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutMandatoryParameters` <a name="PutMandatoryParameters" id="@cdktn/provider-awscc.iotCommand.IotCommand.putMandatoryParameters"></a>

```csharp
private void PutMandatoryParameters(IResolvable|IotCommandMandatoryParameters[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotCommand.IotCommand.putMandatoryParameters.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParameters">IotCommandMandatoryParameters</a>[]

---

##### `PutPayload` <a name="PutPayload" id="@cdktn/provider-awscc.iotCommand.IotCommand.putPayload"></a>

```csharp
private void PutPayload(IotCommandPayload Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotCommand.IotCommand.putPayload.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayload">IotCommandPayload</a>

---

##### `PutPreprocessor` <a name="PutPreprocessor" id="@cdktn/provider-awscc.iotCommand.IotCommand.putPreprocessor"></a>

```csharp
private void PutPreprocessor(IotCommandPreprocessor Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotCommand.IotCommand.putPreprocessor.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessor">IotCommandPreprocessor</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.iotCommand.IotCommand.putTags"></a>

```csharp
private void PutTags(IResolvable|IotCommandTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotCommand.IotCommand.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotCommand.IotCommandTags">IotCommandTags</a>[]

---

##### `ResetCreatedAt` <a name="ResetCreatedAt" id="@cdktn/provider-awscc.iotCommand.IotCommand.resetCreatedAt"></a>

```csharp
private void ResetCreatedAt()
```

##### `ResetDeprecated` <a name="ResetDeprecated" id="@cdktn/provider-awscc.iotCommand.IotCommand.resetDeprecated"></a>

```csharp
private void ResetDeprecated()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.iotCommand.IotCommand.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-awscc.iotCommand.IotCommand.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetLastUpdatedAt` <a name="ResetLastUpdatedAt" id="@cdktn/provider-awscc.iotCommand.IotCommand.resetLastUpdatedAt"></a>

```csharp
private void ResetLastUpdatedAt()
```

##### `ResetMandatoryParameters` <a name="ResetMandatoryParameters" id="@cdktn/provider-awscc.iotCommand.IotCommand.resetMandatoryParameters"></a>

```csharp
private void ResetMandatoryParameters()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-awscc.iotCommand.IotCommand.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetPayload` <a name="ResetPayload" id="@cdktn/provider-awscc.iotCommand.IotCommand.resetPayload"></a>

```csharp
private void ResetPayload()
```

##### `ResetPayloadTemplate` <a name="ResetPayloadTemplate" id="@cdktn/provider-awscc.iotCommand.IotCommand.resetPayloadTemplate"></a>

```csharp
private void ResetPayloadTemplate()
```

##### `ResetPendingDeletion` <a name="ResetPendingDeletion" id="@cdktn/provider-awscc.iotCommand.IotCommand.resetPendingDeletion"></a>

```csharp
private void ResetPendingDeletion()
```

##### `ResetPreprocessor` <a name="ResetPreprocessor" id="@cdktn/provider-awscc.iotCommand.IotCommand.resetPreprocessor"></a>

```csharp
private void ResetPreprocessor()
```

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktn/provider-awscc.iotCommand.IotCommand.resetRoleArn"></a>

```csharp
private void ResetRoleArn()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.iotCommand.IotCommand.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a IotCommand resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.iotCommand.IotCommand.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

IotCommand.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.iotCommand.IotCommand.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.iotCommand.IotCommand.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

IotCommand.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.iotCommand.IotCommand.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.iotCommand.IotCommand.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

IotCommand.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.iotCommand.IotCommand.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.iotCommand.IotCommand.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

IotCommand.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a IotCommand resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.iotCommand.IotCommand.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.iotCommand.IotCommand.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IotCommand to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.iotCommand.IotCommand.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IotCommand that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_command#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.iotCommand.IotCommand.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the IotCommand to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.commandArn">CommandArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.mandatoryParameters">MandatoryParameters</a></code> | <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList">IotCommandMandatoryParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.payload">Payload</a></code> | <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference">IotCommandPayloadOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.preprocessor">Preprocessor</a></code> | <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference">IotCommandPreprocessorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsList">IotCommandTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.commandIdInput">CommandIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.createdAtInput">CreatedAtInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.deprecatedInput">DeprecatedInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.lastUpdatedAtInput">LastUpdatedAtInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.mandatoryParametersInput">MandatoryParametersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParameters">IotCommandMandatoryParameters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.payloadInput">PayloadInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayload">IotCommandPayload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.payloadTemplateInput">PayloadTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.pendingDeletionInput">PendingDeletionInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.preprocessorInput">PreprocessorInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessor">IotCommandPreprocessor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotCommand.IotCommandTags">IotCommandTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.commandId">CommandId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.deprecated">Deprecated</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.lastUpdatedAt">LastUpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.payloadTemplate">PayloadTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.pendingDeletion">PendingDeletion</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CommandArn`<sup>Required</sup> <a name="CommandArn" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.commandArn"></a>

```csharp
public string CommandArn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MandatoryParameters`<sup>Required</sup> <a name="MandatoryParameters" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.mandatoryParameters"></a>

```csharp
public IotCommandMandatoryParametersList MandatoryParameters { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList">IotCommandMandatoryParametersList</a>

---

##### `Payload`<sup>Required</sup> <a name="Payload" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.payload"></a>

```csharp
public IotCommandPayloadOutputReference Payload { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference">IotCommandPayloadOutputReference</a>

---

##### `Preprocessor`<sup>Required</sup> <a name="Preprocessor" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.preprocessor"></a>

```csharp
public IotCommandPreprocessorOutputReference Preprocessor { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference">IotCommandPreprocessorOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.tags"></a>

```csharp
public IotCommandTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsList">IotCommandTagsList</a>

---

##### `CommandIdInput`<sup>Optional</sup> <a name="CommandIdInput" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.commandIdInput"></a>

```csharp
public string CommandIdInput { get; }
```

- *Type:* string

---

##### `CreatedAtInput`<sup>Optional</sup> <a name="CreatedAtInput" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.createdAtInput"></a>

```csharp
public string CreatedAtInput { get; }
```

- *Type:* string

---

##### `DeprecatedInput`<sup>Optional</sup> <a name="DeprecatedInput" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.deprecatedInput"></a>

```csharp
public bool|IResolvable DeprecatedInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `LastUpdatedAtInput`<sup>Optional</sup> <a name="LastUpdatedAtInput" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.lastUpdatedAtInput"></a>

```csharp
public string LastUpdatedAtInput { get; }
```

- *Type:* string

---

##### `MandatoryParametersInput`<sup>Optional</sup> <a name="MandatoryParametersInput" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.mandatoryParametersInput"></a>

```csharp
public IResolvable|IotCommandMandatoryParameters[] MandatoryParametersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParameters">IotCommandMandatoryParameters</a>[]

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `PayloadInput`<sup>Optional</sup> <a name="PayloadInput" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.payloadInput"></a>

```csharp
public IResolvable|IotCommandPayload PayloadInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayload">IotCommandPayload</a>

---

##### `PayloadTemplateInput`<sup>Optional</sup> <a name="PayloadTemplateInput" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.payloadTemplateInput"></a>

```csharp
public string PayloadTemplateInput { get; }
```

- *Type:* string

---

##### `PendingDeletionInput`<sup>Optional</sup> <a name="PendingDeletionInput" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.pendingDeletionInput"></a>

```csharp
public bool|IResolvable PendingDeletionInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PreprocessorInput`<sup>Optional</sup> <a name="PreprocessorInput" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.preprocessorInput"></a>

```csharp
public IResolvable|IotCommandPreprocessor PreprocessorInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessor">IotCommandPreprocessor</a>

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.tagsInput"></a>

```csharp
public IResolvable|IotCommandTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotCommand.IotCommandTags">IotCommandTags</a>[]

---

##### `CommandId`<sup>Required</sup> <a name="CommandId" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.commandId"></a>

```csharp
public string CommandId { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Deprecated`<sup>Required</sup> <a name="Deprecated" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.deprecated"></a>

```csharp
public bool|IResolvable Deprecated { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `LastUpdatedAt`<sup>Required</sup> <a name="LastUpdatedAt" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.lastUpdatedAt"></a>

```csharp
public string LastUpdatedAt { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `PayloadTemplate`<sup>Required</sup> <a name="PayloadTemplate" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.payloadTemplate"></a>

```csharp
public string PayloadTemplate { get; }
```

- *Type:* string

---

##### `PendingDeletion`<sup>Required</sup> <a name="PendingDeletion" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.pendingDeletion"></a>

```csharp
public bool|IResolvable PendingDeletion { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IotCommandConfig <a name="IotCommandConfig" id="@cdktn/provider-awscc.iotCommand.IotCommandConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotCommand.IotCommandConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotCommandConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string CommandId,
    string CreatedAt = null,
    bool|IResolvable Deprecated = null,
    string Description = null,
    string DisplayName = null,
    string LastUpdatedAt = null,
    IResolvable|IotCommandMandatoryParameters[] MandatoryParameters = null,
    string Namespace = null,
    IotCommandPayload Payload = null,
    string PayloadTemplate = null,
    bool|IResolvable PendingDeletion = null,
    IotCommandPreprocessor Preprocessor = null,
    string RoleArn = null,
    IResolvable|IotCommandTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.commandId">CommandId</a></code> | <code>string</code> | The unique identifier for the command. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.createdAt">CreatedAt</a></code> | <code>string</code> | The date and time when the command was created. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.deprecated">Deprecated</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | A flag indicating whether the command is deprecated. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.description">Description</a></code> | <code>string</code> | The description of the command. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.displayName">DisplayName</a></code> | <code>string</code> | The display name for the command. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.lastUpdatedAt">LastUpdatedAt</a></code> | <code>string</code> | The date and time when the command was last updated. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.mandatoryParameters">MandatoryParameters</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParameters">IotCommandMandatoryParameters</a>[]</code> | The list of mandatory parameters for the command. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.namespace">Namespace</a></code> | <code>string</code> | The namespace to which the command belongs. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.payload">Payload</a></code> | <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayload">IotCommandPayload</a></code> | The payload associated with the command. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.payloadTemplate">PayloadTemplate</a></code> | <code>string</code> | The payload template associated with the command. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.pendingDeletion">PendingDeletion</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | A flag indicating whether the command is pending deletion. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.preprocessor">Preprocessor</a></code> | <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessor">IotCommandPreprocessor</a></code> | The command preprocessor configuration. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.roleArn">RoleArn</a></code> | <code>string</code> | The customer role associated with the command. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotCommand.IotCommandTags">IotCommandTags</a>[]</code> | The tags to be associated with the command. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CommandId`<sup>Required</sup> <a name="CommandId" id="@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.commandId"></a>

```csharp
public string CommandId { get; set; }
```

- *Type:* string

The unique identifier for the command.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_command#command_id IotCommand#command_id}

---

##### `CreatedAt`<sup>Optional</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.createdAt"></a>

```csharp
public string CreatedAt { get; set; }
```

- *Type:* string

The date and time when the command was created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_command#created_at IotCommand#created_at}

---

##### `Deprecated`<sup>Optional</sup> <a name="Deprecated" id="@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.deprecated"></a>

```csharp
public bool|IResolvable Deprecated { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

A flag indicating whether the command is deprecated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_command#deprecated IotCommand#deprecated}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description of the command.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_command#description IotCommand#description}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

The display name for the command.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_command#display_name IotCommand#display_name}

---

##### `LastUpdatedAt`<sup>Optional</sup> <a name="LastUpdatedAt" id="@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.lastUpdatedAt"></a>

```csharp
public string LastUpdatedAt { get; set; }
```

- *Type:* string

The date and time when the command was last updated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_command#last_updated_at IotCommand#last_updated_at}

---

##### `MandatoryParameters`<sup>Optional</sup> <a name="MandatoryParameters" id="@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.mandatoryParameters"></a>

```csharp
public IResolvable|IotCommandMandatoryParameters[] MandatoryParameters { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParameters">IotCommandMandatoryParameters</a>[]

The list of mandatory parameters for the command.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_command#mandatory_parameters IotCommand#mandatory_parameters}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

The namespace to which the command belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_command#namespace IotCommand#namespace}

---

##### `Payload`<sup>Optional</sup> <a name="Payload" id="@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.payload"></a>

```csharp
public IotCommandPayload Payload { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayload">IotCommandPayload</a>

The payload associated with the command.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_command#payload IotCommand#payload}

---

##### `PayloadTemplate`<sup>Optional</sup> <a name="PayloadTemplate" id="@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.payloadTemplate"></a>

```csharp
public string PayloadTemplate { get; set; }
```

- *Type:* string

The payload template associated with the command.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_command#payload_template IotCommand#payload_template}

---

##### `PendingDeletion`<sup>Optional</sup> <a name="PendingDeletion" id="@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.pendingDeletion"></a>

```csharp
public bool|IResolvable PendingDeletion { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

A flag indicating whether the command is pending deletion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_command#pending_deletion IotCommand#pending_deletion}

---

##### `Preprocessor`<sup>Optional</sup> <a name="Preprocessor" id="@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.preprocessor"></a>

```csharp
public IotCommandPreprocessor Preprocessor { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessor">IotCommandPreprocessor</a>

The command preprocessor configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_command#preprocessor IotCommand#preprocessor}

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

The customer role associated with the command.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_command#role_arn IotCommand#role_arn}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.tags"></a>

```csharp
public IResolvable|IotCommandTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotCommand.IotCommandTags">IotCommandTags</a>[]

The tags to be associated with the command.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_command#tags IotCommand#tags}

---

### IotCommandMandatoryParameters <a name="IotCommandMandatoryParameters" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParameters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotCommandMandatoryParameters {
    IotCommandMandatoryParametersDefaultValue DefaultValue = null,
    string Description = null,
    string Name = null,
    string Type = null,
    IotCommandMandatoryParametersValue Value = null,
    IResolvable|IotCommandMandatoryParametersValueConditions[] ValueConditions = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParameters.property.defaultValue">DefaultValue</a></code> | <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValue">IotCommandMandatoryParametersDefaultValue</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_command#default_value IotCommand#default_value}. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParameters.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_command#description IotCommand#description}. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParameters.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_command#name IotCommand#name}. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParameters.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_command#type IotCommand#type}. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParameters.property.value">Value</a></code> | <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValue">IotCommandMandatoryParametersValue</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_command#value IotCommand#value}. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParameters.property.valueConditions">ValueConditions</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditions">IotCommandMandatoryParametersValueConditions</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_command#value_conditions IotCommand#value_conditions}. |

---

##### `DefaultValue`<sup>Optional</sup> <a name="DefaultValue" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParameters.property.defaultValue"></a>

```csharp
public IotCommandMandatoryParametersDefaultValue DefaultValue { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValue">IotCommandMandatoryParametersDefaultValue</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_command#default_value IotCommand#default_value}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParameters.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_command#description IotCommand#description}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParameters.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_command#name IotCommand#name}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParameters.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_command#type IotCommand#type}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParameters.property.value"></a>

```csharp
public IotCommandMandatoryParametersValue Value { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValue">IotCommandMandatoryParametersValue</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_command#value IotCommand#value}.

---

##### `ValueConditions`<sup>Optional</sup> <a name="ValueConditions" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParameters.property.valueConditions"></a>

```csharp
public IResolvable|IotCommandMandatoryParametersValueConditions[] ValueConditions { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditions">IotCommandMandatoryParametersValueConditions</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_command#value_conditions IotCommand#value_conditions}.

---

### IotCommandMandatoryParametersDefaultValue <a name="IotCommandMandatoryParametersDefaultValue" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValue.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotCommandMandatoryParametersDefaultValue {
    bool|IResolvable B = null,
    string Bin = null,
    double D = null,
    double I = null,
    string L = null,
    string S = null,
    string Ul = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValue.property.b">B</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_command#b IotCommand#b}. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValue.property.bin">Bin</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_command#bin IotCommand#bin}. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValue.property.d">D</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_command#d IotCommand#d}. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValue.property.i">I</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_command#i IotCommand#i}. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValue.property.l">L</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_command#l IotCommand#l}. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValue.property.s">S</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_command#s IotCommand#s}. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValue.property.ul">Ul</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_command#ul IotCommand#ul}. |

---

##### `B`<sup>Optional</sup> <a name="B" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValue.property.b"></a>

```csharp
public bool|IResolvable B { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_command#b IotCommand#b}.

---

##### `Bin`<sup>Optional</sup> <a name="Bin" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValue.property.bin"></a>

```csharp
public string Bin { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_command#bin IotCommand#bin}.

---

##### `D`<sup>Optional</sup> <a name="D" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValue.property.d"></a>

```csharp
public double D { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_command#d IotCommand#d}.

---

##### `I`<sup>Optional</sup> <a name="I" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValue.property.i"></a>

```csharp
public double I { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_command#i IotCommand#i}.

---

##### `L`<sup>Optional</sup> <a name="L" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValue.property.l"></a>

```csharp
public string L { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_command#l IotCommand#l}.

---

##### `S`<sup>Optional</sup> <a name="S" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValue.property.s"></a>

```csharp
public string S { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_command#s IotCommand#s}.

---

##### `Ul`<sup>Optional</sup> <a name="Ul" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValue.property.ul"></a>

```csharp
public string Ul { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_command#ul IotCommand#ul}.

---

### IotCommandMandatoryParametersValue <a name="IotCommandMandatoryParametersValue" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValue.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotCommandMandatoryParametersValue {
    bool|IResolvable B = null,
    string Bin = null,
    double D = null,
    double I = null,
    string L = null,
    string S = null,
    string Ul = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValue.property.b">B</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_command#b IotCommand#b}. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValue.property.bin">Bin</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_command#bin IotCommand#bin}. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValue.property.d">D</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_command#d IotCommand#d}. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValue.property.i">I</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_command#i IotCommand#i}. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValue.property.l">L</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_command#l IotCommand#l}. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValue.property.s">S</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_command#s IotCommand#s}. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValue.property.ul">Ul</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_command#ul IotCommand#ul}. |

---

##### `B`<sup>Optional</sup> <a name="B" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValue.property.b"></a>

```csharp
public bool|IResolvable B { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_command#b IotCommand#b}.

---

##### `Bin`<sup>Optional</sup> <a name="Bin" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValue.property.bin"></a>

```csharp
public string Bin { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_command#bin IotCommand#bin}.

---

##### `D`<sup>Optional</sup> <a name="D" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValue.property.d"></a>

```csharp
public double D { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_command#d IotCommand#d}.

---

##### `I`<sup>Optional</sup> <a name="I" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValue.property.i"></a>

```csharp
public double I { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_command#i IotCommand#i}.

---

##### `L`<sup>Optional</sup> <a name="L" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValue.property.l"></a>

```csharp
public string L { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_command#l IotCommand#l}.

---

##### `S`<sup>Optional</sup> <a name="S" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValue.property.s"></a>

```csharp
public string S { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_command#s IotCommand#s}.

---

##### `Ul`<sup>Optional</sup> <a name="Ul" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValue.property.ul"></a>

```csharp
public string Ul { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_command#ul IotCommand#ul}.

---

### IotCommandMandatoryParametersValueConditions <a name="IotCommandMandatoryParametersValueConditions" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotCommandMandatoryParametersValueConditions {
    string ComparisonOperator = null,
    IotCommandMandatoryParametersValueConditionsOperand Operand = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditions.property.comparisonOperator">ComparisonOperator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_command#comparison_operator IotCommand#comparison_operator}. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditions.property.operand">Operand</a></code> | <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperand">IotCommandMandatoryParametersValueConditionsOperand</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_command#operand IotCommand#operand}. |

---

##### `ComparisonOperator`<sup>Optional</sup> <a name="ComparisonOperator" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditions.property.comparisonOperator"></a>

```csharp
public string ComparisonOperator { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_command#comparison_operator IotCommand#comparison_operator}.

---

##### `Operand`<sup>Optional</sup> <a name="Operand" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditions.property.operand"></a>

```csharp
public IotCommandMandatoryParametersValueConditionsOperand Operand { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperand">IotCommandMandatoryParametersValueConditionsOperand</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_command#operand IotCommand#operand}.

---

### IotCommandMandatoryParametersValueConditionsOperand <a name="IotCommandMandatoryParametersValueConditionsOperand" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperand"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperand.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotCommandMandatoryParametersValueConditionsOperand {
    string Number = null,
    IotCommandMandatoryParametersValueConditionsOperandNumberRange NumberRange = null,
    string[] Numbers = null,
    string String = null,
    string[] Strings = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperand.property.number">Number</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_command#number IotCommand#number}. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperand.property.numberRange">NumberRange</a></code> | <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRange">IotCommandMandatoryParametersValueConditionsOperandNumberRange</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_command#number_range IotCommand#number_range}. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperand.property.numbers">Numbers</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_command#numbers IotCommand#numbers}. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperand.property.string">String</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_command#string IotCommand#string}. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperand.property.strings">Strings</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_command#strings IotCommand#strings}. |

---

##### `Number`<sup>Optional</sup> <a name="Number" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperand.property.number"></a>

```csharp
public string Number { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_command#number IotCommand#number}.

---

##### `NumberRange`<sup>Optional</sup> <a name="NumberRange" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperand.property.numberRange"></a>

```csharp
public IotCommandMandatoryParametersValueConditionsOperandNumberRange NumberRange { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRange">IotCommandMandatoryParametersValueConditionsOperandNumberRange</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_command#number_range IotCommand#number_range}.

---

##### `Numbers`<sup>Optional</sup> <a name="Numbers" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperand.property.numbers"></a>

```csharp
public string[] Numbers { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_command#numbers IotCommand#numbers}.

---

##### `String`<sup>Optional</sup> <a name="String" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperand.property.string"></a>

```csharp
public string String { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_command#string IotCommand#string}.

---

##### `Strings`<sup>Optional</sup> <a name="Strings" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperand.property.strings"></a>

```csharp
public string[] Strings { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_command#strings IotCommand#strings}.

---

### IotCommandMandatoryParametersValueConditionsOperandNumberRange <a name="IotCommandMandatoryParametersValueConditionsOperandNumberRange" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRange.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotCommandMandatoryParametersValueConditionsOperandNumberRange {
    string Max = null,
    string Min = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRange.property.max">Max</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_command#max IotCommand#max}. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRange.property.min">Min</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_command#min IotCommand#min}. |

---

##### `Max`<sup>Optional</sup> <a name="Max" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRange.property.max"></a>

```csharp
public string Max { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_command#max IotCommand#max}.

---

##### `Min`<sup>Optional</sup> <a name="Min" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRange.property.min"></a>

```csharp
public string Min { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_command#min IotCommand#min}.

---

### IotCommandPayload <a name="IotCommandPayload" id="@cdktn/provider-awscc.iotCommand.IotCommandPayload"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotCommand.IotCommandPayload.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotCommandPayload {
    string Content = null,
    string ContentType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayload.property.content">Content</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_command#content IotCommand#content}. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayload.property.contentType">ContentType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_command#content_type IotCommand#content_type}. |

---

##### `Content`<sup>Optional</sup> <a name="Content" id="@cdktn/provider-awscc.iotCommand.IotCommandPayload.property.content"></a>

```csharp
public string Content { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_command#content IotCommand#content}.

---

##### `ContentType`<sup>Optional</sup> <a name="ContentType" id="@cdktn/provider-awscc.iotCommand.IotCommandPayload.property.contentType"></a>

```csharp
public string ContentType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_command#content_type IotCommand#content_type}.

---

### IotCommandPreprocessor <a name="IotCommandPreprocessor" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessor"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessor.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotCommandPreprocessor {
    IotCommandPreprocessorAwsJsonSubstitution AwsJsonSubstitution = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessor.property.awsJsonSubstitution">AwsJsonSubstitution</a></code> | <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitution">IotCommandPreprocessorAwsJsonSubstitution</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_command#aws_json_substitution IotCommand#aws_json_substitution}. |

---

##### `AwsJsonSubstitution`<sup>Optional</sup> <a name="AwsJsonSubstitution" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessor.property.awsJsonSubstitution"></a>

```csharp
public IotCommandPreprocessorAwsJsonSubstitution AwsJsonSubstitution { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitution">IotCommandPreprocessorAwsJsonSubstitution</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_command#aws_json_substitution IotCommand#aws_json_substitution}.

---

### IotCommandPreprocessorAwsJsonSubstitution <a name="IotCommandPreprocessorAwsJsonSubstitution" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitution"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitution.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotCommandPreprocessorAwsJsonSubstitution {
    string OutputFormat = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitution.property.outputFormat">OutputFormat</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_command#output_format IotCommand#output_format}. |

---

##### `OutputFormat`<sup>Optional</sup> <a name="OutputFormat" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitution.property.outputFormat"></a>

```csharp
public string OutputFormat { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_command#output_format IotCommand#output_format}.

---

### IotCommandTags <a name="IotCommandTags" id="@cdktn/provider-awscc.iotCommand.IotCommandTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotCommand.IotCommandTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotCommandTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTags.property.key">Key</a></code> | <code>string</code> | The tag's key. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTags.property.value">Value</a></code> | <code>string</code> | The tag's value. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.iotCommand.IotCommandTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The tag's key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_command#key IotCommand#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.iotCommand.IotCommandTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The tag's value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_command#value IotCommand#value}

---

## Classes <a name="Classes" id="Classes"></a>

### IotCommandMandatoryParametersDefaultValueOutputReference <a name="IotCommandMandatoryParametersDefaultValueOutputReference" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotCommandMandatoryParametersDefaultValueOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.resetB">ResetB</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.resetBin">ResetBin</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.resetD">ResetD</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.resetI">ResetI</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.resetL">ResetL</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.resetS">ResetS</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.resetUl">ResetUl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetB` <a name="ResetB" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.resetB"></a>

```csharp
private void ResetB()
```

##### `ResetBin` <a name="ResetBin" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.resetBin"></a>

```csharp
private void ResetBin()
```

##### `ResetD` <a name="ResetD" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.resetD"></a>

```csharp
private void ResetD()
```

##### `ResetI` <a name="ResetI" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.resetI"></a>

```csharp
private void ResetI()
```

##### `ResetL` <a name="ResetL" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.resetL"></a>

```csharp
private void ResetL()
```

##### `ResetS` <a name="ResetS" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.resetS"></a>

```csharp
private void ResetS()
```

##### `ResetUl` <a name="ResetUl" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.resetUl"></a>

```csharp
private void ResetUl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.binInput">BinInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.bInput">BInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.dInput">DInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.iInput">IInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.lInput">LInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.sInput">SInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.ulInput">UlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.b">B</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.bin">Bin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.d">D</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.i">I</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.l">L</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.s">S</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.ul">Ul</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValue">IotCommandMandatoryParametersDefaultValue</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BinInput`<sup>Optional</sup> <a name="BinInput" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.binInput"></a>

```csharp
public string BinInput { get; }
```

- *Type:* string

---

##### `BInput`<sup>Optional</sup> <a name="BInput" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.bInput"></a>

```csharp
public bool|IResolvable BInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DInput`<sup>Optional</sup> <a name="DInput" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.dInput"></a>

```csharp
public double DInput { get; }
```

- *Type:* double

---

##### `IInput`<sup>Optional</sup> <a name="IInput" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.iInput"></a>

```csharp
public double IInput { get; }
```

- *Type:* double

---

##### `LInput`<sup>Optional</sup> <a name="LInput" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.lInput"></a>

```csharp
public string LInput { get; }
```

- *Type:* string

---

##### `SInput`<sup>Optional</sup> <a name="SInput" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.sInput"></a>

```csharp
public string SInput { get; }
```

- *Type:* string

---

##### `UlInput`<sup>Optional</sup> <a name="UlInput" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.ulInput"></a>

```csharp
public string UlInput { get; }
```

- *Type:* string

---

##### `B`<sup>Required</sup> <a name="B" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.b"></a>

```csharp
public bool|IResolvable B { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Bin`<sup>Required</sup> <a name="Bin" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.bin"></a>

```csharp
public string Bin { get; }
```

- *Type:* string

---

##### `D`<sup>Required</sup> <a name="D" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.d"></a>

```csharp
public double D { get; }
```

- *Type:* double

---

##### `I`<sup>Required</sup> <a name="I" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.i"></a>

```csharp
public double I { get; }
```

- *Type:* double

---

##### `L`<sup>Required</sup> <a name="L" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.l"></a>

```csharp
public string L { get; }
```

- *Type:* string

---

##### `S`<sup>Required</sup> <a name="S" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.s"></a>

```csharp
public string S { get; }
```

- *Type:* string

---

##### `Ul`<sup>Required</sup> <a name="Ul" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.ul"></a>

```csharp
public string Ul { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IotCommandMandatoryParametersDefaultValue InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValue">IotCommandMandatoryParametersDefaultValue</a>

---


### IotCommandMandatoryParametersList <a name="IotCommandMandatoryParametersList" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotCommandMandatoryParametersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList.get"></a>

```csharp
private IotCommandMandatoryParametersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParameters">IotCommandMandatoryParameters</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList.property.internalValue"></a>

```csharp
public IResolvable|IotCommandMandatoryParameters[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParameters">IotCommandMandatoryParameters</a>[]

---


### IotCommandMandatoryParametersOutputReference <a name="IotCommandMandatoryParametersOutputReference" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotCommandMandatoryParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.putDefaultValue">PutDefaultValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.putValue">PutValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.putValueConditions">PutValueConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.resetDefaultValue">ResetDefaultValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.resetValue">ResetValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.resetValueConditions">ResetValueConditions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDefaultValue` <a name="PutDefaultValue" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.putDefaultValue"></a>

```csharp
private void PutDefaultValue(IotCommandMandatoryParametersDefaultValue Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.putDefaultValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValue">IotCommandMandatoryParametersDefaultValue</a>

---

##### `PutValue` <a name="PutValue" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.putValue"></a>

```csharp
private void PutValue(IotCommandMandatoryParametersValue Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.putValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValue">IotCommandMandatoryParametersValue</a>

---

##### `PutValueConditions` <a name="PutValueConditions" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.putValueConditions"></a>

```csharp
private void PutValueConditions(IResolvable|IotCommandMandatoryParametersValueConditions[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.putValueConditions.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditions">IotCommandMandatoryParametersValueConditions</a>[]

---

##### `ResetDefaultValue` <a name="ResetDefaultValue" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.resetDefaultValue"></a>

```csharp
private void ResetDefaultValue()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.resetType"></a>

```csharp
private void ResetType()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```

##### `ResetValueConditions` <a name="ResetValueConditions" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.resetValueConditions"></a>

```csharp
private void ResetValueConditions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.defaultValue">DefaultValue</a></code> | <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference">IotCommandMandatoryParametersDefaultValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.value">Value</a></code> | <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference">IotCommandMandatoryParametersValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.valueConditions">ValueConditions</a></code> | <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList">IotCommandMandatoryParametersValueConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.defaultValueInput">DefaultValueInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValue">IotCommandMandatoryParametersDefaultValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.valueConditionsInput">ValueConditionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditions">IotCommandMandatoryParametersValueConditions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.valueInput">ValueInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValue">IotCommandMandatoryParametersValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParameters">IotCommandMandatoryParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DefaultValue`<sup>Required</sup> <a name="DefaultValue" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.defaultValue"></a>

```csharp
public IotCommandMandatoryParametersDefaultValueOutputReference DefaultValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference">IotCommandMandatoryParametersDefaultValueOutputReference</a>

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.value"></a>

```csharp
public IotCommandMandatoryParametersValueOutputReference Value { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference">IotCommandMandatoryParametersValueOutputReference</a>

---

##### `ValueConditions`<sup>Required</sup> <a name="ValueConditions" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.valueConditions"></a>

```csharp
public IotCommandMandatoryParametersValueConditionsList ValueConditions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList">IotCommandMandatoryParametersValueConditionsList</a>

---

##### `DefaultValueInput`<sup>Optional</sup> <a name="DefaultValueInput" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.defaultValueInput"></a>

```csharp
public IResolvable|IotCommandMandatoryParametersDefaultValue DefaultValueInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValue">IotCommandMandatoryParametersDefaultValue</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ValueConditionsInput`<sup>Optional</sup> <a name="ValueConditionsInput" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.valueConditionsInput"></a>

```csharp
public IResolvable|IotCommandMandatoryParametersValueConditions[] ValueConditionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditions">IotCommandMandatoryParametersValueConditions</a>[]

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.valueInput"></a>

```csharp
public IResolvable|IotCommandMandatoryParametersValue ValueInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValue">IotCommandMandatoryParametersValue</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IotCommandMandatoryParameters InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParameters">IotCommandMandatoryParameters</a>

---


### IotCommandMandatoryParametersValueConditionsList <a name="IotCommandMandatoryParametersValueConditionsList" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotCommandMandatoryParametersValueConditionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList.get"></a>

```csharp
private IotCommandMandatoryParametersValueConditionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditions">IotCommandMandatoryParametersValueConditions</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList.property.internalValue"></a>

```csharp
public IResolvable|IotCommandMandatoryParametersValueConditions[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditions">IotCommandMandatoryParametersValueConditions</a>[]

---


### IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference <a name="IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.resetMax">ResetMax</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.resetMin">ResetMin</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMax` <a name="ResetMax" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.resetMax"></a>

```csharp
private void ResetMax()
```

##### `ResetMin` <a name="ResetMin" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.resetMin"></a>

```csharp
private void ResetMin()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.property.maxInput">MaxInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.property.minInput">MinInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.property.max">Max</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.property.min">Min</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRange">IotCommandMandatoryParametersValueConditionsOperandNumberRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxInput`<sup>Optional</sup> <a name="MaxInput" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.property.maxInput"></a>

```csharp
public string MaxInput { get; }
```

- *Type:* string

---

##### `MinInput`<sup>Optional</sup> <a name="MinInput" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.property.minInput"></a>

```csharp
public string MinInput { get; }
```

- *Type:* string

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.property.max"></a>

```csharp
public string Max { get; }
```

- *Type:* string

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.property.min"></a>

```csharp
public string Min { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IotCommandMandatoryParametersValueConditionsOperandNumberRange InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRange">IotCommandMandatoryParametersValueConditionsOperandNumberRange</a>

---


### IotCommandMandatoryParametersValueConditionsOperandOutputReference <a name="IotCommandMandatoryParametersValueConditionsOperandOutputReference" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotCommandMandatoryParametersValueConditionsOperandOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.putNumberRange">PutNumberRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.resetNumber">ResetNumber</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.resetNumberRange">ResetNumberRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.resetNumbers">ResetNumbers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.resetString">ResetString</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.resetStrings">ResetStrings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNumberRange` <a name="PutNumberRange" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.putNumberRange"></a>

```csharp
private void PutNumberRange(IotCommandMandatoryParametersValueConditionsOperandNumberRange Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.putNumberRange.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRange">IotCommandMandatoryParametersValueConditionsOperandNumberRange</a>

---

##### `ResetNumber` <a name="ResetNumber" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.resetNumber"></a>

```csharp
private void ResetNumber()
```

##### `ResetNumberRange` <a name="ResetNumberRange" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.resetNumberRange"></a>

```csharp
private void ResetNumberRange()
```

##### `ResetNumbers` <a name="ResetNumbers" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.resetNumbers"></a>

```csharp
private void ResetNumbers()
```

##### `ResetString` <a name="ResetString" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.resetString"></a>

```csharp
private void ResetString()
```

##### `ResetStrings` <a name="ResetStrings" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.resetStrings"></a>

```csharp
private void ResetStrings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.property.numberRange">NumberRange</a></code> | <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference">IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.property.numberInput">NumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.property.numberRangeInput">NumberRangeInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRange">IotCommandMandatoryParametersValueConditionsOperandNumberRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.property.numbersInput">NumbersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.property.stringInput">StringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.property.stringsInput">StringsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.property.number">Number</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.property.numbers">Numbers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.property.string">String</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.property.strings">Strings</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperand">IotCommandMandatoryParametersValueConditionsOperand</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NumberRange`<sup>Required</sup> <a name="NumberRange" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.property.numberRange"></a>

```csharp
public IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference NumberRange { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference">IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference</a>

---

##### `NumberInput`<sup>Optional</sup> <a name="NumberInput" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.property.numberInput"></a>

```csharp
public string NumberInput { get; }
```

- *Type:* string

---

##### `NumberRangeInput`<sup>Optional</sup> <a name="NumberRangeInput" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.property.numberRangeInput"></a>

```csharp
public IResolvable|IotCommandMandatoryParametersValueConditionsOperandNumberRange NumberRangeInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRange">IotCommandMandatoryParametersValueConditionsOperandNumberRange</a>

---

##### `NumbersInput`<sup>Optional</sup> <a name="NumbersInput" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.property.numbersInput"></a>

```csharp
public string[] NumbersInput { get; }
```

- *Type:* string[]

---

##### `StringInput`<sup>Optional</sup> <a name="StringInput" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.property.stringInput"></a>

```csharp
public string StringInput { get; }
```

- *Type:* string

---

##### `StringsInput`<sup>Optional</sup> <a name="StringsInput" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.property.stringsInput"></a>

```csharp
public string[] StringsInput { get; }
```

- *Type:* string[]

---

##### `Number`<sup>Required</sup> <a name="Number" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.property.number"></a>

```csharp
public string Number { get; }
```

- *Type:* string

---

##### `Numbers`<sup>Required</sup> <a name="Numbers" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.property.numbers"></a>

```csharp
public string[] Numbers { get; }
```

- *Type:* string[]

---

##### `String`<sup>Required</sup> <a name="String" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.property.string"></a>

```csharp
public string String { get; }
```

- *Type:* string

---

##### `Strings`<sup>Required</sup> <a name="Strings" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.property.strings"></a>

```csharp
public string[] Strings { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IotCommandMandatoryParametersValueConditionsOperand InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperand">IotCommandMandatoryParametersValueConditionsOperand</a>

---


### IotCommandMandatoryParametersValueConditionsOutputReference <a name="IotCommandMandatoryParametersValueConditionsOutputReference" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotCommandMandatoryParametersValueConditionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.putOperand">PutOperand</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.resetComparisonOperator">ResetComparisonOperator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.resetOperand">ResetOperand</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOperand` <a name="PutOperand" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.putOperand"></a>

```csharp
private void PutOperand(IotCommandMandatoryParametersValueConditionsOperand Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.putOperand.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperand">IotCommandMandatoryParametersValueConditionsOperand</a>

---

##### `ResetComparisonOperator` <a name="ResetComparisonOperator" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.resetComparisonOperator"></a>

```csharp
private void ResetComparisonOperator()
```

##### `ResetOperand` <a name="ResetOperand" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.resetOperand"></a>

```csharp
private void ResetOperand()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.property.operand">Operand</a></code> | <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference">IotCommandMandatoryParametersValueConditionsOperandOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.property.comparisonOperatorInput">ComparisonOperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.property.operandInput">OperandInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperand">IotCommandMandatoryParametersValueConditionsOperand</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.property.comparisonOperator">ComparisonOperator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditions">IotCommandMandatoryParametersValueConditions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Operand`<sup>Required</sup> <a name="Operand" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.property.operand"></a>

```csharp
public IotCommandMandatoryParametersValueConditionsOperandOutputReference Operand { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference">IotCommandMandatoryParametersValueConditionsOperandOutputReference</a>

---

##### `ComparisonOperatorInput`<sup>Optional</sup> <a name="ComparisonOperatorInput" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.property.comparisonOperatorInput"></a>

```csharp
public string ComparisonOperatorInput { get; }
```

- *Type:* string

---

##### `OperandInput`<sup>Optional</sup> <a name="OperandInput" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.property.operandInput"></a>

```csharp
public IResolvable|IotCommandMandatoryParametersValueConditionsOperand OperandInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperand">IotCommandMandatoryParametersValueConditionsOperand</a>

---

##### `ComparisonOperator`<sup>Required</sup> <a name="ComparisonOperator" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.property.comparisonOperator"></a>

```csharp
public string ComparisonOperator { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IotCommandMandatoryParametersValueConditions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditions">IotCommandMandatoryParametersValueConditions</a>

---


### IotCommandMandatoryParametersValueOutputReference <a name="IotCommandMandatoryParametersValueOutputReference" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotCommandMandatoryParametersValueOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.resetB">ResetB</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.resetBin">ResetBin</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.resetD">ResetD</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.resetI">ResetI</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.resetL">ResetL</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.resetS">ResetS</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.resetUl">ResetUl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetB` <a name="ResetB" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.resetB"></a>

```csharp
private void ResetB()
```

##### `ResetBin` <a name="ResetBin" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.resetBin"></a>

```csharp
private void ResetBin()
```

##### `ResetD` <a name="ResetD" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.resetD"></a>

```csharp
private void ResetD()
```

##### `ResetI` <a name="ResetI" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.resetI"></a>

```csharp
private void ResetI()
```

##### `ResetL` <a name="ResetL" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.resetL"></a>

```csharp
private void ResetL()
```

##### `ResetS` <a name="ResetS" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.resetS"></a>

```csharp
private void ResetS()
```

##### `ResetUl` <a name="ResetUl" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.resetUl"></a>

```csharp
private void ResetUl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.binInput">BinInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.bInput">BInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.dInput">DInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.iInput">IInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.lInput">LInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.sInput">SInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.ulInput">UlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.b">B</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.bin">Bin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.d">D</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.i">I</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.l">L</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.s">S</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.ul">Ul</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValue">IotCommandMandatoryParametersValue</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BinInput`<sup>Optional</sup> <a name="BinInput" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.binInput"></a>

```csharp
public string BinInput { get; }
```

- *Type:* string

---

##### `BInput`<sup>Optional</sup> <a name="BInput" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.bInput"></a>

```csharp
public bool|IResolvable BInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DInput`<sup>Optional</sup> <a name="DInput" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.dInput"></a>

```csharp
public double DInput { get; }
```

- *Type:* double

---

##### `IInput`<sup>Optional</sup> <a name="IInput" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.iInput"></a>

```csharp
public double IInput { get; }
```

- *Type:* double

---

##### `LInput`<sup>Optional</sup> <a name="LInput" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.lInput"></a>

```csharp
public string LInput { get; }
```

- *Type:* string

---

##### `SInput`<sup>Optional</sup> <a name="SInput" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.sInput"></a>

```csharp
public string SInput { get; }
```

- *Type:* string

---

##### `UlInput`<sup>Optional</sup> <a name="UlInput" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.ulInput"></a>

```csharp
public string UlInput { get; }
```

- *Type:* string

---

##### `B`<sup>Required</sup> <a name="B" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.b"></a>

```csharp
public bool|IResolvable B { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Bin`<sup>Required</sup> <a name="Bin" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.bin"></a>

```csharp
public string Bin { get; }
```

- *Type:* string

---

##### `D`<sup>Required</sup> <a name="D" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.d"></a>

```csharp
public double D { get; }
```

- *Type:* double

---

##### `I`<sup>Required</sup> <a name="I" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.i"></a>

```csharp
public double I { get; }
```

- *Type:* double

---

##### `L`<sup>Required</sup> <a name="L" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.l"></a>

```csharp
public string L { get; }
```

- *Type:* string

---

##### `S`<sup>Required</sup> <a name="S" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.s"></a>

```csharp
public string S { get; }
```

- *Type:* string

---

##### `Ul`<sup>Required</sup> <a name="Ul" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.ul"></a>

```csharp
public string Ul { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IotCommandMandatoryParametersValue InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValue">IotCommandMandatoryParametersValue</a>

---


### IotCommandPayloadOutputReference <a name="IotCommandPayloadOutputReference" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotCommandPayloadOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.resetContent">ResetContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.resetContentType">ResetContentType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContent` <a name="ResetContent" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.resetContent"></a>

```csharp
private void ResetContent()
```

##### `ResetContentType` <a name="ResetContentType" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.resetContentType"></a>

```csharp
private void ResetContentType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.property.contentInput">ContentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.property.contentTypeInput">ContentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.property.content">Content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.property.contentType">ContentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayload">IotCommandPayload</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.property.contentInput"></a>

```csharp
public string ContentInput { get; }
```

- *Type:* string

---

##### `ContentTypeInput`<sup>Optional</sup> <a name="ContentTypeInput" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.property.contentTypeInput"></a>

```csharp
public string ContentTypeInput { get; }
```

- *Type:* string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.property.content"></a>

```csharp
public string Content { get; }
```

- *Type:* string

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.property.contentType"></a>

```csharp
public string ContentType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IotCommandPayload InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayload">IotCommandPayload</a>

---


### IotCommandPreprocessorAwsJsonSubstitutionOutputReference <a name="IotCommandPreprocessorAwsJsonSubstitutionOutputReference" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotCommandPreprocessorAwsJsonSubstitutionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.resetOutputFormat">ResetOutputFormat</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOutputFormat` <a name="ResetOutputFormat" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.resetOutputFormat"></a>

```csharp
private void ResetOutputFormat()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.property.outputFormatInput">OutputFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.property.outputFormat">OutputFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitution">IotCommandPreprocessorAwsJsonSubstitution</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OutputFormatInput`<sup>Optional</sup> <a name="OutputFormatInput" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.property.outputFormatInput"></a>

```csharp
public string OutputFormatInput { get; }
```

- *Type:* string

---

##### `OutputFormat`<sup>Required</sup> <a name="OutputFormat" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.property.outputFormat"></a>

```csharp
public string OutputFormat { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IotCommandPreprocessorAwsJsonSubstitution InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitution">IotCommandPreprocessorAwsJsonSubstitution</a>

---


### IotCommandPreprocessorOutputReference <a name="IotCommandPreprocessorOutputReference" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotCommandPreprocessorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.putAwsJsonSubstitution">PutAwsJsonSubstitution</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.resetAwsJsonSubstitution">ResetAwsJsonSubstitution</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAwsJsonSubstitution` <a name="PutAwsJsonSubstitution" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.putAwsJsonSubstitution"></a>

```csharp
private void PutAwsJsonSubstitution(IotCommandPreprocessorAwsJsonSubstitution Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.putAwsJsonSubstitution.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitution">IotCommandPreprocessorAwsJsonSubstitution</a>

---

##### `ResetAwsJsonSubstitution` <a name="ResetAwsJsonSubstitution" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.resetAwsJsonSubstitution"></a>

```csharp
private void ResetAwsJsonSubstitution()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.property.awsJsonSubstitution">AwsJsonSubstitution</a></code> | <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference">IotCommandPreprocessorAwsJsonSubstitutionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.property.awsJsonSubstitutionInput">AwsJsonSubstitutionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitution">IotCommandPreprocessorAwsJsonSubstitution</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessor">IotCommandPreprocessor</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AwsJsonSubstitution`<sup>Required</sup> <a name="AwsJsonSubstitution" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.property.awsJsonSubstitution"></a>

```csharp
public IotCommandPreprocessorAwsJsonSubstitutionOutputReference AwsJsonSubstitution { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference">IotCommandPreprocessorAwsJsonSubstitutionOutputReference</a>

---

##### `AwsJsonSubstitutionInput`<sup>Optional</sup> <a name="AwsJsonSubstitutionInput" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.property.awsJsonSubstitutionInput"></a>

```csharp
public IResolvable|IotCommandPreprocessorAwsJsonSubstitution AwsJsonSubstitutionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitution">IotCommandPreprocessorAwsJsonSubstitution</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IotCommandPreprocessor InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessor">IotCommandPreprocessor</a>

---


### IotCommandTagsList <a name="IotCommandTagsList" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotCommandTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsList.get"></a>

```csharp
private IotCommandTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotCommand.IotCommandTags">IotCommandTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsList.property.internalValue"></a>

```csharp
public IResolvable|IotCommandTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotCommand.IotCommandTags">IotCommandTags</a>[]

---


### IotCommandTagsOutputReference <a name="IotCommandTagsOutputReference" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotCommandTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotCommand.IotCommandTags">IotCommandTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IotCommandTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotCommand.IotCommandTags">IotCommandTags</a>

---



