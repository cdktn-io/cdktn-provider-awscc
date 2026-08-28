# `cloudformationChangeSet` Submodule <a name="`cloudformationChangeSet` Submodule" id="@cdktn/provider-awscc.cloudformationChangeSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudformationChangeSet <a name="CloudformationChangeSet" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_change_set awscc_cloudformation_change_set}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudformationChangeSet(Construct Scope, string Id, CloudformationChangeSetConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig">CloudformationChangeSetConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig">CloudformationChangeSetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.resetCapabilities">ResetCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.resetChangeSetType">ResetChangeSetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.resetDeploymentMode">ResetDeploymentMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.resetImportExistingResources">ResetImportExistingResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.resetIncludeNestedStacks">ResetIncludeNestedStacks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.resetNotificationArNs">ResetNotificationArNs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.resetOnStackFailure">ResetOnStackFailure</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.resetRoleArn">ResetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.resetTemplateBody">ResetTemplateBody</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.resetTemplateUrl">ResetTemplateUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.resetUsePreviousTemplate">ResetUsePreviousTemplate</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.putTags"></a>

```csharp
private void PutTags(IResolvable|CloudformationChangeSetTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTags">CloudformationChangeSetTags</a>[]

---

##### `ResetCapabilities` <a name="ResetCapabilities" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.resetCapabilities"></a>

```csharp
private void ResetCapabilities()
```

##### `ResetChangeSetType` <a name="ResetChangeSetType" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.resetChangeSetType"></a>

```csharp
private void ResetChangeSetType()
```

##### `ResetDeploymentMode` <a name="ResetDeploymentMode" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.resetDeploymentMode"></a>

```csharp
private void ResetDeploymentMode()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetImportExistingResources` <a name="ResetImportExistingResources" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.resetImportExistingResources"></a>

```csharp
private void ResetImportExistingResources()
```

##### `ResetIncludeNestedStacks` <a name="ResetIncludeNestedStacks" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.resetIncludeNestedStacks"></a>

```csharp
private void ResetIncludeNestedStacks()
```

##### `ResetNotificationArNs` <a name="ResetNotificationArNs" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.resetNotificationArNs"></a>

```csharp
private void ResetNotificationArNs()
```

##### `ResetOnStackFailure` <a name="ResetOnStackFailure" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.resetOnStackFailure"></a>

```csharp
private void ResetOnStackFailure()
```

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.resetRoleArn"></a>

```csharp
private void ResetRoleArn()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTemplateBody` <a name="ResetTemplateBody" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.resetTemplateBody"></a>

```csharp
private void ResetTemplateBody()
```

##### `ResetTemplateUrl` <a name="ResetTemplateUrl" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.resetTemplateUrl"></a>

```csharp
private void ResetTemplateUrl()
```

##### `ResetUsePreviousTemplate` <a name="ResetUsePreviousTemplate" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.resetUsePreviousTemplate"></a>

```csharp
private void ResetUsePreviousTemplate()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CloudformationChangeSet resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CloudformationChangeSet.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CloudformationChangeSet.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CloudformationChangeSet.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CloudformationChangeSet.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a CloudformationChangeSet resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudformationChangeSet to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudformationChangeSet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_change_set#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the CloudformationChangeSet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.changeSetId">ChangeSetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.creationTime">CreationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.stackId">StackId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList">CloudformationChangeSetTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.capabilitiesInput">CapabilitiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.changeSetNameInput">ChangeSetNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.changeSetTypeInput">ChangeSetTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.deploymentModeInput">DeploymentModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.importExistingResourcesInput">ImportExistingResourcesInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.includeNestedStacksInput">IncludeNestedStacksInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.notificationArNsInput">NotificationArNsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.onStackFailureInput">OnStackFailureInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.stackNameInput">StackNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTags">CloudformationChangeSetTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.templateBodyInput">TemplateBodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.templateUrlInput">TemplateUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.usePreviousTemplateInput">UsePreviousTemplateInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.capabilities">Capabilities</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.changeSetName">ChangeSetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.changeSetType">ChangeSetType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.deploymentMode">DeploymentMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.importExistingResources">ImportExistingResources</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.includeNestedStacks">IncludeNestedStacks</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.notificationArNs">NotificationArNs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.onStackFailure">OnStackFailure</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.stackName">StackName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.templateBody">TemplateBody</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.templateUrl">TemplateUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.usePreviousTemplate">UsePreviousTemplate</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ChangeSetId`<sup>Required</sup> <a name="ChangeSetId" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.changeSetId"></a>

```csharp
public string ChangeSetId { get; }
```

- *Type:* string

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.creationTime"></a>

```csharp
public string CreationTime { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `StackId`<sup>Required</sup> <a name="StackId" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.stackId"></a>

```csharp
public string StackId { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.tags"></a>

```csharp
public CloudformationChangeSetTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList">CloudformationChangeSetTagsList</a>

---

##### `CapabilitiesInput`<sup>Optional</sup> <a name="CapabilitiesInput" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.capabilitiesInput"></a>

```csharp
public string[] CapabilitiesInput { get; }
```

- *Type:* string[]

---

##### `ChangeSetNameInput`<sup>Optional</sup> <a name="ChangeSetNameInput" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.changeSetNameInput"></a>

```csharp
public string ChangeSetNameInput { get; }
```

- *Type:* string

---

##### `ChangeSetTypeInput`<sup>Optional</sup> <a name="ChangeSetTypeInput" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.changeSetTypeInput"></a>

```csharp
public string ChangeSetTypeInput { get; }
```

- *Type:* string

---

##### `DeploymentModeInput`<sup>Optional</sup> <a name="DeploymentModeInput" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.deploymentModeInput"></a>

```csharp
public string DeploymentModeInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ImportExistingResourcesInput`<sup>Optional</sup> <a name="ImportExistingResourcesInput" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.importExistingResourcesInput"></a>

```csharp
public bool|IResolvable ImportExistingResourcesInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IncludeNestedStacksInput`<sup>Optional</sup> <a name="IncludeNestedStacksInput" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.includeNestedStacksInput"></a>

```csharp
public bool|IResolvable IncludeNestedStacksInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `NotificationArNsInput`<sup>Optional</sup> <a name="NotificationArNsInput" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.notificationArNsInput"></a>

```csharp
public string[] NotificationArNsInput { get; }
```

- *Type:* string[]

---

##### `OnStackFailureInput`<sup>Optional</sup> <a name="OnStackFailureInput" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.onStackFailureInput"></a>

```csharp
public string OnStackFailureInput { get; }
```

- *Type:* string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `StackNameInput`<sup>Optional</sup> <a name="StackNameInput" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.stackNameInput"></a>

```csharp
public string StackNameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.tagsInput"></a>

```csharp
public IResolvable|CloudformationChangeSetTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTags">CloudformationChangeSetTags</a>[]

---

##### `TemplateBodyInput`<sup>Optional</sup> <a name="TemplateBodyInput" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.templateBodyInput"></a>

```csharp
public string TemplateBodyInput { get; }
```

- *Type:* string

---

##### `TemplateUrlInput`<sup>Optional</sup> <a name="TemplateUrlInput" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.templateUrlInput"></a>

```csharp
public string TemplateUrlInput { get; }
```

- *Type:* string

---

##### `UsePreviousTemplateInput`<sup>Optional</sup> <a name="UsePreviousTemplateInput" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.usePreviousTemplateInput"></a>

```csharp
public bool|IResolvable UsePreviousTemplateInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Capabilities`<sup>Required</sup> <a name="Capabilities" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.capabilities"></a>

```csharp
public string[] Capabilities { get; }
```

- *Type:* string[]

---

##### `ChangeSetName`<sup>Required</sup> <a name="ChangeSetName" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.changeSetName"></a>

```csharp
public string ChangeSetName { get; }
```

- *Type:* string

---

##### `ChangeSetType`<sup>Required</sup> <a name="ChangeSetType" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.changeSetType"></a>

```csharp
public string ChangeSetType { get; }
```

- *Type:* string

---

##### `DeploymentMode`<sup>Required</sup> <a name="DeploymentMode" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.deploymentMode"></a>

```csharp
public string DeploymentMode { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `ImportExistingResources`<sup>Required</sup> <a name="ImportExistingResources" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.importExistingResources"></a>

```csharp
public bool|IResolvable ImportExistingResources { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IncludeNestedStacks`<sup>Required</sup> <a name="IncludeNestedStacks" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.includeNestedStacks"></a>

```csharp
public bool|IResolvable IncludeNestedStacks { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `NotificationArNs`<sup>Required</sup> <a name="NotificationArNs" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.notificationArNs"></a>

```csharp
public string[] NotificationArNs { get; }
```

- *Type:* string[]

---

##### `OnStackFailure`<sup>Required</sup> <a name="OnStackFailure" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.onStackFailure"></a>

```csharp
public string OnStackFailure { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `StackName`<sup>Required</sup> <a name="StackName" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.stackName"></a>

```csharp
public string StackName { get; }
```

- *Type:* string

---

##### `TemplateBody`<sup>Required</sup> <a name="TemplateBody" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.templateBody"></a>

```csharp
public string TemplateBody { get; }
```

- *Type:* string

---

##### `TemplateUrl`<sup>Required</sup> <a name="TemplateUrl" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.templateUrl"></a>

```csharp
public string TemplateUrl { get; }
```

- *Type:* string

---

##### `UsePreviousTemplate`<sup>Required</sup> <a name="UsePreviousTemplate" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.usePreviousTemplate"></a>

```csharp
public bool|IResolvable UsePreviousTemplate { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudformationChangeSetConfig <a name="CloudformationChangeSetConfig" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudformationChangeSetConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ChangeSetName,
    string StackName,
    string[] Capabilities = null,
    string ChangeSetType = null,
    string DeploymentMode = null,
    string Description = null,
    bool|IResolvable ImportExistingResources = null,
    bool|IResolvable IncludeNestedStacks = null,
    string[] NotificationArNs = null,
    string OnStackFailure = null,
    string RoleArn = null,
    IResolvable|CloudformationChangeSetTags[] Tags = null,
    string TemplateBody = null,
    string TemplateUrl = null,
    bool|IResolvable UsePreviousTemplate = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.changeSetName">ChangeSetName</a></code> | <code>string</code> | The name of the change set. Must be unique among all change sets associated with the specified stack. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.stackName">StackName</a></code> | <code>string</code> | The name or unique ID of the stack for which you are creating a change set. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.capabilities">Capabilities</a></code> | <code>string[]</code> | The capabilities that are allowed in the stack. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.changeSetType">ChangeSetType</a></code> | <code>string</code> | The type of change set operation. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.deploymentMode">DeploymentMode</a></code> | <code>string</code> | Determines how CloudFormation handles configuration drift during deployment. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.description">Description</a></code> | <code>string</code> | A description to help you identify this change set. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.importExistingResources">ImportExistingResources</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Indicates if the change set imports resources that already exist. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.includeNestedStacks">IncludeNestedStacks</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Creates a change set for all nested stacks specified in the template. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.notificationArNs">NotificationArNs</a></code> | <code>string[]</code> | The ARNs of Amazon SNS topics that CloudFormation associates with the stack. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.onStackFailure">OnStackFailure</a></code> | <code>string</code> | Determines what action will be taken if stack creation fails. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.roleArn">RoleArn</a></code> | <code>string</code> | The ARN of an IAM role that CloudFormation assumes when executing the change set. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTags">CloudformationChangeSetTags</a>[]</code> | Key-value pairs to associate with the change set. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.templateBody">TemplateBody</a></code> | <code>string</code> | A structure that contains the body of the revised template. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.templateUrl">TemplateUrl</a></code> | <code>string</code> | The URL of the file that contains the revised template. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.usePreviousTemplate">UsePreviousTemplate</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether to reuse the template associated with the stack to create the change set. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ChangeSetName`<sup>Required</sup> <a name="ChangeSetName" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.changeSetName"></a>

```csharp
public string ChangeSetName { get; set; }
```

- *Type:* string

The name of the change set. Must be unique among all change sets associated with the specified stack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_change_set#change_set_name CloudformationChangeSet#change_set_name}

---

##### `StackName`<sup>Required</sup> <a name="StackName" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.stackName"></a>

```csharp
public string StackName { get; set; }
```

- *Type:* string

The name or unique ID of the stack for which you are creating a change set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_change_set#stack_name CloudformationChangeSet#stack_name}

---

##### `Capabilities`<sup>Optional</sup> <a name="Capabilities" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.capabilities"></a>

```csharp
public string[] Capabilities { get; set; }
```

- *Type:* string[]

The capabilities that are allowed in the stack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_change_set#capabilities CloudformationChangeSet#capabilities}

---

##### `ChangeSetType`<sup>Optional</sup> <a name="ChangeSetType" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.changeSetType"></a>

```csharp
public string ChangeSetType { get; set; }
```

- *Type:* string

The type of change set operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_change_set#change_set_type CloudformationChangeSet#change_set_type}

---

##### `DeploymentMode`<sup>Optional</sup> <a name="DeploymentMode" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.deploymentMode"></a>

```csharp
public string DeploymentMode { get; set; }
```

- *Type:* string

Determines how CloudFormation handles configuration drift during deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_change_set#deployment_mode CloudformationChangeSet#deployment_mode}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A description to help you identify this change set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_change_set#description CloudformationChangeSet#description}

---

##### `ImportExistingResources`<sup>Optional</sup> <a name="ImportExistingResources" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.importExistingResources"></a>

```csharp
public bool|IResolvable ImportExistingResources { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Indicates if the change set imports resources that already exist.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_change_set#import_existing_resources CloudformationChangeSet#import_existing_resources}

---

##### `IncludeNestedStacks`<sup>Optional</sup> <a name="IncludeNestedStacks" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.includeNestedStacks"></a>

```csharp
public bool|IResolvable IncludeNestedStacks { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Creates a change set for all nested stacks specified in the template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_change_set#include_nested_stacks CloudformationChangeSet#include_nested_stacks}

---

##### `NotificationArNs`<sup>Optional</sup> <a name="NotificationArNs" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.notificationArNs"></a>

```csharp
public string[] NotificationArNs { get; set; }
```

- *Type:* string[]

The ARNs of Amazon SNS topics that CloudFormation associates with the stack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_change_set#notification_ar_ns CloudformationChangeSet#notification_ar_ns}

---

##### `OnStackFailure`<sup>Optional</sup> <a name="OnStackFailure" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.onStackFailure"></a>

```csharp
public string OnStackFailure { get; set; }
```

- *Type:* string

Determines what action will be taken if stack creation fails.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_change_set#on_stack_failure CloudformationChangeSet#on_stack_failure}

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

The ARN of an IAM role that CloudFormation assumes when executing the change set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_change_set#role_arn CloudformationChangeSet#role_arn}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.tags"></a>

```csharp
public IResolvable|CloudformationChangeSetTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTags">CloudformationChangeSetTags</a>[]

Key-value pairs to associate with the change set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_change_set#tags CloudformationChangeSet#tags}

---

##### `TemplateBody`<sup>Optional</sup> <a name="TemplateBody" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.templateBody"></a>

```csharp
public string TemplateBody { get; set; }
```

- *Type:* string

A structure that contains the body of the revised template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_change_set#template_body CloudformationChangeSet#template_body}

---

##### `TemplateUrl`<sup>Optional</sup> <a name="TemplateUrl" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.templateUrl"></a>

```csharp
public string TemplateUrl { get; set; }
```

- *Type:* string

The URL of the file that contains the revised template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_change_set#template_url CloudformationChangeSet#template_url}

---

##### `UsePreviousTemplate`<sup>Optional</sup> <a name="UsePreviousTemplate" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.usePreviousTemplate"></a>

```csharp
public bool|IResolvable UsePreviousTemplate { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether to reuse the template associated with the stack to create the change set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_change_set#use_previous_template CloudformationChangeSet#use_previous_template}

---

### CloudformationChangeSetTags <a name="CloudformationChangeSetTags" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudformationChangeSetTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_change_set#key CloudformationChangeSet#key}. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_change_set#value CloudformationChangeSet#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_change_set#key CloudformationChangeSet#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_change_set#value CloudformationChangeSet#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudformationChangeSetTagsList <a name="CloudformationChangeSetTagsList" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudformationChangeSetTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList.get"></a>

```csharp
private CloudformationChangeSetTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTags">CloudformationChangeSetTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList.property.internalValue"></a>

```csharp
public IResolvable|CloudformationChangeSetTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTags">CloudformationChangeSetTags</a>[]

---


### CloudformationChangeSetTagsOutputReference <a name="CloudformationChangeSetTagsOutputReference" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudformationChangeSetTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTags">CloudformationChangeSetTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CloudformationChangeSetTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTags">CloudformationChangeSetTags</a>

---



