# `appintegrationsApplication` Submodule <a name="`appintegrationsApplication` Submodule" id="@cdktn/provider-awscc.appintegrationsApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppintegrationsApplication <a name="AppintegrationsApplication" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appintegrations_application awscc_appintegrations_application}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppintegrationsApplication(Construct Scope, string Id, AppintegrationsApplicationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig">AppintegrationsApplicationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig">AppintegrationsApplicationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.putApplicationConfig">PutApplicationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.putApplicationSourceConfig">PutApplicationSourceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.putIframeConfig">PutIframeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.resetApplicationConfig">ResetApplicationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.resetApplicationType">ResetApplicationType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.resetIframeConfig">ResetIframeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.resetInitializationTimeout">ResetInitializationTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.resetIsService">ResetIsService</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.resetPermissions">ResetPermissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutApplicationConfig` <a name="PutApplicationConfig" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.putApplicationConfig"></a>

```csharp
private void PutApplicationConfig(AppintegrationsApplicationApplicationConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.putApplicationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfig">AppintegrationsApplicationApplicationConfig</a>

---

##### `PutApplicationSourceConfig` <a name="PutApplicationSourceConfig" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.putApplicationSourceConfig"></a>

```csharp
private void PutApplicationSourceConfig(AppintegrationsApplicationApplicationSourceConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.putApplicationSourceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfig">AppintegrationsApplicationApplicationSourceConfig</a>

---

##### `PutIframeConfig` <a name="PutIframeConfig" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.putIframeConfig"></a>

```csharp
private void PutIframeConfig(AppintegrationsApplicationIframeConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.putIframeConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfig">AppintegrationsApplicationIframeConfig</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.putTags"></a>

```csharp
private void PutTags(IResolvable|AppintegrationsApplicationTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTags">AppintegrationsApplicationTags</a>[]

---

##### `ResetApplicationConfig` <a name="ResetApplicationConfig" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.resetApplicationConfig"></a>

```csharp
private void ResetApplicationConfig()
```

##### `ResetApplicationType` <a name="ResetApplicationType" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.resetApplicationType"></a>

```csharp
private void ResetApplicationType()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetIframeConfig` <a name="ResetIframeConfig" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.resetIframeConfig"></a>

```csharp
private void ResetIframeConfig()
```

##### `ResetInitializationTimeout` <a name="ResetInitializationTimeout" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.resetInitializationTimeout"></a>

```csharp
private void ResetInitializationTimeout()
```

##### `ResetIsService` <a name="ResetIsService" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.resetIsService"></a>

```csharp
private void ResetIsService()
```

##### `ResetPermissions` <a name="ResetPermissions" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.resetPermissions"></a>

```csharp
private void ResetPermissions()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a AppintegrationsApplication resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

AppintegrationsApplication.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

AppintegrationsApplication.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

AppintegrationsApplication.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

AppintegrationsApplication.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a AppintegrationsApplication resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AppintegrationsApplication to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AppintegrationsApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appintegrations_application#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the AppintegrationsApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.applicationArn">ApplicationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.applicationConfig">ApplicationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference">AppintegrationsApplicationApplicationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.applicationId">ApplicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.applicationSourceConfig">ApplicationSourceConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference">AppintegrationsApplicationApplicationSourceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.iframeConfig">IframeConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference">AppintegrationsApplicationIframeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList">AppintegrationsApplicationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.applicationConfigInput">ApplicationConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfig">AppintegrationsApplicationApplicationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.applicationSourceConfigInput">ApplicationSourceConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfig">AppintegrationsApplicationApplicationSourceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.applicationTypeInput">ApplicationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.iframeConfigInput">IframeConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfig">AppintegrationsApplicationIframeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.initializationTimeoutInput">InitializationTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.isServiceInput">IsServiceInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.permissionsInput">PermissionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTags">AppintegrationsApplicationTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.applicationType">ApplicationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.initializationTimeout">InitializationTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.isService">IsService</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.permissions">Permissions</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ApplicationArn`<sup>Required</sup> <a name="ApplicationArn" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.applicationArn"></a>

```csharp
public string ApplicationArn { get; }
```

- *Type:* string

---

##### `ApplicationConfig`<sup>Required</sup> <a name="ApplicationConfig" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.applicationConfig"></a>

```csharp
public AppintegrationsApplicationApplicationConfigOutputReference ApplicationConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference">AppintegrationsApplicationApplicationConfigOutputReference</a>

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.applicationId"></a>

```csharp
public string ApplicationId { get; }
```

- *Type:* string

---

##### `ApplicationSourceConfig`<sup>Required</sup> <a name="ApplicationSourceConfig" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.applicationSourceConfig"></a>

```csharp
public AppintegrationsApplicationApplicationSourceConfigOutputReference ApplicationSourceConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference">AppintegrationsApplicationApplicationSourceConfigOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IframeConfig`<sup>Required</sup> <a name="IframeConfig" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.iframeConfig"></a>

```csharp
public AppintegrationsApplicationIframeConfigOutputReference IframeConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference">AppintegrationsApplicationIframeConfigOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.tags"></a>

```csharp
public AppintegrationsApplicationTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList">AppintegrationsApplicationTagsList</a>

---

##### `ApplicationConfigInput`<sup>Optional</sup> <a name="ApplicationConfigInput" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.applicationConfigInput"></a>

```csharp
public IResolvable|AppintegrationsApplicationApplicationConfig ApplicationConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfig">AppintegrationsApplicationApplicationConfig</a>

---

##### `ApplicationSourceConfigInput`<sup>Optional</sup> <a name="ApplicationSourceConfigInput" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.applicationSourceConfigInput"></a>

```csharp
public IResolvable|AppintegrationsApplicationApplicationSourceConfig ApplicationSourceConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfig">AppintegrationsApplicationApplicationSourceConfig</a>

---

##### `ApplicationTypeInput`<sup>Optional</sup> <a name="ApplicationTypeInput" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.applicationTypeInput"></a>

```csharp
public string ApplicationTypeInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IframeConfigInput`<sup>Optional</sup> <a name="IframeConfigInput" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.iframeConfigInput"></a>

```csharp
public IResolvable|AppintegrationsApplicationIframeConfig IframeConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfig">AppintegrationsApplicationIframeConfig</a>

---

##### `InitializationTimeoutInput`<sup>Optional</sup> <a name="InitializationTimeoutInput" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.initializationTimeoutInput"></a>

```csharp
public double InitializationTimeoutInput { get; }
```

- *Type:* double

---

##### `IsServiceInput`<sup>Optional</sup> <a name="IsServiceInput" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.isServiceInput"></a>

```csharp
public bool|IResolvable IsServiceInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `PermissionsInput`<sup>Optional</sup> <a name="PermissionsInput" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.permissionsInput"></a>

```csharp
public string[] PermissionsInput { get; }
```

- *Type:* string[]

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.tagsInput"></a>

```csharp
public IResolvable|AppintegrationsApplicationTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTags">AppintegrationsApplicationTags</a>[]

---

##### `ApplicationType`<sup>Required</sup> <a name="ApplicationType" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.applicationType"></a>

```csharp
public string ApplicationType { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `InitializationTimeout`<sup>Required</sup> <a name="InitializationTimeout" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.initializationTimeout"></a>

```csharp
public double InitializationTimeout { get; }
```

- *Type:* double

---

##### `IsService`<sup>Required</sup> <a name="IsService" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.isService"></a>

```csharp
public bool|IResolvable IsService { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Permissions`<sup>Required</sup> <a name="Permissions" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.permissions"></a>

```csharp
public string[] Permissions { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AppintegrationsApplicationApplicationConfig <a name="AppintegrationsApplicationApplicationConfig" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppintegrationsApplicationApplicationConfig {
    AppintegrationsApplicationApplicationConfigContactHandling ContactHandling = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfig.property.contactHandling">ContactHandling</a></code> | <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandling">AppintegrationsApplicationApplicationConfigContactHandling</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appintegrations_application#contact_handling AppintegrationsApplication#contact_handling}. |

---

##### `ContactHandling`<sup>Optional</sup> <a name="ContactHandling" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfig.property.contactHandling"></a>

```csharp
public AppintegrationsApplicationApplicationConfigContactHandling ContactHandling { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandling">AppintegrationsApplicationApplicationConfigContactHandling</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appintegrations_application#contact_handling AppintegrationsApplication#contact_handling}.

---

### AppintegrationsApplicationApplicationConfigContactHandling <a name="AppintegrationsApplicationApplicationConfigContactHandling" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandling"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandling.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppintegrationsApplicationApplicationConfigContactHandling {
    string Scope = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandling.property.scope">Scope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appintegrations_application#scope AppintegrationsApplication#scope}. |

---

##### `Scope`<sup>Optional</sup> <a name="Scope" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandling.property.scope"></a>

```csharp
public string Scope { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appintegrations_application#scope AppintegrationsApplication#scope}.

---

### AppintegrationsApplicationApplicationSourceConfig <a name="AppintegrationsApplicationApplicationSourceConfig" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppintegrationsApplicationApplicationSourceConfig {
    AppintegrationsApplicationApplicationSourceConfigExternalUrlConfig ExternalUrlConfig
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfig.property.externalUrlConfig">ExternalUrlConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfig">AppintegrationsApplicationApplicationSourceConfigExternalUrlConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appintegrations_application#external_url_config AppintegrationsApplication#external_url_config}. |

---

##### `ExternalUrlConfig`<sup>Required</sup> <a name="ExternalUrlConfig" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfig.property.externalUrlConfig"></a>

```csharp
public AppintegrationsApplicationApplicationSourceConfigExternalUrlConfig ExternalUrlConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfig">AppintegrationsApplicationApplicationSourceConfigExternalUrlConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appintegrations_application#external_url_config AppintegrationsApplication#external_url_config}.

---

### AppintegrationsApplicationApplicationSourceConfigExternalUrlConfig <a name="AppintegrationsApplicationApplicationSourceConfigExternalUrlConfig" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppintegrationsApplicationApplicationSourceConfigExternalUrlConfig {
    string AccessUrl,
    string[] ApprovedOrigins = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfig.property.accessUrl">AccessUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appintegrations_application#access_url AppintegrationsApplication#access_url}. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfig.property.approvedOrigins">ApprovedOrigins</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appintegrations_application#approved_origins AppintegrationsApplication#approved_origins}. |

---

##### `AccessUrl`<sup>Required</sup> <a name="AccessUrl" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfig.property.accessUrl"></a>

```csharp
public string AccessUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appintegrations_application#access_url AppintegrationsApplication#access_url}.

---

##### `ApprovedOrigins`<sup>Optional</sup> <a name="ApprovedOrigins" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfig.property.approvedOrigins"></a>

```csharp
public string[] ApprovedOrigins { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appintegrations_application#approved_origins AppintegrationsApplication#approved_origins}.

---

### AppintegrationsApplicationConfig <a name="AppintegrationsApplicationConfig" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppintegrationsApplicationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    AppintegrationsApplicationApplicationSourceConfig ApplicationSourceConfig,
    string Name,
    string Namespace,
    AppintegrationsApplicationApplicationConfig ApplicationConfig = null,
    string ApplicationType = null,
    string Description = null,
    AppintegrationsApplicationIframeConfig IframeConfig = null,
    double InitializationTimeout = null,
    bool|IResolvable IsService = null,
    string[] Permissions = null,
    IResolvable|AppintegrationsApplicationTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.applicationSourceConfig">ApplicationSourceConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfig">AppintegrationsApplicationApplicationSourceConfig</a></code> | Application source config. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.name">Name</a></code> | <code>string</code> | The name of the application. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.namespace">Namespace</a></code> | <code>string</code> | The namespace of the application. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.applicationConfig">ApplicationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfig">AppintegrationsApplicationApplicationConfig</a></code> | The application configuration. Cannot be used when IsService is true. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.applicationType">ApplicationType</a></code> | <code>string</code> | The type of application. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.description">Description</a></code> | <code>string</code> | The application description. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.iframeConfig">IframeConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfig">AppintegrationsApplicationIframeConfig</a></code> | The iframe configuration. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.initializationTimeout">InitializationTimeout</a></code> | <code>double</code> | The initialization timeout in milliseconds. Required when IsService is true. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.isService">IsService</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Indicates if the application is a service. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.permissions">Permissions</a></code> | <code>string[]</code> | The configuration of events or requests that the application has access to. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTags">AppintegrationsApplicationTags</a>[]</code> | The tags (keys and values) associated with the application. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ApplicationSourceConfig`<sup>Required</sup> <a name="ApplicationSourceConfig" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.applicationSourceConfig"></a>

```csharp
public AppintegrationsApplicationApplicationSourceConfig ApplicationSourceConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfig">AppintegrationsApplicationApplicationSourceConfig</a>

Application source config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appintegrations_application#application_source_config AppintegrationsApplication#application_source_config}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appintegrations_application#name AppintegrationsApplication#name}

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

The namespace of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appintegrations_application#namespace AppintegrationsApplication#namespace}

---

##### `ApplicationConfig`<sup>Optional</sup> <a name="ApplicationConfig" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.applicationConfig"></a>

```csharp
public AppintegrationsApplicationApplicationConfig ApplicationConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfig">AppintegrationsApplicationApplicationConfig</a>

The application configuration. Cannot be used when IsService is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appintegrations_application#application_config AppintegrationsApplication#application_config}

---

##### `ApplicationType`<sup>Optional</sup> <a name="ApplicationType" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.applicationType"></a>

```csharp
public string ApplicationType { get; set; }
```

- *Type:* string

The type of application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appintegrations_application#application_type AppintegrationsApplication#application_type}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The application description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appintegrations_application#description AppintegrationsApplication#description}

---

##### `IframeConfig`<sup>Optional</sup> <a name="IframeConfig" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.iframeConfig"></a>

```csharp
public AppintegrationsApplicationIframeConfig IframeConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfig">AppintegrationsApplicationIframeConfig</a>

The iframe configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appintegrations_application#iframe_config AppintegrationsApplication#iframe_config}

---

##### `InitializationTimeout`<sup>Optional</sup> <a name="InitializationTimeout" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.initializationTimeout"></a>

```csharp
public double InitializationTimeout { get; set; }
```

- *Type:* double

The initialization timeout in milliseconds. Required when IsService is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appintegrations_application#initialization_timeout AppintegrationsApplication#initialization_timeout}

---

##### `IsService`<sup>Optional</sup> <a name="IsService" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.isService"></a>

```csharp
public bool|IResolvable IsService { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Indicates if the application is a service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appintegrations_application#is_service AppintegrationsApplication#is_service}

---

##### `Permissions`<sup>Optional</sup> <a name="Permissions" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.permissions"></a>

```csharp
public string[] Permissions { get; set; }
```

- *Type:* string[]

The configuration of events or requests that the application has access to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appintegrations_application#permissions AppintegrationsApplication#permissions}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.tags"></a>

```csharp
public IResolvable|AppintegrationsApplicationTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTags">AppintegrationsApplicationTags</a>[]

The tags (keys and values) associated with the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appintegrations_application#tags AppintegrationsApplication#tags}

---

### AppintegrationsApplicationIframeConfig <a name="AppintegrationsApplicationIframeConfig" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppintegrationsApplicationIframeConfig {
    string[] Allow = null,
    string[] Sandbox = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfig.property.allow">Allow</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appintegrations_application#allow AppintegrationsApplication#allow}. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfig.property.sandbox">Sandbox</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appintegrations_application#sandbox AppintegrationsApplication#sandbox}. |

---

##### `Allow`<sup>Optional</sup> <a name="Allow" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfig.property.allow"></a>

```csharp
public string[] Allow { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appintegrations_application#allow AppintegrationsApplication#allow}.

---

##### `Sandbox`<sup>Optional</sup> <a name="Sandbox" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfig.property.sandbox"></a>

```csharp
public string[] Sandbox { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appintegrations_application#sandbox AppintegrationsApplication#sandbox}.

---

### AppintegrationsApplicationTags <a name="AppintegrationsApplicationTags" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppintegrationsApplicationTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTags.property.key">Key</a></code> | <code>string</code> | A key to identify the tag. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTags.property.value">Value</a></code> | <code>string</code> | Corresponding tag value for the key. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

A key to identify the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appintegrations_application#key AppintegrationsApplication#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Corresponding tag value for the key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appintegrations_application#value AppintegrationsApplication#value}

---

## Classes <a name="Classes" id="Classes"></a>

### AppintegrationsApplicationApplicationConfigContactHandlingOutputReference <a name="AppintegrationsApplicationApplicationConfigContactHandlingOutputReference" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppintegrationsApplicationApplicationConfigContactHandlingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.resetScope">ResetScope</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetScope` <a name="ResetScope" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.resetScope"></a>

```csharp
private void ResetScope()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.property.scopeInput">ScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.property.scope">Scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandling">AppintegrationsApplicationApplicationConfigContactHandling</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.property.scopeInput"></a>

```csharp
public string ScopeInput { get; }
```

- *Type:* string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.property.scope"></a>

```csharp
public string Scope { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AppintegrationsApplicationApplicationConfigContactHandling InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandling">AppintegrationsApplicationApplicationConfigContactHandling</a>

---


### AppintegrationsApplicationApplicationConfigOutputReference <a name="AppintegrationsApplicationApplicationConfigOutputReference" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppintegrationsApplicationApplicationConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.putContactHandling">PutContactHandling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.resetContactHandling">ResetContactHandling</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutContactHandling` <a name="PutContactHandling" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.putContactHandling"></a>

```csharp
private void PutContactHandling(AppintegrationsApplicationApplicationConfigContactHandling Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.putContactHandling.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandling">AppintegrationsApplicationApplicationConfigContactHandling</a>

---

##### `ResetContactHandling` <a name="ResetContactHandling" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.resetContactHandling"></a>

```csharp
private void ResetContactHandling()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.property.contactHandling">ContactHandling</a></code> | <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference">AppintegrationsApplicationApplicationConfigContactHandlingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.property.contactHandlingInput">ContactHandlingInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandling">AppintegrationsApplicationApplicationConfigContactHandling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfig">AppintegrationsApplicationApplicationConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContactHandling`<sup>Required</sup> <a name="ContactHandling" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.property.contactHandling"></a>

```csharp
public AppintegrationsApplicationApplicationConfigContactHandlingOutputReference ContactHandling { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference">AppintegrationsApplicationApplicationConfigContactHandlingOutputReference</a>

---

##### `ContactHandlingInput`<sup>Optional</sup> <a name="ContactHandlingInput" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.property.contactHandlingInput"></a>

```csharp
public IResolvable|AppintegrationsApplicationApplicationConfigContactHandling ContactHandlingInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandling">AppintegrationsApplicationApplicationConfigContactHandling</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AppintegrationsApplicationApplicationConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfig">AppintegrationsApplicationApplicationConfig</a>

---


### AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference <a name="AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.resetApprovedOrigins">ResetApprovedOrigins</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetApprovedOrigins` <a name="ResetApprovedOrigins" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.resetApprovedOrigins"></a>

```csharp
private void ResetApprovedOrigins()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.property.accessUrlInput">AccessUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.property.approvedOriginsInput">ApprovedOriginsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.property.accessUrl">AccessUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.property.approvedOrigins">ApprovedOrigins</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfig">AppintegrationsApplicationApplicationSourceConfigExternalUrlConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccessUrlInput`<sup>Optional</sup> <a name="AccessUrlInput" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.property.accessUrlInput"></a>

```csharp
public string AccessUrlInput { get; }
```

- *Type:* string

---

##### `ApprovedOriginsInput`<sup>Optional</sup> <a name="ApprovedOriginsInput" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.property.approvedOriginsInput"></a>

```csharp
public string[] ApprovedOriginsInput { get; }
```

- *Type:* string[]

---

##### `AccessUrl`<sup>Required</sup> <a name="AccessUrl" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.property.accessUrl"></a>

```csharp
public string AccessUrl { get; }
```

- *Type:* string

---

##### `ApprovedOrigins`<sup>Required</sup> <a name="ApprovedOrigins" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.property.approvedOrigins"></a>

```csharp
public string[] ApprovedOrigins { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AppintegrationsApplicationApplicationSourceConfigExternalUrlConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfig">AppintegrationsApplicationApplicationSourceConfigExternalUrlConfig</a>

---


### AppintegrationsApplicationApplicationSourceConfigOutputReference <a name="AppintegrationsApplicationApplicationSourceConfigOutputReference" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppintegrationsApplicationApplicationSourceConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.putExternalUrlConfig">PutExternalUrlConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExternalUrlConfig` <a name="PutExternalUrlConfig" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.putExternalUrlConfig"></a>

```csharp
private void PutExternalUrlConfig(AppintegrationsApplicationApplicationSourceConfigExternalUrlConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.putExternalUrlConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfig">AppintegrationsApplicationApplicationSourceConfigExternalUrlConfig</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.property.externalUrlConfig">ExternalUrlConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference">AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.property.externalUrlConfigInput">ExternalUrlConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfig">AppintegrationsApplicationApplicationSourceConfigExternalUrlConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfig">AppintegrationsApplicationApplicationSourceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExternalUrlConfig`<sup>Required</sup> <a name="ExternalUrlConfig" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.property.externalUrlConfig"></a>

```csharp
public AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference ExternalUrlConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference">AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference</a>

---

##### `ExternalUrlConfigInput`<sup>Optional</sup> <a name="ExternalUrlConfigInput" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.property.externalUrlConfigInput"></a>

```csharp
public IResolvable|AppintegrationsApplicationApplicationSourceConfigExternalUrlConfig ExternalUrlConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfig">AppintegrationsApplicationApplicationSourceConfigExternalUrlConfig</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AppintegrationsApplicationApplicationSourceConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfig">AppintegrationsApplicationApplicationSourceConfig</a>

---


### AppintegrationsApplicationIframeConfigOutputReference <a name="AppintegrationsApplicationIframeConfigOutputReference" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppintegrationsApplicationIframeConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.resetAllow">ResetAllow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.resetSandbox">ResetSandbox</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllow` <a name="ResetAllow" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.resetAllow"></a>

```csharp
private void ResetAllow()
```

##### `ResetSandbox` <a name="ResetSandbox" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.resetSandbox"></a>

```csharp
private void ResetSandbox()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.property.allowInput">AllowInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.property.sandboxInput">SandboxInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.property.allow">Allow</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.property.sandbox">Sandbox</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfig">AppintegrationsApplicationIframeConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowInput`<sup>Optional</sup> <a name="AllowInput" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.property.allowInput"></a>

```csharp
public string[] AllowInput { get; }
```

- *Type:* string[]

---

##### `SandboxInput`<sup>Optional</sup> <a name="SandboxInput" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.property.sandboxInput"></a>

```csharp
public string[] SandboxInput { get; }
```

- *Type:* string[]

---

##### `Allow`<sup>Required</sup> <a name="Allow" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.property.allow"></a>

```csharp
public string[] Allow { get; }
```

- *Type:* string[]

---

##### `Sandbox`<sup>Required</sup> <a name="Sandbox" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.property.sandbox"></a>

```csharp
public string[] Sandbox { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AppintegrationsApplicationIframeConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfig">AppintegrationsApplicationIframeConfig</a>

---


### AppintegrationsApplicationTagsList <a name="AppintegrationsApplicationTagsList" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppintegrationsApplicationTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList.get"></a>

```csharp
private AppintegrationsApplicationTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTags">AppintegrationsApplicationTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList.property.internalValue"></a>

```csharp
public IResolvable|AppintegrationsApplicationTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTags">AppintegrationsApplicationTags</a>[]

---


### AppintegrationsApplicationTagsOutputReference <a name="AppintegrationsApplicationTagsOutputReference" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppintegrationsApplicationTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTags">AppintegrationsApplicationTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AppintegrationsApplicationTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTags">AppintegrationsApplicationTags</a>

---



