# `smsvoiceNotifyConfiguration` Submodule <a name="`smsvoiceNotifyConfiguration` Submodule" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SmsvoiceNotifyConfiguration <a name="SmsvoiceNotifyConfiguration" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_notify_configuration awscc_smsvoice_notify_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SmsvoiceNotifyConfiguration(Construct Scope, string Id, SmsvoiceNotifyConfigurationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig">SmsvoiceNotifyConfigurationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig">SmsvoiceNotifyConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.resetDefaultTemplateId">ResetDefaultTemplateId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.resetDeletionProtectionEnabled">ResetDeletionProtectionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.resetEnabledCountries">ResetEnabledCountries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.resetPoolId">ResetPoolId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.putTags"></a>

```csharp
private void PutTags(IResolvable|SmsvoiceNotifyConfigurationTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTags">SmsvoiceNotifyConfigurationTags</a>[]

---

##### `ResetDefaultTemplateId` <a name="ResetDefaultTemplateId" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.resetDefaultTemplateId"></a>

```csharp
private void ResetDefaultTemplateId()
```

##### `ResetDeletionProtectionEnabled` <a name="ResetDeletionProtectionEnabled" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.resetDeletionProtectionEnabled"></a>

```csharp
private void ResetDeletionProtectionEnabled()
```

##### `ResetEnabledCountries` <a name="ResetEnabledCountries" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.resetEnabledCountries"></a>

```csharp
private void ResetEnabledCountries()
```

##### `ResetPoolId` <a name="ResetPoolId" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.resetPoolId"></a>

```csharp
private void ResetPoolId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SmsvoiceNotifyConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SmsvoiceNotifyConfiguration.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SmsvoiceNotifyConfiguration.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SmsvoiceNotifyConfiguration.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SmsvoiceNotifyConfiguration.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a SmsvoiceNotifyConfiguration resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SmsvoiceNotifyConfiguration to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SmsvoiceNotifyConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_notify_configuration#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the SmsvoiceNotifyConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.createdTimestamp">CreatedTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.notifyConfigurationArn">NotifyConfigurationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.notifyConfigurationId">NotifyConfigurationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList">SmsvoiceNotifyConfigurationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.tier">Tier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.tierUpgradeStatus">TierUpgradeStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.defaultTemplateIdInput">DefaultTemplateIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.deletionProtectionEnabledInput">DeletionProtectionEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.enabledChannelsInput">EnabledChannelsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.enabledCountriesInput">EnabledCountriesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.poolIdInput">PoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTags">SmsvoiceNotifyConfigurationTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.useCaseInput">UseCaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.defaultTemplateId">DefaultTemplateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.deletionProtectionEnabled">DeletionProtectionEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.enabledChannels">EnabledChannels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.enabledCountries">EnabledCountries</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.poolId">PoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.useCase">UseCase</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreatedTimestamp`<sup>Required</sup> <a name="CreatedTimestamp" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.createdTimestamp"></a>

```csharp
public string CreatedTimestamp { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `NotifyConfigurationArn`<sup>Required</sup> <a name="NotifyConfigurationArn" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.notifyConfigurationArn"></a>

```csharp
public string NotifyConfigurationArn { get; }
```

- *Type:* string

---

##### `NotifyConfigurationId`<sup>Required</sup> <a name="NotifyConfigurationId" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.notifyConfigurationId"></a>

```csharp
public string NotifyConfigurationId { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.tags"></a>

```csharp
public SmsvoiceNotifyConfigurationTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList">SmsvoiceNotifyConfigurationTagsList</a>

---

##### `Tier`<sup>Required</sup> <a name="Tier" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.tier"></a>

```csharp
public string Tier { get; }
```

- *Type:* string

---

##### `TierUpgradeStatus`<sup>Required</sup> <a name="TierUpgradeStatus" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.tierUpgradeStatus"></a>

```csharp
public string TierUpgradeStatus { get; }
```

- *Type:* string

---

##### `DefaultTemplateIdInput`<sup>Optional</sup> <a name="DefaultTemplateIdInput" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.defaultTemplateIdInput"></a>

```csharp
public string DefaultTemplateIdInput { get; }
```

- *Type:* string

---

##### `DeletionProtectionEnabledInput`<sup>Optional</sup> <a name="DeletionProtectionEnabledInput" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.deletionProtectionEnabledInput"></a>

```csharp
public bool|IResolvable DeletionProtectionEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `EnabledChannelsInput`<sup>Optional</sup> <a name="EnabledChannelsInput" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.enabledChannelsInput"></a>

```csharp
public string[] EnabledChannelsInput { get; }
```

- *Type:* string[]

---

##### `EnabledCountriesInput`<sup>Optional</sup> <a name="EnabledCountriesInput" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.enabledCountriesInput"></a>

```csharp
public string[] EnabledCountriesInput { get; }
```

- *Type:* string[]

---

##### `PoolIdInput`<sup>Optional</sup> <a name="PoolIdInput" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.poolIdInput"></a>

```csharp
public string PoolIdInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.tagsInput"></a>

```csharp
public IResolvable|SmsvoiceNotifyConfigurationTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTags">SmsvoiceNotifyConfigurationTags</a>[]

---

##### `UseCaseInput`<sup>Optional</sup> <a name="UseCaseInput" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.useCaseInput"></a>

```csharp
public string UseCaseInput { get; }
```

- *Type:* string

---

##### `DefaultTemplateId`<sup>Required</sup> <a name="DefaultTemplateId" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.defaultTemplateId"></a>

```csharp
public string DefaultTemplateId { get; }
```

- *Type:* string

---

##### `DeletionProtectionEnabled`<sup>Required</sup> <a name="DeletionProtectionEnabled" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.deletionProtectionEnabled"></a>

```csharp
public bool|IResolvable DeletionProtectionEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `EnabledChannels`<sup>Required</sup> <a name="EnabledChannels" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.enabledChannels"></a>

```csharp
public string[] EnabledChannels { get; }
```

- *Type:* string[]

---

##### `EnabledCountries`<sup>Required</sup> <a name="EnabledCountries" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.enabledCountries"></a>

```csharp
public string[] EnabledCountries { get; }
```

- *Type:* string[]

---

##### `PoolId`<sup>Required</sup> <a name="PoolId" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.poolId"></a>

```csharp
public string PoolId { get; }
```

- *Type:* string

---

##### `UseCase`<sup>Required</sup> <a name="UseCase" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.useCase"></a>

```csharp
public string UseCase { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SmsvoiceNotifyConfigurationConfig <a name="SmsvoiceNotifyConfigurationConfig" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SmsvoiceNotifyConfigurationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DisplayName,
    string[] EnabledChannels,
    string UseCase,
    string DefaultTemplateId = null,
    bool|IResolvable DeletionProtectionEnabled = null,
    string[] EnabledCountries = null,
    string PoolId = null,
    IResolvable|SmsvoiceNotifyConfigurationTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.displayName">DisplayName</a></code> | <code>string</code> | The display name to associate with the notify configuration. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.enabledChannels">EnabledChannels</a></code> | <code>string[]</code> | An array of channels to enable for the notify configuration. Supported values include SMS and VOICE. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.useCase">UseCase</a></code> | <code>string</code> | The use case for the notify configuration. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.defaultTemplateId">DefaultTemplateId</a></code> | <code>string</code> | The default template identifier to associate with the notify configuration. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.deletionProtectionEnabled">DeletionProtectionEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | By default this is set to false. When set to true the notify configuration can't be deleted. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.enabledCountries">EnabledCountries</a></code> | <code>string[]</code> | An array of two-character ISO country codes, in ISO 3166-1 alpha-2 format, that are enabled for the notify configuration. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.poolId">PoolId</a></code> | <code>string</code> | The identifier of the pool to associate with the notify configuration. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTags">SmsvoiceNotifyConfigurationTags</a>[]</code> | An array of tags (key and value pairs) associated with the notify configuration. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

The display name to associate with the notify configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_notify_configuration#display_name SmsvoiceNotifyConfiguration#display_name}

---

##### `EnabledChannels`<sup>Required</sup> <a name="EnabledChannels" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.enabledChannels"></a>

```csharp
public string[] EnabledChannels { get; set; }
```

- *Type:* string[]

An array of channels to enable for the notify configuration. Supported values include SMS and VOICE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_notify_configuration#enabled_channels SmsvoiceNotifyConfiguration#enabled_channels}

---

##### `UseCase`<sup>Required</sup> <a name="UseCase" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.useCase"></a>

```csharp
public string UseCase { get; set; }
```

- *Type:* string

The use case for the notify configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_notify_configuration#use_case SmsvoiceNotifyConfiguration#use_case}

---

##### `DefaultTemplateId`<sup>Optional</sup> <a name="DefaultTemplateId" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.defaultTemplateId"></a>

```csharp
public string DefaultTemplateId { get; set; }
```

- *Type:* string

The default template identifier to associate with the notify configuration.

If specified, this template is used when sending messages without an explicit template identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_notify_configuration#default_template_id SmsvoiceNotifyConfiguration#default_template_id}

---

##### `DeletionProtectionEnabled`<sup>Optional</sup> <a name="DeletionProtectionEnabled" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.deletionProtectionEnabled"></a>

```csharp
public bool|IResolvable DeletionProtectionEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

By default this is set to false. When set to true the notify configuration can't be deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_notify_configuration#deletion_protection_enabled SmsvoiceNotifyConfiguration#deletion_protection_enabled}

---

##### `EnabledCountries`<sup>Optional</sup> <a name="EnabledCountries" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.enabledCountries"></a>

```csharp
public string[] EnabledCountries { get; set; }
```

- *Type:* string[]

An array of two-character ISO country codes, in ISO 3166-1 alpha-2 format, that are enabled for the notify configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_notify_configuration#enabled_countries SmsvoiceNotifyConfiguration#enabled_countries}

---

##### `PoolId`<sup>Optional</sup> <a name="PoolId" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.poolId"></a>

```csharp
public string PoolId { get; set; }
```

- *Type:* string

The identifier of the pool to associate with the notify configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_notify_configuration#pool_id SmsvoiceNotifyConfiguration#pool_id}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.tags"></a>

```csharp
public IResolvable|SmsvoiceNotifyConfigurationTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTags">SmsvoiceNotifyConfigurationTags</a>[]

An array of tags (key and value pairs) associated with the notify configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_notify_configuration#tags SmsvoiceNotifyConfiguration#tags}

---

### SmsvoiceNotifyConfigurationTags <a name="SmsvoiceNotifyConfigurationTags" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SmsvoiceNotifyConfigurationTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTags.property.key">Key</a></code> | <code>string</code> | The key identifier, or name, of the tag. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTags.property.value">Value</a></code> | <code>string</code> | The string value associated with the key of the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key identifier, or name, of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_notify_configuration#key SmsvoiceNotifyConfiguration#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The string value associated with the key of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_notify_configuration#value SmsvoiceNotifyConfiguration#value}

---

## Classes <a name="Classes" id="Classes"></a>

### SmsvoiceNotifyConfigurationTagsList <a name="SmsvoiceNotifyConfigurationTagsList" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SmsvoiceNotifyConfigurationTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList.get"></a>

```csharp
private SmsvoiceNotifyConfigurationTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTags">SmsvoiceNotifyConfigurationTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList.property.internalValue"></a>

```csharp
public IResolvable|SmsvoiceNotifyConfigurationTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTags">SmsvoiceNotifyConfigurationTags</a>[]

---


### SmsvoiceNotifyConfigurationTagsOutputReference <a name="SmsvoiceNotifyConfigurationTagsOutputReference" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SmsvoiceNotifyConfigurationTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTags">SmsvoiceNotifyConfigurationTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SmsvoiceNotifyConfigurationTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTags">SmsvoiceNotifyConfigurationTags</a>

---



