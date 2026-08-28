# `sesCustomVerificationEmailTemplate` Submodule <a name="`sesCustomVerificationEmailTemplate` Submodule" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SesCustomVerificationEmailTemplate <a name="SesCustomVerificationEmailTemplate" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_custom_verification_email_template awscc_ses_custom_verification_email_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SesCustomVerificationEmailTemplate(Construct Scope, string Id, SesCustomVerificationEmailTemplateConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig">SesCustomVerificationEmailTemplateConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig">SesCustomVerificationEmailTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.putTags"></a>

```csharp
private void PutTags(IResolvable|SesCustomVerificationEmailTemplateTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTags">SesCustomVerificationEmailTemplateTags</a>[]

---

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SesCustomVerificationEmailTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SesCustomVerificationEmailTemplate.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SesCustomVerificationEmailTemplate.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SesCustomVerificationEmailTemplate.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SesCustomVerificationEmailTemplate.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a SesCustomVerificationEmailTemplate resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SesCustomVerificationEmailTemplate to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SesCustomVerificationEmailTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_custom_verification_email_template#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the SesCustomVerificationEmailTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList">SesCustomVerificationEmailTemplateTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.failureRedirectionUrlInput">FailureRedirectionUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.fromEmailAddressInput">FromEmailAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.successRedirectionUrlInput">SuccessRedirectionUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTags">SesCustomVerificationEmailTemplateTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.templateContentInput">TemplateContentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.templateNameInput">TemplateNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.templateSubjectInput">TemplateSubjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.failureRedirectionUrl">FailureRedirectionUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.fromEmailAddress">FromEmailAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.successRedirectionUrl">SuccessRedirectionUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.templateContent">TemplateContent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.templateName">TemplateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.templateSubject">TemplateSubject</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.tags"></a>

```csharp
public SesCustomVerificationEmailTemplateTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList">SesCustomVerificationEmailTemplateTagsList</a>

---

##### `FailureRedirectionUrlInput`<sup>Optional</sup> <a name="FailureRedirectionUrlInput" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.failureRedirectionUrlInput"></a>

```csharp
public string FailureRedirectionUrlInput { get; }
```

- *Type:* string

---

##### `FromEmailAddressInput`<sup>Optional</sup> <a name="FromEmailAddressInput" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.fromEmailAddressInput"></a>

```csharp
public string FromEmailAddressInput { get; }
```

- *Type:* string

---

##### `SuccessRedirectionUrlInput`<sup>Optional</sup> <a name="SuccessRedirectionUrlInput" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.successRedirectionUrlInput"></a>

```csharp
public string SuccessRedirectionUrlInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.tagsInput"></a>

```csharp
public IResolvable|SesCustomVerificationEmailTemplateTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTags">SesCustomVerificationEmailTemplateTags</a>[]

---

##### `TemplateContentInput`<sup>Optional</sup> <a name="TemplateContentInput" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.templateContentInput"></a>

```csharp
public string TemplateContentInput { get; }
```

- *Type:* string

---

##### `TemplateNameInput`<sup>Optional</sup> <a name="TemplateNameInput" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.templateNameInput"></a>

```csharp
public string TemplateNameInput { get; }
```

- *Type:* string

---

##### `TemplateSubjectInput`<sup>Optional</sup> <a name="TemplateSubjectInput" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.templateSubjectInput"></a>

```csharp
public string TemplateSubjectInput { get; }
```

- *Type:* string

---

##### `FailureRedirectionUrl`<sup>Required</sup> <a name="FailureRedirectionUrl" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.failureRedirectionUrl"></a>

```csharp
public string FailureRedirectionUrl { get; }
```

- *Type:* string

---

##### `FromEmailAddress`<sup>Required</sup> <a name="FromEmailAddress" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.fromEmailAddress"></a>

```csharp
public string FromEmailAddress { get; }
```

- *Type:* string

---

##### `SuccessRedirectionUrl`<sup>Required</sup> <a name="SuccessRedirectionUrl" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.successRedirectionUrl"></a>

```csharp
public string SuccessRedirectionUrl { get; }
```

- *Type:* string

---

##### `TemplateContent`<sup>Required</sup> <a name="TemplateContent" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.templateContent"></a>

```csharp
public string TemplateContent { get; }
```

- *Type:* string

---

##### `TemplateName`<sup>Required</sup> <a name="TemplateName" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.templateName"></a>

```csharp
public string TemplateName { get; }
```

- *Type:* string

---

##### `TemplateSubject`<sup>Required</sup> <a name="TemplateSubject" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.templateSubject"></a>

```csharp
public string TemplateSubject { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SesCustomVerificationEmailTemplateConfig <a name="SesCustomVerificationEmailTemplateConfig" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SesCustomVerificationEmailTemplateConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string FailureRedirectionUrl,
    string FromEmailAddress,
    string SuccessRedirectionUrl,
    string TemplateContent,
    string TemplateName,
    string TemplateSubject,
    IResolvable|SesCustomVerificationEmailTemplateTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.property.failureRedirectionUrl">FailureRedirectionUrl</a></code> | <code>string</code> | The URL that the recipient of the verification email is sent to if his or her address is not successfully verified. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.property.fromEmailAddress">FromEmailAddress</a></code> | <code>string</code> | The email address that the custom verification email is sent from. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.property.successRedirectionUrl">SuccessRedirectionUrl</a></code> | <code>string</code> | The URL that the recipient of the verification email is sent to if his or her address is successfully verified. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.property.templateContent">TemplateContent</a></code> | <code>string</code> | The content of the custom verification email. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.property.templateName">TemplateName</a></code> | <code>string</code> | The name of the custom verification email template. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.property.templateSubject">TemplateSubject</a></code> | <code>string</code> | The subject line of the custom verification email. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTags">SesCustomVerificationEmailTemplateTags</a>[]</code> | The tags (keys and values) associated with the tenant. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `FailureRedirectionUrl`<sup>Required</sup> <a name="FailureRedirectionUrl" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.property.failureRedirectionUrl"></a>

```csharp
public string FailureRedirectionUrl { get; set; }
```

- *Type:* string

The URL that the recipient of the verification email is sent to if his or her address is not successfully verified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_custom_verification_email_template#failure_redirection_url SesCustomVerificationEmailTemplate#failure_redirection_url}

---

##### `FromEmailAddress`<sup>Required</sup> <a name="FromEmailAddress" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.property.fromEmailAddress"></a>

```csharp
public string FromEmailAddress { get; set; }
```

- *Type:* string

The email address that the custom verification email is sent from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_custom_verification_email_template#from_email_address SesCustomVerificationEmailTemplate#from_email_address}

---

##### `SuccessRedirectionUrl`<sup>Required</sup> <a name="SuccessRedirectionUrl" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.property.successRedirectionUrl"></a>

```csharp
public string SuccessRedirectionUrl { get; set; }
```

- *Type:* string

The URL that the recipient of the verification email is sent to if his or her address is successfully verified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_custom_verification_email_template#success_redirection_url SesCustomVerificationEmailTemplate#success_redirection_url}

---

##### `TemplateContent`<sup>Required</sup> <a name="TemplateContent" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.property.templateContent"></a>

```csharp
public string TemplateContent { get; set; }
```

- *Type:* string

The content of the custom verification email.

The total size of the email must be less than 10 MB. The message body may contain HTML, with some limitations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_custom_verification_email_template#template_content SesCustomVerificationEmailTemplate#template_content}

---

##### `TemplateName`<sup>Required</sup> <a name="TemplateName" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.property.templateName"></a>

```csharp
public string TemplateName { get; set; }
```

- *Type:* string

The name of the custom verification email template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_custom_verification_email_template#template_name SesCustomVerificationEmailTemplate#template_name}

---

##### `TemplateSubject`<sup>Required</sup> <a name="TemplateSubject" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.property.templateSubject"></a>

```csharp
public string TemplateSubject { get; set; }
```

- *Type:* string

The subject line of the custom verification email.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_custom_verification_email_template#template_subject SesCustomVerificationEmailTemplate#template_subject}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.property.tags"></a>

```csharp
public IResolvable|SesCustomVerificationEmailTemplateTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTags">SesCustomVerificationEmailTemplateTags</a>[]

The tags (keys and values) associated with the tenant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_custom_verification_email_template#tags SesCustomVerificationEmailTemplate#tags}

---

### SesCustomVerificationEmailTemplateTags <a name="SesCustomVerificationEmailTemplateTags" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SesCustomVerificationEmailTemplateTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTags.property.key">Key</a></code> | <code>string</code> | The key of the key-value tag. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTags.property.value">Value</a></code> | <code>string</code> | The value of the key-value tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key of the key-value tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_custom_verification_email_template#key SesCustomVerificationEmailTemplate#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value of the key-value tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_custom_verification_email_template#value SesCustomVerificationEmailTemplate#value}

---

## Classes <a name="Classes" id="Classes"></a>

### SesCustomVerificationEmailTemplateTagsList <a name="SesCustomVerificationEmailTemplateTagsList" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SesCustomVerificationEmailTemplateTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList.get"></a>

```csharp
private SesCustomVerificationEmailTemplateTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTags">SesCustomVerificationEmailTemplateTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList.property.internalValue"></a>

```csharp
public IResolvable|SesCustomVerificationEmailTemplateTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTags">SesCustomVerificationEmailTemplateTags</a>[]

---


### SesCustomVerificationEmailTemplateTagsOutputReference <a name="SesCustomVerificationEmailTemplateTagsOutputReference" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SesCustomVerificationEmailTemplateTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTags">SesCustomVerificationEmailTemplateTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SesCustomVerificationEmailTemplateTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTags">SesCustomVerificationEmailTemplateTags</a>

---



