# `appconfigHostedConfigurationVersion` Submodule <a name="`appconfigHostedConfigurationVersion` Submodule" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppconfigHostedConfigurationVersion <a name="AppconfigHostedConfigurationVersion" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appconfig_hosted_configuration_version awscc_appconfig_hosted_configuration_version}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppconfigHostedConfigurationVersion(Construct Scope, string Id, AppconfigHostedConfigurationVersionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig">AppconfigHostedConfigurationVersionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig">AppconfigHostedConfigurationVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.resetLatestVersionNumber">ResetLatestVersionNumber</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.resetVersionLabel">ResetVersionLabel</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetLatestVersionNumber` <a name="ResetLatestVersionNumber" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.resetLatestVersionNumber"></a>

```csharp
private void ResetLatestVersionNumber()
```

##### `ResetVersionLabel` <a name="ResetVersionLabel" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.resetVersionLabel"></a>

```csharp
private void ResetVersionLabel()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a AppconfigHostedConfigurationVersion resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

AppconfigHostedConfigurationVersion.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

AppconfigHostedConfigurationVersion.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

AppconfigHostedConfigurationVersion.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

AppconfigHostedConfigurationVersion.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a AppconfigHostedConfigurationVersion resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AppconfigHostedConfigurationVersion to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AppconfigHostedConfigurationVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appconfig_hosted_configuration_version#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the AppconfigHostedConfigurationVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.versionNumber">VersionNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.applicationIdInput">ApplicationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.configurationProfileIdInput">ConfigurationProfileIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.contentInput">ContentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.contentTypeInput">ContentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.latestVersionNumberInput">LatestVersionNumberInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.versionLabelInput">VersionLabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.applicationId">ApplicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.configurationProfileId">ConfigurationProfileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.content">Content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.contentType">ContentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.latestVersionNumber">LatestVersionNumber</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.versionLabel">VersionLabel</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `VersionNumber`<sup>Required</sup> <a name="VersionNumber" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.versionNumber"></a>

```csharp
public string VersionNumber { get; }
```

- *Type:* string

---

##### `ApplicationIdInput`<sup>Optional</sup> <a name="ApplicationIdInput" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.applicationIdInput"></a>

```csharp
public string ApplicationIdInput { get; }
```

- *Type:* string

---

##### `ConfigurationProfileIdInput`<sup>Optional</sup> <a name="ConfigurationProfileIdInput" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.configurationProfileIdInput"></a>

```csharp
public string ConfigurationProfileIdInput { get; }
```

- *Type:* string

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.contentInput"></a>

```csharp
public string ContentInput { get; }
```

- *Type:* string

---

##### `ContentTypeInput`<sup>Optional</sup> <a name="ContentTypeInput" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.contentTypeInput"></a>

```csharp
public string ContentTypeInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `LatestVersionNumberInput`<sup>Optional</sup> <a name="LatestVersionNumberInput" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.latestVersionNumberInput"></a>

```csharp
public double LatestVersionNumberInput { get; }
```

- *Type:* double

---

##### `VersionLabelInput`<sup>Optional</sup> <a name="VersionLabelInput" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.versionLabelInput"></a>

```csharp
public string VersionLabelInput { get; }
```

- *Type:* string

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.applicationId"></a>

```csharp
public string ApplicationId { get; }
```

- *Type:* string

---

##### `ConfigurationProfileId`<sup>Required</sup> <a name="ConfigurationProfileId" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.configurationProfileId"></a>

```csharp
public string ConfigurationProfileId { get; }
```

- *Type:* string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.content"></a>

```csharp
public string Content { get; }
```

- *Type:* string

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.contentType"></a>

```csharp
public string ContentType { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `LatestVersionNumber`<sup>Required</sup> <a name="LatestVersionNumber" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.latestVersionNumber"></a>

```csharp
public double LatestVersionNumber { get; }
```

- *Type:* double

---

##### `VersionLabel`<sup>Required</sup> <a name="VersionLabel" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.versionLabel"></a>

```csharp
public string VersionLabel { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AppconfigHostedConfigurationVersionConfig <a name="AppconfigHostedConfigurationVersionConfig" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppconfigHostedConfigurationVersionConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ApplicationId,
    string ConfigurationProfileId,
    string Content,
    string ContentType,
    string Description = null,
    double LatestVersionNumber = null,
    string VersionLabel = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig.property.applicationId">ApplicationId</a></code> | <code>string</code> | The application ID. |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig.property.configurationProfileId">ConfigurationProfileId</a></code> | <code>string</code> | The configuration profile ID. |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig.property.content">Content</a></code> | <code>string</code> | The content of the configuration or the configuration data. |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig.property.contentType">ContentType</a></code> | <code>string</code> | A standard MIME type describing the format of the configuration content. |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig.property.description">Description</a></code> | <code>string</code> | A description of the hosted configuration version. |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig.property.latestVersionNumber">LatestVersionNumber</a></code> | <code>double</code> | An optional locking token used to prevent race conditions from overwriting configuration updates when creating a new version. |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig.property.versionLabel">VersionLabel</a></code> | <code>string</code> | A user-defined label for an AWS AppConfig hosted configuration version. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig.property.applicationId"></a>

```csharp
public string ApplicationId { get; set; }
```

- *Type:* string

The application ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appconfig_hosted_configuration_version#application_id AppconfigHostedConfigurationVersion#application_id}

---

##### `ConfigurationProfileId`<sup>Required</sup> <a name="ConfigurationProfileId" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig.property.configurationProfileId"></a>

```csharp
public string ConfigurationProfileId { get; set; }
```

- *Type:* string

The configuration profile ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appconfig_hosted_configuration_version#configuration_profile_id AppconfigHostedConfigurationVersion#configuration_profile_id}

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig.property.content"></a>

```csharp
public string Content { get; set; }
```

- *Type:* string

The content of the configuration or the configuration data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appconfig_hosted_configuration_version#content AppconfigHostedConfigurationVersion#content}

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig.property.contentType"></a>

```csharp
public string ContentType { get; set; }
```

- *Type:* string

A standard MIME type describing the format of the configuration content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appconfig_hosted_configuration_version#content_type AppconfigHostedConfigurationVersion#content_type}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A description of the hosted configuration version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appconfig_hosted_configuration_version#description AppconfigHostedConfigurationVersion#description}

---

##### `LatestVersionNumber`<sup>Optional</sup> <a name="LatestVersionNumber" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig.property.latestVersionNumber"></a>

```csharp
public double LatestVersionNumber { get; set; }
```

- *Type:* double

An optional locking token used to prevent race conditions from overwriting configuration updates when creating a new version.

To ensure your data is not overwritten when creating multiple hosted configuration versions in rapid succession, specify the version number of the latest hosted configuration version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appconfig_hosted_configuration_version#latest_version_number AppconfigHostedConfigurationVersion#latest_version_number}

---

##### `VersionLabel`<sup>Optional</sup> <a name="VersionLabel" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig.property.versionLabel"></a>

```csharp
public string VersionLabel { get; set; }
```

- *Type:* string

A user-defined label for an AWS AppConfig hosted configuration version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appconfig_hosted_configuration_version#version_label AppconfigHostedConfigurationVersion#version_label}

---



