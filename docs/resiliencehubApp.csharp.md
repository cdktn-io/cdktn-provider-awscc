# `resiliencehubApp` Submodule <a name="`resiliencehubApp` Submodule" id="@cdktn/provider-awscc.resiliencehubApp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ResiliencehubApp <a name="ResiliencehubApp" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/resiliencehub_app awscc_resiliencehub_app}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ResiliencehubApp(Construct Scope, string Id, ResiliencehubAppConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig">ResiliencehubAppConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig">ResiliencehubAppConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.putEventSubscriptions">PutEventSubscriptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.putPermissionModel">PutPermissionModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.putResourceMappings">PutResourceMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.resetAppAssessmentSchedule">ResetAppAssessmentSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.resetEventSubscriptions">ResetEventSubscriptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.resetPermissionModel">ResetPermissionModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.resetResiliencyPolicyArn">ResetResiliencyPolicyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEventSubscriptions` <a name="PutEventSubscriptions" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.putEventSubscriptions"></a>

```csharp
private void PutEventSubscriptions(IResolvable|ResiliencehubAppEventSubscriptions[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.putEventSubscriptions.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptions">ResiliencehubAppEventSubscriptions</a>[]

---

##### `PutPermissionModel` <a name="PutPermissionModel" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.putPermissionModel"></a>

```csharp
private void PutPermissionModel(ResiliencehubAppPermissionModel Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.putPermissionModel.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModel">ResiliencehubAppPermissionModel</a>

---

##### `PutResourceMappings` <a name="PutResourceMappings" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.putResourceMappings"></a>

```csharp
private void PutResourceMappings(IResolvable|ResiliencehubAppResourceMappings[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.putResourceMappings.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappings">ResiliencehubAppResourceMappings</a>[]

---

##### `ResetAppAssessmentSchedule` <a name="ResetAppAssessmentSchedule" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.resetAppAssessmentSchedule"></a>

```csharp
private void ResetAppAssessmentSchedule()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEventSubscriptions` <a name="ResetEventSubscriptions" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.resetEventSubscriptions"></a>

```csharp
private void ResetEventSubscriptions()
```

##### `ResetPermissionModel` <a name="ResetPermissionModel" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.resetPermissionModel"></a>

```csharp
private void ResetPermissionModel()
```

##### `ResetResiliencyPolicyArn` <a name="ResetResiliencyPolicyArn" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.resetResiliencyPolicyArn"></a>

```csharp
private void ResetResiliencyPolicyArn()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ResiliencehubApp resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ResiliencehubApp.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ResiliencehubApp.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ResiliencehubApp.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ResiliencehubApp.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ResiliencehubApp resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ResiliencehubApp to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ResiliencehubApp that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/resiliencehub_app#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ResiliencehubApp to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.appArn">AppArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.driftStatus">DriftStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.eventSubscriptions">EventSubscriptions</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList">ResiliencehubAppEventSubscriptionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.permissionModel">PermissionModel</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference">ResiliencehubAppPermissionModelOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.resourceMappings">ResourceMappings</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList">ResiliencehubAppResourceMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.appAssessmentScheduleInput">AppAssessmentScheduleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.appTemplateBodyInput">AppTemplateBodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.eventSubscriptionsInput">EventSubscriptionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptions">ResiliencehubAppEventSubscriptions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.permissionModelInput">PermissionModelInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModel">ResiliencehubAppPermissionModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.resiliencyPolicyArnInput">ResiliencyPolicyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.resourceMappingsInput">ResourceMappingsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappings">ResiliencehubAppResourceMappings</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.appAssessmentSchedule">AppAssessmentSchedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.appTemplateBody">AppTemplateBody</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.resiliencyPolicyArn">ResiliencyPolicyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AppArn`<sup>Required</sup> <a name="AppArn" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.appArn"></a>

```csharp
public string AppArn { get; }
```

- *Type:* string

---

##### `DriftStatus`<sup>Required</sup> <a name="DriftStatus" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.driftStatus"></a>

```csharp
public string DriftStatus { get; }
```

- *Type:* string

---

##### `EventSubscriptions`<sup>Required</sup> <a name="EventSubscriptions" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.eventSubscriptions"></a>

```csharp
public ResiliencehubAppEventSubscriptionsList EventSubscriptions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList">ResiliencehubAppEventSubscriptionsList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PermissionModel`<sup>Required</sup> <a name="PermissionModel" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.permissionModel"></a>

```csharp
public ResiliencehubAppPermissionModelOutputReference PermissionModel { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference">ResiliencehubAppPermissionModelOutputReference</a>

---

##### `ResourceMappings`<sup>Required</sup> <a name="ResourceMappings" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.resourceMappings"></a>

```csharp
public ResiliencehubAppResourceMappingsList ResourceMappings { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList">ResiliencehubAppResourceMappingsList</a>

---

##### `AppAssessmentScheduleInput`<sup>Optional</sup> <a name="AppAssessmentScheduleInput" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.appAssessmentScheduleInput"></a>

```csharp
public string AppAssessmentScheduleInput { get; }
```

- *Type:* string

---

##### `AppTemplateBodyInput`<sup>Optional</sup> <a name="AppTemplateBodyInput" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.appTemplateBodyInput"></a>

```csharp
public string AppTemplateBodyInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EventSubscriptionsInput`<sup>Optional</sup> <a name="EventSubscriptionsInput" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.eventSubscriptionsInput"></a>

```csharp
public IResolvable|ResiliencehubAppEventSubscriptions[] EventSubscriptionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptions">ResiliencehubAppEventSubscriptions</a>[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PermissionModelInput`<sup>Optional</sup> <a name="PermissionModelInput" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.permissionModelInput"></a>

```csharp
public IResolvable|ResiliencehubAppPermissionModel PermissionModelInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModel">ResiliencehubAppPermissionModel</a>

---

##### `ResiliencyPolicyArnInput`<sup>Optional</sup> <a name="ResiliencyPolicyArnInput" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.resiliencyPolicyArnInput"></a>

```csharp
public string ResiliencyPolicyArnInput { get; }
```

- *Type:* string

---

##### `ResourceMappingsInput`<sup>Optional</sup> <a name="ResourceMappingsInput" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.resourceMappingsInput"></a>

```csharp
public IResolvable|ResiliencehubAppResourceMappings[] ResourceMappingsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappings">ResiliencehubAppResourceMappings</a>[]

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `AppAssessmentSchedule`<sup>Required</sup> <a name="AppAssessmentSchedule" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.appAssessmentSchedule"></a>

```csharp
public string AppAssessmentSchedule { get; }
```

- *Type:* string

---

##### `AppTemplateBody`<sup>Required</sup> <a name="AppTemplateBody" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.appTemplateBody"></a>

```csharp
public string AppTemplateBody { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ResiliencyPolicyArn`<sup>Required</sup> <a name="ResiliencyPolicyArn" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.resiliencyPolicyArn"></a>

```csharp
public string ResiliencyPolicyArn { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ResiliencehubAppConfig <a name="ResiliencehubAppConfig" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ResiliencehubAppConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AppTemplateBody,
    string Name,
    IResolvable|ResiliencehubAppResourceMappings[] ResourceMappings,
    string AppAssessmentSchedule = null,
    string Description = null,
    IResolvable|ResiliencehubAppEventSubscriptions[] EventSubscriptions = null,
    ResiliencehubAppPermissionModel PermissionModel = null,
    string ResiliencyPolicyArn = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.appTemplateBody">AppTemplateBody</a></code> | <code>string</code> | A string containing full ResilienceHub app template body. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.name">Name</a></code> | <code>string</code> | Name of the app. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.resourceMappings">ResourceMappings</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappings">ResiliencehubAppResourceMappings</a>[]</code> | An array of ResourceMapping objects. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.appAssessmentSchedule">AppAssessmentSchedule</a></code> | <code>string</code> | Assessment execution schedule. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.description">Description</a></code> | <code>string</code> | App description. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.eventSubscriptions">EventSubscriptions</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptions">ResiliencehubAppEventSubscriptions</a>[]</code> | The list of events you would like to subscribe and get notification for. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.permissionModel">PermissionModel</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModel">ResiliencehubAppPermissionModel</a></code> | Defines the roles and credentials that AWS Resilience Hub would use while creating the application, importing its resources, and running an assessment. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.resiliencyPolicyArn">ResiliencyPolicyArn</a></code> | <code>string</code> | Amazon Resource Name (ARN) of the Resiliency Policy. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/resiliencehub_app#tags ResiliencehubApp#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AppTemplateBody`<sup>Required</sup> <a name="AppTemplateBody" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.appTemplateBody"></a>

```csharp
public string AppTemplateBody { get; set; }
```

- *Type:* string

A string containing full ResilienceHub app template body.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/resiliencehub_app#app_template_body ResiliencehubApp#app_template_body}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/resiliencehub_app#name ResiliencehubApp#name}

---

##### `ResourceMappings`<sup>Required</sup> <a name="ResourceMappings" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.resourceMappings"></a>

```csharp
public IResolvable|ResiliencehubAppResourceMappings[] ResourceMappings { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappings">ResiliencehubAppResourceMappings</a>[]

An array of ResourceMapping objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/resiliencehub_app#resource_mappings ResiliencehubApp#resource_mappings}

---

##### `AppAssessmentSchedule`<sup>Optional</sup> <a name="AppAssessmentSchedule" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.appAssessmentSchedule"></a>

```csharp
public string AppAssessmentSchedule { get; set; }
```

- *Type:* string

Assessment execution schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/resiliencehub_app#app_assessment_schedule ResiliencehubApp#app_assessment_schedule}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

App description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/resiliencehub_app#description ResiliencehubApp#description}

---

##### `EventSubscriptions`<sup>Optional</sup> <a name="EventSubscriptions" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.eventSubscriptions"></a>

```csharp
public IResolvable|ResiliencehubAppEventSubscriptions[] EventSubscriptions { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptions">ResiliencehubAppEventSubscriptions</a>[]

The list of events you would like to subscribe and get notification for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/resiliencehub_app#event_subscriptions ResiliencehubApp#event_subscriptions}

---

##### `PermissionModel`<sup>Optional</sup> <a name="PermissionModel" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.permissionModel"></a>

```csharp
public ResiliencehubAppPermissionModel PermissionModel { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModel">ResiliencehubAppPermissionModel</a>

Defines the roles and credentials that AWS Resilience Hub would use while creating the application, importing its resources, and running an assessment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/resiliencehub_app#permission_model ResiliencehubApp#permission_model}

---

##### `ResiliencyPolicyArn`<sup>Optional</sup> <a name="ResiliencyPolicyArn" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.resiliencyPolicyArn"></a>

```csharp
public string ResiliencyPolicyArn { get; set; }
```

- *Type:* string

Amazon Resource Name (ARN) of the Resiliency Policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/resiliencehub_app#resiliency_policy_arn ResiliencehubApp#resiliency_policy_arn}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/resiliencehub_app#tags ResiliencehubApp#tags}.

---

### ResiliencehubAppEventSubscriptions <a name="ResiliencehubAppEventSubscriptions" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ResiliencehubAppEventSubscriptions {
    string EventType = null,
    string Name = null,
    string SnsTopicArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptions.property.eventType">EventType</a></code> | <code>string</code> | The type of event you would like to subscribe and get notification for. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptions.property.name">Name</a></code> | <code>string</code> | Unique name to identify an event subscription. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptions.property.snsTopicArn">SnsTopicArn</a></code> | <code>string</code> | Amazon Resource Name (ARN) of the Amazon Simple Notification Service topic. |

---

##### `EventType`<sup>Optional</sup> <a name="EventType" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptions.property.eventType"></a>

```csharp
public string EventType { get; set; }
```

- *Type:* string

The type of event you would like to subscribe and get notification for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/resiliencehub_app#event_type ResiliencehubApp#event_type}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptions.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Unique name to identify an event subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/resiliencehub_app#name ResiliencehubApp#name}

---

##### `SnsTopicArn`<sup>Optional</sup> <a name="SnsTopicArn" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptions.property.snsTopicArn"></a>

```csharp
public string SnsTopicArn { get; set; }
```

- *Type:* string

Amazon Resource Name (ARN) of the Amazon Simple Notification Service topic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/resiliencehub_app#sns_topic_arn ResiliencehubApp#sns_topic_arn}

---

### ResiliencehubAppPermissionModel <a name="ResiliencehubAppPermissionModel" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModel"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModel.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ResiliencehubAppPermissionModel {
    string[] CrossAccountRoleArns = null,
    string InvokerRoleName = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModel.property.crossAccountRoleArns">CrossAccountRoleArns</a></code> | <code>string[]</code> | Defines a list of role Amazon Resource Names (ARNs) to be used in other accounts. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModel.property.invokerRoleName">InvokerRoleName</a></code> | <code>string</code> | Existing AWS IAM role name in the primary AWS account that will be assumed by AWS Resilience Hub Service Principle to obtain a read-only access to your application resources while running an assessment. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModel.property.type">Type</a></code> | <code>string</code> | Defines how AWS Resilience Hub scans your resources. |

---

##### `CrossAccountRoleArns`<sup>Optional</sup> <a name="CrossAccountRoleArns" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModel.property.crossAccountRoleArns"></a>

```csharp
public string[] CrossAccountRoleArns { get; set; }
```

- *Type:* string[]

Defines a list of role Amazon Resource Names (ARNs) to be used in other accounts.

These ARNs are used for querying purposes while importing resources and assessing your application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/resiliencehub_app#cross_account_role_arns ResiliencehubApp#cross_account_role_arns}

---

##### `InvokerRoleName`<sup>Optional</sup> <a name="InvokerRoleName" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModel.property.invokerRoleName"></a>

```csharp
public string InvokerRoleName { get; set; }
```

- *Type:* string

Existing AWS IAM role name in the primary AWS account that will be assumed by AWS Resilience Hub Service Principle to obtain a read-only access to your application resources while running an assessment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/resiliencehub_app#invoker_role_name ResiliencehubApp#invoker_role_name}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModel.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Defines how AWS Resilience Hub scans your resources.

It can scan for the resources by using a pre-existing role in your AWS account, or by using the credentials of the current IAM user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/resiliencehub_app#type ResiliencehubApp#type}

---

### ResiliencehubAppResourceMappings <a name="ResiliencehubAppResourceMappings" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ResiliencehubAppResourceMappings {
    string MappingType,
    ResiliencehubAppResourceMappingsPhysicalResourceId PhysicalResourceId,
    string EksSourceName = null,
    string LogicalStackName = null,
    string ResourceName = null,
    string TerraformSourceName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappings.property.mappingType">MappingType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/resiliencehub_app#mapping_type ResiliencehubApp#mapping_type}. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappings.property.physicalResourceId">PhysicalResourceId</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceId">ResiliencehubAppResourceMappingsPhysicalResourceId</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/resiliencehub_app#physical_resource_id ResiliencehubApp#physical_resource_id}. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappings.property.eksSourceName">EksSourceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/resiliencehub_app#eks_source_name ResiliencehubApp#eks_source_name}. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappings.property.logicalStackName">LogicalStackName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/resiliencehub_app#logical_stack_name ResiliencehubApp#logical_stack_name}. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappings.property.resourceName">ResourceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/resiliencehub_app#resource_name ResiliencehubApp#resource_name}. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappings.property.terraformSourceName">TerraformSourceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/resiliencehub_app#terraform_source_name ResiliencehubApp#terraform_source_name}. |

---

##### `MappingType`<sup>Required</sup> <a name="MappingType" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappings.property.mappingType"></a>

```csharp
public string MappingType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/resiliencehub_app#mapping_type ResiliencehubApp#mapping_type}.

---

##### `PhysicalResourceId`<sup>Required</sup> <a name="PhysicalResourceId" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappings.property.physicalResourceId"></a>

```csharp
public ResiliencehubAppResourceMappingsPhysicalResourceId PhysicalResourceId { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceId">ResiliencehubAppResourceMappingsPhysicalResourceId</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/resiliencehub_app#physical_resource_id ResiliencehubApp#physical_resource_id}.

---

##### `EksSourceName`<sup>Optional</sup> <a name="EksSourceName" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappings.property.eksSourceName"></a>

```csharp
public string EksSourceName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/resiliencehub_app#eks_source_name ResiliencehubApp#eks_source_name}.

---

##### `LogicalStackName`<sup>Optional</sup> <a name="LogicalStackName" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappings.property.logicalStackName"></a>

```csharp
public string LogicalStackName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/resiliencehub_app#logical_stack_name ResiliencehubApp#logical_stack_name}.

---

##### `ResourceName`<sup>Optional</sup> <a name="ResourceName" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappings.property.resourceName"></a>

```csharp
public string ResourceName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/resiliencehub_app#resource_name ResiliencehubApp#resource_name}.

---

##### `TerraformSourceName`<sup>Optional</sup> <a name="TerraformSourceName" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappings.property.terraformSourceName"></a>

```csharp
public string TerraformSourceName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/resiliencehub_app#terraform_source_name ResiliencehubApp#terraform_source_name}.

---

### ResiliencehubAppResourceMappingsPhysicalResourceId <a name="ResiliencehubAppResourceMappingsPhysicalResourceId" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceId"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceId.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ResiliencehubAppResourceMappingsPhysicalResourceId {
    string Identifier,
    string Type,
    string AwsAccountId = null,
    string AwsRegion = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceId.property.identifier">Identifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/resiliencehub_app#identifier ResiliencehubApp#identifier}. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceId.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/resiliencehub_app#type ResiliencehubApp#type}. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceId.property.awsAccountId">AwsAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/resiliencehub_app#aws_account_id ResiliencehubApp#aws_account_id}. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceId.property.awsRegion">AwsRegion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/resiliencehub_app#aws_region ResiliencehubApp#aws_region}. |

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceId.property.identifier"></a>

```csharp
public string Identifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/resiliencehub_app#identifier ResiliencehubApp#identifier}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceId.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/resiliencehub_app#type ResiliencehubApp#type}.

---

##### `AwsAccountId`<sup>Optional</sup> <a name="AwsAccountId" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceId.property.awsAccountId"></a>

```csharp
public string AwsAccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/resiliencehub_app#aws_account_id ResiliencehubApp#aws_account_id}.

---

##### `AwsRegion`<sup>Optional</sup> <a name="AwsRegion" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceId.property.awsRegion"></a>

```csharp
public string AwsRegion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/resiliencehub_app#aws_region ResiliencehubApp#aws_region}.

---

## Classes <a name="Classes" id="Classes"></a>

### ResiliencehubAppEventSubscriptionsList <a name="ResiliencehubAppEventSubscriptionsList" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ResiliencehubAppEventSubscriptionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList.get"></a>

```csharp
private ResiliencehubAppEventSubscriptionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptions">ResiliencehubAppEventSubscriptions</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList.property.internalValue"></a>

```csharp
public IResolvable|ResiliencehubAppEventSubscriptions[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptions">ResiliencehubAppEventSubscriptions</a>[]

---


### ResiliencehubAppEventSubscriptionsOutputReference <a name="ResiliencehubAppEventSubscriptionsOutputReference" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ResiliencehubAppEventSubscriptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.resetEventType">ResetEventType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.resetSnsTopicArn">ResetSnsTopicArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEventType` <a name="ResetEventType" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.resetEventType"></a>

```csharp
private void ResetEventType()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetSnsTopicArn` <a name="ResetSnsTopicArn" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.resetSnsTopicArn"></a>

```csharp
private void ResetSnsTopicArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.property.eventTypeInput">EventTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.property.snsTopicArnInput">SnsTopicArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.property.eventType">EventType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.property.snsTopicArn">SnsTopicArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptions">ResiliencehubAppEventSubscriptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EventTypeInput`<sup>Optional</sup> <a name="EventTypeInput" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.property.eventTypeInput"></a>

```csharp
public string EventTypeInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SnsTopicArnInput`<sup>Optional</sup> <a name="SnsTopicArnInput" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.property.snsTopicArnInput"></a>

```csharp
public string SnsTopicArnInput { get; }
```

- *Type:* string

---

##### `EventType`<sup>Required</sup> <a name="EventType" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.property.eventType"></a>

```csharp
public string EventType { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SnsTopicArn`<sup>Required</sup> <a name="SnsTopicArn" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.property.snsTopicArn"></a>

```csharp
public string SnsTopicArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ResiliencehubAppEventSubscriptions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptions">ResiliencehubAppEventSubscriptions</a>

---


### ResiliencehubAppPermissionModelOutputReference <a name="ResiliencehubAppPermissionModelOutputReference" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ResiliencehubAppPermissionModelOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.resetCrossAccountRoleArns">ResetCrossAccountRoleArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.resetInvokerRoleName">ResetInvokerRoleName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCrossAccountRoleArns` <a name="ResetCrossAccountRoleArns" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.resetCrossAccountRoleArns"></a>

```csharp
private void ResetCrossAccountRoleArns()
```

##### `ResetInvokerRoleName` <a name="ResetInvokerRoleName" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.resetInvokerRoleName"></a>

```csharp
private void ResetInvokerRoleName()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.property.crossAccountRoleArnsInput">CrossAccountRoleArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.property.invokerRoleNameInput">InvokerRoleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.property.crossAccountRoleArns">CrossAccountRoleArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.property.invokerRoleName">InvokerRoleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModel">ResiliencehubAppPermissionModel</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CrossAccountRoleArnsInput`<sup>Optional</sup> <a name="CrossAccountRoleArnsInput" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.property.crossAccountRoleArnsInput"></a>

```csharp
public string[] CrossAccountRoleArnsInput { get; }
```

- *Type:* string[]

---

##### `InvokerRoleNameInput`<sup>Optional</sup> <a name="InvokerRoleNameInput" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.property.invokerRoleNameInput"></a>

```csharp
public string InvokerRoleNameInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `CrossAccountRoleArns`<sup>Required</sup> <a name="CrossAccountRoleArns" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.property.crossAccountRoleArns"></a>

```csharp
public string[] CrossAccountRoleArns { get; }
```

- *Type:* string[]

---

##### `InvokerRoleName`<sup>Required</sup> <a name="InvokerRoleName" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.property.invokerRoleName"></a>

```csharp
public string InvokerRoleName { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ResiliencehubAppPermissionModel InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModel">ResiliencehubAppPermissionModel</a>

---


### ResiliencehubAppResourceMappingsList <a name="ResiliencehubAppResourceMappingsList" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ResiliencehubAppResourceMappingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList.get"></a>

```csharp
private ResiliencehubAppResourceMappingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappings">ResiliencehubAppResourceMappings</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList.property.internalValue"></a>

```csharp
public IResolvable|ResiliencehubAppResourceMappings[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappings">ResiliencehubAppResourceMappings</a>[]

---


### ResiliencehubAppResourceMappingsOutputReference <a name="ResiliencehubAppResourceMappingsOutputReference" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ResiliencehubAppResourceMappingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.putPhysicalResourceId">PutPhysicalResourceId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.resetEksSourceName">ResetEksSourceName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.resetLogicalStackName">ResetLogicalStackName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.resetResourceName">ResetResourceName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.resetTerraformSourceName">ResetTerraformSourceName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPhysicalResourceId` <a name="PutPhysicalResourceId" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.putPhysicalResourceId"></a>

```csharp
private void PutPhysicalResourceId(ResiliencehubAppResourceMappingsPhysicalResourceId Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.putPhysicalResourceId.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceId">ResiliencehubAppResourceMappingsPhysicalResourceId</a>

---

##### `ResetEksSourceName` <a name="ResetEksSourceName" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.resetEksSourceName"></a>

```csharp
private void ResetEksSourceName()
```

##### `ResetLogicalStackName` <a name="ResetLogicalStackName" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.resetLogicalStackName"></a>

```csharp
private void ResetLogicalStackName()
```

##### `ResetResourceName` <a name="ResetResourceName" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.resetResourceName"></a>

```csharp
private void ResetResourceName()
```

##### `ResetTerraformSourceName` <a name="ResetTerraformSourceName" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.resetTerraformSourceName"></a>

```csharp
private void ResetTerraformSourceName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.physicalResourceId">PhysicalResourceId</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference">ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.eksSourceNameInput">EksSourceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.logicalStackNameInput">LogicalStackNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.mappingTypeInput">MappingTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.physicalResourceIdInput">PhysicalResourceIdInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceId">ResiliencehubAppResourceMappingsPhysicalResourceId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.resourceNameInput">ResourceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.terraformSourceNameInput">TerraformSourceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.eksSourceName">EksSourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.logicalStackName">LogicalStackName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.mappingType">MappingType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.resourceName">ResourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.terraformSourceName">TerraformSourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappings">ResiliencehubAppResourceMappings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PhysicalResourceId`<sup>Required</sup> <a name="PhysicalResourceId" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.physicalResourceId"></a>

```csharp
public ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference PhysicalResourceId { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference">ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference</a>

---

##### `EksSourceNameInput`<sup>Optional</sup> <a name="EksSourceNameInput" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.eksSourceNameInput"></a>

```csharp
public string EksSourceNameInput { get; }
```

- *Type:* string

---

##### `LogicalStackNameInput`<sup>Optional</sup> <a name="LogicalStackNameInput" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.logicalStackNameInput"></a>

```csharp
public string LogicalStackNameInput { get; }
```

- *Type:* string

---

##### `MappingTypeInput`<sup>Optional</sup> <a name="MappingTypeInput" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.mappingTypeInput"></a>

```csharp
public string MappingTypeInput { get; }
```

- *Type:* string

---

##### `PhysicalResourceIdInput`<sup>Optional</sup> <a name="PhysicalResourceIdInput" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.physicalResourceIdInput"></a>

```csharp
public IResolvable|ResiliencehubAppResourceMappingsPhysicalResourceId PhysicalResourceIdInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceId">ResiliencehubAppResourceMappingsPhysicalResourceId</a>

---

##### `ResourceNameInput`<sup>Optional</sup> <a name="ResourceNameInput" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.resourceNameInput"></a>

```csharp
public string ResourceNameInput { get; }
```

- *Type:* string

---

##### `TerraformSourceNameInput`<sup>Optional</sup> <a name="TerraformSourceNameInput" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.terraformSourceNameInput"></a>

```csharp
public string TerraformSourceNameInput { get; }
```

- *Type:* string

---

##### `EksSourceName`<sup>Required</sup> <a name="EksSourceName" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.eksSourceName"></a>

```csharp
public string EksSourceName { get; }
```

- *Type:* string

---

##### `LogicalStackName`<sup>Required</sup> <a name="LogicalStackName" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.logicalStackName"></a>

```csharp
public string LogicalStackName { get; }
```

- *Type:* string

---

##### `MappingType`<sup>Required</sup> <a name="MappingType" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.mappingType"></a>

```csharp
public string MappingType { get; }
```

- *Type:* string

---

##### `ResourceName`<sup>Required</sup> <a name="ResourceName" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.resourceName"></a>

```csharp
public string ResourceName { get; }
```

- *Type:* string

---

##### `TerraformSourceName`<sup>Required</sup> <a name="TerraformSourceName" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.terraformSourceName"></a>

```csharp
public string TerraformSourceName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ResiliencehubAppResourceMappings InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappings">ResiliencehubAppResourceMappings</a>

---


### ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference <a name="ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.resetAwsAccountId">ResetAwsAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.resetAwsRegion">ResetAwsRegion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAwsAccountId` <a name="ResetAwsAccountId" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.resetAwsAccountId"></a>

```csharp
private void ResetAwsAccountId()
```

##### `ResetAwsRegion` <a name="ResetAwsRegion" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.resetAwsRegion"></a>

```csharp
private void ResetAwsRegion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.property.awsAccountIdInput">AwsAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.property.awsRegionInput">AwsRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.property.identifierInput">IdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.property.awsAccountId">AwsAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.property.awsRegion">AwsRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.property.identifier">Identifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceId">ResiliencehubAppResourceMappingsPhysicalResourceId</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AwsAccountIdInput`<sup>Optional</sup> <a name="AwsAccountIdInput" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.property.awsAccountIdInput"></a>

```csharp
public string AwsAccountIdInput { get; }
```

- *Type:* string

---

##### `AwsRegionInput`<sup>Optional</sup> <a name="AwsRegionInput" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.property.awsRegionInput"></a>

```csharp
public string AwsRegionInput { get; }
```

- *Type:* string

---

##### `IdentifierInput`<sup>Optional</sup> <a name="IdentifierInput" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.property.identifierInput"></a>

```csharp
public string IdentifierInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `AwsAccountId`<sup>Required</sup> <a name="AwsAccountId" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.property.awsAccountId"></a>

```csharp
public string AwsAccountId { get; }
```

- *Type:* string

---

##### `AwsRegion`<sup>Required</sup> <a name="AwsRegion" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.property.awsRegion"></a>

```csharp
public string AwsRegion { get; }
```

- *Type:* string

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.property.identifier"></a>

```csharp
public string Identifier { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ResiliencehubAppResourceMappingsPhysicalResourceId InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceId">ResiliencehubAppResourceMappingsPhysicalResourceId</a>

---



