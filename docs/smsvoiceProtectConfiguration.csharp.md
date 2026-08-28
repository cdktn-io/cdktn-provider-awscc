# `smsvoiceProtectConfiguration` Submodule <a name="`smsvoiceProtectConfiguration` Submodule" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SmsvoiceProtectConfiguration <a name="SmsvoiceProtectConfiguration" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/smsvoice_protect_configuration awscc_smsvoice_protect_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SmsvoiceProtectConfiguration(Construct Scope, string Id, SmsvoiceProtectConfigurationConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationConfig">SmsvoiceProtectConfigurationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationConfig">SmsvoiceProtectConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.putCountryRuleSet">PutCountryRuleSet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.resetCountryRuleSet">ResetCountryRuleSet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.resetDeletionProtectionEnabled">ResetDeletionProtectionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCountryRuleSet` <a name="PutCountryRuleSet" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.putCountryRuleSet"></a>

```csharp
private void PutCountryRuleSet(SmsvoiceProtectConfigurationCountryRuleSet Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.putCountryRuleSet.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSet">SmsvoiceProtectConfigurationCountryRuleSet</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.putTags"></a>

```csharp
private void PutTags(IResolvable|SmsvoiceProtectConfigurationTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTags">SmsvoiceProtectConfigurationTags</a>[]

---

##### `ResetCountryRuleSet` <a name="ResetCountryRuleSet" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.resetCountryRuleSet"></a>

```csharp
private void ResetCountryRuleSet()
```

##### `ResetDeletionProtectionEnabled` <a name="ResetDeletionProtectionEnabled" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.resetDeletionProtectionEnabled"></a>

```csharp
private void ResetDeletionProtectionEnabled()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SmsvoiceProtectConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SmsvoiceProtectConfiguration.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SmsvoiceProtectConfiguration.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SmsvoiceProtectConfiguration.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SmsvoiceProtectConfiguration.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a SmsvoiceProtectConfiguration resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SmsvoiceProtectConfiguration to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SmsvoiceProtectConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/smsvoice_protect_configuration#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the SmsvoiceProtectConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.countryRuleSet">CountryRuleSet</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference">SmsvoiceProtectConfigurationCountryRuleSetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.protectConfigurationId">ProtectConfigurationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsList">SmsvoiceProtectConfigurationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.countryRuleSetInput">CountryRuleSetInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSet">SmsvoiceProtectConfigurationCountryRuleSet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.deletionProtectionEnabledInput">DeletionProtectionEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTags">SmsvoiceProtectConfigurationTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.deletionProtectionEnabled">DeletionProtectionEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CountryRuleSet`<sup>Required</sup> <a name="CountryRuleSet" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.countryRuleSet"></a>

```csharp
public SmsvoiceProtectConfigurationCountryRuleSetOutputReference CountryRuleSet { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference">SmsvoiceProtectConfigurationCountryRuleSetOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ProtectConfigurationId`<sup>Required</sup> <a name="ProtectConfigurationId" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.protectConfigurationId"></a>

```csharp
public string ProtectConfigurationId { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.tags"></a>

```csharp
public SmsvoiceProtectConfigurationTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsList">SmsvoiceProtectConfigurationTagsList</a>

---

##### `CountryRuleSetInput`<sup>Optional</sup> <a name="CountryRuleSetInput" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.countryRuleSetInput"></a>

```csharp
public IResolvable|SmsvoiceProtectConfigurationCountryRuleSet CountryRuleSetInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSet">SmsvoiceProtectConfigurationCountryRuleSet</a>

---

##### `DeletionProtectionEnabledInput`<sup>Optional</sup> <a name="DeletionProtectionEnabledInput" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.deletionProtectionEnabledInput"></a>

```csharp
public bool|IResolvable DeletionProtectionEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.tagsInput"></a>

```csharp
public IResolvable|SmsvoiceProtectConfigurationTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTags">SmsvoiceProtectConfigurationTags</a>[]

---

##### `DeletionProtectionEnabled`<sup>Required</sup> <a name="DeletionProtectionEnabled" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.deletionProtectionEnabled"></a>

```csharp
public bool|IResolvable DeletionProtectionEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SmsvoiceProtectConfigurationConfig <a name="SmsvoiceProtectConfigurationConfig" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SmsvoiceProtectConfigurationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    SmsvoiceProtectConfigurationCountryRuleSet CountryRuleSet = null,
    bool|IResolvable DeletionProtectionEnabled = null,
    IResolvable|SmsvoiceProtectConfigurationTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationConfig.property.countryRuleSet">CountryRuleSet</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSet">SmsvoiceProtectConfigurationCountryRuleSet</a></code> | An array of CountryRule containing the rules for the NumberCapability. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationConfig.property.deletionProtectionEnabled">DeletionProtectionEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | When set to true deletion protection is enabled and protect configuration cannot be deleted. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTags">SmsvoiceProtectConfigurationTags</a>[]</code> | An array of key-value pairs to apply to this resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CountryRuleSet`<sup>Optional</sup> <a name="CountryRuleSet" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationConfig.property.countryRuleSet"></a>

```csharp
public SmsvoiceProtectConfigurationCountryRuleSet CountryRuleSet { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSet">SmsvoiceProtectConfigurationCountryRuleSet</a>

An array of CountryRule containing the rules for the NumberCapability.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/smsvoice_protect_configuration#country_rule_set SmsvoiceProtectConfiguration#country_rule_set}

---

##### `DeletionProtectionEnabled`<sup>Optional</sup> <a name="DeletionProtectionEnabled" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationConfig.property.deletionProtectionEnabled"></a>

```csharp
public bool|IResolvable DeletionProtectionEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

When set to true deletion protection is enabled and protect configuration cannot be deleted.

By default this is set to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/smsvoice_protect_configuration#deletion_protection_enabled SmsvoiceProtectConfiguration#deletion_protection_enabled}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationConfig.property.tags"></a>

```csharp
public IResolvable|SmsvoiceProtectConfigurationTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTags">SmsvoiceProtectConfigurationTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/smsvoice_protect_configuration#tags SmsvoiceProtectConfiguration#tags}

---

### SmsvoiceProtectConfigurationCountryRuleSet <a name="SmsvoiceProtectConfigurationCountryRuleSet" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSet"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSet.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SmsvoiceProtectConfigurationCountryRuleSet {
    IResolvable|SmsvoiceProtectConfigurationCountryRuleSetMms[] Mms = null,
    IResolvable|SmsvoiceProtectConfigurationCountryRuleSetSms[] Sms = null,
    IResolvable|SmsvoiceProtectConfigurationCountryRuleSetVoice[] Voice = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSet.property.mms">Mms</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMms">SmsvoiceProtectConfigurationCountryRuleSetMms</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/smsvoice_protect_configuration#mms SmsvoiceProtectConfiguration#mms}. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSet.property.sms">Sms</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSms">SmsvoiceProtectConfigurationCountryRuleSetSms</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/smsvoice_protect_configuration#sms SmsvoiceProtectConfiguration#sms}. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSet.property.voice">Voice</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoice">SmsvoiceProtectConfigurationCountryRuleSetVoice</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/smsvoice_protect_configuration#voice SmsvoiceProtectConfiguration#voice}. |

---

##### `Mms`<sup>Optional</sup> <a name="Mms" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSet.property.mms"></a>

```csharp
public IResolvable|SmsvoiceProtectConfigurationCountryRuleSetMms[] Mms { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMms">SmsvoiceProtectConfigurationCountryRuleSetMms</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/smsvoice_protect_configuration#mms SmsvoiceProtectConfiguration#mms}.

---

##### `Sms`<sup>Optional</sup> <a name="Sms" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSet.property.sms"></a>

```csharp
public IResolvable|SmsvoiceProtectConfigurationCountryRuleSetSms[] Sms { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSms">SmsvoiceProtectConfigurationCountryRuleSetSms</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/smsvoice_protect_configuration#sms SmsvoiceProtectConfiguration#sms}.

---

##### `Voice`<sup>Optional</sup> <a name="Voice" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSet.property.voice"></a>

```csharp
public IResolvable|SmsvoiceProtectConfigurationCountryRuleSetVoice[] Voice { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoice">SmsvoiceProtectConfigurationCountryRuleSetVoice</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/smsvoice_protect_configuration#voice SmsvoiceProtectConfiguration#voice}.

---

### SmsvoiceProtectConfigurationCountryRuleSetMms <a name="SmsvoiceProtectConfigurationCountryRuleSetMms" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMms"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMms.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SmsvoiceProtectConfigurationCountryRuleSetMms {
    string CountryCode = null,
    string ProtectStatus = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMms.property.countryCode">CountryCode</a></code> | <code>string</code> | The two-letter ISO country code. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMms.property.protectStatus">ProtectStatus</a></code> | <code>string</code> | The types of protection that can be used. |

---

##### `CountryCode`<sup>Optional</sup> <a name="CountryCode" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMms.property.countryCode"></a>

```csharp
public string CountryCode { get; set; }
```

- *Type:* string

The two-letter ISO country code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/smsvoice_protect_configuration#country_code SmsvoiceProtectConfiguration#country_code}

---

##### `ProtectStatus`<sup>Optional</sup> <a name="ProtectStatus" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMms.property.protectStatus"></a>

```csharp
public string ProtectStatus { get; set; }
```

- *Type:* string

The types of protection that can be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/smsvoice_protect_configuration#protect_status SmsvoiceProtectConfiguration#protect_status}

---

### SmsvoiceProtectConfigurationCountryRuleSetSms <a name="SmsvoiceProtectConfigurationCountryRuleSetSms" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSms"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSms.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SmsvoiceProtectConfigurationCountryRuleSetSms {
    string CountryCode = null,
    string ProtectStatus = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSms.property.countryCode">CountryCode</a></code> | <code>string</code> | The two-letter ISO country code. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSms.property.protectStatus">ProtectStatus</a></code> | <code>string</code> | The types of protection that can be used. |

---

##### `CountryCode`<sup>Optional</sup> <a name="CountryCode" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSms.property.countryCode"></a>

```csharp
public string CountryCode { get; set; }
```

- *Type:* string

The two-letter ISO country code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/smsvoice_protect_configuration#country_code SmsvoiceProtectConfiguration#country_code}

---

##### `ProtectStatus`<sup>Optional</sup> <a name="ProtectStatus" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSms.property.protectStatus"></a>

```csharp
public string ProtectStatus { get; set; }
```

- *Type:* string

The types of protection that can be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/smsvoice_protect_configuration#protect_status SmsvoiceProtectConfiguration#protect_status}

---

### SmsvoiceProtectConfigurationCountryRuleSetVoice <a name="SmsvoiceProtectConfigurationCountryRuleSetVoice" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoice"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoice.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SmsvoiceProtectConfigurationCountryRuleSetVoice {
    string CountryCode = null,
    string ProtectStatus = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoice.property.countryCode">CountryCode</a></code> | <code>string</code> | The two-letter ISO country code. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoice.property.protectStatus">ProtectStatus</a></code> | <code>string</code> | The types of protection that can be used. |

---

##### `CountryCode`<sup>Optional</sup> <a name="CountryCode" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoice.property.countryCode"></a>

```csharp
public string CountryCode { get; set; }
```

- *Type:* string

The two-letter ISO country code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/smsvoice_protect_configuration#country_code SmsvoiceProtectConfiguration#country_code}

---

##### `ProtectStatus`<sup>Optional</sup> <a name="ProtectStatus" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoice.property.protectStatus"></a>

```csharp
public string ProtectStatus { get; set; }
```

- *Type:* string

The types of protection that can be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/smsvoice_protect_configuration#protect_status SmsvoiceProtectConfiguration#protect_status}

---

### SmsvoiceProtectConfigurationTags <a name="SmsvoiceProtectConfigurationTags" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SmsvoiceProtectConfigurationTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/smsvoice_protect_configuration#key SmsvoiceProtectConfiguration#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/smsvoice_protect_configuration#value SmsvoiceProtectConfiguration#value}

---

## Classes <a name="Classes" id="Classes"></a>

### SmsvoiceProtectConfigurationCountryRuleSetMmsList <a name="SmsvoiceProtectConfigurationCountryRuleSetMmsList" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SmsvoiceProtectConfigurationCountryRuleSetMmsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsList.get"></a>

```csharp
private SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMms">SmsvoiceProtectConfigurationCountryRuleSetMms</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsList.property.internalValue"></a>

```csharp
public IResolvable|SmsvoiceProtectConfigurationCountryRuleSetMms[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMms">SmsvoiceProtectConfigurationCountryRuleSetMms</a>[]

---


### SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference <a name="SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.resetCountryCode">ResetCountryCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.resetProtectStatus">ResetProtectStatus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCountryCode` <a name="ResetCountryCode" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.resetCountryCode"></a>

```csharp
private void ResetCountryCode()
```

##### `ResetProtectStatus` <a name="ResetProtectStatus" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.resetProtectStatus"></a>

```csharp
private void ResetProtectStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.property.countryCodeInput">CountryCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.property.protectStatusInput">ProtectStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.property.countryCode">CountryCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.property.protectStatus">ProtectStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMms">SmsvoiceProtectConfigurationCountryRuleSetMms</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CountryCodeInput`<sup>Optional</sup> <a name="CountryCodeInput" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.property.countryCodeInput"></a>

```csharp
public string CountryCodeInput { get; }
```

- *Type:* string

---

##### `ProtectStatusInput`<sup>Optional</sup> <a name="ProtectStatusInput" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.property.protectStatusInput"></a>

```csharp
public string ProtectStatusInput { get; }
```

- *Type:* string

---

##### `CountryCode`<sup>Required</sup> <a name="CountryCode" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.property.countryCode"></a>

```csharp
public string CountryCode { get; }
```

- *Type:* string

---

##### `ProtectStatus`<sup>Required</sup> <a name="ProtectStatus" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.property.protectStatus"></a>

```csharp
public string ProtectStatus { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SmsvoiceProtectConfigurationCountryRuleSetMms InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMms">SmsvoiceProtectConfigurationCountryRuleSetMms</a>

---


### SmsvoiceProtectConfigurationCountryRuleSetOutputReference <a name="SmsvoiceProtectConfigurationCountryRuleSetOutputReference" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SmsvoiceProtectConfigurationCountryRuleSetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.putMms">PutMms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.putSms">PutSms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.putVoice">PutVoice</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.resetMms">ResetMms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.resetSms">ResetSms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.resetVoice">ResetVoice</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMms` <a name="PutMms" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.putMms"></a>

```csharp
private void PutMms(IResolvable|SmsvoiceProtectConfigurationCountryRuleSetMms[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.putMms.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMms">SmsvoiceProtectConfigurationCountryRuleSetMms</a>[]

---

##### `PutSms` <a name="PutSms" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.putSms"></a>

```csharp
private void PutSms(IResolvable|SmsvoiceProtectConfigurationCountryRuleSetSms[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.putSms.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSms">SmsvoiceProtectConfigurationCountryRuleSetSms</a>[]

---

##### `PutVoice` <a name="PutVoice" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.putVoice"></a>

```csharp
private void PutVoice(IResolvable|SmsvoiceProtectConfigurationCountryRuleSetVoice[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.putVoice.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoice">SmsvoiceProtectConfigurationCountryRuleSetVoice</a>[]

---

##### `ResetMms` <a name="ResetMms" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.resetMms"></a>

```csharp
private void ResetMms()
```

##### `ResetSms` <a name="ResetSms" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.resetSms"></a>

```csharp
private void ResetSms()
```

##### `ResetVoice` <a name="ResetVoice" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.resetVoice"></a>

```csharp
private void ResetVoice()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.property.mms">Mms</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsList">SmsvoiceProtectConfigurationCountryRuleSetMmsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.property.sms">Sms</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsList">SmsvoiceProtectConfigurationCountryRuleSetSmsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.property.voice">Voice</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceList">SmsvoiceProtectConfigurationCountryRuleSetVoiceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.property.mmsInput">MmsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMms">SmsvoiceProtectConfigurationCountryRuleSetMms</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.property.smsInput">SmsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSms">SmsvoiceProtectConfigurationCountryRuleSetSms</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.property.voiceInput">VoiceInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoice">SmsvoiceProtectConfigurationCountryRuleSetVoice</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSet">SmsvoiceProtectConfigurationCountryRuleSet</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Mms`<sup>Required</sup> <a name="Mms" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.property.mms"></a>

```csharp
public SmsvoiceProtectConfigurationCountryRuleSetMmsList Mms { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsList">SmsvoiceProtectConfigurationCountryRuleSetMmsList</a>

---

##### `Sms`<sup>Required</sup> <a name="Sms" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.property.sms"></a>

```csharp
public SmsvoiceProtectConfigurationCountryRuleSetSmsList Sms { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsList">SmsvoiceProtectConfigurationCountryRuleSetSmsList</a>

---

##### `Voice`<sup>Required</sup> <a name="Voice" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.property.voice"></a>

```csharp
public SmsvoiceProtectConfigurationCountryRuleSetVoiceList Voice { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceList">SmsvoiceProtectConfigurationCountryRuleSetVoiceList</a>

---

##### `MmsInput`<sup>Optional</sup> <a name="MmsInput" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.property.mmsInput"></a>

```csharp
public IResolvable|SmsvoiceProtectConfigurationCountryRuleSetMms[] MmsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMms">SmsvoiceProtectConfigurationCountryRuleSetMms</a>[]

---

##### `SmsInput`<sup>Optional</sup> <a name="SmsInput" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.property.smsInput"></a>

```csharp
public IResolvable|SmsvoiceProtectConfigurationCountryRuleSetSms[] SmsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSms">SmsvoiceProtectConfigurationCountryRuleSetSms</a>[]

---

##### `VoiceInput`<sup>Optional</sup> <a name="VoiceInput" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.property.voiceInput"></a>

```csharp
public IResolvable|SmsvoiceProtectConfigurationCountryRuleSetVoice[] VoiceInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoice">SmsvoiceProtectConfigurationCountryRuleSetVoice</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SmsvoiceProtectConfigurationCountryRuleSet InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSet">SmsvoiceProtectConfigurationCountryRuleSet</a>

---


### SmsvoiceProtectConfigurationCountryRuleSetSmsList <a name="SmsvoiceProtectConfigurationCountryRuleSetSmsList" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SmsvoiceProtectConfigurationCountryRuleSetSmsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsList.get"></a>

```csharp
private SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSms">SmsvoiceProtectConfigurationCountryRuleSetSms</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsList.property.internalValue"></a>

```csharp
public IResolvable|SmsvoiceProtectConfigurationCountryRuleSetSms[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSms">SmsvoiceProtectConfigurationCountryRuleSetSms</a>[]

---


### SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference <a name="SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.resetCountryCode">ResetCountryCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.resetProtectStatus">ResetProtectStatus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCountryCode` <a name="ResetCountryCode" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.resetCountryCode"></a>

```csharp
private void ResetCountryCode()
```

##### `ResetProtectStatus` <a name="ResetProtectStatus" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.resetProtectStatus"></a>

```csharp
private void ResetProtectStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.property.countryCodeInput">CountryCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.property.protectStatusInput">ProtectStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.property.countryCode">CountryCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.property.protectStatus">ProtectStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSms">SmsvoiceProtectConfigurationCountryRuleSetSms</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CountryCodeInput`<sup>Optional</sup> <a name="CountryCodeInput" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.property.countryCodeInput"></a>

```csharp
public string CountryCodeInput { get; }
```

- *Type:* string

---

##### `ProtectStatusInput`<sup>Optional</sup> <a name="ProtectStatusInput" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.property.protectStatusInput"></a>

```csharp
public string ProtectStatusInput { get; }
```

- *Type:* string

---

##### `CountryCode`<sup>Required</sup> <a name="CountryCode" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.property.countryCode"></a>

```csharp
public string CountryCode { get; }
```

- *Type:* string

---

##### `ProtectStatus`<sup>Required</sup> <a name="ProtectStatus" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.property.protectStatus"></a>

```csharp
public string ProtectStatus { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SmsvoiceProtectConfigurationCountryRuleSetSms InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSms">SmsvoiceProtectConfigurationCountryRuleSetSms</a>

---


### SmsvoiceProtectConfigurationCountryRuleSetVoiceList <a name="SmsvoiceProtectConfigurationCountryRuleSetVoiceList" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SmsvoiceProtectConfigurationCountryRuleSetVoiceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceList.get"></a>

```csharp
private SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoice">SmsvoiceProtectConfigurationCountryRuleSetVoice</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceList.property.internalValue"></a>

```csharp
public IResolvable|SmsvoiceProtectConfigurationCountryRuleSetVoice[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoice">SmsvoiceProtectConfigurationCountryRuleSetVoice</a>[]

---


### SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference <a name="SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.resetCountryCode">ResetCountryCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.resetProtectStatus">ResetProtectStatus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCountryCode` <a name="ResetCountryCode" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.resetCountryCode"></a>

```csharp
private void ResetCountryCode()
```

##### `ResetProtectStatus` <a name="ResetProtectStatus" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.resetProtectStatus"></a>

```csharp
private void ResetProtectStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.property.countryCodeInput">CountryCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.property.protectStatusInput">ProtectStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.property.countryCode">CountryCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.property.protectStatus">ProtectStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoice">SmsvoiceProtectConfigurationCountryRuleSetVoice</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CountryCodeInput`<sup>Optional</sup> <a name="CountryCodeInput" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.property.countryCodeInput"></a>

```csharp
public string CountryCodeInput { get; }
```

- *Type:* string

---

##### `ProtectStatusInput`<sup>Optional</sup> <a name="ProtectStatusInput" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.property.protectStatusInput"></a>

```csharp
public string ProtectStatusInput { get; }
```

- *Type:* string

---

##### `CountryCode`<sup>Required</sup> <a name="CountryCode" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.property.countryCode"></a>

```csharp
public string CountryCode { get; }
```

- *Type:* string

---

##### `ProtectStatus`<sup>Required</sup> <a name="ProtectStatus" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.property.protectStatus"></a>

```csharp
public string ProtectStatus { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SmsvoiceProtectConfigurationCountryRuleSetVoice InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoice">SmsvoiceProtectConfigurationCountryRuleSetVoice</a>

---


### SmsvoiceProtectConfigurationTagsList <a name="SmsvoiceProtectConfigurationTagsList" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SmsvoiceProtectConfigurationTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsList.get"></a>

```csharp
private SmsvoiceProtectConfigurationTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTags">SmsvoiceProtectConfigurationTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsList.property.internalValue"></a>

```csharp
public IResolvable|SmsvoiceProtectConfigurationTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTags">SmsvoiceProtectConfigurationTags</a>[]

---


### SmsvoiceProtectConfigurationTagsOutputReference <a name="SmsvoiceProtectConfigurationTagsOutputReference" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SmsvoiceProtectConfigurationTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTags">SmsvoiceProtectConfigurationTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SmsvoiceProtectConfigurationTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTags">SmsvoiceProtectConfigurationTags</a>

---



