# `cloudwatchAlert` Submodule <a name="`cloudwatchAlert` Submodule" id="@cdktn/provider-awscc.cloudwatchAlert"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudwatchAlert <a name="CloudwatchAlert" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert awscc_cloudwatch_alert}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudwatchAlert(Construct Scope, string Id, CloudwatchAlertConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertConfig">CloudwatchAlertConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertConfig">CloudwatchAlertConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.putNotificationRules">PutNotificationRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.putRule">PutRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.resetNotificationRules">ResetNotificationRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.resetNotificationsEnabled">ResetNotificationsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutNotificationRules` <a name="PutNotificationRules" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.putNotificationRules"></a>

```csharp
private void PutNotificationRules(IResolvable|CloudwatchAlertNotificationRules[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.putNotificationRules.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRules">CloudwatchAlertNotificationRules</a>[]

---

##### `PutRule` <a name="PutRule" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.putRule"></a>

```csharp
private void PutRule(CloudwatchAlertRule Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.putRule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRule">CloudwatchAlertRule</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.putTags"></a>

```csharp
private void PutTags(IResolvable|CloudwatchAlertTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTags">CloudwatchAlertTags</a>[]

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetNotificationRules` <a name="ResetNotificationRules" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.resetNotificationRules"></a>

```csharp
private void ResetNotificationRules()
```

##### `ResetNotificationsEnabled` <a name="ResetNotificationsEnabled" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.resetNotificationsEnabled"></a>

```csharp
private void ResetNotificationsEnabled()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CloudwatchAlert resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CloudwatchAlert.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CloudwatchAlert.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CloudwatchAlert.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CloudwatchAlert.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a CloudwatchAlert resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudwatchAlert to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudwatchAlert that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the CloudwatchAlert to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.alertId">AlertId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.notificationRules">NotificationRules</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesList">CloudwatchAlertNotificationRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.rule">Rule</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference">CloudwatchAlertRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsList">CloudwatchAlertTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.notificationRulesInput">NotificationRulesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRules">CloudwatchAlertNotificationRules</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.notificationsEnabledInput">NotificationsEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.profileIdInput">ProfileIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.ruleInput">RuleInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRule">CloudwatchAlertRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.spaceIdInput">SpaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTags">CloudwatchAlertTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.notificationsEnabled">NotificationsEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.profileId">ProfileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.spaceId">SpaceId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `AlertId`<sup>Required</sup> <a name="AlertId" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.alertId"></a>

```csharp
public string AlertId { get; }
```

- *Type:* string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `NotificationRules`<sup>Required</sup> <a name="NotificationRules" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.notificationRules"></a>

```csharp
public CloudwatchAlertNotificationRulesList NotificationRules { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesList">CloudwatchAlertNotificationRulesList</a>

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.rule"></a>

```csharp
public CloudwatchAlertRuleOutputReference Rule { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference">CloudwatchAlertRuleOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.tags"></a>

```csharp
public CloudwatchAlertTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsList">CloudwatchAlertTagsList</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NotificationRulesInput`<sup>Optional</sup> <a name="NotificationRulesInput" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.notificationRulesInput"></a>

```csharp
public IResolvable|CloudwatchAlertNotificationRules[] NotificationRulesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRules">CloudwatchAlertNotificationRules</a>[]

---

##### `NotificationsEnabledInput`<sup>Optional</sup> <a name="NotificationsEnabledInput" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.notificationsEnabledInput"></a>

```csharp
public bool|IResolvable NotificationsEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ProfileIdInput`<sup>Optional</sup> <a name="ProfileIdInput" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.profileIdInput"></a>

```csharp
public string ProfileIdInput { get; }
```

- *Type:* string

---

##### `RuleInput`<sup>Optional</sup> <a name="RuleInput" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.ruleInput"></a>

```csharp
public IResolvable|CloudwatchAlertRule RuleInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRule">CloudwatchAlertRule</a>

---

##### `SpaceIdInput`<sup>Optional</sup> <a name="SpaceIdInput" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.spaceIdInput"></a>

```csharp
public string SpaceIdInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.tagsInput"></a>

```csharp
public IResolvable|CloudwatchAlertTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTags">CloudwatchAlertTags</a>[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NotificationsEnabled`<sup>Required</sup> <a name="NotificationsEnabled" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.notificationsEnabled"></a>

```csharp
public bool|IResolvable NotificationsEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ProfileId`<sup>Required</sup> <a name="ProfileId" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.profileId"></a>

```csharp
public string ProfileId { get; }
```

- *Type:* string

---

##### `SpaceId`<sup>Required</sup> <a name="SpaceId" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.spaceId"></a>

```csharp
public string SpaceId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudwatchAlertConfig <a name="CloudwatchAlertConfig" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudwatchAlertConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string ProfileId,
    CloudwatchAlertRule Rule,
    string SpaceId,
    string Description = null,
    IResolvable|CloudwatchAlertNotificationRules[] NotificationRules = null,
    bool|IResolvable NotificationsEnabled = null,
    IResolvable|CloudwatchAlertTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertConfig.property.name">Name</a></code> | <code>string</code> | The display name of the alert. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertConfig.property.profileId">ProfileId</a></code> | <code>string</code> | The ID of the access profile the alert uses to run its query and send notifications. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertConfig.property.rule">Rule</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRule">CloudwatchAlertRule</a></code> | The rule that defines how the alert is evaluated. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertConfig.property.spaceId">SpaceId</a></code> | <code>string</code> | The ID of the space to create the alert in. Changing this value replaces the alert. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertConfig.property.description">Description</a></code> | <code>string</code> | A description of the alert. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertConfig.property.notificationRules">NotificationRules</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRules">CloudwatchAlertNotificationRules</a>[]</code> | The notification rules that determine when and where notifications are sent. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertConfig.property.notificationsEnabled">NotificationsEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether the alert sends notifications. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTags">CloudwatchAlertTags</a>[]</code> | An array of key-value pairs to apply to this resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The display name of the alert.

Names don't need to be unique within a space; the alert is identified by AlertId.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#name CloudwatchAlert#name}

---

##### `ProfileId`<sup>Required</sup> <a name="ProfileId" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertConfig.property.profileId"></a>

```csharp
public string ProfileId { get; set; }
```

- *Type:* string

The ID of the access profile the alert uses to run its query and send notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#profile_id CloudwatchAlert#profile_id}

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertConfig.property.rule"></a>

```csharp
public CloudwatchAlertRule Rule { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRule">CloudwatchAlertRule</a>

The rule that defines how the alert is evaluated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#rule CloudwatchAlert#rule}

---

##### `SpaceId`<sup>Required</sup> <a name="SpaceId" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertConfig.property.spaceId"></a>

```csharp
public string SpaceId { get; set; }
```

- *Type:* string

The ID of the space to create the alert in. Changing this value replaces the alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#space_id CloudwatchAlert#space_id}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A description of the alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#description CloudwatchAlert#description}

---

##### `NotificationRules`<sup>Optional</sup> <a name="NotificationRules" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertConfig.property.notificationRules"></a>

```csharp
public IResolvable|CloudwatchAlertNotificationRules[] NotificationRules { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRules">CloudwatchAlertNotificationRules</a>[]

The notification rules that determine when and where notifications are sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#notification_rules CloudwatchAlert#notification_rules}

---

##### `NotificationsEnabled`<sup>Optional</sup> <a name="NotificationsEnabled" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertConfig.property.notificationsEnabled"></a>

```csharp
public bool|IResolvable NotificationsEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether the alert sends notifications.

When false, the alert is still evaluated and records its state, but sends nothing. Defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#notifications_enabled CloudwatchAlert#notifications_enabled}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertConfig.property.tags"></a>

```csharp
public IResolvable|CloudwatchAlertTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTags">CloudwatchAlertTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#tags CloudwatchAlert#tags}

---

### CloudwatchAlertNotificationRules <a name="CloudwatchAlertNotificationRules" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRules.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudwatchAlertNotificationRules {
    CloudwatchAlertNotificationRulesTarget Target = null,
    CloudwatchAlertNotificationRulesTrigger Trigger = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRules.property.target">Target</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTarget">CloudwatchAlertNotificationRulesTarget</a></code> | Where the notification is sent. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRules.property.trigger">Trigger</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTrigger">CloudwatchAlertNotificationRulesTrigger</a></code> | The alert states that trigger the notification rule. |

---

##### `Target`<sup>Optional</sup> <a name="Target" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRules.property.target"></a>

```csharp
public CloudwatchAlertNotificationRulesTarget Target { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTarget">CloudwatchAlertNotificationRulesTarget</a>

Where the notification is sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#target CloudwatchAlert#target}

---

##### `Trigger`<sup>Optional</sup> <a name="Trigger" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRules.property.trigger"></a>

```csharp
public CloudwatchAlertNotificationRulesTrigger Trigger { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTrigger">CloudwatchAlertNotificationRulesTrigger</a>

The alert states that trigger the notification rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#trigger CloudwatchAlert#trigger}

---

### CloudwatchAlertNotificationRulesTarget <a name="CloudwatchAlertNotificationRulesTarget" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTarget.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudwatchAlertNotificationRulesTarget {
    string Arn = null,
    System.Collections.Generic.IDictionary<string, string> Metadata = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTarget.property.arn">Arn</a></code> | <code>string</code> | The ARN of the target. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTarget.property.metadata">Metadata</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Settings specific to the target, as key-value pairs (up to 20). |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTarget.property.type">Type</a></code> | <code>string</code> | The target type. Valid values: sns, slack, pagerduty. |

---

##### `Arn`<sup>Optional</sup> <a name="Arn" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTarget.property.arn"></a>

```csharp
public string Arn { get; set; }
```

- *Type:* string

The ARN of the target.

For sns, the ARN of the Amazon SNS topic. For slack and pagerduty, the ARN of a CloudWatch Omni integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#arn CloudwatchAlert#arn}

---

##### `Metadata`<sup>Optional</sup> <a name="Metadata" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTarget.property.metadata"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Metadata { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Settings specific to the target, as key-value pairs (up to 20).

The keys depend on the integration type. Not used for sns targets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#metadata CloudwatchAlert#metadata}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTarget.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The target type. Valid values: sns, slack, pagerduty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#type CloudwatchAlert#type}

---

### CloudwatchAlertNotificationRulesTrigger <a name="CloudwatchAlertNotificationRulesTrigger" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTrigger"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTrigger.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudwatchAlertNotificationRulesTrigger {
    string[] StateValues = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTrigger.property.stateValues">StateValues</a></code> | <code>string[]</code> | The alert states that trigger this rule. |

---

##### `StateValues`<sup>Optional</sup> <a name="StateValues" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTrigger.property.stateValues"></a>

```csharp
public string[] StateValues { get; set; }
```

- *Type:* string[]

The alert states that trigger this rule.

A notification is sent when the alert enters any listed state. If omitted or empty, every state triggers the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#state_values CloudwatchAlert#state_values}

---

### CloudwatchAlertRule <a name="CloudwatchAlertRule" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudwatchAlertRule {
    CloudwatchAlertRuleTelemetryRule TelemetryRule
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRule.property.telemetryRule">TelemetryRule</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRule">CloudwatchAlertRuleTelemetryRule</a></code> | A rule that queries telemetry, evaluates the result against a condition, and sets how missing data is handled. |

---

##### `TelemetryRule`<sup>Required</sup> <a name="TelemetryRule" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRule.property.telemetryRule"></a>

```csharp
public CloudwatchAlertRuleTelemetryRule TelemetryRule { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRule">CloudwatchAlertRuleTelemetryRule</a>

A rule that queries telemetry, evaluates the result against a condition, and sets how missing data is handled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#telemetry_rule CloudwatchAlert#telemetry_rule}

---

### CloudwatchAlertRuleTelemetryRule <a name="CloudwatchAlertRuleTelemetryRule" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudwatchAlertRuleTelemetryRule {
    CloudwatchAlertRuleTelemetryRuleCondition Condition,
    CloudwatchAlertRuleTelemetryRuleEvaluation Evaluation,
    CloudwatchAlertRuleTelemetryRuleQuery Query,
    CloudwatchAlertRuleTelemetryRuleNoData NoData = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRule.property.condition">Condition</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleCondition">CloudwatchAlertRuleTelemetryRuleCondition</a></code> | The thresholds that set the alert's state. Specify at least one of WarningThreshold and CriticalThreshold. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRule.property.evaluation">Evaluation</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluation">CloudwatchAlertRuleTelemetryRuleEvaluation</a></code> | How often the alert is evaluated, and how long a change must last before the state changes. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRule.property.query">Query</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQuery">CloudwatchAlertRuleTelemetryRuleQuery</a></code> | The query the alert runs, and the language it is written in. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRule.property.noData">NoData</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoData">CloudwatchAlertRuleTelemetryRuleNoData</a></code> | How the alert behaves when an evaluation returns no data. If omitted, the alert reports NODATA. |

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRule.property.condition"></a>

```csharp
public CloudwatchAlertRuleTelemetryRuleCondition Condition { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleCondition">CloudwatchAlertRuleTelemetryRuleCondition</a>

The thresholds that set the alert's state. Specify at least one of WarningThreshold and CriticalThreshold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#condition CloudwatchAlert#condition}

---

##### `Evaluation`<sup>Required</sup> <a name="Evaluation" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRule.property.evaluation"></a>

```csharp
public CloudwatchAlertRuleTelemetryRuleEvaluation Evaluation { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluation">CloudwatchAlertRuleTelemetryRuleEvaluation</a>

How often the alert is evaluated, and how long a change must last before the state changes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#evaluation CloudwatchAlert#evaluation}

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRule.property.query"></a>

```csharp
public CloudwatchAlertRuleTelemetryRuleQuery Query { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQuery">CloudwatchAlertRuleTelemetryRuleQuery</a>

The query the alert runs, and the language it is written in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#query CloudwatchAlert#query}

---

##### `NoData`<sup>Optional</sup> <a name="NoData" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRule.property.noData"></a>

```csharp
public CloudwatchAlertRuleTelemetryRuleNoData NoData { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoData">CloudwatchAlertRuleTelemetryRuleNoData</a>

How the alert behaves when an evaluation returns no data. If omitted, the alert reports NODATA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#no_data CloudwatchAlert#no_data}

---

### CloudwatchAlertRuleTelemetryRuleCondition <a name="CloudwatchAlertRuleTelemetryRuleCondition" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleCondition.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudwatchAlertRuleTelemetryRuleCondition {
    string Comparator = null,
    double CriticalThreshold = null,
    string ThresholdField = null,
    string ThresholdMode = null,
    double WarningThreshold = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleCondition.property.comparator">Comparator</a></code> | <code>string</code> | The comparison operator. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleCondition.property.criticalThreshold">CriticalThreshold</a></code> | <code>double</code> | The value at which the alert enters the CRITICAL state. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleCondition.property.thresholdField">ThresholdField</a></code> | <code>string</code> | The result field to compare against the threshold. Required when ThresholdMode is FIELD_VALUE. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleCondition.property.thresholdMode">ThresholdMode</a></code> | <code>string</code> | How the threshold is applied. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleCondition.property.warningThreshold">WarningThreshold</a></code> | <code>double</code> | The value at which the alert enters the WARNING state. |

---

##### `Comparator`<sup>Optional</sup> <a name="Comparator" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleCondition.property.comparator"></a>

```csharp
public string Comparator { get; set; }
```

- *Type:* string

The comparison operator.

Valid values: GT, GTE, LT, LTE (greater than, greater than or equal to, less than, less than or equal to).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#comparator CloudwatchAlert#comparator}

---

##### `CriticalThreshold`<sup>Optional</sup> <a name="CriticalThreshold" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleCondition.property.criticalThreshold"></a>

```csharp
public double CriticalThreshold { get; set; }
```

- *Type:* double

The value at which the alert enters the CRITICAL state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#critical_threshold CloudwatchAlert#critical_threshold}

---

##### `ThresholdField`<sup>Optional</sup> <a name="ThresholdField" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleCondition.property.thresholdField"></a>

```csharp
public string ThresholdField { get; set; }
```

- *Type:* string

The result field to compare against the threshold. Required when ThresholdMode is FIELD_VALUE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#threshold_field CloudwatchAlert#threshold_field}

---

##### `ThresholdMode`<sup>Optional</sup> <a name="ThresholdMode" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleCondition.property.thresholdMode"></a>

```csharp
public string ThresholdMode { get; set; }
```

- *Type:* string

How the threshold is applied.

COUNT_OF_RESULTS compares the number of rows the query returns. FIELD_VALUE compares the value of ThresholdField in each result row; each row is tracked separately.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#threshold_mode CloudwatchAlert#threshold_mode}

---

##### `WarningThreshold`<sup>Optional</sup> <a name="WarningThreshold" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleCondition.property.warningThreshold"></a>

```csharp
public double WarningThreshold { get; set; }
```

- *Type:* double

The value at which the alert enters the WARNING state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#warning_threshold CloudwatchAlert#warning_threshold}

---

### CloudwatchAlertRuleTelemetryRuleEvaluation <a name="CloudwatchAlertRuleTelemetryRuleEvaluation" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudwatchAlertRuleTelemetryRuleEvaluation {
    double IntervalSeconds,
    double PendingDurationSeconds = null,
    double RecoveryDurationSeconds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluation.property.intervalSeconds">IntervalSeconds</a></code> | <code>double</code> | The time between evaluations, in seconds. Valid values: 30, 60, 120, 300, 600, 900, 1800, 3600. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluation.property.pendingDurationSeconds">PendingDurationSeconds</a></code> | <code>double</code> | How long a threshold breach must last before the alert changes state, in seconds. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluation.property.recoveryDurationSeconds">RecoveryDurationSeconds</a></code> | <code>double</code> | How long the result must stay within its thresholds before the alert returns to OK, in seconds. |

---

##### `IntervalSeconds`<sup>Required</sup> <a name="IntervalSeconds" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluation.property.intervalSeconds"></a>

```csharp
public double IntervalSeconds { get; set; }
```

- *Type:* double

The time between evaluations, in seconds. Valid values: 30, 60, 120, 300, 600, 900, 1800, 3600.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#interval_seconds CloudwatchAlert#interval_seconds}

---

##### `PendingDurationSeconds`<sup>Optional</sup> <a name="PendingDurationSeconds" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluation.property.pendingDurationSeconds"></a>

```csharp
public double PendingDurationSeconds { get; set; }
```

- *Type:* double

How long a threshold breach must last before the alert changes state, in seconds.

Must be a multiple of IntervalSeconds. 0 changes state immediately.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#pending_duration_seconds CloudwatchAlert#pending_duration_seconds}

---

##### `RecoveryDurationSeconds`<sup>Optional</sup> <a name="RecoveryDurationSeconds" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluation.property.recoveryDurationSeconds"></a>

```csharp
public double RecoveryDurationSeconds { get; set; }
```

- *Type:* double

How long the result must stay within its thresholds before the alert returns to OK, in seconds.

Must be a multiple of IntervalSeconds. 0 returns to OK immediately.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#recovery_duration_seconds CloudwatchAlert#recovery_duration_seconds}

---

### CloudwatchAlertRuleTelemetryRuleNoData <a name="CloudwatchAlertRuleTelemetryRuleNoData" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoData"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoData.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudwatchAlertRuleTelemetryRuleNoData {
    string TreatAs = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoData.property.treatAs">TreatAs</a></code> | <code>string</code> | The state to report when an evaluation returns no data. Valid values: OK, WARNING, CRITICAL, NODATA. |

---

##### `TreatAs`<sup>Optional</sup> <a name="TreatAs" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoData.property.treatAs"></a>

```csharp
public string TreatAs { get; set; }
```

- *Type:* string

The state to report when an evaluation returns no data. Valid values: OK, WARNING, CRITICAL, NODATA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#treat_as CloudwatchAlert#treat_as}

---

### CloudwatchAlertRuleTelemetryRuleQuery <a name="CloudwatchAlertRuleTelemetryRuleQuery" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQuery"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQuery.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudwatchAlertRuleTelemetryRuleQuery {
    string Expression,
    string Language
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQuery.property.expression">Expression</a></code> | <code>string</code> | The query expression. For PromQL, the series value is returned in a field named value. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQuery.property.language">Language</a></code> | <code>string</code> | The query language. Valid values: SQL, PROMQL. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQuery.property.expression"></a>

```csharp
public string Expression { get; set; }
```

- *Type:* string

The query expression. For PromQL, the series value is returned in a field named value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#expression CloudwatchAlert#expression}

---

##### `Language`<sup>Required</sup> <a name="Language" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQuery.property.language"></a>

```csharp
public string Language { get; set; }
```

- *Type:* string

The query language. Valid values: SQL, PROMQL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#language CloudwatchAlert#language}

---

### CloudwatchAlertTags <a name="CloudwatchAlertTags" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudwatchAlertTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#key CloudwatchAlert#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#value CloudwatchAlert#value}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudwatchAlertNotificationRulesList <a name="CloudwatchAlertNotificationRulesList" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudwatchAlertNotificationRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesList.get"></a>

```csharp
private CloudwatchAlertNotificationRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRules">CloudwatchAlertNotificationRules</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesList.property.internalValue"></a>

```csharp
public IResolvable|CloudwatchAlertNotificationRules[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRules">CloudwatchAlertNotificationRules</a>[]

---


### CloudwatchAlertNotificationRulesOutputReference <a name="CloudwatchAlertNotificationRulesOutputReference" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudwatchAlertNotificationRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.putTarget">PutTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.putTrigger">PutTrigger</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.resetTarget">ResetTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.resetTrigger">ResetTrigger</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTarget` <a name="PutTarget" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.putTarget"></a>

```csharp
private void PutTarget(CloudwatchAlertNotificationRulesTarget Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.putTarget.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTarget">CloudwatchAlertNotificationRulesTarget</a>

---

##### `PutTrigger` <a name="PutTrigger" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.putTrigger"></a>

```csharp
private void PutTrigger(CloudwatchAlertNotificationRulesTrigger Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.putTrigger.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTrigger">CloudwatchAlertNotificationRulesTrigger</a>

---

##### `ResetTarget` <a name="ResetTarget" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.resetTarget"></a>

```csharp
private void ResetTarget()
```

##### `ResetTrigger` <a name="ResetTrigger" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.resetTrigger"></a>

```csharp
private void ResetTrigger()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.property.target">Target</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference">CloudwatchAlertNotificationRulesTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.property.trigger">Trigger</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference">CloudwatchAlertNotificationRulesTriggerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.property.targetInput">TargetInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTarget">CloudwatchAlertNotificationRulesTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.property.triggerInput">TriggerInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTrigger">CloudwatchAlertNotificationRulesTrigger</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRules">CloudwatchAlertNotificationRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.property.target"></a>

```csharp
public CloudwatchAlertNotificationRulesTargetOutputReference Target { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference">CloudwatchAlertNotificationRulesTargetOutputReference</a>

---

##### `Trigger`<sup>Required</sup> <a name="Trigger" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.property.trigger"></a>

```csharp
public CloudwatchAlertNotificationRulesTriggerOutputReference Trigger { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference">CloudwatchAlertNotificationRulesTriggerOutputReference</a>

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.property.targetInput"></a>

```csharp
public IResolvable|CloudwatchAlertNotificationRulesTarget TargetInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTarget">CloudwatchAlertNotificationRulesTarget</a>

---

##### `TriggerInput`<sup>Optional</sup> <a name="TriggerInput" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.property.triggerInput"></a>

```csharp
public IResolvable|CloudwatchAlertNotificationRulesTrigger TriggerInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTrigger">CloudwatchAlertNotificationRulesTrigger</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CloudwatchAlertNotificationRules InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRules">CloudwatchAlertNotificationRules</a>

---


### CloudwatchAlertNotificationRulesTargetOutputReference <a name="CloudwatchAlertNotificationRulesTargetOutputReference" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudwatchAlertNotificationRulesTargetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.resetArn">ResetArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.resetMetadata">ResetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetArn` <a name="ResetArn" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.resetArn"></a>

```csharp
private void ResetArn()
```

##### `ResetMetadata` <a name="ResetMetadata" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.resetMetadata"></a>

```csharp
private void ResetMetadata()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.property.arnInput">ArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.property.metadataInput">MetadataInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.property.metadata">Metadata</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTarget">CloudwatchAlertNotificationRulesTarget</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ArnInput`<sup>Optional</sup> <a name="ArnInput" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.property.arnInput"></a>

```csharp
public string ArnInput { get; }
```

- *Type:* string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.property.metadataInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> MetadataInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.property.metadata"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Metadata { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CloudwatchAlertNotificationRulesTarget InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTarget">CloudwatchAlertNotificationRulesTarget</a>

---


### CloudwatchAlertNotificationRulesTriggerOutputReference <a name="CloudwatchAlertNotificationRulesTriggerOutputReference" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudwatchAlertNotificationRulesTriggerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.resetStateValues">ResetStateValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetStateValues` <a name="ResetStateValues" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.resetStateValues"></a>

```csharp
private void ResetStateValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.property.stateValuesInput">StateValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.property.stateValues">StateValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTrigger">CloudwatchAlertNotificationRulesTrigger</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `StateValuesInput`<sup>Optional</sup> <a name="StateValuesInput" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.property.stateValuesInput"></a>

```csharp
public string[] StateValuesInput { get; }
```

- *Type:* string[]

---

##### `StateValues`<sup>Required</sup> <a name="StateValues" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.property.stateValues"></a>

```csharp
public string[] StateValues { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CloudwatchAlertNotificationRulesTrigger InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTrigger">CloudwatchAlertNotificationRulesTrigger</a>

---


### CloudwatchAlertRuleOutputReference <a name="CloudwatchAlertRuleOutputReference" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudwatchAlertRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.putTelemetryRule">PutTelemetryRule</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTelemetryRule` <a name="PutTelemetryRule" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.putTelemetryRule"></a>

```csharp
private void PutTelemetryRule(CloudwatchAlertRuleTelemetryRule Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.putTelemetryRule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRule">CloudwatchAlertRuleTelemetryRule</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.property.telemetryRule">TelemetryRule</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference">CloudwatchAlertRuleTelemetryRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.property.telemetryRuleInput">TelemetryRuleInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRule">CloudwatchAlertRuleTelemetryRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRule">CloudwatchAlertRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TelemetryRule`<sup>Required</sup> <a name="TelemetryRule" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.property.telemetryRule"></a>

```csharp
public CloudwatchAlertRuleTelemetryRuleOutputReference TelemetryRule { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference">CloudwatchAlertRuleTelemetryRuleOutputReference</a>

---

##### `TelemetryRuleInput`<sup>Optional</sup> <a name="TelemetryRuleInput" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.property.telemetryRuleInput"></a>

```csharp
public IResolvable|CloudwatchAlertRuleTelemetryRule TelemetryRuleInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRule">CloudwatchAlertRuleTelemetryRule</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CloudwatchAlertRule InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRule">CloudwatchAlertRule</a>

---


### CloudwatchAlertRuleTelemetryRuleConditionOutputReference <a name="CloudwatchAlertRuleTelemetryRuleConditionOutputReference" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudwatchAlertRuleTelemetryRuleConditionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.resetComparator">ResetComparator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.resetCriticalThreshold">ResetCriticalThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.resetThresholdField">ResetThresholdField</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.resetThresholdMode">ResetThresholdMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.resetWarningThreshold">ResetWarningThreshold</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetComparator` <a name="ResetComparator" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.resetComparator"></a>

```csharp
private void ResetComparator()
```

##### `ResetCriticalThreshold` <a name="ResetCriticalThreshold" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.resetCriticalThreshold"></a>

```csharp
private void ResetCriticalThreshold()
```

##### `ResetThresholdField` <a name="ResetThresholdField" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.resetThresholdField"></a>

```csharp
private void ResetThresholdField()
```

##### `ResetThresholdMode` <a name="ResetThresholdMode" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.resetThresholdMode"></a>

```csharp
private void ResetThresholdMode()
```

##### `ResetWarningThreshold` <a name="ResetWarningThreshold" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.resetWarningThreshold"></a>

```csharp
private void ResetWarningThreshold()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.property.comparatorInput">ComparatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.property.criticalThresholdInput">CriticalThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.property.thresholdFieldInput">ThresholdFieldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.property.thresholdModeInput">ThresholdModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.property.warningThresholdInput">WarningThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.property.comparator">Comparator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.property.criticalThreshold">CriticalThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.property.thresholdField">ThresholdField</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.property.thresholdMode">ThresholdMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.property.warningThreshold">WarningThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleCondition">CloudwatchAlertRuleTelemetryRuleCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ComparatorInput`<sup>Optional</sup> <a name="ComparatorInput" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.property.comparatorInput"></a>

```csharp
public string ComparatorInput { get; }
```

- *Type:* string

---

##### `CriticalThresholdInput`<sup>Optional</sup> <a name="CriticalThresholdInput" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.property.criticalThresholdInput"></a>

```csharp
public double CriticalThresholdInput { get; }
```

- *Type:* double

---

##### `ThresholdFieldInput`<sup>Optional</sup> <a name="ThresholdFieldInput" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.property.thresholdFieldInput"></a>

```csharp
public string ThresholdFieldInput { get; }
```

- *Type:* string

---

##### `ThresholdModeInput`<sup>Optional</sup> <a name="ThresholdModeInput" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.property.thresholdModeInput"></a>

```csharp
public string ThresholdModeInput { get; }
```

- *Type:* string

---

##### `WarningThresholdInput`<sup>Optional</sup> <a name="WarningThresholdInput" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.property.warningThresholdInput"></a>

```csharp
public double WarningThresholdInput { get; }
```

- *Type:* double

---

##### `Comparator`<sup>Required</sup> <a name="Comparator" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.property.comparator"></a>

```csharp
public string Comparator { get; }
```

- *Type:* string

---

##### `CriticalThreshold`<sup>Required</sup> <a name="CriticalThreshold" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.property.criticalThreshold"></a>

```csharp
public double CriticalThreshold { get; }
```

- *Type:* double

---

##### `ThresholdField`<sup>Required</sup> <a name="ThresholdField" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.property.thresholdField"></a>

```csharp
public string ThresholdField { get; }
```

- *Type:* string

---

##### `ThresholdMode`<sup>Required</sup> <a name="ThresholdMode" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.property.thresholdMode"></a>

```csharp
public string ThresholdMode { get; }
```

- *Type:* string

---

##### `WarningThreshold`<sup>Required</sup> <a name="WarningThreshold" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.property.warningThreshold"></a>

```csharp
public double WarningThreshold { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CloudwatchAlertRuleTelemetryRuleCondition InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleCondition">CloudwatchAlertRuleTelemetryRuleCondition</a>

---


### CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference <a name="CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.resetPendingDurationSeconds">ResetPendingDurationSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.resetRecoveryDurationSeconds">ResetRecoveryDurationSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPendingDurationSeconds` <a name="ResetPendingDurationSeconds" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.resetPendingDurationSeconds"></a>

```csharp
private void ResetPendingDurationSeconds()
```

##### `ResetRecoveryDurationSeconds` <a name="ResetRecoveryDurationSeconds" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.resetRecoveryDurationSeconds"></a>

```csharp
private void ResetRecoveryDurationSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.property.intervalSecondsInput">IntervalSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.property.pendingDurationSecondsInput">PendingDurationSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.property.recoveryDurationSecondsInput">RecoveryDurationSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.property.intervalSeconds">IntervalSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.property.pendingDurationSeconds">PendingDurationSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.property.recoveryDurationSeconds">RecoveryDurationSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluation">CloudwatchAlertRuleTelemetryRuleEvaluation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IntervalSecondsInput`<sup>Optional</sup> <a name="IntervalSecondsInput" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.property.intervalSecondsInput"></a>

```csharp
public double IntervalSecondsInput { get; }
```

- *Type:* double

---

##### `PendingDurationSecondsInput`<sup>Optional</sup> <a name="PendingDurationSecondsInput" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.property.pendingDurationSecondsInput"></a>

```csharp
public double PendingDurationSecondsInput { get; }
```

- *Type:* double

---

##### `RecoveryDurationSecondsInput`<sup>Optional</sup> <a name="RecoveryDurationSecondsInput" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.property.recoveryDurationSecondsInput"></a>

```csharp
public double RecoveryDurationSecondsInput { get; }
```

- *Type:* double

---

##### `IntervalSeconds`<sup>Required</sup> <a name="IntervalSeconds" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.property.intervalSeconds"></a>

```csharp
public double IntervalSeconds { get; }
```

- *Type:* double

---

##### `PendingDurationSeconds`<sup>Required</sup> <a name="PendingDurationSeconds" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.property.pendingDurationSeconds"></a>

```csharp
public double PendingDurationSeconds { get; }
```

- *Type:* double

---

##### `RecoveryDurationSeconds`<sup>Required</sup> <a name="RecoveryDurationSeconds" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.property.recoveryDurationSeconds"></a>

```csharp
public double RecoveryDurationSeconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CloudwatchAlertRuleTelemetryRuleEvaluation InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluation">CloudwatchAlertRuleTelemetryRuleEvaluation</a>

---


### CloudwatchAlertRuleTelemetryRuleNoDataOutputReference <a name="CloudwatchAlertRuleTelemetryRuleNoDataOutputReference" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudwatchAlertRuleTelemetryRuleNoDataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.resetTreatAs">ResetTreatAs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTreatAs` <a name="ResetTreatAs" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.resetTreatAs"></a>

```csharp
private void ResetTreatAs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.property.treatAsInput">TreatAsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.property.treatAs">TreatAs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoData">CloudwatchAlertRuleTelemetryRuleNoData</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TreatAsInput`<sup>Optional</sup> <a name="TreatAsInput" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.property.treatAsInput"></a>

```csharp
public string TreatAsInput { get; }
```

- *Type:* string

---

##### `TreatAs`<sup>Required</sup> <a name="TreatAs" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.property.treatAs"></a>

```csharp
public string TreatAs { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CloudwatchAlertRuleTelemetryRuleNoData InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoData">CloudwatchAlertRuleTelemetryRuleNoData</a>

---


### CloudwatchAlertRuleTelemetryRuleOutputReference <a name="CloudwatchAlertRuleTelemetryRuleOutputReference" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudwatchAlertRuleTelemetryRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.putEvaluation">PutEvaluation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.putNoData">PutNoData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.putQuery">PutQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.resetNoData">ResetNoData</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCondition` <a name="PutCondition" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.putCondition"></a>

```csharp
private void PutCondition(CloudwatchAlertRuleTelemetryRuleCondition Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleCondition">CloudwatchAlertRuleTelemetryRuleCondition</a>

---

##### `PutEvaluation` <a name="PutEvaluation" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.putEvaluation"></a>

```csharp
private void PutEvaluation(CloudwatchAlertRuleTelemetryRuleEvaluation Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.putEvaluation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluation">CloudwatchAlertRuleTelemetryRuleEvaluation</a>

---

##### `PutNoData` <a name="PutNoData" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.putNoData"></a>

```csharp
private void PutNoData(CloudwatchAlertRuleTelemetryRuleNoData Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.putNoData.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoData">CloudwatchAlertRuleTelemetryRuleNoData</a>

---

##### `PutQuery` <a name="PutQuery" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.putQuery"></a>

```csharp
private void PutQuery(CloudwatchAlertRuleTelemetryRuleQuery Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.putQuery.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQuery">CloudwatchAlertRuleTelemetryRuleQuery</a>

---

##### `ResetNoData` <a name="ResetNoData" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.resetNoData"></a>

```csharp
private void ResetNoData()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.property.condition">Condition</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference">CloudwatchAlertRuleTelemetryRuleConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.property.evaluation">Evaluation</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference">CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.property.noData">NoData</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference">CloudwatchAlertRuleTelemetryRuleNoDataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.property.query">Query</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference">CloudwatchAlertRuleTelemetryRuleQueryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.property.conditionInput">ConditionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleCondition">CloudwatchAlertRuleTelemetryRuleCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.property.evaluationInput">EvaluationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluation">CloudwatchAlertRuleTelemetryRuleEvaluation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.property.noDataInput">NoDataInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoData">CloudwatchAlertRuleTelemetryRuleNoData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.property.queryInput">QueryInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQuery">CloudwatchAlertRuleTelemetryRuleQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRule">CloudwatchAlertRuleTelemetryRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.property.condition"></a>

```csharp
public CloudwatchAlertRuleTelemetryRuleConditionOutputReference Condition { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference">CloudwatchAlertRuleTelemetryRuleConditionOutputReference</a>

---

##### `Evaluation`<sup>Required</sup> <a name="Evaluation" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.property.evaluation"></a>

```csharp
public CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference Evaluation { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference">CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference</a>

---

##### `NoData`<sup>Required</sup> <a name="NoData" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.property.noData"></a>

```csharp
public CloudwatchAlertRuleTelemetryRuleNoDataOutputReference NoData { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference">CloudwatchAlertRuleTelemetryRuleNoDataOutputReference</a>

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.property.query"></a>

```csharp
public CloudwatchAlertRuleTelemetryRuleQueryOutputReference Query { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference">CloudwatchAlertRuleTelemetryRuleQueryOutputReference</a>

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.property.conditionInput"></a>

```csharp
public IResolvable|CloudwatchAlertRuleTelemetryRuleCondition ConditionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleCondition">CloudwatchAlertRuleTelemetryRuleCondition</a>

---

##### `EvaluationInput`<sup>Optional</sup> <a name="EvaluationInput" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.property.evaluationInput"></a>

```csharp
public IResolvable|CloudwatchAlertRuleTelemetryRuleEvaluation EvaluationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluation">CloudwatchAlertRuleTelemetryRuleEvaluation</a>

---

##### `NoDataInput`<sup>Optional</sup> <a name="NoDataInput" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.property.noDataInput"></a>

```csharp
public IResolvable|CloudwatchAlertRuleTelemetryRuleNoData NoDataInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoData">CloudwatchAlertRuleTelemetryRuleNoData</a>

---

##### `QueryInput`<sup>Optional</sup> <a name="QueryInput" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.property.queryInput"></a>

```csharp
public IResolvable|CloudwatchAlertRuleTelemetryRuleQuery QueryInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQuery">CloudwatchAlertRuleTelemetryRuleQuery</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CloudwatchAlertRuleTelemetryRule InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRule">CloudwatchAlertRuleTelemetryRule</a>

---


### CloudwatchAlertRuleTelemetryRuleQueryOutputReference <a name="CloudwatchAlertRuleTelemetryRuleQueryOutputReference" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudwatchAlertRuleTelemetryRuleQueryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.property.languageInput">LanguageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.property.language">Language</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQuery">CloudwatchAlertRuleTelemetryRuleQuery</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.property.expressionInput"></a>

```csharp
public string ExpressionInput { get; }
```

- *Type:* string

---

##### `LanguageInput`<sup>Optional</sup> <a name="LanguageInput" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.property.languageInput"></a>

```csharp
public string LanguageInput { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `Language`<sup>Required</sup> <a name="Language" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.property.language"></a>

```csharp
public string Language { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CloudwatchAlertRuleTelemetryRuleQuery InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQuery">CloudwatchAlertRuleTelemetryRuleQuery</a>

---


### CloudwatchAlertTagsList <a name="CloudwatchAlertTagsList" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudwatchAlertTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsList.get"></a>

```csharp
private CloudwatchAlertTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTags">CloudwatchAlertTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsList.property.internalValue"></a>

```csharp
public IResolvable|CloudwatchAlertTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTags">CloudwatchAlertTags</a>[]

---


### CloudwatchAlertTagsOutputReference <a name="CloudwatchAlertTagsOutputReference" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudwatchAlertTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTags">CloudwatchAlertTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CloudwatchAlertTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTags">CloudwatchAlertTags</a>

---



