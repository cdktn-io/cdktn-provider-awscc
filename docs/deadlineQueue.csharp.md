# `deadlineQueue` Submodule <a name="`deadlineQueue` Submodule" id="@cdktn/provider-awscc.deadlineQueue"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DeadlineQueue <a name="DeadlineQueue" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_queue awscc_deadline_queue}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DeadlineQueue(Construct Scope, string Id, DeadlineQueueConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig">DeadlineQueueConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig">DeadlineQueueConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.putJobAttachmentSettings">PutJobAttachmentSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.putJobRunAsUser">PutJobRunAsUser</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.putSchedulingConfiguration">PutSchedulingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.resetAllowedStorageProfileIds">ResetAllowedStorageProfileIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.resetDefaultBudgetAction">ResetDefaultBudgetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.resetJobAttachmentSettings">ResetJobAttachmentSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.resetJobRunAsUser">ResetJobRunAsUser</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.resetRequiredFileSystemLocationNames">ResetRequiredFileSystemLocationNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.resetRoleArn">ResetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.resetSchedulingConfiguration">ResetSchedulingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutJobAttachmentSettings` <a name="PutJobAttachmentSettings" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.putJobAttachmentSettings"></a>

```csharp
private void PutJobAttachmentSettings(DeadlineQueueJobAttachmentSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.putJobAttachmentSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettings">DeadlineQueueJobAttachmentSettings</a>

---

##### `PutJobRunAsUser` <a name="PutJobRunAsUser" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.putJobRunAsUser"></a>

```csharp
private void PutJobRunAsUser(DeadlineQueueJobRunAsUser Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.putJobRunAsUser.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUser">DeadlineQueueJobRunAsUser</a>

---

##### `PutSchedulingConfiguration` <a name="PutSchedulingConfiguration" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.putSchedulingConfiguration"></a>

```csharp
private void PutSchedulingConfiguration(DeadlineQueueSchedulingConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.putSchedulingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfiguration">DeadlineQueueSchedulingConfiguration</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.putTags"></a>

```csharp
private void PutTags(IResolvable|DeadlineQueueTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTags">DeadlineQueueTags</a>[]

---

##### `ResetAllowedStorageProfileIds` <a name="ResetAllowedStorageProfileIds" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.resetAllowedStorageProfileIds"></a>

```csharp
private void ResetAllowedStorageProfileIds()
```

##### `ResetDefaultBudgetAction` <a name="ResetDefaultBudgetAction" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.resetDefaultBudgetAction"></a>

```csharp
private void ResetDefaultBudgetAction()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetJobAttachmentSettings` <a name="ResetJobAttachmentSettings" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.resetJobAttachmentSettings"></a>

```csharp
private void ResetJobAttachmentSettings()
```

##### `ResetJobRunAsUser` <a name="ResetJobRunAsUser" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.resetJobRunAsUser"></a>

```csharp
private void ResetJobRunAsUser()
```

##### `ResetRequiredFileSystemLocationNames` <a name="ResetRequiredFileSystemLocationNames" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.resetRequiredFileSystemLocationNames"></a>

```csharp
private void ResetRequiredFileSystemLocationNames()
```

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.resetRoleArn"></a>

```csharp
private void ResetRoleArn()
```

##### `ResetSchedulingConfiguration` <a name="ResetSchedulingConfiguration" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.resetSchedulingConfiguration"></a>

```csharp
private void ResetSchedulingConfiguration()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DeadlineQueue resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DeadlineQueue.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DeadlineQueue.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DeadlineQueue.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DeadlineQueue.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DeadlineQueue resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DeadlineQueue to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DeadlineQueue that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_queue#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DeadlineQueue to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.jobAttachmentSettings">JobAttachmentSettings</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference">DeadlineQueueJobAttachmentSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.jobRunAsUser">JobRunAsUser</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference">DeadlineQueueJobRunAsUserOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.queueId">QueueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.schedulingConfiguration">SchedulingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference">DeadlineQueueSchedulingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsList">DeadlineQueueTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.allowedStorageProfileIdsInput">AllowedStorageProfileIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.defaultBudgetActionInput">DefaultBudgetActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.farmIdInput">FarmIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.jobAttachmentSettingsInput">JobAttachmentSettingsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettings">DeadlineQueueJobAttachmentSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.jobRunAsUserInput">JobRunAsUserInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUser">DeadlineQueueJobRunAsUser</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.requiredFileSystemLocationNamesInput">RequiredFileSystemLocationNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.schedulingConfigurationInput">SchedulingConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfiguration">DeadlineQueueSchedulingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTags">DeadlineQueueTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.allowedStorageProfileIds">AllowedStorageProfileIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.defaultBudgetAction">DefaultBudgetAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.farmId">FarmId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.requiredFileSystemLocationNames">RequiredFileSystemLocationNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `JobAttachmentSettings`<sup>Required</sup> <a name="JobAttachmentSettings" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.jobAttachmentSettings"></a>

```csharp
public DeadlineQueueJobAttachmentSettingsOutputReference JobAttachmentSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference">DeadlineQueueJobAttachmentSettingsOutputReference</a>

---

##### `JobRunAsUser`<sup>Required</sup> <a name="JobRunAsUser" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.jobRunAsUser"></a>

```csharp
public DeadlineQueueJobRunAsUserOutputReference JobRunAsUser { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference">DeadlineQueueJobRunAsUserOutputReference</a>

---

##### `QueueId`<sup>Required</sup> <a name="QueueId" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.queueId"></a>

```csharp
public string QueueId { get; }
```

- *Type:* string

---

##### `SchedulingConfiguration`<sup>Required</sup> <a name="SchedulingConfiguration" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.schedulingConfiguration"></a>

```csharp
public DeadlineQueueSchedulingConfigurationOutputReference SchedulingConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference">DeadlineQueueSchedulingConfigurationOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.tags"></a>

```csharp
public DeadlineQueueTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsList">DeadlineQueueTagsList</a>

---

##### `AllowedStorageProfileIdsInput`<sup>Optional</sup> <a name="AllowedStorageProfileIdsInput" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.allowedStorageProfileIdsInput"></a>

```csharp
public string[] AllowedStorageProfileIdsInput { get; }
```

- *Type:* string[]

---

##### `DefaultBudgetActionInput`<sup>Optional</sup> <a name="DefaultBudgetActionInput" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.defaultBudgetActionInput"></a>

```csharp
public string DefaultBudgetActionInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FarmIdInput`<sup>Optional</sup> <a name="FarmIdInput" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.farmIdInput"></a>

```csharp
public string FarmIdInput { get; }
```

- *Type:* string

---

##### `JobAttachmentSettingsInput`<sup>Optional</sup> <a name="JobAttachmentSettingsInput" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.jobAttachmentSettingsInput"></a>

```csharp
public IResolvable|DeadlineQueueJobAttachmentSettings JobAttachmentSettingsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettings">DeadlineQueueJobAttachmentSettings</a>

---

##### `JobRunAsUserInput`<sup>Optional</sup> <a name="JobRunAsUserInput" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.jobRunAsUserInput"></a>

```csharp
public IResolvable|DeadlineQueueJobRunAsUser JobRunAsUserInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUser">DeadlineQueueJobRunAsUser</a>

---

##### `RequiredFileSystemLocationNamesInput`<sup>Optional</sup> <a name="RequiredFileSystemLocationNamesInput" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.requiredFileSystemLocationNamesInput"></a>

```csharp
public string[] RequiredFileSystemLocationNamesInput { get; }
```

- *Type:* string[]

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `SchedulingConfigurationInput`<sup>Optional</sup> <a name="SchedulingConfigurationInput" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.schedulingConfigurationInput"></a>

```csharp
public IResolvable|DeadlineQueueSchedulingConfiguration SchedulingConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfiguration">DeadlineQueueSchedulingConfiguration</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.tagsInput"></a>

```csharp
public IResolvable|DeadlineQueueTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTags">DeadlineQueueTags</a>[]

---

##### `AllowedStorageProfileIds`<sup>Required</sup> <a name="AllowedStorageProfileIds" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.allowedStorageProfileIds"></a>

```csharp
public string[] AllowedStorageProfileIds { get; }
```

- *Type:* string[]

---

##### `DefaultBudgetAction`<sup>Required</sup> <a name="DefaultBudgetAction" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.defaultBudgetAction"></a>

```csharp
public string DefaultBudgetAction { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FarmId`<sup>Required</sup> <a name="FarmId" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.farmId"></a>

```csharp
public string FarmId { get; }
```

- *Type:* string

---

##### `RequiredFileSystemLocationNames`<sup>Required</sup> <a name="RequiredFileSystemLocationNames" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.requiredFileSystemLocationNames"></a>

```csharp
public string[] RequiredFileSystemLocationNames { get; }
```

- *Type:* string[]

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DeadlineQueueConfig <a name="DeadlineQueueConfig" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DeadlineQueueConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DisplayName,
    string FarmId,
    string[] AllowedStorageProfileIds = null,
    string DefaultBudgetAction = null,
    string Description = null,
    DeadlineQueueJobAttachmentSettings JobAttachmentSettings = null,
    DeadlineQueueJobRunAsUser JobRunAsUser = null,
    string[] RequiredFileSystemLocationNames = null,
    string RoleArn = null,
    DeadlineQueueSchedulingConfiguration SchedulingConfiguration = null,
    IResolvable|DeadlineQueueTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_queue#display_name DeadlineQueue#display_name}. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.farmId">FarmId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_queue#farm_id DeadlineQueue#farm_id}. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.allowedStorageProfileIds">AllowedStorageProfileIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_queue#allowed_storage_profile_ids DeadlineQueue#allowed_storage_profile_ids}. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.defaultBudgetAction">DefaultBudgetAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_queue#default_budget_action DeadlineQueue#default_budget_action}. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_queue#description DeadlineQueue#description}. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.jobAttachmentSettings">JobAttachmentSettings</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettings">DeadlineQueueJobAttachmentSettings</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_queue#job_attachment_settings DeadlineQueue#job_attachment_settings}. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.jobRunAsUser">JobRunAsUser</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUser">DeadlineQueueJobRunAsUser</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_queue#job_run_as_user DeadlineQueue#job_run_as_user}. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.requiredFileSystemLocationNames">RequiredFileSystemLocationNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_queue#required_file_system_location_names DeadlineQueue#required_file_system_location_names}. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.roleArn">RoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_queue#role_arn DeadlineQueue#role_arn}. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.schedulingConfiguration">SchedulingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfiguration">DeadlineQueueSchedulingConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_queue#scheduling_configuration DeadlineQueue#scheduling_configuration}. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTags">DeadlineQueueTags</a>[]</code> | An array of key-value pairs to apply to this resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_queue#display_name DeadlineQueue#display_name}.

---

##### `FarmId`<sup>Required</sup> <a name="FarmId" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.farmId"></a>

```csharp
public string FarmId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_queue#farm_id DeadlineQueue#farm_id}.

---

##### `AllowedStorageProfileIds`<sup>Optional</sup> <a name="AllowedStorageProfileIds" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.allowedStorageProfileIds"></a>

```csharp
public string[] AllowedStorageProfileIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_queue#allowed_storage_profile_ids DeadlineQueue#allowed_storage_profile_ids}.

---

##### `DefaultBudgetAction`<sup>Optional</sup> <a name="DefaultBudgetAction" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.defaultBudgetAction"></a>

```csharp
public string DefaultBudgetAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_queue#default_budget_action DeadlineQueue#default_budget_action}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_queue#description DeadlineQueue#description}.

---

##### `JobAttachmentSettings`<sup>Optional</sup> <a name="JobAttachmentSettings" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.jobAttachmentSettings"></a>

```csharp
public DeadlineQueueJobAttachmentSettings JobAttachmentSettings { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettings">DeadlineQueueJobAttachmentSettings</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_queue#job_attachment_settings DeadlineQueue#job_attachment_settings}.

---

##### `JobRunAsUser`<sup>Optional</sup> <a name="JobRunAsUser" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.jobRunAsUser"></a>

```csharp
public DeadlineQueueJobRunAsUser JobRunAsUser { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUser">DeadlineQueueJobRunAsUser</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_queue#job_run_as_user DeadlineQueue#job_run_as_user}.

---

##### `RequiredFileSystemLocationNames`<sup>Optional</sup> <a name="RequiredFileSystemLocationNames" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.requiredFileSystemLocationNames"></a>

```csharp
public string[] RequiredFileSystemLocationNames { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_queue#required_file_system_location_names DeadlineQueue#required_file_system_location_names}.

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_queue#role_arn DeadlineQueue#role_arn}.

---

##### `SchedulingConfiguration`<sup>Optional</sup> <a name="SchedulingConfiguration" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.schedulingConfiguration"></a>

```csharp
public DeadlineQueueSchedulingConfiguration SchedulingConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfiguration">DeadlineQueueSchedulingConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_queue#scheduling_configuration DeadlineQueue#scheduling_configuration}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.tags"></a>

```csharp
public IResolvable|DeadlineQueueTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTags">DeadlineQueueTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_queue#tags DeadlineQueue#tags}

---

### DeadlineQueueJobAttachmentSettings <a name="DeadlineQueueJobAttachmentSettings" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DeadlineQueueJobAttachmentSettings {
    string RootPrefix = null,
    string S3BucketName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettings.property.rootPrefix">RootPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_queue#root_prefix DeadlineQueue#root_prefix}. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettings.property.s3BucketName">S3BucketName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_queue#s3_bucket_name DeadlineQueue#s3_bucket_name}. |

---

##### `RootPrefix`<sup>Optional</sup> <a name="RootPrefix" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettings.property.rootPrefix"></a>

```csharp
public string RootPrefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_queue#root_prefix DeadlineQueue#root_prefix}.

---

##### `S3BucketName`<sup>Optional</sup> <a name="S3BucketName" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettings.property.s3BucketName"></a>

```csharp
public string S3BucketName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_queue#s3_bucket_name DeadlineQueue#s3_bucket_name}.

---

### DeadlineQueueJobRunAsUser <a name="DeadlineQueueJobRunAsUser" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUser"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUser.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DeadlineQueueJobRunAsUser {
    DeadlineQueueJobRunAsUserPosix Posix = null,
    string RunAs = null,
    DeadlineQueueJobRunAsUserWindows Windows = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUser.property.posix">Posix</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosix">DeadlineQueueJobRunAsUserPosix</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_queue#posix DeadlineQueue#posix}. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUser.property.runAs">RunAs</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_queue#run_as DeadlineQueue#run_as}. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUser.property.windows">Windows</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindows">DeadlineQueueJobRunAsUserWindows</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_queue#windows DeadlineQueue#windows}. |

---

##### `Posix`<sup>Optional</sup> <a name="Posix" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUser.property.posix"></a>

```csharp
public DeadlineQueueJobRunAsUserPosix Posix { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosix">DeadlineQueueJobRunAsUserPosix</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_queue#posix DeadlineQueue#posix}.

---

##### `RunAs`<sup>Optional</sup> <a name="RunAs" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUser.property.runAs"></a>

```csharp
public string RunAs { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_queue#run_as DeadlineQueue#run_as}.

---

##### `Windows`<sup>Optional</sup> <a name="Windows" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUser.property.windows"></a>

```csharp
public DeadlineQueueJobRunAsUserWindows Windows { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindows">DeadlineQueueJobRunAsUserWindows</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_queue#windows DeadlineQueue#windows}.

---

### DeadlineQueueJobRunAsUserPosix <a name="DeadlineQueueJobRunAsUserPosix" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosix"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosix.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DeadlineQueueJobRunAsUserPosix {
    string Group = null,
    string User = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosix.property.group">Group</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_queue#group DeadlineQueue#group}. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosix.property.user">User</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_queue#user DeadlineQueue#user}. |

---

##### `Group`<sup>Optional</sup> <a name="Group" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosix.property.group"></a>

```csharp
public string Group { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_queue#group DeadlineQueue#group}.

---

##### `User`<sup>Optional</sup> <a name="User" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosix.property.user"></a>

```csharp
public string User { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_queue#user DeadlineQueue#user}.

---

### DeadlineQueueJobRunAsUserWindows <a name="DeadlineQueueJobRunAsUserWindows" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindows"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindows.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DeadlineQueueJobRunAsUserWindows {
    string PasswordArn = null,
    string User = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindows.property.passwordArn">PasswordArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_queue#password_arn DeadlineQueue#password_arn}. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindows.property.user">User</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_queue#user DeadlineQueue#user}. |

---

##### `PasswordArn`<sup>Optional</sup> <a name="PasswordArn" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindows.property.passwordArn"></a>

```csharp
public string PasswordArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_queue#password_arn DeadlineQueue#password_arn}.

---

##### `User`<sup>Optional</sup> <a name="User" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindows.property.user"></a>

```csharp
public string User { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_queue#user DeadlineQueue#user}.

---

### DeadlineQueueSchedulingConfiguration <a name="DeadlineQueueSchedulingConfiguration" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DeadlineQueueSchedulingConfiguration {
    DeadlineQueueSchedulingConfigurationPriorityBalanced PriorityBalanced = null,
    string PriorityFifo = null,
    DeadlineQueueSchedulingConfigurationWeightedBalanced WeightedBalanced = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfiguration.property.priorityBalanced">PriorityBalanced</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalanced">DeadlineQueueSchedulingConfigurationPriorityBalanced</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_queue#priority_balanced DeadlineQueue#priority_balanced}. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfiguration.property.priorityFifo">PriorityFifo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_queue#priority_fifo DeadlineQueue#priority_fifo}. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfiguration.property.weightedBalanced">WeightedBalanced</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalanced">DeadlineQueueSchedulingConfigurationWeightedBalanced</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_queue#weighted_balanced DeadlineQueue#weighted_balanced}. |

---

##### `PriorityBalanced`<sup>Optional</sup> <a name="PriorityBalanced" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfiguration.property.priorityBalanced"></a>

```csharp
public DeadlineQueueSchedulingConfigurationPriorityBalanced PriorityBalanced { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalanced">DeadlineQueueSchedulingConfigurationPriorityBalanced</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_queue#priority_balanced DeadlineQueue#priority_balanced}.

---

##### `PriorityFifo`<sup>Optional</sup> <a name="PriorityFifo" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfiguration.property.priorityFifo"></a>

```csharp
public string PriorityFifo { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_queue#priority_fifo DeadlineQueue#priority_fifo}.

---

##### `WeightedBalanced`<sup>Optional</sup> <a name="WeightedBalanced" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfiguration.property.weightedBalanced"></a>

```csharp
public DeadlineQueueSchedulingConfigurationWeightedBalanced WeightedBalanced { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalanced">DeadlineQueueSchedulingConfigurationWeightedBalanced</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_queue#weighted_balanced DeadlineQueue#weighted_balanced}.

---

### DeadlineQueueSchedulingConfigurationPriorityBalanced <a name="DeadlineQueueSchedulingConfigurationPriorityBalanced" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalanced"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalanced.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DeadlineQueueSchedulingConfigurationPriorityBalanced {
    double RenderingTaskBuffer = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalanced.property.renderingTaskBuffer">RenderingTaskBuffer</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_queue#rendering_task_buffer DeadlineQueue#rendering_task_buffer}. |

---

##### `RenderingTaskBuffer`<sup>Optional</sup> <a name="RenderingTaskBuffer" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalanced.property.renderingTaskBuffer"></a>

```csharp
public double RenderingTaskBuffer { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_queue#rendering_task_buffer DeadlineQueue#rendering_task_buffer}.

---

### DeadlineQueueSchedulingConfigurationWeightedBalanced <a name="DeadlineQueueSchedulingConfigurationWeightedBalanced" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalanced"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalanced.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DeadlineQueueSchedulingConfigurationWeightedBalanced {
    double ErrorWeight = null,
    DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverride MaxPriorityOverride = null,
    DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverride MinPriorityOverride = null,
    double PriorityWeight = null,
    double RenderingTaskBuffer = null,
    double RenderingTaskWeight = null,
    double SubmissionTimeWeight = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalanced.property.errorWeight">ErrorWeight</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_queue#error_weight DeadlineQueue#error_weight}. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalanced.property.maxPriorityOverride">MaxPriorityOverride</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverride">DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverride</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_queue#max_priority_override DeadlineQueue#max_priority_override}. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalanced.property.minPriorityOverride">MinPriorityOverride</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverride">DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverride</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_queue#min_priority_override DeadlineQueue#min_priority_override}. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalanced.property.priorityWeight">PriorityWeight</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_queue#priority_weight DeadlineQueue#priority_weight}. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalanced.property.renderingTaskBuffer">RenderingTaskBuffer</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_queue#rendering_task_buffer DeadlineQueue#rendering_task_buffer}. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalanced.property.renderingTaskWeight">RenderingTaskWeight</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_queue#rendering_task_weight DeadlineQueue#rendering_task_weight}. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalanced.property.submissionTimeWeight">SubmissionTimeWeight</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_queue#submission_time_weight DeadlineQueue#submission_time_weight}. |

---

##### `ErrorWeight`<sup>Optional</sup> <a name="ErrorWeight" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalanced.property.errorWeight"></a>

```csharp
public double ErrorWeight { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_queue#error_weight DeadlineQueue#error_weight}.

---

##### `MaxPriorityOverride`<sup>Optional</sup> <a name="MaxPriorityOverride" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalanced.property.maxPriorityOverride"></a>

```csharp
public DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverride MaxPriorityOverride { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverride">DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverride</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_queue#max_priority_override DeadlineQueue#max_priority_override}.

---

##### `MinPriorityOverride`<sup>Optional</sup> <a name="MinPriorityOverride" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalanced.property.minPriorityOverride"></a>

```csharp
public DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverride MinPriorityOverride { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverride">DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverride</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_queue#min_priority_override DeadlineQueue#min_priority_override}.

---

##### `PriorityWeight`<sup>Optional</sup> <a name="PriorityWeight" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalanced.property.priorityWeight"></a>

```csharp
public double PriorityWeight { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_queue#priority_weight DeadlineQueue#priority_weight}.

---

##### `RenderingTaskBuffer`<sup>Optional</sup> <a name="RenderingTaskBuffer" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalanced.property.renderingTaskBuffer"></a>

```csharp
public double RenderingTaskBuffer { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_queue#rendering_task_buffer DeadlineQueue#rendering_task_buffer}.

---

##### `RenderingTaskWeight`<sup>Optional</sup> <a name="RenderingTaskWeight" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalanced.property.renderingTaskWeight"></a>

```csharp
public double RenderingTaskWeight { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_queue#rendering_task_weight DeadlineQueue#rendering_task_weight}.

---

##### `SubmissionTimeWeight`<sup>Optional</sup> <a name="SubmissionTimeWeight" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalanced.property.submissionTimeWeight"></a>

```csharp
public double SubmissionTimeWeight { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_queue#submission_time_weight DeadlineQueue#submission_time_weight}.

---

### DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverride <a name="DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverride" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverride"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverride.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverride {
    string AlwaysScheduleFirst = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverride.property.alwaysScheduleFirst">AlwaysScheduleFirst</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_queue#always_schedule_first DeadlineQueue#always_schedule_first}. |

---

##### `AlwaysScheduleFirst`<sup>Optional</sup> <a name="AlwaysScheduleFirst" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverride.property.alwaysScheduleFirst"></a>

```csharp
public string AlwaysScheduleFirst { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_queue#always_schedule_first DeadlineQueue#always_schedule_first}.

---

### DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverride <a name="DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverride" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverride"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverride.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverride {
    string AlwaysScheduleLast = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverride.property.alwaysScheduleLast">AlwaysScheduleLast</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_queue#always_schedule_last DeadlineQueue#always_schedule_last}. |

---

##### `AlwaysScheduleLast`<sup>Optional</sup> <a name="AlwaysScheduleLast" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverride.property.alwaysScheduleLast"></a>

```csharp
public string AlwaysScheduleLast { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_queue#always_schedule_last DeadlineQueue#always_schedule_last}.

---

### DeadlineQueueTags <a name="DeadlineQueueTags" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DeadlineQueueTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_queue#key DeadlineQueue#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_queue#value DeadlineQueue#value}

---

## Classes <a name="Classes" id="Classes"></a>

### DeadlineQueueJobAttachmentSettingsOutputReference <a name="DeadlineQueueJobAttachmentSettingsOutputReference" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DeadlineQueueJobAttachmentSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.resetRootPrefix">ResetRootPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.resetS3BucketName">ResetS3BucketName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRootPrefix` <a name="ResetRootPrefix" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.resetRootPrefix"></a>

```csharp
private void ResetRootPrefix()
```

##### `ResetS3BucketName` <a name="ResetS3BucketName" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.resetS3BucketName"></a>

```csharp
private void ResetS3BucketName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.property.rootPrefixInput">RootPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.property.s3BucketNameInput">S3BucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.property.rootPrefix">RootPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.property.s3BucketName">S3BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettings">DeadlineQueueJobAttachmentSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RootPrefixInput`<sup>Optional</sup> <a name="RootPrefixInput" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.property.rootPrefixInput"></a>

```csharp
public string RootPrefixInput { get; }
```

- *Type:* string

---

##### `S3BucketNameInput`<sup>Optional</sup> <a name="S3BucketNameInput" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.property.s3BucketNameInput"></a>

```csharp
public string S3BucketNameInput { get; }
```

- *Type:* string

---

##### `RootPrefix`<sup>Required</sup> <a name="RootPrefix" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.property.rootPrefix"></a>

```csharp
public string RootPrefix { get; }
```

- *Type:* string

---

##### `S3BucketName`<sup>Required</sup> <a name="S3BucketName" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.property.s3BucketName"></a>

```csharp
public string S3BucketName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DeadlineQueueJobAttachmentSettings InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettings">DeadlineQueueJobAttachmentSettings</a>

---


### DeadlineQueueJobRunAsUserOutputReference <a name="DeadlineQueueJobRunAsUserOutputReference" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DeadlineQueueJobRunAsUserOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.putPosix">PutPosix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.putWindows">PutWindows</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.resetPosix">ResetPosix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.resetRunAs">ResetRunAs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.resetWindows">ResetWindows</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPosix` <a name="PutPosix" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.putPosix"></a>

```csharp
private void PutPosix(DeadlineQueueJobRunAsUserPosix Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.putPosix.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosix">DeadlineQueueJobRunAsUserPosix</a>

---

##### `PutWindows` <a name="PutWindows" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.putWindows"></a>

```csharp
private void PutWindows(DeadlineQueueJobRunAsUserWindows Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.putWindows.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindows">DeadlineQueueJobRunAsUserWindows</a>

---

##### `ResetPosix` <a name="ResetPosix" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.resetPosix"></a>

```csharp
private void ResetPosix()
```

##### `ResetRunAs` <a name="ResetRunAs" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.resetRunAs"></a>

```csharp
private void ResetRunAs()
```

##### `ResetWindows` <a name="ResetWindows" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.resetWindows"></a>

```csharp
private void ResetWindows()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.property.posix">Posix</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference">DeadlineQueueJobRunAsUserPosixOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.property.windows">Windows</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference">DeadlineQueueJobRunAsUserWindowsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.property.posixInput">PosixInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosix">DeadlineQueueJobRunAsUserPosix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.property.runAsInput">RunAsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.property.windowsInput">WindowsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindows">DeadlineQueueJobRunAsUserWindows</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.property.runAs">RunAs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUser">DeadlineQueueJobRunAsUser</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Posix`<sup>Required</sup> <a name="Posix" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.property.posix"></a>

```csharp
public DeadlineQueueJobRunAsUserPosixOutputReference Posix { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference">DeadlineQueueJobRunAsUserPosixOutputReference</a>

---

##### `Windows`<sup>Required</sup> <a name="Windows" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.property.windows"></a>

```csharp
public DeadlineQueueJobRunAsUserWindowsOutputReference Windows { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference">DeadlineQueueJobRunAsUserWindowsOutputReference</a>

---

##### `PosixInput`<sup>Optional</sup> <a name="PosixInput" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.property.posixInput"></a>

```csharp
public IResolvable|DeadlineQueueJobRunAsUserPosix PosixInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosix">DeadlineQueueJobRunAsUserPosix</a>

---

##### `RunAsInput`<sup>Optional</sup> <a name="RunAsInput" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.property.runAsInput"></a>

```csharp
public string RunAsInput { get; }
```

- *Type:* string

---

##### `WindowsInput`<sup>Optional</sup> <a name="WindowsInput" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.property.windowsInput"></a>

```csharp
public IResolvable|DeadlineQueueJobRunAsUserWindows WindowsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindows">DeadlineQueueJobRunAsUserWindows</a>

---

##### `RunAs`<sup>Required</sup> <a name="RunAs" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.property.runAs"></a>

```csharp
public string RunAs { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DeadlineQueueJobRunAsUser InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUser">DeadlineQueueJobRunAsUser</a>

---


### DeadlineQueueJobRunAsUserPosixOutputReference <a name="DeadlineQueueJobRunAsUserPosixOutputReference" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DeadlineQueueJobRunAsUserPosixOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.resetGroup">ResetGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.resetUser">ResetUser</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGroup` <a name="ResetGroup" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.resetGroup"></a>

```csharp
private void ResetGroup()
```

##### `ResetUser` <a name="ResetUser" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.resetUser"></a>

```csharp
private void ResetUser()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.property.groupInput">GroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.property.userInput">UserInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.property.group">Group</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.property.user">User</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosix">DeadlineQueueJobRunAsUserPosix</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GroupInput`<sup>Optional</sup> <a name="GroupInput" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.property.groupInput"></a>

```csharp
public string GroupInput { get; }
```

- *Type:* string

---

##### `UserInput`<sup>Optional</sup> <a name="UserInput" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.property.userInput"></a>

```csharp
public string UserInput { get; }
```

- *Type:* string

---

##### `Group`<sup>Required</sup> <a name="Group" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.property.group"></a>

```csharp
public string Group { get; }
```

- *Type:* string

---

##### `User`<sup>Required</sup> <a name="User" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.property.user"></a>

```csharp
public string User { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DeadlineQueueJobRunAsUserPosix InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosix">DeadlineQueueJobRunAsUserPosix</a>

---


### DeadlineQueueJobRunAsUserWindowsOutputReference <a name="DeadlineQueueJobRunAsUserWindowsOutputReference" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DeadlineQueueJobRunAsUserWindowsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.resetPasswordArn">ResetPasswordArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.resetUser">ResetUser</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPasswordArn` <a name="ResetPasswordArn" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.resetPasswordArn"></a>

```csharp
private void ResetPasswordArn()
```

##### `ResetUser` <a name="ResetUser" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.resetUser"></a>

```csharp
private void ResetUser()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.property.passwordArnInput">PasswordArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.property.userInput">UserInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.property.passwordArn">PasswordArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.property.user">User</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindows">DeadlineQueueJobRunAsUserWindows</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PasswordArnInput`<sup>Optional</sup> <a name="PasswordArnInput" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.property.passwordArnInput"></a>

```csharp
public string PasswordArnInput { get; }
```

- *Type:* string

---

##### `UserInput`<sup>Optional</sup> <a name="UserInput" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.property.userInput"></a>

```csharp
public string UserInput { get; }
```

- *Type:* string

---

##### `PasswordArn`<sup>Required</sup> <a name="PasswordArn" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.property.passwordArn"></a>

```csharp
public string PasswordArn { get; }
```

- *Type:* string

---

##### `User`<sup>Required</sup> <a name="User" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.property.user"></a>

```csharp
public string User { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DeadlineQueueJobRunAsUserWindows InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindows">DeadlineQueueJobRunAsUserWindows</a>

---


### DeadlineQueueSchedulingConfigurationOutputReference <a name="DeadlineQueueSchedulingConfigurationOutputReference" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DeadlineQueueSchedulingConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.putPriorityBalanced">PutPriorityBalanced</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.putWeightedBalanced">PutWeightedBalanced</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.resetPriorityBalanced">ResetPriorityBalanced</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.resetPriorityFifo">ResetPriorityFifo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.resetWeightedBalanced">ResetWeightedBalanced</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPriorityBalanced` <a name="PutPriorityBalanced" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.putPriorityBalanced"></a>

```csharp
private void PutPriorityBalanced(DeadlineQueueSchedulingConfigurationPriorityBalanced Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.putPriorityBalanced.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalanced">DeadlineQueueSchedulingConfigurationPriorityBalanced</a>

---

##### `PutWeightedBalanced` <a name="PutWeightedBalanced" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.putWeightedBalanced"></a>

```csharp
private void PutWeightedBalanced(DeadlineQueueSchedulingConfigurationWeightedBalanced Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.putWeightedBalanced.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalanced">DeadlineQueueSchedulingConfigurationWeightedBalanced</a>

---

##### `ResetPriorityBalanced` <a name="ResetPriorityBalanced" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.resetPriorityBalanced"></a>

```csharp
private void ResetPriorityBalanced()
```

##### `ResetPriorityFifo` <a name="ResetPriorityFifo" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.resetPriorityFifo"></a>

```csharp
private void ResetPriorityFifo()
```

##### `ResetWeightedBalanced` <a name="ResetWeightedBalanced" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.resetWeightedBalanced"></a>

```csharp
private void ResetWeightedBalanced()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.property.priorityBalanced">PriorityBalanced</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference">DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.property.weightedBalanced">WeightedBalanced</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference">DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.property.priorityBalancedInput">PriorityBalancedInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalanced">DeadlineQueueSchedulingConfigurationPriorityBalanced</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.property.priorityFifoInput">PriorityFifoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.property.weightedBalancedInput">WeightedBalancedInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalanced">DeadlineQueueSchedulingConfigurationWeightedBalanced</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.property.priorityFifo">PriorityFifo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfiguration">DeadlineQueueSchedulingConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PriorityBalanced`<sup>Required</sup> <a name="PriorityBalanced" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.property.priorityBalanced"></a>

```csharp
public DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference PriorityBalanced { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference">DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference</a>

---

##### `WeightedBalanced`<sup>Required</sup> <a name="WeightedBalanced" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.property.weightedBalanced"></a>

```csharp
public DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference WeightedBalanced { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference">DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference</a>

---

##### `PriorityBalancedInput`<sup>Optional</sup> <a name="PriorityBalancedInput" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.property.priorityBalancedInput"></a>

```csharp
public IResolvable|DeadlineQueueSchedulingConfigurationPriorityBalanced PriorityBalancedInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalanced">DeadlineQueueSchedulingConfigurationPriorityBalanced</a>

---

##### `PriorityFifoInput`<sup>Optional</sup> <a name="PriorityFifoInput" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.property.priorityFifoInput"></a>

```csharp
public string PriorityFifoInput { get; }
```

- *Type:* string

---

##### `WeightedBalancedInput`<sup>Optional</sup> <a name="WeightedBalancedInput" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.property.weightedBalancedInput"></a>

```csharp
public IResolvable|DeadlineQueueSchedulingConfigurationWeightedBalanced WeightedBalancedInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalanced">DeadlineQueueSchedulingConfigurationWeightedBalanced</a>

---

##### `PriorityFifo`<sup>Required</sup> <a name="PriorityFifo" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.property.priorityFifo"></a>

```csharp
public string PriorityFifo { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DeadlineQueueSchedulingConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfiguration">DeadlineQueueSchedulingConfiguration</a>

---


### DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference <a name="DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.resetRenderingTaskBuffer">ResetRenderingTaskBuffer</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRenderingTaskBuffer` <a name="ResetRenderingTaskBuffer" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.resetRenderingTaskBuffer"></a>

```csharp
private void ResetRenderingTaskBuffer()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.property.renderingTaskBufferInput">RenderingTaskBufferInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.property.renderingTaskBuffer">RenderingTaskBuffer</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalanced">DeadlineQueueSchedulingConfigurationPriorityBalanced</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RenderingTaskBufferInput`<sup>Optional</sup> <a name="RenderingTaskBufferInput" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.property.renderingTaskBufferInput"></a>

```csharp
public double RenderingTaskBufferInput { get; }
```

- *Type:* double

---

##### `RenderingTaskBuffer`<sup>Required</sup> <a name="RenderingTaskBuffer" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.property.renderingTaskBuffer"></a>

```csharp
public double RenderingTaskBuffer { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DeadlineQueueSchedulingConfigurationPriorityBalanced InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalanced">DeadlineQueueSchedulingConfigurationPriorityBalanced</a>

---


### DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference <a name="DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.resetAlwaysScheduleFirst">ResetAlwaysScheduleFirst</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAlwaysScheduleFirst` <a name="ResetAlwaysScheduleFirst" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.resetAlwaysScheduleFirst"></a>

```csharp
private void ResetAlwaysScheduleFirst()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.property.alwaysScheduleFirstInput">AlwaysScheduleFirstInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.property.alwaysScheduleFirst">AlwaysScheduleFirst</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverride">DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverride</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AlwaysScheduleFirstInput`<sup>Optional</sup> <a name="AlwaysScheduleFirstInput" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.property.alwaysScheduleFirstInput"></a>

```csharp
public string AlwaysScheduleFirstInput { get; }
```

- *Type:* string

---

##### `AlwaysScheduleFirst`<sup>Required</sup> <a name="AlwaysScheduleFirst" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.property.alwaysScheduleFirst"></a>

```csharp
public string AlwaysScheduleFirst { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverride InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverride">DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverride</a>

---


### DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference <a name="DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.resetAlwaysScheduleLast">ResetAlwaysScheduleLast</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAlwaysScheduleLast` <a name="ResetAlwaysScheduleLast" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.resetAlwaysScheduleLast"></a>

```csharp
private void ResetAlwaysScheduleLast()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.property.alwaysScheduleLastInput">AlwaysScheduleLastInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.property.alwaysScheduleLast">AlwaysScheduleLast</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverride">DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverride</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AlwaysScheduleLastInput`<sup>Optional</sup> <a name="AlwaysScheduleLastInput" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.property.alwaysScheduleLastInput"></a>

```csharp
public string AlwaysScheduleLastInput { get; }
```

- *Type:* string

---

##### `AlwaysScheduleLast`<sup>Required</sup> <a name="AlwaysScheduleLast" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.property.alwaysScheduleLast"></a>

```csharp
public string AlwaysScheduleLast { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverride InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverride">DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverride</a>

---


### DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference <a name="DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.putMaxPriorityOverride">PutMaxPriorityOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.putMinPriorityOverride">PutMinPriorityOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.resetErrorWeight">ResetErrorWeight</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.resetMaxPriorityOverride">ResetMaxPriorityOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.resetMinPriorityOverride">ResetMinPriorityOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.resetPriorityWeight">ResetPriorityWeight</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.resetRenderingTaskBuffer">ResetRenderingTaskBuffer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.resetRenderingTaskWeight">ResetRenderingTaskWeight</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.resetSubmissionTimeWeight">ResetSubmissionTimeWeight</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMaxPriorityOverride` <a name="PutMaxPriorityOverride" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.putMaxPriorityOverride"></a>

```csharp
private void PutMaxPriorityOverride(DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverride Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.putMaxPriorityOverride.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverride">DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverride</a>

---

##### `PutMinPriorityOverride` <a name="PutMinPriorityOverride" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.putMinPriorityOverride"></a>

```csharp
private void PutMinPriorityOverride(DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverride Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.putMinPriorityOverride.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverride">DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverride</a>

---

##### `ResetErrorWeight` <a name="ResetErrorWeight" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.resetErrorWeight"></a>

```csharp
private void ResetErrorWeight()
```

##### `ResetMaxPriorityOverride` <a name="ResetMaxPriorityOverride" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.resetMaxPriorityOverride"></a>

```csharp
private void ResetMaxPriorityOverride()
```

##### `ResetMinPriorityOverride` <a name="ResetMinPriorityOverride" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.resetMinPriorityOverride"></a>

```csharp
private void ResetMinPriorityOverride()
```

##### `ResetPriorityWeight` <a name="ResetPriorityWeight" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.resetPriorityWeight"></a>

```csharp
private void ResetPriorityWeight()
```

##### `ResetRenderingTaskBuffer` <a name="ResetRenderingTaskBuffer" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.resetRenderingTaskBuffer"></a>

```csharp
private void ResetRenderingTaskBuffer()
```

##### `ResetRenderingTaskWeight` <a name="ResetRenderingTaskWeight" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.resetRenderingTaskWeight"></a>

```csharp
private void ResetRenderingTaskWeight()
```

##### `ResetSubmissionTimeWeight` <a name="ResetSubmissionTimeWeight" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.resetSubmissionTimeWeight"></a>

```csharp
private void ResetSubmissionTimeWeight()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.maxPriorityOverride">MaxPriorityOverride</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference">DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.minPriorityOverride">MinPriorityOverride</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference">DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.errorWeightInput">ErrorWeightInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.maxPriorityOverrideInput">MaxPriorityOverrideInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverride">DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.minPriorityOverrideInput">MinPriorityOverrideInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverride">DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.priorityWeightInput">PriorityWeightInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.renderingTaskBufferInput">RenderingTaskBufferInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.renderingTaskWeightInput">RenderingTaskWeightInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.submissionTimeWeightInput">SubmissionTimeWeightInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.errorWeight">ErrorWeight</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.priorityWeight">PriorityWeight</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.renderingTaskBuffer">RenderingTaskBuffer</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.renderingTaskWeight">RenderingTaskWeight</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.submissionTimeWeight">SubmissionTimeWeight</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalanced">DeadlineQueueSchedulingConfigurationWeightedBalanced</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxPriorityOverride`<sup>Required</sup> <a name="MaxPriorityOverride" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.maxPriorityOverride"></a>

```csharp
public DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference MaxPriorityOverride { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference">DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference</a>

---

##### `MinPriorityOverride`<sup>Required</sup> <a name="MinPriorityOverride" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.minPriorityOverride"></a>

```csharp
public DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference MinPriorityOverride { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference">DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference</a>

---

##### `ErrorWeightInput`<sup>Optional</sup> <a name="ErrorWeightInput" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.errorWeightInput"></a>

```csharp
public double ErrorWeightInput { get; }
```

- *Type:* double

---

##### `MaxPriorityOverrideInput`<sup>Optional</sup> <a name="MaxPriorityOverrideInput" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.maxPriorityOverrideInput"></a>

```csharp
public IResolvable|DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverride MaxPriorityOverrideInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverride">DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverride</a>

---

##### `MinPriorityOverrideInput`<sup>Optional</sup> <a name="MinPriorityOverrideInput" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.minPriorityOverrideInput"></a>

```csharp
public IResolvable|DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverride MinPriorityOverrideInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverride">DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverride</a>

---

##### `PriorityWeightInput`<sup>Optional</sup> <a name="PriorityWeightInput" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.priorityWeightInput"></a>

```csharp
public double PriorityWeightInput { get; }
```

- *Type:* double

---

##### `RenderingTaskBufferInput`<sup>Optional</sup> <a name="RenderingTaskBufferInput" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.renderingTaskBufferInput"></a>

```csharp
public double RenderingTaskBufferInput { get; }
```

- *Type:* double

---

##### `RenderingTaskWeightInput`<sup>Optional</sup> <a name="RenderingTaskWeightInput" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.renderingTaskWeightInput"></a>

```csharp
public double RenderingTaskWeightInput { get; }
```

- *Type:* double

---

##### `SubmissionTimeWeightInput`<sup>Optional</sup> <a name="SubmissionTimeWeightInput" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.submissionTimeWeightInput"></a>

```csharp
public double SubmissionTimeWeightInput { get; }
```

- *Type:* double

---

##### `ErrorWeight`<sup>Required</sup> <a name="ErrorWeight" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.errorWeight"></a>

```csharp
public double ErrorWeight { get; }
```

- *Type:* double

---

##### `PriorityWeight`<sup>Required</sup> <a name="PriorityWeight" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.priorityWeight"></a>

```csharp
public double PriorityWeight { get; }
```

- *Type:* double

---

##### `RenderingTaskBuffer`<sup>Required</sup> <a name="RenderingTaskBuffer" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.renderingTaskBuffer"></a>

```csharp
public double RenderingTaskBuffer { get; }
```

- *Type:* double

---

##### `RenderingTaskWeight`<sup>Required</sup> <a name="RenderingTaskWeight" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.renderingTaskWeight"></a>

```csharp
public double RenderingTaskWeight { get; }
```

- *Type:* double

---

##### `SubmissionTimeWeight`<sup>Required</sup> <a name="SubmissionTimeWeight" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.submissionTimeWeight"></a>

```csharp
public double SubmissionTimeWeight { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DeadlineQueueSchedulingConfigurationWeightedBalanced InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalanced">DeadlineQueueSchedulingConfigurationWeightedBalanced</a>

---


### DeadlineQueueTagsList <a name="DeadlineQueueTagsList" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DeadlineQueueTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsList.get"></a>

```csharp
private DeadlineQueueTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTags">DeadlineQueueTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsList.property.internalValue"></a>

```csharp
public IResolvable|DeadlineQueueTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTags">DeadlineQueueTags</a>[]

---


### DeadlineQueueTagsOutputReference <a name="DeadlineQueueTagsOutputReference" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DeadlineQueueTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTags">DeadlineQueueTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DeadlineQueueTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTags">DeadlineQueueTags</a>

---



