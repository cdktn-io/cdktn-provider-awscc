# `smsvoiceConfigurationSet` Submodule <a name="`smsvoiceConfigurationSet` Submodule" id="@cdktn/provider-awscc.smsvoiceConfigurationSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SmsvoiceConfigurationSet <a name="SmsvoiceConfigurationSet" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/smsvoice_configuration_set awscc_smsvoice_configuration_set}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SmsvoiceConfigurationSet(Construct Scope, string Id, SmsvoiceConfigurationSetConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig">SmsvoiceConfigurationSetConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig">SmsvoiceConfigurationSetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.putEventDestinations">PutEventDestinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.resetConfigurationSetName">ResetConfigurationSetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.resetDefaultSenderId">ResetDefaultSenderId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.resetEventDestinations">ResetEventDestinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.resetMessageFeedbackEnabled">ResetMessageFeedbackEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.resetProtectConfigurationId">ResetProtectConfigurationId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEventDestinations` <a name="PutEventDestinations" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.putEventDestinations"></a>

```csharp
private void PutEventDestinations(IResolvable|SmsvoiceConfigurationSetEventDestinations[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.putEventDestinations.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinations">SmsvoiceConfigurationSetEventDestinations</a>[]

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.putTags"></a>

```csharp
private void PutTags(IResolvable|SmsvoiceConfigurationSetTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTags">SmsvoiceConfigurationSetTags</a>[]

---

##### `ResetConfigurationSetName` <a name="ResetConfigurationSetName" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.resetConfigurationSetName"></a>

```csharp
private void ResetConfigurationSetName()
```

##### `ResetDefaultSenderId` <a name="ResetDefaultSenderId" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.resetDefaultSenderId"></a>

```csharp
private void ResetDefaultSenderId()
```

##### `ResetEventDestinations` <a name="ResetEventDestinations" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.resetEventDestinations"></a>

```csharp
private void ResetEventDestinations()
```

##### `ResetMessageFeedbackEnabled` <a name="ResetMessageFeedbackEnabled" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.resetMessageFeedbackEnabled"></a>

```csharp
private void ResetMessageFeedbackEnabled()
```

##### `ResetProtectConfigurationId` <a name="ResetProtectConfigurationId" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.resetProtectConfigurationId"></a>

```csharp
private void ResetProtectConfigurationId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SmsvoiceConfigurationSet resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SmsvoiceConfigurationSet.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SmsvoiceConfigurationSet.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SmsvoiceConfigurationSet.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SmsvoiceConfigurationSet.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a SmsvoiceConfigurationSet resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SmsvoiceConfigurationSet to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SmsvoiceConfigurationSet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/smsvoice_configuration_set#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the SmsvoiceConfigurationSet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.eventDestinations">EventDestinations</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList">SmsvoiceConfigurationSetEventDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList">SmsvoiceConfigurationSetTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.configurationSetNameInput">ConfigurationSetNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.defaultSenderIdInput">DefaultSenderIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.eventDestinationsInput">EventDestinationsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinations">SmsvoiceConfigurationSetEventDestinations</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.messageFeedbackEnabledInput">MessageFeedbackEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.protectConfigurationIdInput">ProtectConfigurationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTags">SmsvoiceConfigurationSetTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.configurationSetName">ConfigurationSetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.defaultSenderId">DefaultSenderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.messageFeedbackEnabled">MessageFeedbackEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.protectConfigurationId">ProtectConfigurationId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `EventDestinations`<sup>Required</sup> <a name="EventDestinations" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.eventDestinations"></a>

```csharp
public SmsvoiceConfigurationSetEventDestinationsList EventDestinations { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList">SmsvoiceConfigurationSetEventDestinationsList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.tags"></a>

```csharp
public SmsvoiceConfigurationSetTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList">SmsvoiceConfigurationSetTagsList</a>

---

##### `ConfigurationSetNameInput`<sup>Optional</sup> <a name="ConfigurationSetNameInput" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.configurationSetNameInput"></a>

```csharp
public string ConfigurationSetNameInput { get; }
```

- *Type:* string

---

##### `DefaultSenderIdInput`<sup>Optional</sup> <a name="DefaultSenderIdInput" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.defaultSenderIdInput"></a>

```csharp
public string DefaultSenderIdInput { get; }
```

- *Type:* string

---

##### `EventDestinationsInput`<sup>Optional</sup> <a name="EventDestinationsInput" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.eventDestinationsInput"></a>

```csharp
public IResolvable|SmsvoiceConfigurationSetEventDestinations[] EventDestinationsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinations">SmsvoiceConfigurationSetEventDestinations</a>[]

---

##### `MessageFeedbackEnabledInput`<sup>Optional</sup> <a name="MessageFeedbackEnabledInput" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.messageFeedbackEnabledInput"></a>

```csharp
public bool|IResolvable MessageFeedbackEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ProtectConfigurationIdInput`<sup>Optional</sup> <a name="ProtectConfigurationIdInput" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.protectConfigurationIdInput"></a>

```csharp
public string ProtectConfigurationIdInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.tagsInput"></a>

```csharp
public IResolvable|SmsvoiceConfigurationSetTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTags">SmsvoiceConfigurationSetTags</a>[]

---

##### `ConfigurationSetName`<sup>Required</sup> <a name="ConfigurationSetName" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.configurationSetName"></a>

```csharp
public string ConfigurationSetName { get; }
```

- *Type:* string

---

##### `DefaultSenderId`<sup>Required</sup> <a name="DefaultSenderId" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.defaultSenderId"></a>

```csharp
public string DefaultSenderId { get; }
```

- *Type:* string

---

##### `MessageFeedbackEnabled`<sup>Required</sup> <a name="MessageFeedbackEnabled" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.messageFeedbackEnabled"></a>

```csharp
public bool|IResolvable MessageFeedbackEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ProtectConfigurationId`<sup>Required</sup> <a name="ProtectConfigurationId" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.protectConfigurationId"></a>

```csharp
public string ProtectConfigurationId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SmsvoiceConfigurationSetConfig <a name="SmsvoiceConfigurationSetConfig" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SmsvoiceConfigurationSetConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ConfigurationSetName = null,
    string DefaultSenderId = null,
    IResolvable|SmsvoiceConfigurationSetEventDestinations[] EventDestinations = null,
    bool|IResolvable MessageFeedbackEnabled = null,
    string ProtectConfigurationId = null,
    IResolvable|SmsvoiceConfigurationSetTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig.property.configurationSetName">ConfigurationSetName</a></code> | <code>string</code> | The name to use for the configuration set. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig.property.defaultSenderId">DefaultSenderId</a></code> | <code>string</code> | The default sender ID to set for the ConfigurationSet. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig.property.eventDestinations">EventDestinations</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinations">SmsvoiceConfigurationSetEventDestinations</a>[]</code> | An event destination is a location where you send message events. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig.property.messageFeedbackEnabled">MessageFeedbackEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Set to true to enable message feedback. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig.property.protectConfigurationId">ProtectConfigurationId</a></code> | <code>string</code> | The unique identifier for the protect configuration to be associated to the configuration set. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTags">SmsvoiceConfigurationSetTags</a>[]</code> | An array of key-value pairs to apply to this resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ConfigurationSetName`<sup>Optional</sup> <a name="ConfigurationSetName" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig.property.configurationSetName"></a>

```csharp
public string ConfigurationSetName { get; set; }
```

- *Type:* string

The name to use for the configuration set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/smsvoice_configuration_set#configuration_set_name SmsvoiceConfigurationSet#configuration_set_name}

---

##### `DefaultSenderId`<sup>Optional</sup> <a name="DefaultSenderId" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig.property.defaultSenderId"></a>

```csharp
public string DefaultSenderId { get; set; }
```

- *Type:* string

The default sender ID to set for the ConfigurationSet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/smsvoice_configuration_set#default_sender_id SmsvoiceConfigurationSet#default_sender_id}

---

##### `EventDestinations`<sup>Optional</sup> <a name="EventDestinations" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig.property.eventDestinations"></a>

```csharp
public IResolvable|SmsvoiceConfigurationSetEventDestinations[] EventDestinations { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinations">SmsvoiceConfigurationSetEventDestinations</a>[]

An event destination is a location where you send message events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/smsvoice_configuration_set#event_destinations SmsvoiceConfigurationSet#event_destinations}

---

##### `MessageFeedbackEnabled`<sup>Optional</sup> <a name="MessageFeedbackEnabled" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig.property.messageFeedbackEnabled"></a>

```csharp
public bool|IResolvable MessageFeedbackEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Set to true to enable message feedback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/smsvoice_configuration_set#message_feedback_enabled SmsvoiceConfigurationSet#message_feedback_enabled}

---

##### `ProtectConfigurationId`<sup>Optional</sup> <a name="ProtectConfigurationId" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig.property.protectConfigurationId"></a>

```csharp
public string ProtectConfigurationId { get; set; }
```

- *Type:* string

The unique identifier for the protect configuration to be associated to the configuration set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/smsvoice_configuration_set#protect_configuration_id SmsvoiceConfigurationSet#protect_configuration_id}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig.property.tags"></a>

```csharp
public IResolvable|SmsvoiceConfigurationSetTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTags">SmsvoiceConfigurationSetTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/smsvoice_configuration_set#tags SmsvoiceConfigurationSet#tags}

---

### SmsvoiceConfigurationSetEventDestinations <a name="SmsvoiceConfigurationSetEventDestinations" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinations.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SmsvoiceConfigurationSetEventDestinations {
    SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestination CloudwatchLogsDestination = null,
    bool|IResolvable Enabled = null,
    string EventDestinationName = null,
    SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestination KinesisFirehoseDestination = null,
    string[] MatchingEventTypes = null,
    SmsvoiceConfigurationSetEventDestinationsSnsDestination SnsDestination = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinations.property.cloudwatchLogsDestination">CloudwatchLogsDestination</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestination">SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestination</a></code> | An object that contains IamRoleArn and LogGroupArn associated with an Amazon CloudWatch event destination. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinations.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | When set to true events will be logged. By default this is set to true. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinations.property.eventDestinationName">EventDestinationName</a></code> | <code>string</code> | The name that identifies the event destination. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinations.property.kinesisFirehoseDestination">KinesisFirehoseDestination</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestination">SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestination</a></code> | An object that contains IamRoleArn and DeliveryStreamArn associated with an Amazon Kinesis Firehose event destination. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinations.property.matchingEventTypes">MatchingEventTypes</a></code> | <code>string[]</code> | An array of event types that determine which events to log. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinations.property.snsDestination">SnsDestination</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestination">SmsvoiceConfigurationSetEventDestinationsSnsDestination</a></code> | An object that contains SNS TopicArn event destination. |

---

##### `CloudwatchLogsDestination`<sup>Optional</sup> <a name="CloudwatchLogsDestination" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinations.property.cloudwatchLogsDestination"></a>

```csharp
public SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestination CloudwatchLogsDestination { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestination">SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestination</a>

An object that contains IamRoleArn and LogGroupArn associated with an Amazon CloudWatch event destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/smsvoice_configuration_set#cloudwatch_logs_destination SmsvoiceConfigurationSet#cloudwatch_logs_destination}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinations.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

When set to true events will be logged. By default this is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/smsvoice_configuration_set#enabled SmsvoiceConfigurationSet#enabled}

---

##### `EventDestinationName`<sup>Optional</sup> <a name="EventDestinationName" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinations.property.eventDestinationName"></a>

```csharp
public string EventDestinationName { get; set; }
```

- *Type:* string

The name that identifies the event destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/smsvoice_configuration_set#event_destination_name SmsvoiceConfigurationSet#event_destination_name}

---

##### `KinesisFirehoseDestination`<sup>Optional</sup> <a name="KinesisFirehoseDestination" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinations.property.kinesisFirehoseDestination"></a>

```csharp
public SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestination KinesisFirehoseDestination { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestination">SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestination</a>

An object that contains IamRoleArn and DeliveryStreamArn associated with an Amazon Kinesis Firehose event destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/smsvoice_configuration_set#kinesis_firehose_destination SmsvoiceConfigurationSet#kinesis_firehose_destination}

---

##### `MatchingEventTypes`<sup>Optional</sup> <a name="MatchingEventTypes" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinations.property.matchingEventTypes"></a>

```csharp
public string[] MatchingEventTypes { get; set; }
```

- *Type:* string[]

An array of event types that determine which events to log.

If 'ALL' is used, then AWS End User Messaging SMS and Voice logs every event type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/smsvoice_configuration_set#matching_event_types SmsvoiceConfigurationSet#matching_event_types}

---

##### `SnsDestination`<sup>Optional</sup> <a name="SnsDestination" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinations.property.snsDestination"></a>

```csharp
public SmsvoiceConfigurationSetEventDestinationsSnsDestination SnsDestination { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestination">SmsvoiceConfigurationSetEventDestinationsSnsDestination</a>

An object that contains SNS TopicArn event destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/smsvoice_configuration_set#sns_destination SmsvoiceConfigurationSet#sns_destination}

---

### SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestination <a name="SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestination" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestination.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestination {
    string IamRoleArn = null,
    string LogGroupArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestination.property.iamRoleArn">IamRoleArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of an AWS Identity and Access Management role that is able to write event data to an Amazon CloudWatch destination. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestination.property.logGroupArn">LogGroupArn</a></code> | <code>string</code> | The name of the Amazon CloudWatch log group that you want to record events in. |

---

##### `IamRoleArn`<sup>Optional</sup> <a name="IamRoleArn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestination.property.iamRoleArn"></a>

```csharp
public string IamRoleArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of an AWS Identity and Access Management role that is able to write event data to an Amazon CloudWatch destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/smsvoice_configuration_set#iam_role_arn SmsvoiceConfigurationSet#iam_role_arn}

---

##### `LogGroupArn`<sup>Optional</sup> <a name="LogGroupArn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestination.property.logGroupArn"></a>

```csharp
public string LogGroupArn { get; set; }
```

- *Type:* string

The name of the Amazon CloudWatch log group that you want to record events in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/smsvoice_configuration_set#log_group_arn SmsvoiceConfigurationSet#log_group_arn}

---

### SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestination <a name="SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestination" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestination.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestination {
    string DeliveryStreamArn = null,
    string IamRoleArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestination.property.deliveryStreamArn">DeliveryStreamArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the delivery stream. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestination.property.iamRoleArn">IamRoleArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of an AWS Identity and Access Management role that is able to write event data to an Amazon CloudWatch destination. |

---

##### `DeliveryStreamArn`<sup>Optional</sup> <a name="DeliveryStreamArn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestination.property.deliveryStreamArn"></a>

```csharp
public string DeliveryStreamArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of the delivery stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/smsvoice_configuration_set#delivery_stream_arn SmsvoiceConfigurationSet#delivery_stream_arn}

---

##### `IamRoleArn`<sup>Optional</sup> <a name="IamRoleArn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestination.property.iamRoleArn"></a>

```csharp
public string IamRoleArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of an AWS Identity and Access Management role that is able to write event data to an Amazon CloudWatch destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/smsvoice_configuration_set#iam_role_arn SmsvoiceConfigurationSet#iam_role_arn}

---

### SmsvoiceConfigurationSetEventDestinationsSnsDestination <a name="SmsvoiceConfigurationSetEventDestinationsSnsDestination" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestination.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SmsvoiceConfigurationSetEventDestinationsSnsDestination {
    string TopicArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestination.property.topicArn">TopicArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the Amazon SNS topic that you want to publish events to. |

---

##### `TopicArn`<sup>Optional</sup> <a name="TopicArn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestination.property.topicArn"></a>

```csharp
public string TopicArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of the Amazon SNS topic that you want to publish events to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/smsvoice_configuration_set#topic_arn SmsvoiceConfigurationSet#topic_arn}

---

### SmsvoiceConfigurationSetTags <a name="SmsvoiceConfigurationSetTags" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SmsvoiceConfigurationSetTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/smsvoice_configuration_set#key SmsvoiceConfigurationSet#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/smsvoice_configuration_set#value SmsvoiceConfigurationSet#value}

---

## Classes <a name="Classes" id="Classes"></a>

### SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference <a name="SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.resetIamRoleArn">ResetIamRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.resetLogGroupArn">ResetLogGroupArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIamRoleArn` <a name="ResetIamRoleArn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.resetIamRoleArn"></a>

```csharp
private void ResetIamRoleArn()
```

##### `ResetLogGroupArn` <a name="ResetLogGroupArn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.resetLogGroupArn"></a>

```csharp
private void ResetLogGroupArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.property.iamRoleArnInput">IamRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.property.logGroupArnInput">LogGroupArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.property.iamRoleArn">IamRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.property.logGroupArn">LogGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestination">SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestination</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IamRoleArnInput`<sup>Optional</sup> <a name="IamRoleArnInput" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.property.iamRoleArnInput"></a>

```csharp
public string IamRoleArnInput { get; }
```

- *Type:* string

---

##### `LogGroupArnInput`<sup>Optional</sup> <a name="LogGroupArnInput" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.property.logGroupArnInput"></a>

```csharp
public string LogGroupArnInput { get; }
```

- *Type:* string

---

##### `IamRoleArn`<sup>Required</sup> <a name="IamRoleArn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.property.iamRoleArn"></a>

```csharp
public string IamRoleArn { get; }
```

- *Type:* string

---

##### `LogGroupArn`<sup>Required</sup> <a name="LogGroupArn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.property.logGroupArn"></a>

```csharp
public string LogGroupArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestination InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestination">SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestination</a>

---


### SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference <a name="SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.resetDeliveryStreamArn">ResetDeliveryStreamArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.resetIamRoleArn">ResetIamRoleArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDeliveryStreamArn` <a name="ResetDeliveryStreamArn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.resetDeliveryStreamArn"></a>

```csharp
private void ResetDeliveryStreamArn()
```

##### `ResetIamRoleArn` <a name="ResetIamRoleArn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.resetIamRoleArn"></a>

```csharp
private void ResetIamRoleArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.property.deliveryStreamArnInput">DeliveryStreamArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.property.iamRoleArnInput">IamRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.property.deliveryStreamArn">DeliveryStreamArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.property.iamRoleArn">IamRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestination">SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestination</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeliveryStreamArnInput`<sup>Optional</sup> <a name="DeliveryStreamArnInput" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.property.deliveryStreamArnInput"></a>

```csharp
public string DeliveryStreamArnInput { get; }
```

- *Type:* string

---

##### `IamRoleArnInput`<sup>Optional</sup> <a name="IamRoleArnInput" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.property.iamRoleArnInput"></a>

```csharp
public string IamRoleArnInput { get; }
```

- *Type:* string

---

##### `DeliveryStreamArn`<sup>Required</sup> <a name="DeliveryStreamArn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.property.deliveryStreamArn"></a>

```csharp
public string DeliveryStreamArn { get; }
```

- *Type:* string

---

##### `IamRoleArn`<sup>Required</sup> <a name="IamRoleArn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.property.iamRoleArn"></a>

```csharp
public string IamRoleArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestination InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestination">SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestination</a>

---


### SmsvoiceConfigurationSetEventDestinationsList <a name="SmsvoiceConfigurationSetEventDestinationsList" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SmsvoiceConfigurationSetEventDestinationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList.get"></a>

```csharp
private SmsvoiceConfigurationSetEventDestinationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinations">SmsvoiceConfigurationSetEventDestinations</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList.property.internalValue"></a>

```csharp
public IResolvable|SmsvoiceConfigurationSetEventDestinations[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinations">SmsvoiceConfigurationSetEventDestinations</a>[]

---


### SmsvoiceConfigurationSetEventDestinationsOutputReference <a name="SmsvoiceConfigurationSetEventDestinationsOutputReference" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SmsvoiceConfigurationSetEventDestinationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.putCloudwatchLogsDestination">PutCloudwatchLogsDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.putKinesisFirehoseDestination">PutKinesisFirehoseDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.putSnsDestination">PutSnsDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.resetCloudwatchLogsDestination">ResetCloudwatchLogsDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.resetEventDestinationName">ResetEventDestinationName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.resetKinesisFirehoseDestination">ResetKinesisFirehoseDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.resetMatchingEventTypes">ResetMatchingEventTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.resetSnsDestination">ResetSnsDestination</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCloudwatchLogsDestination` <a name="PutCloudwatchLogsDestination" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.putCloudwatchLogsDestination"></a>

```csharp
private void PutCloudwatchLogsDestination(SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestination Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.putCloudwatchLogsDestination.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestination">SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestination</a>

---

##### `PutKinesisFirehoseDestination` <a name="PutKinesisFirehoseDestination" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.putKinesisFirehoseDestination"></a>

```csharp
private void PutKinesisFirehoseDestination(SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestination Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.putKinesisFirehoseDestination.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestination">SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestination</a>

---

##### `PutSnsDestination` <a name="PutSnsDestination" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.putSnsDestination"></a>

```csharp
private void PutSnsDestination(SmsvoiceConfigurationSetEventDestinationsSnsDestination Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.putSnsDestination.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestination">SmsvoiceConfigurationSetEventDestinationsSnsDestination</a>

---

##### `ResetCloudwatchLogsDestination` <a name="ResetCloudwatchLogsDestination" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.resetCloudwatchLogsDestination"></a>

```csharp
private void ResetCloudwatchLogsDestination()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetEventDestinationName` <a name="ResetEventDestinationName" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.resetEventDestinationName"></a>

```csharp
private void ResetEventDestinationName()
```

##### `ResetKinesisFirehoseDestination` <a name="ResetKinesisFirehoseDestination" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.resetKinesisFirehoseDestination"></a>

```csharp
private void ResetKinesisFirehoseDestination()
```

##### `ResetMatchingEventTypes` <a name="ResetMatchingEventTypes" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.resetMatchingEventTypes"></a>

```csharp
private void ResetMatchingEventTypes()
```

##### `ResetSnsDestination` <a name="ResetSnsDestination" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.resetSnsDestination"></a>

```csharp
private void ResetSnsDestination()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.cloudwatchLogsDestination">CloudwatchLogsDestination</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference">SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.kinesisFirehoseDestination">KinesisFirehoseDestination</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference">SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.snsDestination">SnsDestination</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference">SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.cloudwatchLogsDestinationInput">CloudwatchLogsDestinationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestination">SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.eventDestinationNameInput">EventDestinationNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.kinesisFirehoseDestinationInput">KinesisFirehoseDestinationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestination">SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.matchingEventTypesInput">MatchingEventTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.snsDestinationInput">SnsDestinationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestination">SmsvoiceConfigurationSetEventDestinationsSnsDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.eventDestinationName">EventDestinationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.matchingEventTypes">MatchingEventTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinations">SmsvoiceConfigurationSetEventDestinations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CloudwatchLogsDestination`<sup>Required</sup> <a name="CloudwatchLogsDestination" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.cloudwatchLogsDestination"></a>

```csharp
public SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference CloudwatchLogsDestination { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference">SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference</a>

---

##### `KinesisFirehoseDestination`<sup>Required</sup> <a name="KinesisFirehoseDestination" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.kinesisFirehoseDestination"></a>

```csharp
public SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference KinesisFirehoseDestination { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference">SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference</a>

---

##### `SnsDestination`<sup>Required</sup> <a name="SnsDestination" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.snsDestination"></a>

```csharp
public SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference SnsDestination { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference">SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference</a>

---

##### `CloudwatchLogsDestinationInput`<sup>Optional</sup> <a name="CloudwatchLogsDestinationInput" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.cloudwatchLogsDestinationInput"></a>

```csharp
public IResolvable|SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestination CloudwatchLogsDestinationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestination">SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestination</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EventDestinationNameInput`<sup>Optional</sup> <a name="EventDestinationNameInput" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.eventDestinationNameInput"></a>

```csharp
public string EventDestinationNameInput { get; }
```

- *Type:* string

---

##### `KinesisFirehoseDestinationInput`<sup>Optional</sup> <a name="KinesisFirehoseDestinationInput" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.kinesisFirehoseDestinationInput"></a>

```csharp
public IResolvable|SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestination KinesisFirehoseDestinationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestination">SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestination</a>

---

##### `MatchingEventTypesInput`<sup>Optional</sup> <a name="MatchingEventTypesInput" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.matchingEventTypesInput"></a>

```csharp
public string[] MatchingEventTypesInput { get; }
```

- *Type:* string[]

---

##### `SnsDestinationInput`<sup>Optional</sup> <a name="SnsDestinationInput" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.snsDestinationInput"></a>

```csharp
public IResolvable|SmsvoiceConfigurationSetEventDestinationsSnsDestination SnsDestinationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestination">SmsvoiceConfigurationSetEventDestinationsSnsDestination</a>

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EventDestinationName`<sup>Required</sup> <a name="EventDestinationName" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.eventDestinationName"></a>

```csharp
public string EventDestinationName { get; }
```

- *Type:* string

---

##### `MatchingEventTypes`<sup>Required</sup> <a name="MatchingEventTypes" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.matchingEventTypes"></a>

```csharp
public string[] MatchingEventTypes { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SmsvoiceConfigurationSetEventDestinations InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinations">SmsvoiceConfigurationSetEventDestinations</a>

---


### SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference <a name="SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.resetTopicArn">ResetTopicArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTopicArn` <a name="ResetTopicArn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.resetTopicArn"></a>

```csharp
private void ResetTopicArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.property.topicArnInput">TopicArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.property.topicArn">TopicArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestination">SmsvoiceConfigurationSetEventDestinationsSnsDestination</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TopicArnInput`<sup>Optional</sup> <a name="TopicArnInput" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.property.topicArnInput"></a>

```csharp
public string TopicArnInput { get; }
```

- *Type:* string

---

##### `TopicArn`<sup>Required</sup> <a name="TopicArn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.property.topicArn"></a>

```csharp
public string TopicArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SmsvoiceConfigurationSetEventDestinationsSnsDestination InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestination">SmsvoiceConfigurationSetEventDestinationsSnsDestination</a>

---


### SmsvoiceConfigurationSetTagsList <a name="SmsvoiceConfigurationSetTagsList" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SmsvoiceConfigurationSetTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList.get"></a>

```csharp
private SmsvoiceConfigurationSetTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTags">SmsvoiceConfigurationSetTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList.property.internalValue"></a>

```csharp
public IResolvable|SmsvoiceConfigurationSetTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTags">SmsvoiceConfigurationSetTags</a>[]

---


### SmsvoiceConfigurationSetTagsOutputReference <a name="SmsvoiceConfigurationSetTagsOutputReference" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SmsvoiceConfigurationSetTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTags">SmsvoiceConfigurationSetTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SmsvoiceConfigurationSetTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTags">SmsvoiceConfigurationSetTags</a>

---



